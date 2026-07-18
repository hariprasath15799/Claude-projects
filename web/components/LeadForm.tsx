"use client";

import { useState } from "react";

const DEFAULT_MSG = "We will send an OTP to check that this is your number.";

export default function LeadForm() {
  const [mobile, setMobile] = useState("");
  const [consent, setConsent] = useState(true);
  const [msg, setMsg] = useState(DEFAULT_MSG);
  const [isErr, setIsErr] = useState(false);

  function handleMobileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(digits);
    setIsErr(false);
    setMsg(DEFAULT_MSG);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setIsErr(true);
      setMsg("Please enter a valid 10 digit mobile number.");
      return;
    }
    if (!consent) {
      setIsErr(true);
      setMsg("Please accept the terms and conditions to continue.");
      return;
    }

    setIsErr(false);
    setMsg(`OTP sent to +91 ${mobile}. Enter it to see your loan amount.`);
  }

  return (
    <>
      <form id="leadForm" noValidate onSubmit={handleSubmit}>
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
            onChange={handleMobileChange}
          />
        </label>
        <label className="tc">
          <input
            type="checkbox"
            id="consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            I agree to the <a href="#">terms &amp; conditions</a> and allow Shriram Credit to call
            or message me.
          </span>
        </label>
        <button className="btn btn-yellow" type="submit">
          Check my eligibility
          <svg width="18" height="18" fill="none" stroke="#0B0C0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3.5 9h11M9.5 4.5L14 9l-4.5 4.5" />
          </svg>
        </button>
      </form>
      <p className={isErr ? "micro err" : "micro"} id="formMsg">
        {msg}
      </p>
    </>
  );
}
