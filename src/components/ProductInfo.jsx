import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
export default function ProductInfo({ product, onAddToCart }) {
  const [openFaq, setOpenFaq] = useState(0);

const details = product.details
  ? product.details
      .trim()
      .split("\n")
      .filter((line) => line.trim() !== "")
  : [];

  async function handleBuyNow() {
  try {
    const response = await fetch("/.netlify/functions/create-checkout-session", {
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
    });

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

        <p className="product-secure">
            🔒 Secure payment with Stripe
        </p>

        <p className="product-price-secondary">
        🚚 Estimated delivery: 5–8 business days
        <br />
        Approx. €{product.price.toFixed(2)} • Local taxes calculated at checkout
        </p>
      </div>

      {product.badge && <div className="product-badge">{product.badge}</div>}

      <p className="product-subtitle">{product.subtitle}</p>

      <p className="product-stock">
        ✓ In Stock • Ready to Ship
      </p>

      <p className="product-description">{product.description}</p>

    {details.length > 0 && (
    <div className="product-benefits">
        <h2>Why you'll love it</h2>

        <ul className="product-details">
        {details.map((detail, index) => (
            <li key={index}>{detail}</li>
        ))}
        </ul>
    </div>
    )}

      <div className="product-trust">
            <span>Free Shipping</span>
            <span>Secure Checkout</span>
            <span>30-Day Returns</span>
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
        Buy Now • Secure Checkout
        </button>
      </div>

      <p className="checkout-reassurance">
         🔒 Secure SSL Checkout • Free Shipping • 30-Day Returns
      </p>

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
            Yes. It is designed for quick, everyday use without any complicated setup.
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
            Absolutely. It is made to be used safely as part of your daily pet care routine.
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
    </section>
  );
}