"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export default function AccountMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  async function handleLogout() {
    if (!window.confirm("Are you sure you want to log out?")) return;
    setOpen(false);
    const supabase = createBrowserSupabaseClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <div className="account-menu" ref={ref}>
      <button
        type="button"
        className="account-menu-trigger"
        aria-label="Account menu"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#0B0C0E" strokeWidth="1.8">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        </svg>
      </button>

      {open && (
        <div className="account-menu-dropdown" role="menu">
          <a href="/account" role="menuitem" onClick={() => setOpen(false)}>
            Profile
          </a>
          <button type="button" role="menuitem" onClick={handleLogout}>
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
