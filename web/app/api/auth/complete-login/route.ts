import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { DEMO_OTP_CODE, isValidMobile, isValidMpin, syntheticEmailForPhone } from "@/lib/auth/phone";

export async function POST(request: Request) {
  const { mobile, otp, mpin } = await request.json();

  if (!isValidMobile(mobile ?? "")) {
    return NextResponse.json({ error: "Enter a valid 10 digit mobile number." }, { status: 400 });
  }
  if (otp !== DEMO_OTP_CODE) {
    return NextResponse.json({ error: "Incorrect code. Please try again." }, { status: 400 });
  }
  if (!isValidMpin(mpin ?? "")) {
    return NextResponse.json({ error: "Enter your 6 digit MPIN." }, { status: 400 });
  }

  const admin = createAdminSupabaseClient();

  const genericError = NextResponse.json({ error: "Incorrect mobile number or MPIN." }, { status: 401 });

  const { data: profile } = await admin.from("profiles").select("id").eq("phone", mobile).maybeSingle();
  if (!profile) return genericError;

  const { data: pinRow } = await admin
    .from("user_pins")
    .select("mpin_hash")
    .eq("user_id", profile.id)
    .maybeSingle();
  if (!pinRow) return genericError;

  const matches = await bcrypt.compare(mpin, pinRow.mpin_hash);
  if (!matches) return genericError;

  const { data: linkData, error: linkError } = await admin.auth.admin.generateLink({
    type: "magiclink",
    email: syntheticEmailForPhone(mobile),
  });
  if (linkError || !linkData.properties?.hashed_token) {
    return NextResponse.json({ error: "Sign-in failed. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ tokenHash: linkData.properties.hashed_token });
}
