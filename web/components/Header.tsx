import { createServerSupabaseClient } from "@/lib/supabase/server";

export default async function Header() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="#" aria-label="Shriram Credit home">
          <img src="/logo.jpg" alt="Shriram Credit" />
        </a>
        <nav className="main" aria-label="Primary">
          <div className="nav-dropdown">
            <a href="#products">Loans</a>
            <div className="nav-dropdown-menu">
              <a href="#products">Loan against mutual funds</a>
              <a href="#products">Loan against shares</a>
            </div>
          </div>
          <a href="#calculators">Calculators</a>
          <a href="#faq">Discover Shriram</a>
          <a href="#investors">Investors</a>
          <a href="#partner">Become a partner</a>
        </nav>
        <div className="nav-right">
          {user ? (
            <a className="btn btn-yellow" href="/account">My account</a>
          ) : (
            <a className="btn btn-yellow" href="/login">Login / Sign up</a>
          )}
          <button className="burger" aria-label="Open menu">
            <svg width="18" height="12" fill="none" stroke="#0B0C0E" strokeWidth="2">
              <path d="M0 1h18M0 6h18M0 11h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
