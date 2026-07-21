"use client";

import { useMemo, useState } from "react";
import {
  calculateEmi,
  calculateInterestOnlyMonthly,
  eligibleLoanAmount,
  formatINR,
  LTV_BY_FUND_TYPE,
  type FundType,
} from "@/lib/calculators/lamf";

type RepaymentMode = "emi" | "interest-only";

export default function CalculatorsPage() {
  const [mfValue, setMfValue] = useState(1000000);
  const [fundType, setFundType] = useState<FundType>("equity");
  const [tenure, setTenure] = useState(12);
  const [rate, setRate] = useState(10.5);
  const [mode, setMode] = useState<RepaymentMode>("emi");

  const results = useMemo(() => {
    const principal = eligibleLoanAmount(mfValue, fundType);

    if (mode === "emi") {
      const emi = calculateEmi(principal, rate, tenure);
      const totalPayable = emi * tenure;
      const totalInterest = totalPayable - principal;
      return { principal, monthly: emi, totalInterest, totalPayable };
    }

    const monthly = calculateInterestOnlyMonthly(principal, rate);
    const totalInterest = monthly * tenure;
    const totalPayable = principal + totalInterest;
    return { principal, monthly, totalInterest, totalPayable };
  }, [mfValue, fundType, tenure, rate, mode]);

  const interestSharePct = Math.min(
    100,
    Math.max(0, (results.totalInterest / results.totalPayable) * 100)
  );

  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <h2>Loan against mutual funds calculator</h2>
            <p>
              See how much you could borrow against your mutual fund holdings, and compare
              monthly EMIs against paying interest-only and settling the principal at the end.
            </p>
          </div>
        </div>

        <div className="calc-grid">
          <div className="card">
            <div className="card-head">
              <h2>Your details</h2>
              <p>Move the sliders or type a value directly.</p>
            </div>

            <div className="calc-field">
              <label>Fund type</label>
              <div className="calc-tabs" role="tablist" aria-label="Fund type">
                <button
                  type="button"
                  role="tab"
                  aria-selected={fundType === "equity"}
                  className={fundType === "equity" ? "calc-tab active" : "calc-tab"}
                  onClick={() => setFundType("equity")}
                >
                  Equity fund
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={fundType === "debt"}
                  className={fundType === "debt" ? "calc-tab active" : "calc-tab"}
                  onClick={() => setFundType("debt")}
                >
                  Debt fund
                </button>
              </div>
            </div>

            <div className="calc-field">
              <label htmlFor="mfValue">
                Value of your mutual funds
                <b>{formatINR(mfValue)}</b>
              </label>
              <input
                id="mfValue"
                type="range"
                min={50000}
                max={10000000}
                step={10000}
                value={mfValue}
                onChange={(e) => setMfValue(Number(e.target.value))}
              />
              <div className="calc-minmax">
                <span>₹50,000</span>
                <span>₹1 crore+</span>
              </div>
            </div>

            <div className="calc-field">
              <label htmlFor="tenure">
                Tenure
                <b>
                  {tenure} {tenure === 1 ? "month" : "months"}
                </b>
              </label>
              <input
                id="tenure"
                type="range"
                min={3}
                max={60}
                step={1}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
              />
              <div className="calc-minmax">
                <span>3 months</span>
                <span>60 months</span>
              </div>
            </div>

            <div className="calc-field">
              <label htmlFor="rate">
                Interest rate (p.a.)*
                <b>{rate.toFixed(1)}%</b>
              </label>
              <input
                id="rate"
                type="range"
                min={8}
                max={18}
                step={0.1}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
              />
              <div className="calc-minmax">
                <span>8%</span>
                <span>18%</span>
              </div>
            </div>

            <p className="micro" style={{ textAlign: "left" }}>
              *Indicative rate for illustration only, subject to credit assessment. Eligible loan
              amount assumes up to {LTV_BY_FUND_TYPE[fundType] * 100}% of your{" "}
              {fundType === "equity" ? "equity" : "debt"} fund value.
            </p>
          </div>

          <div className="card">
            <div className="card-head">
              <h2>What you could get</h2>
              <p>Compare a regular EMI against paying interest only.</p>
            </div>

            <div className="calc-tabs" role="tablist" aria-label="Repayment option">
              <button
                type="button"
                role="tab"
                aria-selected={mode === "emi"}
                className={mode === "emi" ? "calc-tab active" : "calc-tab"}
                onClick={() => setMode("emi")}
              >
                EMI
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === "interest-only"}
                className={mode === "interest-only" ? "calc-tab active" : "calc-tab"}
                onClick={() => setMode("interest-only")}
              >
                Interest only
              </button>
            </div>

            <div className="calc-result">
              <div className="calc-result-row highlight">
                <span>{mode === "emi" ? "Monthly EMI" : "Monthly interest"}</span>
                <b>{formatINR(Math.round(results.monthly))}</b>
              </div>
              <div className="calc-result-row">
                <span>Eligible loan amount</span>
                <b>{formatINR(Math.round(results.principal))}</b>
              </div>
              <div className="calc-result-row">
                <span>Total interest payable</span>
                <b>{formatINR(Math.round(results.totalInterest))}</b>
              </div>
              <div className="calc-result-row">
                <span>Total amount payable</span>
                <b>{formatINR(Math.round(results.totalPayable))}</b>
              </div>
            </div>

            <div className="calc-bar">
              <div className="calc-bar-principal" style={{ width: `${100 - interestSharePct}%` }} />
              <div className="calc-bar-interest" style={{ width: `${interestSharePct}%` }} />
            </div>
            <div className="calc-bar-legend">
              <span>
                <i style={{ background: "var(--ink)" }} />
                Principal
              </span>
              <span>
                <i style={{ background: "var(--yellow)" }} />
                Interest
              </span>
            </div>

            {mode === "interest-only" && (
              <p className="micro" style={{ textAlign: "left", marginTop: 14 }}>
                Pay interest only every month; settle the full principal at the end of the tenure.
              </p>
            )}

            <a className="btn btn-yellow" href="/#products" style={{ width: "100%", marginTop: 18 }}>
              Check my eligibility
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
