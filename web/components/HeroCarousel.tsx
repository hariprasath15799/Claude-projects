"use client";

import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    eyebrow: "Loan against mutual funds",
    tagline:
      "Get up to ₹1 crore without selling a single unit. Your investment keeps growing, and you pay interest only on the amount you use.",
  },
  {
    eyebrow: "Loan against shares & securities",
    tagline:
      "Pledge the shares and bonds you already own and get cash the same day. No need to book a loss or give up future gains.",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function goTo(index: number) {
    setActive(index);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 6000);
  }

  return (
    <>
      <div className="slider">
        <div
          className="slides"
          id="heroSlides"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          <div className="slide">
            <p className="eyebrow">{SLIDES[0].eyebrow}</p>
            <h1>
              Need money? <span className="mark">Keep your mutual funds.</span> Take a loan on them.
            </h1>
            <p className="tagline">{SLIDES[0].tagline}</p>
          </div>
          <div className="slide">
            <p className="eyebrow">{SLIDES[1].eyebrow}</p>
            <h2 className="h1">
              Your shares can get you a loan. <span className="mark">Without selling them.</span>
            </h2>
            <p className="tagline">{SLIDES[1].tagline}</p>
          </div>
        </div>
      </div>
      <div className="dots" id="heroDots" role="tablist" aria-label="Hero slides">
        <button
          className="dot"
          aria-label="Loan against mutual funds"
          aria-selected={active === 0}
          onClick={() => goTo(0)}
        />
        <button
          className="dot"
          aria-label="Loan against securities"
          aria-selected={active === 1}
          onClick={() => goTo(1)}
        />
      </div>
    </>
  );
}
