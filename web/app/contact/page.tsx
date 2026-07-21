import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="contact-split">
      <div className="contact-promo">
        <h1>
          How can we <span className="hl">help you?</span>
        </h1>
        <p className="contact-desc">
          Reach our support team across multiple channels. We&apos;re here Monday to Saturday,
          9:30 am to 6:30 pm.
        </p>
        <div className="contact-pills">
          <a className="contact-pill" href="tel:02269032946">
            <svg viewBox="0 0 24 24" fill="none" stroke="#0B0C0E" strokeWidth="1.6">
              <path d="M4 5c0-1 1-2 2-2h2l2 5-2 1.5c1 2.5 2.5 4 5 5L14.5 13l5 2v2c0 1-1 2-2 2C10 19 4 14 4 5z" />
            </svg>
            <span>022-69032946 (toll-free)</span>
          </a>
          <a className="contact-pill" href="mailto:support@shriramcredit.in">
            <svg viewBox="0 0 24 24" fill="none" stroke="#0B0C0E" strokeWidth="1.6">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M4 6.5l8 6 8-6" />
            </svg>
            <span>support@shriramcredit.in</span>
          </a>
        </div>
      </div>

      <div className="contact-panel">
        <ContactForm />
      </div>
    </div>
  );
}
