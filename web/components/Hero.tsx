"use client";

import { useEffect, useRef, useState } from "react";
import HeroCarousel from "./HeroCarousel";
import LeadForm from "./LeadForm";

const SLIDE_COUNT = 2;
const INTERVAL_MS = 6000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function restartTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % SLIDE_COUNT);
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
    <>
      <div className="hero-left">
        <HeroCarousel active={active} onDotClick={goTo} />
      </div>

      <aside className="hero-right">
        <div className="card">
          <div className="card-head">
            <h2>Check how much you can get</h2>
            <p>Enter your mobile number. It takes less than a minute and your credit score is not affected.</p>
          </div>
          <LeadForm activeSlide={active} />
        </div>
      </aside>
    </>
  );
}
