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

  const { data: existing } = await admin.from("profiles").select("id").eq("phone", mobile).maybeSingle();
  if (existing) {
    return NextResponse.json(
      { error: "This mobile number already has an account. Please log in instead." },
      { status: 409 }
    );
  }

  const email = syntheticEmailForPhone(mobile);
  const { data: created, error: createError } = await admin.auth.admin.createUser({
    email,
    email_confirm: true,
    user_metadata: { mobile },
  });
  if (createError || !created.user) {
    return NextResponse.json({ error: "Could not create account. Please try again." }, { status: 500 });
  }

  const userId = created.user.id;

  const { error: profileError } = await admin
    .from("profiles")
    .update({ phone: mobile, phone_verified: true })
    .eq("id", userId);
  if (profileError) {
    return NextResponse.json({ error: "Could not save your details. Please try again." }, { status: 500 });
  }

  const mpinHash = await bcrypt.hash(mpin, 10);
  const { error: pinError } = await admin.from("user_pins").insert({ user_id: userId, mpin_hash: mpinHash });
  if (pinError) {
    return NextResponse.json({ error: "Could not save your MPIN. Please try again." }, { status: 500 });
  }

  const { data: linkData, error: linkError } = await admin.auth.admin.generateLink({
    type: "magiclink",
    email,
  });
  if (linkError || !linkData.properties?.hashed_token) {
    return NextResponse.json({ error: "Account created, but sign-in failed. Please log in." }, { status: 500 });
  }

  return NextResponse.json({ tokenHash: linkData.properties.hashed_token });
}
