-- ============================================================
-- 0. Extensions & shared trigger
-- ============================================================
create extension if not exists "pgcrypto";

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ============================================================
-- 1. Admins & is_admin() — the whole admin-read mechanism
-- ============================================================
create table public.admins (
  email text primary key,
  created_at timestamptz not null default now()
);

insert into public.admins (email) values ('hariprasath15799@gmail.com');

alter table public.admins enable row level security;
-- No policies at all on this table = fully locked to everyone except the SQL editor / Supabase dashboard.
-- To add another admin later: run `insert into public.admins(email) values ('newperson@example.com');` — no code change, no redeploy.

create or replace function public.is_admin()
returns boolean
language sql security definer stable set search_path = public as $$
  select exists (select 1 from public.admins where email = (auth.jwt() ->> 'email'));
$$;
grant execute on function public.is_admin() to authenticated;
-- SECURITY DEFINER lets this check the admins table on the caller's behalf even though
-- the caller has no SELECT policy on admins. Because this runs under the ADMIN'S OWN
-- logged-in session (their JWT), the service_role key is never needed anywhere in the app.

-- ============================================================
-- 2. profiles (extends auth.users)
-- ============================================================
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  phone text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger profiles_updated_at before update on public.profiles
  for each row execute function public.set_updated_at();

alter table public.profiles enable row level security;
create policy "profiles_select_own_or_admin" on public.profiles
  for select using (auth.uid() = id or public.is_admin());
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id);

-- auto-create a profile row on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, phone) values (new.id, new.email, new.phone);
  return new;
end;
$$;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================
-- 3. leads (eligibility enquiries from the hero form)
-- ============================================================
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  mobile text not null check (mobile ~ '^[6-9][0-9]{9}$'),
  consent boolean not null default false,
  consent_at timestamptz,
  product text check (product in ('LAMF','LAS')),
  hero_slide_at_submission smallint check (hero_slide_at_submission in (0,1)),
  utm_source text, utm_medium text, utm_campaign text, utm_term text, utm_content text,
  referrer_url text,
  landing_page text,
  status text not null default 'new' check (status in ('new','contacted','qualified','converted','rejected','duplicate')),
  notes text,
  user_id uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index leads_status_idx on public.leads(status);
create index leads_created_at_idx on public.leads(created_at desc);
create index leads_mobile_idx on public.leads(mobile);

create trigger leads_updated_at before update on public.leads
  for each row execute function public.set_updated_at();

alter table public.leads enable row level security;
create policy "leads_admin_select" on public.leads for select using (public.is_admin());
create policy "leads_admin_update" on public.leads for update using (public.is_admin());
-- Deliberately no INSERT policy — all public writes go through submit_lead() below.

create or replace function public.submit_lead(
  p_mobile text, p_consent boolean, p_product text, p_hero_slide smallint,
  p_utm_source text default null, p_utm_medium text default null, p_utm_campaign text default null,
  p_utm_term text default null, p_utm_content text default null,
  p_referrer text default null, p_landing_page text default null
) returns uuid
language plpgsql security definer set search_path = public as $$
declare v_id uuid;
begin
  if p_consent is not true then
    raise exception 'consent is required';
  end if;
  insert into public.leads (mobile, consent, consent_at, product, hero_slide_at_submission,
    utm_source, utm_medium, utm_campaign, utm_term, utm_content, referrer_url, landing_page, user_id)
  values (p_mobile, true, now(), p_product, p_hero_slide,
    p_utm_source, p_utm_medium, p_utm_campaign, p_utm_term, p_utm_content, p_referrer, p_landing_page, auth.uid())
  returning id into v_id;
  return v_id;
end;
$$;
grant execute on function public.submit_lead to anon, authenticated;

