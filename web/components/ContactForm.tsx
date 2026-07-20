"use client";

import { useState, type FormEvent } from "react";

const CITIES = ["Chennai", "Bengaluru", "Mumbai", "Delhi NCR", "Hyderabad", "Pune", "Kolkata", "Other"];
const PURPOSES = [
  "Loan against mutual funds",
  "Loan against shares",
  "Grievance / complaint",
  "Investor query",
  "Other",
];

function digitsOnly(value: string, maxLen: number) {
  return value.replace(/\D/g, "").slice(0, maxLen);
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [purpose, setPurpose] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (name.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (mobile.length > 0 && mobile.length !== 10) {
      setError("Enter a valid 10 digit mobile number, or leave it blank.");
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card contact-card">
        <div className="card-head">
          <h2>You&apos;re all set</h2>
          <p>Thanks, {name}. Our team will call you back within one business day.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card contact-card">
      <div className="card-head">
        <h2>Schedule a call with us</h2>
      </div>
      <form noValidate onSubmit={handleSubmit}>
        <label className="field" htmlFor="name">
          <input
            id="name"
            type="text"
            placeholder="Name"
            aria-label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="field" htmlFor="mobile">
          <span className="cc">🇮🇳 +91</span>
          <input
            id="mobile"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            placeholder="Mobile number (optional)"
            aria-label="Mobile number"
            value={mobile}
            onChange={(e) => setMobile(digitsOnly(e.target.value, 10))}
          />
        </label>
        <label className="field" htmlFor="city">
          <select id="city" aria-label="Select your city" value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="" disabled>Select your city</option>
            {CITIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="field" htmlFor="purpose">
          <select id="purpose" aria-label="Purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)}>
            <option value="" disabled>Purpose</option>
            {PURPOSES.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </label>
        {error && <p className="micro err">{error}</p>}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button className="btn btn-yellow" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
