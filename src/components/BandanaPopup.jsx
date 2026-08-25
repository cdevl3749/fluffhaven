import { useEffect, useState } from "react";
import "./BandanaPopup.css";

const STORAGE_KEY = "fh_grooming_popup_closed_at";
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
      "/product/premium-3-in-1-pet-grooming-set";
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
            src="/premium-3-in-1-pet-grooming-set-main.webp"
            alt="Premium 3-in-1 Pet Grooming Set"
          />
        </div>

        <div className="bandana-popup-content">

          <span className="bandana-popup-label">
            🛁 GROOMING ESSENTIAL
          </span>

          <h2 id="bandana-popup-title">
            Premium 3-in-1 Pet Grooming Set
          </h2>

          <p className="bandana-popup-subtitle">
            Clean, massage and care for your pet
            with one practical grooming set.
          </p>

          <div className="bandana-popup-benefits">
            <span>✓ Shampoo dispenser</span>
            <span>✓ Massage & grooming brushes</span>
            <span>✓ For dogs & cats</span>
          </div>

          <div className="bandana-popup-price">
            <strong>$27.90 USD</strong>
            <span>Free shipping</span>
          </div>

          <button
            className="bandana-popup-button"
            onClick={openProduct}
          >
            Discover Grooming Set →
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