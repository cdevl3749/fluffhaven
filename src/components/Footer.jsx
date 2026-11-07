
export default function Footer() {
  const goTo = (section) => {
    window.location.href = `/#${section}`;
  };

  return (
    <footer className="footer">
      <div className="footer-brand">
        <div className="footer-logo">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="18" cy="18" r="8" />
            <circle cx="32" cy="12" r="8" />
            <circle cx="46" cy="18" r="8" />
            <circle cx="22" cy="34" r="7" />
            <path d="M32 28c-12 0-21 9-21 18 0 7 6 11 13 8 4-2 6-3 8-3s4 1 8 3c7 3 13-1 13-8 0-9-9-18-21-18z" />
          </svg>
          FluffHaven
        </div>

        <p>
          Premium essentials for happy pets.
          <br />
          Free shipping · Always.
        </p>

        <p style={{ marginTop: "10px" }}>
          <a
            href="mailto:contact@fluffhaven.shop"
            style={{
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
            }}
          >
            📧 contact@fluffhaven.shop
          </a>
        </p>

        <p style={{ marginTop: "10px" }}>
          <a
            href="https://www.pinterest.com/0elvujxmqgf3b36bmj26ehuq52e7k1/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
            }}
          >
            📌 Pinterest
          </a>
        </p>

        <p style={{ marginTop: "10px" }}>
          <a
            href="https://www.linkedin.com/in/christophe-devleeshouwer-882377399/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
            }}
          >
            💼 LinkedIn
          </a>
        </p>

        {/* ACCEPTED PAYMENTS */}
        <div className="footer-payments">
          <div className="footer-payments-title">
            Accepted payments
          </div>

          <div className="payment-methods">
            <img src="/payments/visa.svg" alt="Visa" loading="lazy" />
            <img src="/payments/mastercard.svg" alt="Mastercard" loading="lazy" />
            <img src="/payments/applePay.svg" alt="Apple Pay" loading="lazy" />
            <img src="/payments/googlePay.svg" alt="Google Pay" loading="lazy" />
            <img src="/payments/amazonPay.svg" alt="Amazon Pay" loading="lazy" />
            <img src="/payments/klarna.svg" alt="Klarna" loading="lazy" />
            <img src="/payments/bancontact.svg" alt="Bancontact" loading="lazy" />
          </div>

          <div className="footer-payments-secure">
            🔒 Secure payments powered by Stripe
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="footer-nav">
        <h4>Navigation</h4>

        <span onClick={() => goTo("shop")}>Shop</span>
        <span onClick={() => goTo("about")}>About Us</span>
        <span onClick={() => goTo("reviews")}>Reviews</span>
        <span onClick={() => goTo("faq")}>FAQ</span>
        <span onClick={() => (window.location.href = "/blog")}>
          Blog
        </span>
        <span onClick={() => goTo("contact")}>Contact Us</span>
        <span onClick={() => goTo("privacy")}>Privacy Policy</span>
        <span onClick={() => goTo("terms")}>Terms of Service</span>
        <span onClick={() => (window.location.href = "/returns")}>
          Returns
        </span>
        <span onClick={() => goTo("shipping")}>Shipping Policy</span>
      </div>

      {/* SECURE & TRUSTED */}
      <div className="footer-trust">
        <h4>Secure &amp; Trusted</h4>

        <div className="trust-badges">
          <div className="trust-badge">
            <span>💳</span> Visa / Mastercard
          </div>

          <div className="trust-badge">
            <span>🔒</span> SSL Encrypted
          </div>

          <div className="trust-badge">
            <span>⚡</span> Powered by Stripe
          </div>

          <div className="trust-badge">
            <span>↩️</span> 14-Day Returns
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-copy">
        © 2026 FluffHaven. All rights reserved.
      </div>
    </footer>
  );
}
