import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      {/* ══ HERO — light banner ══ */}
      <section className="hero">
        <svg className="hero-chart" viewBox="0 0 1440 300" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFC718" stopOpacity=".5" />
              <stop offset="100%" stopColor="#FFC718" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 250 L90 235 L180 245 L270 205 L360 220 L450 175 L540 190 L630 145 L720 160 L810 120 L900 138 L990 95 L1080 110 L1170 70 L1260 84 L1350 45 L1440 58 L1440 300 L0 300 Z"
            fill="url(#fill)"
          />
          <path
            d="M0 250 L90 235 L180 245 L270 205 L360 220 L450 175 L540 190 L630 145 L720 160 L810 120 L900 138 L990 95 L1080 110 L1170 70 L1260 84 L1350 45 L1440 58"
            fill="none"
            stroke="#E8AF00"
            strokeWidth="2"
            strokeOpacity=".5"
          />
        </svg>

        <div className="hero-inner">
          <div className="wrap hero-row">
            <Hero />
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS ══ */}
      <section className="products" id="products">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow">What we do</p>
              <h2>Loans, broking, mutual funds and deposits — from one trusted group</h2>
              <p>
                Shriram Credit Company Limited offers many kinds of financial services for
                individuals and businesses. Registered with the RBI in 2002, SCCL gives secured
                loans to its borrowers. Its subsidiary and associate companies handle share
                broking, mutual funds and fixed deposits.
              </p>
            </div>
            <a className="btn btn-outline" href="#">See all products</a>
          </div>

          <div className="p-grid">
            <a className="p-card" href="#">
              <svg viewBox="0 0 24 24">
                <path d="M3 8h18M3 8v10a1 1 0 001 1h16a1 1 0 001-1V8M3 8l2-3h14l2 3" />
                <circle cx="12" cy="14" r="2.5" />
              </svg>
              <h3>Loans</h3>
              <p>Loan against mutual funds and loan against shares. Pledge online and use the money whenever you need it.</p>
              <span className="go">Explore <span>→</span></span>
            </a>
            <a className="p-card" href="#">
              <svg viewBox="0 0 24 24">
                <path d="M3 20h18M6 20V12M11 20V6M16 20v-5M21 20V9" />
              </svg>
              <h3>Stock broking</h3>
              <p>Buy and sell shares, futures and commodities. Demat account and margin trading are included.</p>
              <span className="go">Explore <span>→</span></span>
            </a>
            <a className="p-card" href="#">
              <svg viewBox="0 0 24 24">
                <path d="M4 19V6a2 2 0 012-2h9l5 5v10a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
                <path d="M15 4v5h5M8 13h8M8 16h5" />
              </svg>
              <h3>Mutual funds</h3>
              <p>Start a SIP or invest a lump sum. All your schemes and statements stay in one account.</p>
              <span className="go">Explore <span>→</span></span>
            </a>
            <a className="p-card" href="#">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="6" width="18" height="13" rx="2" />
                <path d="M3 10h18M7 15h4" />
              </svg>
              <h3>Fixed deposits</h3>
              <p>Company and corporate fixed deposits. Choose your tenure and how often you want the interest paid.</p>
              <span className="go">Explore <span>→</span></span>
            </a>
          </div>
        </div>
      </section>

      {/* ══ METRICS BAND ══ */}
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
              <b>₹1 Cr</b>
              <span>Maximum loan against your securities</span>
              <em>Pledge your mutual fund units or shares and get a loan of up to ₹1 crore. The amount depends on the value of what you pledge.</em>
            </div>
            <div className="m">
              <b>7 min</b>
              <span>From pledge to approval</span>
              <em>Everything happens online through CAMS and KFintech. No branch visit, no paperwork, no waiting for days.</em>
            </div>
            <div className="m">
              <b>Zero</b>
              <span>Foreclosure charges</span>
              <em>Close the loan any time you want. There is no penalty for early repayment and no lock-in period.</em>
            </div>
            <div className="m">
              <b>50+ yrs</b>
              <span>Shriram Group legacy</span>
              <em>The Shriram Group has served Indian families and small businesses for over five decades. SCCL has been RBI registered since 2002.</em>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT SHRIRAM GROUP ══ */}
      <section className="about" id="about">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-copy">
              <p className="eyebrow">About the Shriram Group</p>
              <h2>Trusted by Indian families for over 50 years</h2>
              <p>
                The Shriram Group started in 1974 with one belief — that ordinary Indians, small
                business owners and salaried families deserve the same access to loans and
                investments as anyone else. Today it is one of the largest financial services
                groups in the country, working in lending, insurance, share broking, mutual funds
                and wealth advisory.
              </p>
              <p>
                Shriram Credit Company Limited brings that same trust to online lending. Our loan
                against mutual funds lets you get money when you need it, without breaking the
                savings you built over the years.
              </p>
            </div>
            <div className="about-stats">
              <div className="astat">
                <span className="astat-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#7A1E00" strokeWidth="1.6">
                    <path d="M12 8V3M8 5.5L12 3l4 2.5M4 21V10a1 1 0 011-1h14a1 1 0 011 1v11M4 21h16M9 21v-5h6v5" />
                  </svg>
                </span>
                <b>1974</b>
                <span className="astat-l">Year the Shriram Group started</span>
              </div>
              <div className="astat">
                <span className="astat-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#7A1E00" strokeWidth="1.6">
                    <path d="M3 20h18M6 20v-8M11 20V8M16 20v-6M21 20V4" />
                  </svg>
                </span>
                <b>₹2.5L Cr+</b>
                <span className="astat-l">Money managed by the group</span>
              </div>
              <div className="astat">
                <span className="astat-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#7A1E00" strokeWidth="1.6">
                    <path d="M3 21V8l6-4 6 4v13M15 21V11l6 4v6M3 21h18M7 12h2M7 16h2" />
                  </svg>
                </span>
                <b>3,000+</b>
                <span className="astat-l">Branches across India</span>
              </div>
              <div className="astat">
                <span className="astat-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#7A1E00" strokeWidth="1.6">
                    <circle cx="9" cy="8" r="3" />
                    <path d="M3 20v-1a5 5 0 015-5h2a5 5 0 015 5v1M16 5.5a3 3 0 010 5.5M21 20v-1a5 5 0 00-3-4.6" />
                  </svg>
                </span>
                <b>Crores</b>
                <span className="astat-l">Customers served across India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow">Support</p>
              <h2>Loan against mutual funds — your questions answered</h2>
            </div>
          </div>
          <span id="contact"></span>
          <div className="faq-grid">
            <aside className="faq-aside" id="calculators">
              <h3>Not sure how much you will get?</h3>
              <p>Use our calculator to check the loan amount, or call us and we will explain it in your language.</p>
              <a className="btn btn-dark" href="/calculators">Open the loan calculator</a>
              <a className="btn btn-outline" href="#">Talk to our team</a>
              <p style={{ margin: "18px 0 0", fontSize: "12.5px" }}>
                Monday to Saturday, 9:30 am to 6:30 pm ·{" "}
                <a href="tel:08043676869" style={{ textDecoration: "underline" }}>080 4367 6869</a>
              </p>
            </aside>
            <div>
              <details open>
                <summary><span className="q">01</span>What is a loan against mutual funds?<span className="plus"></span></summary>
                <p>A loan against mutual funds is a loan you take by pledging the mutual fund units you already own. Shriram Credit marks a lien on your units through CAMS or KFintech and gives you money against their value. Your units stay in your name, stay invested, and keep earning returns. You do not have to sell anything.</p>
              </details>
              <details>
                <summary><span className="q">02</span>How much loan can I get against my mutual funds?<span className="plus"></span></summary>
                <p>You can get up to 50% of the value of your equity funds and up to 75% of the value of your debt funds, with a maximum of ₹1 crore against equity holdings. The final amount depends on which schemes you hold and our credit check.</p>
              </details>
              <details>
                <summary><span className="q">03</span>Do I have to pay interest on the full loan amount?<span className="plus"></span></summary>
                <p>No. You pay interest only on the money you actually use. If you are approved for ₹5 lakh but withdraw only ₹1 lakh, you pay interest on ₹1 lakh. Interest is calculated daily and billed once a month.</p>
              </details>
              <details>
                <summary><span className="q">04</span>What happens if the market goes down?<span className="plus"></span></summary>
                <p>If the value of your pledged funds falls a lot, we will inform you and ask you to either pledge more units or repay part of the loan. This is called a margin call. We always give you notice and time before taking any action on your units.</p>
              </details>
              <details>
                <summary><span className="q">05</span>Which mutual fund schemes can I pledge?<span className="plus"></span></summary>
                <p>Most open-ended equity, hybrid and debt schemes from AMCs serviced by CAMS and KFintech can be pledged. You cannot pledge close-ended schemes, ELSS units that are still in the three year lock-in, or units already pledged somewhere else.</p>
              </details>
              <details>
                <summary><span className="q">06</span>What can I use the loan money for?<span className="plus"></span></summary>
                <p>You can use it for personal needs such as a medical bill, a wedding, your child&apos;s education, home repairs or working capital for your business. RBI rules do not allow this money to be used for share trading or any speculative activity.</p>
              </details>
              <details>
                <summary><span className="q">07</span>How long does it take to get the loan?<span className="plus"></span></summary>
                <p>The whole process is online. Enter your mobile number, verify the OTP, and approve the pledge request from CAMS or KFintech. In most cases the loan is approved within minutes and the money reaches your bank account the same working day.</p>
              </details>
              <details>
                <summary><span className="q">08</span>Can I close the loan early?<span className="plus"></span></summary>
                <p>Yes, and it costs you nothing extra. Repay the outstanding amount whenever you want and ask for a lien release. Your units become free again, usually within one or two working days.</p>
              </details>
              <details>
                <summary><span className="q">09</span>Do I need a good CIBIL score?<span className="plus"></span></summary>
                <p>This is a secured loan backed by your own investments, so the credit score requirement is much lower than for a personal loan. Checking your eligibility on this page does not affect your credit score at all.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <div className="band" id="partner">
        <div className="wrap">
          <div>
            <h2>Do you advise clients on money? Partner with Shriram.</h2>
            <p>Join as a partner and earn from loans, mutual funds, fixed deposits and broking — all from one dashboard.</p>
          </div>
          <a className="btn btn-dark" href="/partner">Become a partner</a>
        </div>
      </div>
    </>
  );
}
