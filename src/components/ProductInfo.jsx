import { useEffect, useState } from "react";
import AddToCartButton from "./AddToCartButton";

export default function ProductInfo({ product, onAddToCart }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [showAllDetails, setShowAllDetails] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 600);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const details = product.details
    ? product.details
        .trim()
        .split("\n")
        .filter((line) => line.trim() !== "")
    : [];

    function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

  async function handleBuyNow() {
    try {
      fetch("/.netlify/functions/stats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "click" }),
      }).catch(() => {});

      const response = await fetch(
        "/.netlify/functions/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: [
              {
                priceId: product.priceId,
                quantity: 1,
              },
            ],
          }),
        }
      );

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <section className="product-info">
      <h1>{product.name}</h1>

      <p className="product-category">
        {product.category === "cat" ? "Cat Essentials" : "Dog Essentials"}
      </p>

      {product.rating && product.reviews && (
        <>
          <div className="product-rating">
            ⭐⭐⭐⭐⭐ {product.rating} ({product.reviews} reviews)
          </div>

          {product.customers && (
            <p className="product-customers">
              ✔ Trusted by {product.customers} pet owners
            </p>
          )}
        </>
      )}

      <div className="product-price-wrapper">
  <p className="product-price">
    ${product.price.toFixed(2)} USD
  </p>

  {product.promo && (
    <p
      style={{
        margin: "4px 0 10px",
        fontSize: "15px",
        fontWeight: "700",
        color: "#d97706",
      }}
    >
      🏷️ {product.promo} — Pay ${(product.price * (1 - parseFloat(product.promo) / 100)).toFixed(2)} with code {product.promoCode}
    </p>
  )}

  <p className="product-secure">
    🔒 Secure payment with Stripe
  </p>

  <p className="product-price-secondary">
    🚚 Estimated delivery: 5–8 business days
  </p>
</div>

      {product.badge && (
        <div className="product-badge">{product.badge}</div>
      )}

      <p className="product-subtitle">{product.subtitle}</p>

      <p className="product-stock">
        ✓ In Stock • Ready to Ship
      </p>

      {/* BUYING AREA - visible before long product content */}
      <div className="product-trust">
        <span>Free Shipping</span>
        <span>Secure Checkout</span>
        <span>14-Day Returns</span>
      </div>

      <div className="product-buttons">
        <AddToCartButton
          onClick={() => onAddToCart?.(product)}
        />

        <button
          className="product-buy-button"
          type="button"
          onClick={handleBuyNow}
        >
          Buy Now →
        </button>
      </div>

     <div className="product-description-wrapper">
        <p className={`product-description ${showFullDescription ? "expanded" : "collapsed"}`}>
          {product.description}
        </p>

        <button
          type="button"
          className="description-read-more"
          onClick={() => setShowFullDescription(!showFullDescription)}
        >
          {showFullDescription ? "Show less ↑" : "Read more ↓"}
        </button>
      </div>

     {/* PRODUCT DETAILS */}
{details.length > 0 && (
  <div className="product-benefits">
    <h2>Why you'll love it</h2>

    <ul className="product-details">
      {details.map(
        (detail, index) => (
          <li key={index}>{detail}</li>
        )
      )}
    </ul>
      </div>
    )}

      {/* FAQ */}
      <div className="product-faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <button
            className="faq-question"
            onClick={() => setOpenFaq(openFaq === 0 ? -1 : 0)}
          >
            <>
              Is this product easy to use?
              <span>{openFaq === 0 ? "−" : "+"}</span>
            </>
          </button>

          {openFaq === 0 && (
            <p>
              Yes. It is designed for quick, everyday use without any
              complicated setup.
            </p>
          )}
        </div>

        <div className="faq-item">
          <button
            className="faq-question"
            onClick={() => setOpenFaq(openFaq === 1 ? -1 : 1)}
          >
            Is it suitable for daily use?
            <span>{openFaq === 1 ? "−" : "+"}</span>
          </button>

          {openFaq === 1 && (
            <p>
              Absolutely. It is made to be used safely as part of your
              daily pet care routine.
            </p>
          )}
        </div>

        <div className="faq-item">
          <button
            className="faq-question"
            onClick={() => setOpenFaq(openFaq === 2 ? -1 : 2)}
          >
            Do you offer worldwide shipping?
            <span>{openFaq === 2 ? "−" : "+"}</span>
          </button>

          {openFaq === 2 && (
            <p>
              Yes. We offer free worldwide shipping with secure checkout.
            </p>
          )}
        </div>
      </div>
            {showScrollTop && (
        <button
          className="product-scroll-top"
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </section>
  );
}