-- ============================================================
-- 4. loan_applications
-- ============================================================
create table public.loan_applications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product text check (product in ('LAMF','LAS')),
  requested_amount numeric(12,2),
  status text not null default 'draft' check (status in ('draft','submitted','under_review','approved','rejected','disbursed')),
  lead_id uuid references public.leads(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger loan_applications_updated_at before update on public.loan_applications
  for each row execute function public.set_updated_at();

alter table public.loan_applications enable row level security;
create policy "loan_apps_select_own_or_admin" on public.loan_applications
  for select using (auth.uid() = user_id or public.is_admin());
create policy "loan_apps_insert_own" on public.loan_applications
  for insert with check (auth.uid() = user_id);
create policy "loan_apps_update_own_draft" on public.loan_applications
  for update using (auth.uid() = user_id and status = 'draft');
create policy "loan_apps_admin_update" on public.loan_applications
  for update using (public.is_admin());

-- ============================================================
-- 5. partner_applications ("Become a partner" — currently a dead link)
-- ============================================================
create table public.partner_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  mobile text not null check (mobile ~ '^[6-9][0-9]{9}$'),
  email text, company_name text, city text, message text,
  status text not null default 'new' check (status in ('new','contacted','approved','rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger partner_applications_updated_at before update on public.partner_applications
  for each row execute function public.set_updated_at();

alter table public.partner_applications enable row level security;
create policy "partner_apps_admin_select" on public.partner_applications for select using (public.is_admin());
create policy "partner_apps_admin_update" on public.partner_applications for update using (public.is_admin());

create or replace function public.submit_partner_application(
  p_full_name text, p_mobile text, p_email text default null,
  p_company_name text default null, p_city text default null, p_message text default null
) returns uuid
language plpgsql security definer set search_path = public as $$
declare v_id uuid;
begin
  insert into public.partner_applications (full_name, mobile, email, company_name, city, message)
  values (p_full_name, p_mobile, p_email, p_company_name, p_city, p_message)
  returning id into v_id;
  return v_id;
end;
$$;
grant execute on function public.submit_partner_application to anon, authenticated;

-- ============================================================
-- 6. grievances (SCCL Grievance Redressal Officer submissions)
-- ============================================================
create sequence public.grievance_ref_seq;

create table public.grievances (
  id uuid primary key default gen_random_uuid(),
  reference_number text not null unique,
  full_name text not null,
  mobile text check (mobile ~ '^[6-9][0-9]{9}$'),
  email text,
  category text check (category in ('service','loan','digital','fraud','other')),
  description text not null,
  status text not null default 'open' check (status in ('open','in_progress','resolved','closed')),
  sla_due_at timestamptz not null,
  resolved_at timestamptz,
  user_id uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger grievances_updated_at before update on public.grievances
  for each row execute function public.set_updated_at();

create or replace function public.grievance_defaults()
returns trigger language plpgsql as $$
begin
  new.reference_number := 'SCC-GRV-' || to_char(now(),'YYYYMMDD') || '-' ||
    lpad(nextval('public.grievance_ref_seq')::text, 5, '0');
  new.sla_due_at := now() + interval '7 days'; -- TODO(compliance): confirm real SCCL SLA before launch
  return new;
end;
$$;
create trigger grievances_before_insert before insert on public.grievances
  for each row execute function public.grievance_defaults();

alter table public.grievances enable row level security;
create policy "grievances_select_own_or_admin" on public.grievances
  for select using (auth.uid() = user_id or public.is_admin());
create policy "grievances_admin_update" on public.grievances for update using (public.is_admin());

create or replace function public.submit_grievance(
  p_full_name text, p_description text, p_mobile text default null,
  p_email text default null, p_category text default null
) returns table(id uuid, reference_number text)
language plpgsql security definer set search_path = public as $$
declare v_id uuid; v_ref text;
begin
  insert into public.grievances (full_name, mobile, email, category, description, user_id)
  values (p_full_name, p_mobile, p_email, p_category, p_description, auth.uid())
  returning grievances.id, grievances.reference_number into v_id, v_ref;
  return query select v_id, v_ref;
end;
$$;
grant execute on function public.submit_grievance to anon, authenticated;
