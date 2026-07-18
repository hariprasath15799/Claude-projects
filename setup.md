# Setup Guide — Shriram Credit Website

This file is written for you as we go, one phase at a time. Right now it covers **Phase 0 (environment)** and **Phase 1 (static site, live on the internet)**. It will grow as later phases (Supabase, auth, admin panel) are built.

Run all commands in PowerShell. Everything below assumes you're starting from a fresh PowerShell window.

---

## What's already done for you

- Git for Windows and Node.js LTS are installed on this machine.
- `C:\Claude projects` is now a git repository, connected to `https://github.com/hariprasath15799/Claude-projects`.
- The original design (`Images\Home\shriram-credit-homepage.html`) has been committed as-is, and a pixel-faithful Next.js port of it now lives in `C:\Claude projects\web`.
- The Next.js port has been verified against the original in a browser: identical colors, fonts, layout, hero carousel behavior, and lead-form validation. There is **no backend wired up yet** — the lead form still just shows a fake "OTP sent" message, same as the original file. That comes in Phase 2.
- Two commits exist locally but have **not been pushed to GitHub yet** — see Step 1, this needs your one-time action.

---

## Step 1 — Push the code to GitHub (one-time sign-in required)

I can't complete this step for you: pushing requires signing in to GitHub in a real browser window, which only works from a session you're sitting at.

1. Open a new PowerShell window yourself (Start menu → type "PowerShell" → Enter).
2. Run:
   ```powershell
   cd "C:\Claude projects"
   git push -u origin main
   ```
3. **What you should see:** a browser window pops up automatically asking you to sign in to GitHub and authorize "Git Credential Manager". Sign in with the account that owns `hariprasath15799/Claude-projects`, click Authorize.
4. Back in PowerShell, you should see output ending in something like:
   ```
   * [new branch]      main -> main
   branch 'main' set up to track 'origin/main'.
   ```
5. **Confirm it worked:** open `https://github.com/hariprasath15799/Claude-projects` in your browser. You should see two folders, `Images` and `web`, and two commits in the history.

After this one-time sign-in, Git Credential Manager caches your credentials, so future pushes (including ones I make on your behalf) will work without another prompt.

---

## Step 2 — Create a Vercel account

1. Go to `https://vercel.com/signup` in your browser.
2. Choose **Continue with GitHub** and sign in with the same GitHub account as above. This is the simplest option since it automatically gives Vercel permission to read your repos.
3. **What you should see:** Vercel's dashboard, currently empty ("Let's build something new").

---

## Step 3 — Import the repo and deploy

1. On the Vercel dashboard, click **Add New…** → **Project**.
2. Find `hariprasath15799/Claude-projects` in the list and click **Import**.
3. On the configuration screen:
   - **Root Directory** — click **Edit**, select the `web` folder, confirm. This is the important step: it tells Vercel the site lives in a subfolder, not the repo root.
   - Framework Preset should auto-detect as **Next.js**. Leave build/output settings on their defaults.
   - You can leave Environment Variables empty for now — there are none yet (Supabase comes in Phase 2).
4. Click **Deploy**.
5. **What you should see:** a progress screen showing Building → Deploying → Ready, usually 1–2 minutes. When it finishes, you'll see a congratulations screen with a screenshot preview of the live site and a URL like `https://claude-projects-xxxx.vercel.app`.
6. Click the URL (or **Visit**) and confirm the live site looks identical to what you saw locally — same hero carousel, same lead form, same footer.

**Save that URL** — that's your real, public, hosted website.

From now on, every time new code is pushed to the `main` branch of the repo, Vercel automatically redeploys this URL within about a minute. You don't need to repeat Step 3.

---

## Running the site on your own machine (optional, for previewing changes before they're live)

```powershell
cd "C:\Claude projects\web"
npm run dev
```

Then open `http://localhost:3000` in your browser. Press `Ctrl+C` in PowerShell to stop it.

---

## Placeholder content — needs your/compliance sign-off before public launch

These figures were carried over from the original design as-is. None of them have been verified — treat every one as a draft, not a fact, until compliance confirms it:

