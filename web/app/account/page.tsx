import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/LogoutButton";

export default async function AccountPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("phone, created_at")
    .eq("id", user.id)
    .maybeSingle();

  return (
    <section style={{ display: "flex", justifyContent: "center", padding: "clamp(64px,7vw,104px) 20px" }}>
      <div className="card" style={{ width: "100%", maxWidth: 440 }}>
        <div className="card-head">
          <h2>Your account</h2>
          <p>You&apos;re logged in with a real Supabase session.</p>
        </div>
        <div className="badge" style={{ marginBottom: 18 }}>
          +91 {profile?.phone ?? "—"}
        </div>
        <LogoutButton />
      </div>
    </section>
  );
}
