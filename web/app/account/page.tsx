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
    <section style={{ background: "#fff", display: "flex", justifyContent: "center", padding: "clamp(64px,7vw,104px) 20px" }}>
      <div style={{ width: "100%", maxWidth: 440 }}>
        <p className="eyebrow">Your account</p>
        <h1 style={{ marginTop: 12 }}>Welcome back</h1>
        <div className="badge" style={{ display: "inline-flex", marginTop: 22, marginBottom: 22 }}>
          +91 {profile?.phone ?? "—"}
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
    </section>
  );
}
