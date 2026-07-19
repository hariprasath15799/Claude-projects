// Demo/placeholder mobile verification — no real SMS provider is wired up yet
// (that requires DLT registration in India, deferred to a later phase).
// Every mobile number accepts this same fixed code for now. Swapping in real
// SMS later only touches this file and the /api/auth/verify-otp route.
export const DEMO_OTP_CODE = "000000";

export function isValidMobile(mobile: string): boolean {
  return /^[6-9]\d{9}$/.test(mobile);
}

export function isValidMpin(mpin: string): boolean {
  return /^\d{6}$/.test(mpin);
}

// Deterministic internal identity for a phone number. Supabase Auth's native
// phone provider requires a real SMS provider to even enable, so real
// sessions are issued against a synthetic email instead — auth.users,
// auth.uid() and every RLS policy work exactly as if this were a normal
// email user. The real mobile number lives in profiles.phone, never in the
// visible email field.
export function syntheticEmailForPhone(mobile: string): string {
  return `phone-${mobile}@users.shriramcredit.internal`;
}
