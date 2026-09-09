import { useEffect, useState } from "react";
import "./ProductPage.css";
import "../App.css";
import { PRODUCTS } from "../data/products";

import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductReviews from "../components/ProductReviews";
import ProductSEO from "../components/ProductSEO";
import RelatedProducts from "../components/RelatedProducts";

export default function ProductPage({ onAddToCart }) {
  const slug = window.location.pathname.replace("/product/", "");

  const product = PRODUCTS.find((item) => item.slug === slug);

  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("fluffhaven_cart");
  return savedCart ? JSON.parse(savedCart) : [];
});

const [openCart, setOpenCart] = useState(false);

 useEffect(() => {
  if (!product) return;

  fetch("/.netlify/functions/stats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "productView",
      product: product.slug,
      productName: product.name,
    }),
  }).catch(() => {});
}, [product]);

  useEffect(() => {
  if (!product) return;

  const startTime = Date.now();
  let sent = false;

  const sendProductTime = () => {
    if (sent) return;

    const duration = Math.round((Date.now() - startTime) / 1000);

    if (duration < 1 || duration > 1800) return;

    sent = true;

    const data = JSON.stringify({
      type: "productTime",
      productName: product.name,
      duration,
    });

    navigator.sendBeacon(
      "/.netlify/functions/stats",
      new Blob([data], { type: "application/json" })
    );
  };

  window.addEventListener("pagehide", sendProductTime);

  return () => {
    window.removeEventListener("pagehide", sendProductTime);
    sendProductTime();
  };
}, [product]);

  function handleAddToCart(product) {
  const savedCart = localStorage.getItem("fluffhaven_cart");
  const currentCart = savedCart ? JSON.parse(savedCart) : [];

  const cartProduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    priceId: product.priceId,
    image: product.images?.[0],
    subtitle: product.subtitle,
  };

  localStorage.setItem(
  "fluffhaven_cart",
      JSON.stringify([...currentCart, cartProduct])
    );

    fetch("/.netlify/functions/stats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "addToCart" }),
    }).catch(() => {});

    setCart([...currentCart, cartProduct]);
    setOpenCart(true);
}

const removeFromCart = (i) => {
  const newCart = cart.filter((_, idx) => idx !== i);
  setCart(newCart);
  localStorage.setItem("fluffhaven_cart", JSON.stringify(newCart));
};

const total = cart.reduce((acc, item) => acc + item.price, 0);

const usd = (price) => `$${price.toFixed(2)}`;

async function handleCheckout() {
  fetch("/.netlify/functions/stats", {
    method: "POST",
    body: JSON.stringify({ type: "click" }),
  });

  try {
    const response = await fetch(
      "/.netlify/functions/create-checkout-session",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map((item) => ({
            priceId: item.priceId,
            quantity: item.quantity || 1,
          })),
        }),
      }
    );

    await fetch("/.netlify/functions/stats", {
      method: "POST",
      body: JSON.stringify({ type: "stripe" }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.details || data.error || "Stripe checkout error");
      return;
    }

    if (data.url) {
      window.location.href = data.url;
    }
  } catch (error) {
    alert("Error");
  }
}

  if (!product) {
    return (
      <main className="product-page">
        <h1>Product not found</h1>
        <p>This product page does not exist yet.</p>
      </main>
    );
  }

  return (
    <>
      <ProductSEO product={product} />

      <div className="product-back-wrapper">
        <a href="/#shop" className="product-back-link">
          ← Back to Shop
        </a>
      </div>

      <main className="product-page">

        <div>
            <ProductGallery product={product} />
        </div>

        <div>
            <ProductInfo
            product={product}
            onAddToCart={handleAddToCart}
            />
        </div>

        </main>

      <ProductReviews product={product} />

      <RelatedProducts product={product} />

      {/* CART DRAWER */}
{openCart && (
  <div className="cart-overlay" onClick={() => setOpenCart(false)}>
    <aside className="cart-panel" onClick={(e) => e.stopPropagation()}>
      <div className="cart-header">
        <div>
          <h3>Your Cart</h3>
          <p>
            {cart.length === 0
              ? "Empty"
              : `${cart.length} item${cart.length > 1 ? "s" : ""}`}
          </p>
        </div>

        <button
          className="cart-close"
          onClick={() => setOpenCart(false)}
          aria-label="Close cart"
        >
          ✕
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <span>🛒</span>
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, i) => (
              <div key={i} className="cart-item">
                <div className="cart-item-icon">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  ) : (
                    "🐾"
                  )}
                </div>

                <div className="cart-item-info">
                  <strong>{item.name}</strong>
                  <span>{item.subtitle}</span>
                  <p style={{ margin: 0 }}>{usd(item.price)} USD</p>
                </div>

                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(i)}
                  aria-label="Remove"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-total">
              <div className="cart-summary-label">
                <small>Order Summary</small>
                <span>Subtotal</span>
              </div>

              <div style={{ textAlign: "right" }}>
                <span className="cart-subtotal-value">{usd(total)}</span>
              </div>
            </div>

            <p className="cart-free-ship">✓ Free shipping included</p>

            {total >= 49 && (
              <p className="cart-free-ship">
                🎁 FREE Ponpon Mug included
              </p>
            )}

            <p className="cart-free-ship">✓ Secure worldwide checkout</p>

            <div className="cart-final-total">
              <span>Total</span>
              <strong>{usd(total)} USD</strong>
            </div>

            <div className="cart-security">
              <span>🔒 SSL Secure</span>
              <span>💳 Stripe</span>
              <span>↩️ 14-day returns</span>
            </div>

            <div className="cart-actions-sticky">
              <button className="checkout-btn" onClick={handleCheckout}>
                Continue to Checkout →
              </button>

              <button
                className="continue-shopping"
                onClick={() => setOpenCart(false)}
              >
                Continue shopping
              </button>
            </div>
          </div>
        </>
      )}
    </aside>
  </div>
)}
{!openCart && cart.length > 0 && (
  <button
    className="floating-cart"
    onClick={() => setOpenCart(true)}
    aria-label="Open cart"
  >
    🛒
    <span>{cart.length}</span>
  </button>
)}
    </>
  );
}