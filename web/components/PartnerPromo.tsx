"use client";

import { useEffect, useRef, useState } from "react";
import {
  IllustrationArmchair,
  IllustrationHourglass,
  IllustrationTablet,
} from "./PartnerIllustrations";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.sfs.partnersone&pcampaignid=web_share";

const SLIDES = [
  {
    heading: "Your trusted financial partner for all your finance needs",
    body: "Increase your earnings by providing investment and insurance - all in one place.",
    Illustration: IllustrationHourglass,
  },
  {
    heading: "Trusted By Over 1 Lakh Agents - Join The Movement",
    body: "Join our expanding network of over 1 Lakh dedicated agents.",
    Illustration: IllustrationTablet,
  },
  {
    heading: "Unlock your potential. Earn up to ₹1 Lakh a month",
    body: "Unlock your potential and take control of your financial future. Earn up to ₹1 Lakh a month.",
    Illustration: IllustrationArmchair,
  },
];

const INTERVAL_MS = 4000;

export default function PartnerPromo() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function restartTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
  }

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function goTo(index: number) {
    setActive(index);
    restartTimer();
  }

  return (
    <section className="partner-promo">
      <div className="wrap">
        <div className="partner-slide-wrap">
          <div className="partner-slides" style={{ transform: `translateX(-${active * 100}%)` }}>
            {SLIDES.map(({ heading, body, Illustration }) => (
              <div className="partner-slide" key={heading}>
                <h1>{heading}</h1>
                <div className="partner-illustration">
                  <Illustration />
                </div>
                <p className="partner-copy">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="partner-dots" role="tablist" aria-label="Shriram Fortune Partners app highlights">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.heading}
              className="partner-dot"
              aria-label={`Slide ${i + 1}`}
              aria-selected={active === i}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <div className="partner-cta-wrap">
          <a className="btn btn-yellow partner-cta" href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
            Let&apos;s get started
          </a>
        </div>
      </div>
    </section>
  );
}
