import { AppHeroIllustration } from "@/components/PartnerIllustrations";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.sfs.partnersone&pcampaignid=web_share";

export default function PartnerPage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="app-hero">
        <div className="wrap app-hero-row">
          <div className="app-hero-copy">
            <p className="eyebrow">Shriram Fortune Partners</p>
            <h1>Your trusted financial partner for all your finance needs</h1>
            <p className="tagline">
              Increase your earnings by providing investment and insurance — all in one place.
              Download the Shriram Fortune Partners app and start earning as a partner today.
            </p>
            <div className="app-hero-actions">
              <a className="btn btn-yellow" href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                Get it on Google Play
              </a>
              <a className="btn btn-outline" href="#app-features">See what you get</a>
            </div>
          </div>
          <div className="app-hero-art">
            <AppHeroIllustration />
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="app-stats-band">
        <div className="wrap app-stats-grid">
          <div className="app-stat">
            <b>1 Lakh+</b>
            <span>Agents already earning with us — join the movement</span>
          </div>
          <div className="app-stat">
            <b>₹1 Lakh</b>
            <span>Potential monthly earning, unlocked as you grow</span>
          </div>
          <div className="app-stat">
            <b>All-in-one</b>
            <span>Investments and insurance from a single dashboard</span>
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section id="app-features">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow">Why partners choose us</p>
              <h2>Everything you need to grow your income</h2>
              <p>
                Shriram Fortune Partners brings investment and insurance products together in one
                app, so you can serve your clients better and earn more from every relationship.
              </p>
            </div>
          </div>

          <div className="app-feature-grid">
            <div className="app-feature-card">
              <svg viewBox="0 0 24 24">
                <path d="M12 3l9 5-9 5-9-5 9-5z" />
                <path d="M3 13l9 5 9-5" />
              </svg>
              <h3>Earn from every product</h3>
              <p>Offer investments and insurance from one dashboard, and earn commission on both — no switching apps.</p>
            </div>
            <div className="app-feature-card">
              <svg viewBox="0 0 24 24">
                <circle cx="9" cy="8" r="3" />
                <path d="M3 20v-1a5 5 0 015-5h2a5 5 0 015 5v1M16 5.5a3 3 0 010 5.5M21 20v-1a5 5 0 00-3-4.6" />
              </svg>
              <h3>Join 1 Lakh+ agents</h3>
              <p>Be part of a growing, trusted network of dedicated agents earning with Shriram across India.</p>
            </div>
            <div className="app-feature-card">
              <svg viewBox="0 0 24 24">
                <path d="M3 20h18M6 20V12M11 20V6M16 20v-5M21 20V9" />
              </svg>
              <h3>Earn up to ₹1 Lakh a month</h3>
              <p>Unlock your potential and take control of your financial future, at your own pace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <div className="band">
        <div className="wrap">
          <div>
            <h2>Ready to become a Shriram Fortune Partner?</h2>
            <p>Download the app and start earning from investments and insurance today.</p>
          </div>
          <a className="btn btn-dark" href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
            Get it on Google Play
          </a>
        </div>
      </div>
    </>
  );
}
