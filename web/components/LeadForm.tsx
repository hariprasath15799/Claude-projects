"use client";

import { useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

const DEFAULT_MSG = "We will send an OTP to check that this is your number.";
const PRODUCT_BY_SLIDE = ["LAMF", "LAS"] as const;

export default function LeadForm({ activeSlide }: { activeSlide: number }) {
  const [mobile, setMobile] = useState("");
  const [consent, setConsent] = useState(true);
  const [honeypot, setHoneypot] = useState("");
  const [msg, setMsg] = useState(DEFAULT_MSG);
  const [isErr, setIsErr] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [utm, setUtm] = useState<Record<string, string | null>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtm({
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
      utm_term: params.get("utm_term"),
      utm_content: params.get("utm_content"),
      referrer: document.referrer || null,
      landing_page: window.location.href,
    });
  }, []);

  function handleMobileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(digits);
    setIsErr(false);
    setMsg(DEFAULT_MSG);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (honeypot) {
      // Bot filled the hidden field — pretend success, do nothing.
      setIsErr(false);
      setMsg(`OTP sent to +91 ${mobile}. Enter it to see your loan amount.`);
      return;
    }

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

    setSubmitting(true);
    try {
      const supabase = createBrowserSupabaseClient();
      const { error } = await supabase.rpc("submit_lead", {
        p_mobile: mobile,
        p_consent: consent,
        p_product: PRODUCT_BY_SLIDE[activeSlide] ?? null,
        p_hero_slide: activeSlide,
        p_utm_source: utm.utm_source ?? null,
        p_utm_medium: utm.utm_medium ?? null,
        p_utm_campaign: utm.utm_campaign ?? null,
        p_utm_term: utm.utm_term ?? null,
        p_utm_content: utm.utm_content ?? null,
        p_referrer: utm.referrer ?? null,
        p_landing_page: utm.landing_page ?? null,
      });
      if (error) throw error;

      setIsErr(false);
      setMsg(`OTP sent to +91 ${mobile}. Enter it to see your loan amount.`);
    } catch {
      setIsErr(true);
      setMsg("Something went wrong. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
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
        <label className="hp" aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0 }}>
          Company website
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
        <button className="btn btn-yellow" type="submit" disabled={submitting}>
          {submitting ? "Checking…" : "Check my eligibility"}
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
