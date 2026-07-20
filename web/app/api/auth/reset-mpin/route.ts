import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { DEMO_OTP_CODE, isValidMobile, isValidMpin, syntheticEmailForPhone } from "@/lib/auth/phone";

export async function POST(request: Request) {
  const { mobile, otp, mpin, mpinConfirm } = await request.json();

  if (!isValidMobile(mobile ?? "")) {
    return NextResponse.json({ error: "Enter a valid 10 digit mobile number." }, { status: 400 });
  }
  if (otp !== DEMO_OTP_CODE) {
    return NextResponse.json({ error: "Incorrect code. Please try again." }, { status: 400 });
  }
  if (!isValidMpin(mpin ?? "")) {
    return NextResponse.json({ error: "MPIN must be exactly 6 digits." }, { status: 400 });
  }
  if (mpin !== mpinConfirm) {
    return NextResponse.json({ error: "MPINs do not match." }, { status: 400 });
  }

  const admin = createAdminSupabaseClient();

  const { data: profile } = await admin.from("profiles").select("id").eq("phone", mobile).maybeSingle();
  if (!profile) {
    return NextResponse.json(
      { error: "No account found with this number. Please sign up instead." },
      { status: 404 }
    );
  }

  const mpinHash = await bcrypt.hash(mpin, 10);
  const { error: pinError } = await admin
    .from("user_pins")
    .upsert({ user_id: profile.id, mpin_hash: mpinHash }, { onConflict: "user_id" });
  if (pinError) {
    return NextResponse.json({ error: "Could not update your MPIN. Please try again." }, { status: 500 });
  }

  const { data: linkData, error: linkError } = await admin.auth.admin.generateLink({
    type: "magiclink",
    email: syntheticEmailForPhone(mobile),
  });
  if (linkError || !linkData.properties?.hashed_token) {
    return NextResponse.json({ error: "MPIN updated, but sign-in failed. Please log in." }, { status: 500 });
  }

  return NextResponse.json({ tokenHash: linkData.properties.hashed_token });
}
