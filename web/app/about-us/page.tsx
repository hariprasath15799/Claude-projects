import BoardDirectors from "@/components/BoardDirectors";

export default function AboutUsPage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="about-hero">
        <div className="wrap">
          <p className="eyebrow">About us</p>
          <h1>Enriching your financial stability</h1>
          <p className="tagline">
            The Shriram Group has spent over five decades building financial products for
            everyday Indians — salaried families, small business owners and first-time
            borrowers who deserve the same access to credit and investments as anyone else.
            Shriram Credit Company Limited carries that trust online.
          </p>
        </div>
      </section>

      {/* ══ VISION & MISSION ══ */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow">What drives us</p>
              <h2>Vision &amp; mission</h2>
            </div>
          </div>
          <div className="vm-grid">
            <div className="card">
              <div className="card-head">
                <h3>Vision</h3>
              </div>
              <p>
                To be a trusted and leading provider of accessible credit solutions, empowering
                individuals and small businesses to achieve financial progress and resilience.
              </p>
            </div>
            <div className="card">
              <div className="card-head">
                <h3>Mission</h3>
              </div>
              <p>
                To deliver simple, transparent and customer-centric credit products tailored to
                diverse financial needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GROUP AT A GLANCE ══ */}
      <section className="metrics">
        <svg className="skyline" viewBox="0 0 1440 240" preserveAspectRatio="none" aria-hidden="true">
          <path
            fill="#fff"
            d="M0 240V150h60v-40h50v40h40V96h70v54h55V70h80v80h60v-46h64v46h70V54h86v96h58v-62h72v62h64v-34h58v34h70V88h74v62h56v-30h60v30h58V64h70v86h70v90z"
          />
        </svg>
        <div className="wrap">
          <div className="m-grid">
            <div className="m">
              <b>~3 Cr</b>
              <span>Customers served</span>
            </div>
            <div className="m">
              <b>1,15,500+</b>
              <span>Employees across the Group</span>
            </div>
            <div className="m">
              <b>4,700+</b>
              <span>Offices nationwide</span>
            </div>
            <div className="m">
              <b>₹3,69,448 Cr</b>
              <span>Assets under management</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT SCCL ══ */}
      <section className="about about-full">
        <div className="wrap">
          <div className="about-copy">
            <p className="eyebrow">About Shriram Credit Company Limited</p>
            <h2>The Group&apos;s lending arm, brought online</h2>
            <p>
              Shriram Credit Company Limited is the holding company for the Capital Markets
              businesses and serves as the lending entity for the Capital Markets businesses. It
              provides strategic oversight across governance, leadership and talent management,
              technology enablement, brand and marketing initiatives, and centralized support
              functions. As the technology enabler for the Capital Markets businesses, Shriram
              Credit drives fintech-led innovation and operational excellence across the Capital
              Markets businesses.
            </p>
          </div>
        </div>
      </section>

      {/* ══ BOARD ══ */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow">Leadership</p>
              <h2>Board of directors</h2>
              <p>Tap a director to read their full profile.</p>
            </div>
          </div>
          <BoardDirectors />
        </div>
      </section>

      {/* ══ CTA ══ */}
      <div className="band">
        <div className="wrap">
          <div>
            <h2>Want to see the filings behind these numbers?</h2>
            <p>Annual reports, policies and regulatory disclosures are all published for you.</p>
          </div>
          <a className="btn btn-dark" href="/investors">View investor disclosures</a>
        </div>
      </div>
    </>
  );
}
