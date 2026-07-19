"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { isValidMobile, isValidMpin } from "@/lib/auth/phone";

type Step = "mobile" | "otp" | "create-mpin" | "enter-mpin";

function digitsOnly(value: string, maxLen: number) {
  return value.replace(/\D/g, "").slice(0, maxLen);
}

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("mobile");
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
      setStep(data.isNewUser ? "create-mpin" : "enter-mpin");
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
      const res = await fetch("/api/auth/complete-signup", {
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

  return (
    <section style={{ display: "flex", justifyContent: "center", padding: "clamp(64px,7vw,104px) 20px" }}>
      <div className="card" style={{ width: "100%", maxWidth: 440 }}>
        <div className="card-head">
          {step === "mobile" && (
            <>
              <h2>Log in or sign up</h2>
              <p>Enter your mobile number to continue.</p>
            </>
          )}
          {step === "otp" && (
            <>
              <h2>Verify your mobile number</h2>
              <p>Enter the code sent to +91 {mobile}.</p>
            </>
          )}
          {step === "create-mpin" && (
            <>
              <h2>Create your MPIN</h2>
              <p>This 6-digit MPIN will be your login for next time.</p>
            </>
          )}
          {step === "enter-mpin" && (
            <>
              <h2>Enter your MPIN</h2>
              <p>Welcome back, +91 {mobile}.</p>
            </>
          )}
        </div>

        {step === "mobile" && (
          <form noValidate onSubmit={handleMobileSubmit}>
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
            <button className="btn btn-yellow" type="submit">Send OTP</button>
          </form>
        )}

        {step === "otp" && (
          <form noValidate onSubmit={handleOtpSubmit}>
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
            <p className="micro">Demo mode — no SMS sent yet, use 000000.</p>
            <button className="btn btn-yellow" type="submit" disabled={loading}>
              {loading ? "Verifying…" : "Verify"}
            </button>
            <button
              type="button"
              className="btn btn-outline"
              style={{ width: "100%" }}
              onClick={() => {
                setStep("mobile");
                setOtp("");
                setError("");
              }}
            >
              Change number
            </button>
          </form>
        )}

        {step === "create-mpin" && (
          <form noValidate onSubmit={handleCreateMpinSubmit}>
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
            <button className="btn btn-yellow" type="submit" disabled={loading}>
              {loading ? "Creating…" : "Create MPIN & continue"}
            </button>
          </form>
        )}

        {step === "enter-mpin" && (
          <form noValidate onSubmit={handleEnterMpinSubmit}>
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
            <button className="btn btn-yellow" type="submit" disabled={loading}>
              {loading ? "Logging in…" : "Log in"}
            </button>
          </form>
        )}

        {error && <p className="micro err">{error}</p>}
      </div>
    </section>
  );
}
