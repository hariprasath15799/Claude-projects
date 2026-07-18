export default function Header() {
  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="#" aria-label="Shriram Credit home">
          <img src="/logo.jpg" alt="Shriram Credit" />
        </a>
        <nav className="main" aria-label="Primary">
          <a href="#products">Loans</a>
          <a href="#calculators">Calculators</a>
          <a href="#faq">Support</a>
          <a href="#investors">Investors</a>
          <a href="#partner">Become a partner</a>
        </nav>
        <div className="nav-right">
          <a className="btn btn-yellow" href="#">Login / Sign up</a>
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
