const BOARD = [
  {
    name: "Akhilesh Kumar Singh",
    role: "Vice-Chairman & Non-Executive Director",
    bio: "With the Shriram Group since 1994. Formerly President of Shriram City Union Finance and Managing Director of Shriram Credit Company, Shriram Insight Share Brokers and Shriram Asset Management. B.Tech (IIT Kharagpur), PGDM (IIM Bangalore).",
  },
  {
    name: "Subhasri Sriram",
    role: "Non-Executive Director",
    bio: "Managing Director & CEO, Shriram Capital Pvt. Ltd. 30 years across life insurance, general insurance, wealth management, broking and asset management. Formerly CFO, Shriram Capital Ltd.",
  },
  {
    name: "Jasmit Singh Gujral",
    role: "Non-Executive Director",
    bio: "Executive Vice Chairman, Shriram General Insurance. With the Group since 1988; previously MD & CEO of Shriram Transport Finance and of Shriram General Insurance.",
  },
  {
    name: "Ajay Thomas John",
    role: "Non-Executive Director",
    bio: "22+ years in financial services and fintech, leading digital transformation at Novac. Formerly at Bajaj Finance, HDFC Bank, ICICI Bank and CitiFinancial. MBA in Finance, Anna University.",
  },
  {
    name: "Dr. Saleem K. Ali",
    role: "Non-Executive & Independent Director",
    bio: "Retired IPS officer with 36+ years in law enforcement, governance and corporate advisory. Former Director General of Police, Tripura, and Additional Director, CBI.",
  },
  {
    name: "Rajasundaram Sudarshan",
    role: "Non-Executive & Independent Director",
    bio: "Chartered Accountant with 32+ years in banking and financial services. Co-Founder & COO, CreditMantri; formerly CFO of e-Serve International (TCS).",
  },
];

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
      <section className="about">
        <div className="wrap">
          <div className="about-grid">
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
            <div className="about-stats">
              <div className="astat">
                <b>RBI registered</b>
                <span className="astat-l">Certificate of Registration No. B-07.00709</span>
              </div>
              <div className="astat">
                <b>Since 1980</b>
                <span className="astat-l">CIN U65191TN1980PLC008215</span>
              </div>
              <div className="astat">
                <b>Two products</b>
                <span className="astat-l">Loan against mutual funds &amp; loan against shares</span>
              </div>
              <div className="astat">
                <b>Chennai HQ</b>
                <span className="astat-l">Registered office in T. Nagar; corporate office in Bengaluru</span>
              </div>
            </div>
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
            </div>
          </div>
          <div className="board-grid">
            {BOARD.map((member) => (
              <div className="board-card" key={member.name}>
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
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
