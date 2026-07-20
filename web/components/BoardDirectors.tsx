"use client";

import { useEffect, useState } from "react";

const BOARD = [
  {
    name: "Akhilesh Kumar Singh",
    role: "Vice-Chairman & Non-Executive Director",
    bio: "Mr. Akhilesh Kumar Singh has over 30 years of experience in financial services and has been with the Shriram Group since 1994. He holds a B.Tech from IIT Kharagpur and a PGDM from IIM Bangalore. He previously served as President of Shriram City Union Finance Limited and as Managing Director of several Shriram entities, including Shriram Credit Company Limited, Shriram Insight Share Brokers Limited and Shriram Asset Management Company Limited. He currently serves as Non-Executive Director of Shriram Insight Share Brokers Limited, and brings deep expertise in business development, financial services operations and organisational scaling.",
  },
  {
    name: "Subhasri Sriram",
    role: "Non-Executive Director",
    bio: "Ms. Subhasri Sriram is the Managing Director and CEO of Shriram Capital Pvt. Ltd., Chennai, and previously served as its Chief Financial Officer. She brings 30 years of experience across life insurance, general insurance, wealth management, stock broking, asset management and insurance broking. She holds a postgraduate degree in Commerce from Ethiraj College, Chennai, is an Associate Member of ICMAI, and holds postgraduate diplomas in Systems Management (NIIT) and Cyber Laws (NALSAR, Hyderabad). Her career includes leading credit rating turnarounds and developing business blueprints across the Group.",
  },
  {
    name: "Jasmit Singh Gujral",
    role: "Non-Executive Director",
    bio: "Mr. Jasmit Singh Gujral is Executive Vice Chairman of Shriram General Insurance Company Limited, having previously served as its Managing Director and CEO. He has been with the Shriram Group since 1988 and also serves as Non-Executive Director of Shriram Capital Private Limited. His earlier leadership roles include CEO of Shriram Overseas Finance Company Limited and MD & CEO of Shriram Transport Finance Company Limited. He holds a Bachelor's in Commerce and a Post Graduate degree in Management from Aligarh Muslim University, has completed the Executive Management Programme at IIM Ahmedabad, and the Advanced Management Programme at Kellogg/ISB. He brings expertise in financial services, insurance, marketing and general business management.",
  },
  {
    name: "Ajay Thomas John",
    role: "Non-Executive Director",
    bio: "Mr. Ajay Thomas John has 22+ years of experience in financial services and fintech, and currently leads digital transformation initiatives at Novac. He previously held leadership positions at Bajaj Finance Ltd. in Corporate Strategy and Fintech, with earlier experience at HDFC Bank, ICICI Bank and CitiFinancial. He holds an MBA in Finance from Anna University, and his core competencies span digital transformation, e-business, product and program management, marketing, business development, partner management, lending, payments and customer experience.",
  },
  {
    name: "Dr. Saleem K. Ali",
    role: "Non-Executive & Independent Director",
    bio: "Dr. Saleem K. Ali is a retired Indian Police Service (IPS) officer with 36+ years of experience across law enforcement, governance, academia and corporate advisory. He holds a Ph.D. in Civil Society Conflict Index, an MBA in Finance, and a Master's in Chemistry. He served as Director General of Police, Tripura (2010–2011), and as Special Director/Additional Director at the Central Bureau of Investigation. He is Founder, Chairman and Managing Director of Fourth Force, a background verification and risk management firm, and serves as an adviser to Jamia Millia Islamia and Honorary Director of the Residential Coaching Academy. He currently sits on the boards of Shriram Fortune Solutions Ltd. and Way2Wealth Brokers Pvt. Ltd.",
  },
  {
    name: "Rajasundaram Sudarshan",
    role: "Non-Executive & Independent Director",
    bio: "Mr. Rajasundaram Sudarshan is a Chartered Accountant (member since 1992) with 32+ years of experience in banking and financial services. He began his career at Citibank N.A. and group entities (1998–2008) across various finance and banking roles, later serving as CFO of e-Serve International Limited, where he facilitated its merger with TCS, and subsequently as Executive Vice President – Operations at TCS. In 2012 he co-founded CreditMantri Finserve Private Limited, where he serves as Co-Founder and Chief Operating Officer, focused on improving credit health for retail borrowers and building access solutions for credit-invisible populations. His expertise spans corporate finance, risk management, strategic planning and digital transformation.",
  },
];

function getInitials(name: string) {
  const cleaned = name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s+/, "");
  const parts = cleaned.split(" ").filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "")).toUpperCase();
}

export default function BoardDirectors() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  const active = selected !== null ? BOARD[selected] : null;

  return (
    <>
      <div className="board-grid">
        {BOARD.map((member, i) => (
          <button
            key={member.name}
            type="button"
            className="board-item"
            onClick={() => setSelected(i)}
            aria-haspopup="dialog"
          >
            <span className="board-avatar">
              <span className="board-avatar-inner">{getInitials(member.name)}</span>
            </span>
            <h3>{member.name}</h3>
            <span className="role">{member.role}</span>
          </button>
        ))}
      </div>

      {active && (
        <div className="board-modal-overlay" onClick={() => setSelected(null)}>
          <div
            className="board-modal"
            role="dialog"
            aria-modal="true"
            aria-label={active.name}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="board-modal-close" aria-label="Close" onClick={() => setSelected(null)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B0C0E" strokeWidth="2">
                <path d="M4 4l16 16M20 4L4 20" />
              </svg>
            </button>
            <span className="board-avatar">
              <span className="board-avatar-inner">{getInitials(active.name)}</span>
            </span>
            <h3 className="board-modal-name">{active.name}</h3>
            <span className="board-modal-role">{active.role}</span>
            <div className="board-modal-divider" />
            <p className="board-modal-bio">{active.bio}</p>
          </div>
        </div>
      )}
    </>
  );
}
