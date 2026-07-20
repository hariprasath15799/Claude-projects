"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { isValidMobile, isValidMpin } from "@/lib/auth/phone";

type Step = "mobile" | "otp" | "create-mpin" | "enter-mpin";

function digitsOnly(value: string, maxLen: number) {
  return value.replace(/\D/g, "").slice(0, maxLen);
}

function Tick() {
  return (
    <span className="tick">
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
        <path d="M1 5l3.5 3.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function LamfPersonIllustration() {
  return (
    <svg viewBox="0 0 320 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="180" cy="150" r="140" fill="#FFF6DC" />
      <path d="M60 300c0-70 50-116 120-116s120 46 120 116z" fill="#0B0C0E" />
      <circle cx="180" cy="118" r="52" fill="#F4C89A" stroke="#0B0C0E" strokeWidth="2" />
      <path d="M130 108c-4-34 24-56 50-56 28 0 52 20 50 50-12-16-34-8-46-20-8 16-32 14-54 26z" fill="#0B0C0E" />
      <path d="M120 220l60-14 60 14v26c0 8-6 14-14 14H134c-8 0-14-6-14-14z" fill="#E3E0D9" stroke="#0B0C0E" strokeWidth="2" />
      <rect x="128" y="196" width="104" height="30" rx="4" fill="#fff" stroke="#0B0C0E" strokeWidth="2" />
    </svg>
  );
}

function LamfPromo() {
  return (
    <div className="login-promo">
      <div className="login-promo-copy">
        <h2>
          Get <span className="hl">Loan Against Mutual Fund</span> for Personal Needs
        </h2>
        <p className="login-promo-sub">Smart investors pledge. They don&apos;t sell.</p>
        <p className="login-promo-desc">
          A Loan Against Mutual Fund (LAMF) is a secured loan where you pledge or lien mark your
          Mutual Fund units as collateral to get access to capital - without redeeming your
          investments.
        </p>
        <div className="login-usp-grid">
          <ul>
            <li><Tick /><span>Interest rate starting at 10.5% p.a.*</span></li>
            <li><Tick /><span>100% paperless process</span></li>
            <li><Tick /><span>Instant loan approval</span></li>
          </ul>
          <ul>
            <li><Tick /><span>Continue earning returns on your investments</span></li>
            <li><Tick /><span>Interest only repayment and EMI options available</span></li>
            <li><Tick /><span>RBI regulated NBFC with 25+ years of legacy</span></li>
          </ul>
        </div>
      </div>

      <div className="login-promo-art">
        <LamfPersonIllustration />
        <div className="login-promo-badge">
          <span className="login-promo-badge-label">Congratulations</span>
          <span className="login-promo-badge-sub">Your loan has been sanctioned</span>
          <span className="login-promo-badge-amount">₹50,000</span>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("mobile");
  const [resetMode, setResetMode] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [mpin, setMpin] = useState("");
  const [mpinConfirm, setMpinConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function establishSession(tokenHash: string) {
    const supabase = createBrowserSupabaseClient();
    const { error: verifyError } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: "email",
    });
    if (verifyError) throw verifyError;
    router.push("/account");
    router.refresh();
  }

  function handleMobileSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!isValidMobile(mobile)) {
      setError("Enter a valid 10 digit mobile number.");
      return;
    }
    setStep("otp");
  }

  async function handleOtpSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, otp }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStep(resetMode ? "create-mpin" : data.isNewUser ? "create-mpin" : "enter-mpin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCreateMpinSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!isValidMpin(mpin)) {
      setError("MPIN must be exactly 6 digits.");
      return;
    }
    if (mpin !== mpinConfirm) {
      setError("MPINs do not match.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(resetMode ? "/api/auth/reset-mpin" : "/api/auth/complete-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, otp, mpin, mpinConfirm }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      await establishSession(data.tokenHash);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function handleEnterMpinSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!isValidMpin(mpin)) {
      setError("Enter your 6 digit MPIN.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/complete-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, otp, mpin }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      await establishSession(data.tokenHash);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function handleForgotMpin() {
    setResetMode(true);
    setStep("mobile");
    setOtp("");
    setMpin("");
    setMpinConfirm("");
    setError("");
  }

  function handleChangeNumber() {
    setStep("mobile");
    setOtp("");
    setError("");
  }

  let headline = "Login to continue";
  let subcopy = "Enter your mobile number to continue.";
  if (step === "otp") {
    headline = "Verify your mobile number";
    subcopy = `Enter the code sent to +91 ${mobile}.`;
  } else if (step === "create-mpin") {
    headline = resetMode ? "Reset your MPIN" : "Create your MPIN";
    subcopy = resetMode
      ? "Choose a new 6-digit MPIN for your account."
      : "This 6-digit MPIN will be your login for next time.";
  } else if (step === "enter-mpin") {
    headline = "Enter your MPIN";
    subcopy = `Welcome back, +91 ${mobile}.`;
  }

  return (
    <div className="login-split">
      <LamfPromo />

      <div className="login-panel">
        <div className="login-form-wrap">
          <h1>
            Welcome to Shriram Credit,
            <br />
            <em>{headline}</em>
          </h1>
          <p>{subcopy}</p>

          {step === "mobile" && (
            <form noValidate onSubmit={handleMobileSubmit}>
              <span className="field-label">Please enter your mobile number:</span>
              <label className="field" htmlFor="mobile">
                <span className="cc">🇮🇳 +91</span>
                <input
                  id="mobile"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="Mobile number"
                  aria-label="Mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(digitsOnly(e.target.value, 10))}
                />
              </label>
              <button className="btn btn-login" type="submit">Continue</button>
              <p className="micro terms">
                By continuing, you agree to Shriram Credit&apos;s <a href="#">Terms and Conditions</a>.
              </p>
            </form>
          )}

          {step === "otp" && (
            <form noValidate onSubmit={handleOtpSubmit}>
              <span className="field-label">Enter the 6-digit code</span>
              <label className="field" htmlFor="otp">
                <input
                  id="otp"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="6-digit code"
                  aria-label="One-time code"
                  value={otp}
                  onChange={(e) => setOtp(digitsOnly(e.target.value, 6))}
                />
              </label>
              <button className="btn btn-login" type="submit" disabled={loading}>
                {loading ? "Verifying…" : "Verify"}
              </button>
              <p className="micro">
                <button type="button" className="login-link" onClick={handleChangeNumber}>
                  Change mobile number
                </button>
              </p>
            </form>
          )}

          {step === "create-mpin" && (
            <form noValidate onSubmit={handleCreateMpinSubmit}>
              <span className="field-label">Create 6-digit MPIN</span>
              <label className="field" htmlFor="mpin">
                <input
                  id="mpin"
                  type="password"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="Create 6-digit MPIN"
                  aria-label="Create MPIN"
                  value={mpin}
                  onChange={(e) => setMpin(digitsOnly(e.target.value, 6))}
                />
              </label>
              <span className="field-label">Confirm MPIN</span>
              <label className="field" htmlFor="mpinConfirm">
                <input
                  id="mpinConfirm"
                  type="password"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="Confirm MPIN"
                  aria-label="Confirm MPIN"
                  value={mpinConfirm}
                  onChange={(e) => setMpinConfirm(digitsOnly(e.target.value, 6))}
                />
              </label>
              <button className="btn btn-login" type="submit" disabled={loading}>
                {loading ? "Saving…" : resetMode ? "Reset MPIN & continue" : "Create MPIN & continue"}
              </button>
            </form>
          )}

          {step === "enter-mpin" && (
            <form noValidate onSubmit={handleEnterMpinSubmit}>
              <span className="field-label">Enter your MPIN</span>
              <label className="field" htmlFor="mpin">
                <input
                  id="mpin"
                  type="password"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="Enter your MPIN"
                  aria-label="MPIN"
                  value={mpin}
                  onChange={(e) => setMpin(digitsOnly(e.target.value, 6))}
                />
              </label>
              <button className="btn btn-login" type="submit" disabled={loading}>
                {loading ? "Logging in…" : "Log in"}
              </button>
              <p className="micro">
                <button type="button" className="login-link" onClick={handleForgotMpin}>
                  Forgot MPIN?
                </button>
              </p>
            </form>
          )}

          {error && <p className="micro err">{error}</p>}
        </div>
      </div>
    </div>
  );
}
