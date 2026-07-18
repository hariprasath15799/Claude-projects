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

## What's next

Phase 2 will connect the lead-capture form to a real Supabase database. Before that starts, you'll need:
- A Supabase account (you mentioned you already have one) — I'll walk you through creating the actual project in this file once we get there, including the exact region to pick and why.
- The Resend (or similar) free-tier signup for outgoing email, needed before Phase 3's login testing.

This file will be updated in place as each phase lands — re-open it any time rather than hunting for scattered instructions.
