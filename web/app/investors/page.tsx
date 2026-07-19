const DOC_BASE = "https://www.shriramcredit.in/assets/pdf";

type Doc = { title: string; href: string };

const policies: Doc[] = [
  { title: "Fair Practice (Company Policy)", href: `${DOC_BASE}/polices/SCCL_Fair_Practice_Code.pdf` },
  { title: "SCCL Asset Liability Management Policy", href: `${DOC_BASE}/polices/SCCL-Asset-Liability-Management-Policy.pdf` },
  { title: "SCCL Fit and Proper Policy", href: `${DOC_BASE}/polices/SCCL_Fit_and_Proper_Policy.pdf` },
  { title: "SCCL Grievance Redressal Mechanism", href: `${DOC_BASE}/polices/SCCL_Grievance-Redressal-Mechanism.pdf` },
  { title: "SCCL KYC Policy", href: `${DOC_BASE}/polices/SCCL_KYC-Policy.pdf` },
  { title: "Fraud Management Policy", href: `${DOC_BASE}/polices/SCCL-Policy-on-Fraud-Risk-Management.pdf` },
];

const annualReports: Doc[] = [
  { title: "SCCL 42nd Annual Report — FY 2021-22", href: `${DOC_BASE}/AnnualReport/SCCL_42nd_Annual_Report_FY_2021-22.pdf` },
  { title: "SCCL 43rd Annual Report — FY 2022-23", href: `${DOC_BASE}/AnnualReport/SCCL_43rd_Annual_Report_FY_2022-23.pdf` },
  { title: "SCCL 44th Annual Report — FY 2023-24", href: `${DOC_BASE}/AnnualReport/SCCL_44th_Annual_Report_FY_2023-24.pdf` },
  { title: "SCCL 45th Annual Report — FY 2024-25", href: `${DOC_BASE}/AnnualReport/SCCL_45th_Annual Report_FY 2024-25.pdf` },
];

const annualReturns: Doc[] = [
  { title: "SCCL Form MGT-7 — FY 2021-22", href: `${DOC_BASE}/AnnualReturn/SCCL_Form_MGT_7_FY_2021-22.pdf` },
  { title: "SCCL Form MGT-7 — FY 2022-23", href: `${DOC_BASE}/AnnualReturn/SCCL_Form_MGT_7_FY_2022-23.pdf` },
  { title: "SCCL Form MGT-7 — FY 2023-24", href: `${DOC_BASE}/AnnualReturn/SCCL_Form_MGT_7_FY_2023-24.pdf` },
  { title: "SCCL Form MGT-7 — FY 2024-25", href: `${DOC_BASE}/AnnualReturn/SCCL_Form_MGT_7_FY 2024-25.pdf` },
  { title: "Annual Return (MGT-7) Challan — FY 2024-25", href: `${DOC_BASE}/AnnualReturn/SCCL_Form_MGT_7_FY 2024-25_Challan.pdf` },
];

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
      <path d="M4 19V6a2 2 0 012-2h9l5 5v10a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
      <path d="M15 4v5h5M8 13h8M8 16h5" />
    </svg>
  );
}

function DocGrid({ docs }: { docs: Doc[] }) {
  return (
    <div className="doc-grid">
      {docs.map((doc) => (
        <a key={doc.title} className="doc-card" href={doc.href} target="_blank" rel="noopener noreferrer">
          <span className="doc-ic">
            <DocIcon />
          </span>
          <span>{doc.title}</span>
        </a>
      ))}
    </div>
  );
}

export default function InvestorsPage() {
  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="eyebrow">Investors</p>
            <h2>Investor information &amp; disclosures</h2>
            <p>
              Statutory policies, annual reports and annual returns filed by Shriram Credit
              Company Limited, published here for shareholders, regulators and the public.
            </p>
          </div>
        </div>

        <div className="doc-section">
          <h3>Policies</h3>
          <DocGrid docs={policies} />
        </div>

        <div className="doc-section">
          <h3>Annual reports</h3>
          <DocGrid docs={annualReports} />
        </div>

        <div className="doc-section">
          <h3>Annual return (MGT-7)</h3>
          <DocGrid docs={annualReturns} />
        </div>
      </div>
    </section>
  );
}
