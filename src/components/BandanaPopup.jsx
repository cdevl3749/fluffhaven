import { useEffect, useState } from "react";
import "./BandanaPopup.css";

const STORAGE_KEY = "fh_bandana_popup_closed_at";
const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;
const SCROLL_TRIGGER_PERCENT = 0.35;

export default function BandanaPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.location.pathname !== "/") return;

    const lastClosedAt = Number(localStorage.getItem(STORAGE_KEY));

    if (
      lastClosedAt &&
      Date.now() - lastClosedAt < THIRTY_DAYS
    ) {
      return;
    }

    let hasTriggered = false;

    function handleScroll() {
      if (hasTriggered) return;

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const scrolledPercent = window.scrollY / scrollableHeight;

      if (scrolledPercent >= SCROLL_TRIGGER_PERCENT) {
        hasTriggered = true;
        setIsOpen(true);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleEscape(e) {
      if (e.key === "Escape") closePopup();
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  function closePopup() {
    localStorage.setItem(
      STORAGE_KEY,
      Date.now().toString()
    );
    setIsOpen(false);
  }

  function openProduct() {
    setIsOpen(false);
    window.location.href =
      "/product/ponpons-signature-bandana-pack";
  }

  if (!isOpen) return null;

  return (
    <div
      className="bandana-popup-overlay"
      onClick={closePopup}
    >
      <div
        className="bandana-popup"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="bandana-popup-title"
      >
        <button
          className="bandana-popup-close"
          onClick={closePopup}
          aria-label="Close"
        >
          ×
        </button>

        <div className="bandana-popup-image">
          <img
            src="/ponpon-bandana-pack-main.webp"
            alt="Ponpon Signature Bandana Pack"
          />
        </div>

        <div className="bandana-popup-content">

          <span className="bandana-popup-label">
            🐾 NEW PONPON COLLECTION
          </span>

          <h2 id="bandana-popup-title">
            Ponpon's Signature Bandana Pack
          </h2>

          <p className="bandana-popup-subtitle">
            5 exclusive custom bandanas for every day
            of the week.
          </p>

          <div className="bandana-popup-benefits">
            <span>✓ 5 unique designs</span>
            <span>✓ Soft & comfortable</span>
            <span>✓ Free worldwide shipping</span>
          </div>

          <div className="bandana-popup-price">
            <strong>$74.90 USD</strong>
            <span>Complete pack</span>
          </div>

          <button
            className="bandana-popup-button"
            onClick={openProduct}
          >
            Discover Collection →
          </button>

          <button
            className="bandana-popup-later"
            onClick={closePopup}
          >
            Maybe later
          </button>

        </div>
      </div>
    </div>
  );
}