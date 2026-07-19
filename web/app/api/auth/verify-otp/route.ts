import { NextResponse } from "next/server";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { DEMO_OTP_CODE, isValidMobile } from "@/lib/auth/phone";

export async function POST(request: Request) {
  const { mobile, otp } = await request.json();

  if (!isValidMobile(mobile ?? "")) {
    return NextResponse.json({ error: "Enter a valid 10 digit mobile number." }, { status: 400 });
  }
  if (otp !== DEMO_OTP_CODE) {
    return NextResponse.json({ error: "Incorrect code. Please try again." }, { status: 400 });
  }

  const admin = createAdminSupabaseClient();
  const { data: profile } = await admin
    .from("profiles")
    .select("id")
    .eq("phone", mobile)
    .maybeSingle();

  if (!profile) {
    return NextResponse.json({ isNewUser: true });
  }

  const { data: pin } = await admin
    .from("user_pins")
    .select("user_id")
    .eq("user_id", profile.id)
    .maybeSingle();

  return NextResponse.json({ isNewUser: !pin });
}
