"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import ConfirmLogoutModal from "./ConfirmLogoutModal";

export default function LogoutButton() {
  const router = useRouter();
  const [confirmOpen, setConfirmOpen] = useState(false);

  async function performLogout() {
    const supabase = createBrowserSupabaseClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <>
      <button className="btn btn-dark" onClick={() => setConfirmOpen(true)}>
        Log out
      </button>
      {confirmOpen && (
        <ConfirmLogoutModal onConfirm={performLogout} onCancel={() => setConfirmOpen(false)} />
      )}
    </>
  );
}