- Interest rate: "10.5% p.a." (only in the page's meta description, not shown in visible text)
- Maximum loan amount: "₹1 crore" / "up to ₹1,00,00,000"
- "7 min" pledge-to-approval time
- "50+ yrs" Shriram Group legacy, "1974" founding year
- "₹2.5L Cr+" group AUM, "3,000+" branches
- CIN: `U65191TN1980PLC008215`
- Certificate of Registration: `B-07.00709`
- Registered office (Chennai) and Corporate office (Bengaluru) addresses
- Phone number `080 4367 6869`, emails `info@shriramcredit.in` / `grievance@shriramcredit.in`

**TODO (not yet built):** Privacy Policy and Terms & Conditions pages — the footer currently links to `#` placeholders for these, same as the original design. These need real content before the site collects any personal data from the public (Phase 2 adds the lead form's real database write, so this should be resolved before Phase 2 goes live, not after).

---

# Phase 2 — Connect the lead form to a real Supabase database

The code side of Phase 2 is done: the eligibility form now calls a real database function (`submit_lead`) instead of faking success, UTM/referrer/landing-page tracking has been added invisibly, and a honeypot field guards against basic bots. None of this works yet because no Supabase project exists — that's the part only you can do (creating a cloud project needs your own account).

## Step 4 — Create the Supabase project

1. Go to `https://supabase.com/dashboard` and sign in (you said you already have an account).
2. Click **New project**.
3. Fill in:
   - **Name**: something like `shriram-credit` (internal only, not shown to visitors).
   - **Database password**: click **Generate a password** and **save it somewhere safe** (a password manager, not a text file in this repo). You likely won't need it day-to-day since we won't connect directly to Postgres, but it's needed if you ever use the CLI or a direct DB connection.
   - **Region**: choose **South Asia (Mumbai) — ap-south-1**. This matters for data-residency reasons under India's DPDP Act, since this app stores Indian users' mobile numbers.
     - **If project creation fails or hangs on this region** — Supabase has reported intermittent capacity issues specifically in Mumbai. If it fails after a minute or two, delete the failed project and retry once. If it fails again, fall back to **Southeast Asia (Singapore) — ap-southeast-1** (the next-closest region) and flag this to compliance/legal later — data residency expectations may differ and should be revisited once Mumbai capacity stabilizes.
4. Click **Create new project**. This takes 1-2 minutes.
5. **What you should see:** a project dashboard with a sidebar (Table Editor, SQL Editor, Authentication, etc.) and a green "Project is healthy" style status.

## Step 5 — Run the database schema

1. In the left sidebar, click **SQL Editor**.
2. Click **New query**.
3. Open `C:\Claude projects\supabase\migrations\0001_init.sql` in VS Code, copy its entire contents, and paste into the SQL editor.
4. Click **Run** (or press Ctrl+Enter).
5. **What you should see:** "Success. No rows returned" at the bottom. If you see a red error instead, stop and tell me the exact error text — don't re-run it repeatedly, since some statements (like `create table`) will fail loudly on a second run rather than silently skip.
6. Confirm it worked: click **Table Editor** in the sidebar. You should see 6 tables: `admins`, `profiles`, `leads`, `loan_applications`, `partner_applications`, `grievances`. Click into `admins` — you should see one row with `hariprasath15799@gmail.com`.

## Step 6 — Get your API keys

1. In the sidebar, click the **gear icon (Project Settings)** → **API**.
2. You'll see two values you need:
   - **Project URL** — looks like `https://abcdefghijk.supabase.co`
   - **anon / public key** — a long string starting with `eyJ...`
3. **Do not copy the `service_role` key anywhere in this project.** It bypasses every security rule we just set up. This app's design deliberately never needs it — leave it alone in the dashboard.

## Step 7 — Add the keys locally

1. In VS Code, go to `C:\Claude projects\web\.env.local.example`, and make a copy of it named `.env.local` in the same folder (`web\.env.local`). This file is already gitignored, so it will never be committed.
2. Fill in the two real values from Step 6:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijk.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...your real anon key...
   ```
3. If your local dev server is running, stop it (Ctrl+C in that PowerShell window) and restart it so it picks up the new file:
   ```powershell
   cd "C:\Claude projects\web"
   npm run dev
   ```
4. **Test it:** open `http://localhost:3000`, enter a valid 10-digit mobile number (starting with 6-9), keep the consent box checked, click **Check my eligibility**. You should see "OTP sent to +91 XXXXXXXXXX..." — and in the Supabase dashboard's **Table Editor** → `leads` table, a new row should appear with that mobile number.

## Step 8 — Add the same keys to Vercel (for the live site)

Once your site is deployed on Vercel (Steps 2-3 above), the live site needs these same two values:

1. Go to your project on `https://vercel.com/dashboard`.
2. **Settings** → **Environment Variables**.
3. Add both:
   - `NEXT_PUBLIC_SUPABASE_URL` = same value as your `.env.local`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = same value as your `.env.local`
4. After adding them, go to the **Deployments** tab, click the **⋯** menu on the most recent deployment, and click **Redeploy** — environment variable changes only take effect on a new deployment.
5. **Test it:** visit your live `*.vercel.app` URL and repeat the same test from Step 7.4.

---

## What's next

Phase 3 will add demo login (email-based OTP, using Supabase's built-in email code flow — no SMS cost, no DLT registration needed yet). Before that starts you'll need a free-tier account with a transactional email provider like Resend, since Supabase's own default mailer only allows 2 emails/hour, which you'd exhaust almost immediately while testing. I'll walk you through that signup and the Supabase Auth settings it plugs into when we get there.

This file will be updated in place as each phase lands — re-open it any time rather than hunting for scattered instructions.
