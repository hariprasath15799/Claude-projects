"use client";

import { usePathname } from "next/navigation";

export default function HeaderAuthCta() {
  const pathname = usePathname();

  if (pathname === "/login") return null;

  return (
    <a className="btn btn-yellow" href="/login">
      Login / Sign up
    </a>
  );
}
