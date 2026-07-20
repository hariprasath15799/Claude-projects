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

function LamfPromo() {
  return (
    <div className="login-promo">
      <div className="login-phone">
        <div className="login-phone-notch" />
        <p className="login-phone-label">Loan against mutual funds</p>
        <p className="login-phone-amount">Up to ₹1 Crore</p>
        <div className="login-phone-bar">
          <span />
        </div>
        <span className="login-phone-cta">Check eligibility</span>
      </div>

      <div className="login-promo-card">
        <h3>Borrow against your mutual funds</h3>
        <ul>
          <li>
            <Tick />
            <span>Get up to ₹1 crore — no need to sell your units</span>
          </li>
          <li>
            <Tick />
            <span>Pay interest only on the amount you actually use</span>
          </li>
          <li>
            <Tick />
            <span>Funds stay invested and in your name, throughout</span>
          </li>
        </ul>
        <div className="login-promo-actions">
          <a className="btn btn-outline" href="/#products">Explore loans</a>
          <a className="btn btn-dark" href="/calculators">Try the calculator</a>
        </div>
        <a className="login-promo-strip" href="/calculators">
          <span>Check your loan eligibility in minutes</span>
          <span>→</span>
        </a>
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
