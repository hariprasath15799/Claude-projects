// Loan Against Mutual Funds calculator math.
// LTV of 50% matches this site's own FAQ copy ("up to 50% of the value of
// your equity funds"). EMI uses the standard reducing-balance formula;
// the interest-only option mirrors this product's actual pitch elsewhere
// on the site ("pay interest only on the amount you use").

export function eligibleLoanAmount(mfValue: number): number {
  return mfValue * 0.5;
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
