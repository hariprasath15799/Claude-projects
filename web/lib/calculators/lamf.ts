// Loan Against Mutual Funds calculator math.
// LTV matches this site's own FAQ copy ("up to 50% of the value of your
// equity funds and up to 75% of the value of your debt funds"). EMI uses
// the standard reducing-balance formula; the interest-only option mirrors
// this product's actual pitch elsewhere on the site ("pay interest only
// on the amount you use").

export type FundType = "equity" | "debt";

export const LTV_BY_FUND_TYPE: Record<FundType, number> = {
  equity: 0.5,
  debt: 0.75,
};

export function eligibleLoanAmount(mfValue: number, fundType: FundType): number {
  return mfValue * LTV_BY_FUND_TYPE[fundType];
}

export function calculateEmi(principal: number, annualRatePct: number, tenureMonths: number): number {
  const monthlyRate = annualRatePct / 12 / 100;
  if (monthlyRate === 0) return principal / tenureMonths;
  const factor = Math.pow(1 + monthlyRate, tenureMonths);
  return (principal * monthlyRate * factor) / (factor - 1);
}

export function calculateInterestOnlyMonthly(principal: number, annualRatePct: number): number {
  const monthlyRate = annualRatePct / 12 / 100;
  return principal * monthlyRate;
}

export function formatINR(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}
