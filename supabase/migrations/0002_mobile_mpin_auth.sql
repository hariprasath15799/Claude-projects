-- ============================================================
-- Mobile number + MPIN auth support
--
-- Login model: enter mobile -> verify via OTP (demo/placeholder for
-- now, real SMS is a later phase) -> new numbers create a 6-digit
-- MPIN, returning numbers enter their existing MPIN.
--
-- Real Supabase Auth users are still created under the hood (a
-- deterministic synthetic email is used internally so auth.users,
-- auth.uid() and every existing RLS policy keep working unchanged)
-- but the MPIN hash itself is kept in a separate, fully locked-down
-- table so it is never returned by any client-side select, even the
-- user's own profile read.
-- ============================================================

alter table public.profiles
  add column if not exists phone_verified boolean not null default false;

create unique index if not exists profiles_phone_unique
  on public.profiles (phone) where phone is not null;

create table public.user_pins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  mpin_hash text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger user_pins_updated_at before update on public.user_pins
  for each row execute function public.set_updated_at();

alter table public.user_pins enable row level security;
-- No policies at all — this table is reachable only from server-side code
-- using the service_role key (the signup/login API routes). It must never
-- be selectable from the browser, not even by the row's own owner.
