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

export default function HeroCarousel({
  active,
  onDotClick,
}: {
  active: number;
  onDotClick: (index: number) => void;
}) {
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
          onClick={() => onDotClick(0)}
        />
        <button
          className="dot"
          aria-label="Loan against securities"
          aria-selected={active === 1}
          onClick={() => onDotClick(1)}
        />
      </div>
    </>
  );
}
