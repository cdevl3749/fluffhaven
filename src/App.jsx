import { useState, useEffect } from "react";
import "./App.css";

// ─────────────────────────────────────────────────────────────
// PRODUCTS
// ─────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 0,
    name: "Dog Paw Cleaner",
    subtitle: "Portable silicone cleaner — S / M / L",
    price: 37.90,
    badge: "Best Seller",
    description:
      "Gentle silicone bristles remove mud & dirt effortlessly after every walk. No more muddy floors. Works for all breeds.",
    variants: [
      {
        color: "#5B9BD5",
        label: "Blue",
        images: ["/nettoyant_bleu.jpg"],
        priceIds: {
          S: "price_1TSLe2Kn0lmTcQ11HUyJFJg2",
          M: "price_1TSLm2Kn0lmTcQ11I0ryLfKG",
          L: "price_1TSLoaKn0lmTcQ11QLJFs164",
        },
      },
      {
        color: "#F4845F",
        label: "Orange",
        images: ["/nettoyant_orange.jpg"],
        priceIds: {
          S: "price_1TSLu2Kn0lmTcQ11mRvFvCU7",
          M: "price_1TSLvRKn0lmTcQ110ovh6Wgw",
          L: "price_1TSLwpKn0lmTcQ114MQiZ8Ow",
        },
      },
    ],
    sizes: ["S", "M", "L"],
  },
  {
    id: 1,
    name: "Portable Dog Water Bottle",
    subtitle: "Foldable silicone bowl-lid · 580 ml",
    price: 22.90,
    badge: "New",
    description:
      "Travel water bottle for dogs with a foldable lid that doubles as a drinking bowl. Leak-proof, BPA-free silicone, 580 ml. Perfect for hikes, walks & road trips.",
    variants: [
      { color: "#7DB87D", label: "Green",  images: ["/sac_vert.jpg"],    priceId: "price_1TSM4mKn0lmTcQ11yMEtLXIz" },
      { color: "#F4845F", label: "Orange", images: ["/sac_orange.jpg"],  priceId: "price_1TSM5qKn0lmTcQ11zG9ePOa5" },
      { color: "#888888", label: "Grey",   images: ["/sac_gris.jpg"],    priceId: "price_1TSM7EKn0lmTcQ11aw43pEVb" },
    ],
  },
  {
    id: 2,
    name: "Premium Cooling Mat",
    subtitle: "Self-cooling silk · waterproof base · L 70×55 cm",
    price: 29.90,
    badge: "Summer",
    priceId: "price_1TSMB9Kn0lmTcQ11az73rxbZ",
    images: ["/tapis_rafraichissant.jpg", "/tapis_rafraichissant_2.jpg"],
    description: "Self-cooling silk surface keeps your pet comfortable all summer. Waterproof & non-slip bottom. Machine washable. Perfect for dogs & cats.",
  },
  {
    id: 3,
    name: "3-in-1 Steam Grooming Brush",
    subtitle: "Electric spray & massage brush · USB rechargeable",
    price: 34.90,
    badge: "Popular",
    priceId: "price_1TSMRBKn0lmTcQ117Az7zJwR",
    images: ["/peigne_brosse.jpg", "/peigne_brosse_2.jpg", "/peigne_brosse_3.jpg"],
    description: "One-click steam & water spray, electric massage, and detangling bristles all in one. USB rechargeable. Helps reduce flying hair.",
  },
  {
    id: 4,
    name: "Interactive Smart Cat Ball",
    subtitle: "Auto rolling toy · 2 speeds · USB rechargeable",
    price: 29.90,
    badge: "New",
    priceId: "price_1TSMUsKn0lmTcQ11sXCLEtkj",
    images: ["/balle_chat.jpg", "/balle_chat2.jpg", "/balle_chat3.jpg"],
    description: "Automatic interactive ball toy for indoor cats. Features 2 speed modes, feather tail and auto shut-off. Keeps cats active and entertained.",
  },
  {
    id: 5,
    name: "L-Shape Cat Scratcher",
    subtitle: "48 cm tall · premium corrugated cardboard · ball toy",
    price: 39.90,
    badge: "Popular",
    priceId: "price_1TSMYPKn0lmTcQ11bejbHtc0",
    images: ["/griffoir_chat.jpg", "/griffoir_chat2.jpg", "/griffoir_chat3.jpg"],
    description: "Premium L-shaped cat scratcher made from high-density corrugated cardboard. Perfect for stretching, scratching and protecting your furniture.",
  },
  {
    id: 6,
    name: "Feather Wand Cat Toy Set",
    subtitle: "2 retractable wands · 10 feather & teaser refills",
    price: 21.90,
    badge: "Fun",
    priceId: "price_1TSMbNKn0lmTcQ11ADoo7Dqy",
    images: ["/plume_chat.jpg", "/plume_chat2.jpg", "/plume_chat3.jpg"],
    description: "12-piece interactive feather toy set for cats & kittens. Includes retractable wands and colourful feather attachments for daily play.",
  },
  {
    id: 7,
    name: "Premium Cat Play Tunnel",
    subtitle: "Foldable linen tunnel · 30×70 cm · pompom ball included",
    price: 25.90,
    badge: null,
    priceId: "price_1TSMeWKn0lmTcQ11TOytJsNX",
    images: ["/tunnel_chat.jpg", "/tunnel_chat2.jpg", "/tunnel_chat3.jpg"],
    description: "Collapsible cat tunnel made from durable faux-linen fabric. Includes a hanging pompom ball inside. Ideal for hiding, chasing and exploring.",
  },
];

// ─────────────────────────────────────────────────────────────
// PRICE FORMATTER
// ─────────────────────────────────────────────────────────────
function eur(price) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(price);
}

// ─────────────────────────────────────────────────────────────
// MODAL PAGES — Privacy Policy / Terms / Returns
// ─────────────────────────────────────────────────────────────
const PAGES = {
  privacy: {
    title: "Privacy Policy",
    content: (
      <>
        <p><em>Last updated: May 1, 2026</em></p>
        <h3>1. Information We Collect</h3>
        <p>When you place an order, we collect your name, email address, shipping address and payment information through our payment provider Stripe. We never store card details on our servers.</p>
        <h3>2. How We Use Your Information</h3>
        <p>Your data is used solely to process and fulfil your order, send you order confirmation and shipping updates, and respond to customer service requests.</p>
        <h3>3. Payment Processing</h3>
        <p>All payments are processed securely by Stripe (stripe.com), which is PCI-DSS compliant. We do not store any payment information.</p>
        <h3>4. Cookies</h3>
        <p>We use essential cookies to improve your browsing experience. No tracking or advertising cookies are used without your consent.</p>
        <h3>5. Your Rights (GDPR)</h3>
        <p>You have the right to access, correct or delete your personal data at any time. Contact us at <strong>contact@fluffhaven.shop</strong>.</p>
        <h3>6. Contact</h3>
        <p>📧 contact@fluffhaven.shop · 🌐 fluffhaven.shop</p>
      </>
    ),
  },
  terms: {
    title: "Terms of Service",
    content: (
      <>
        <p><em>Last updated: May 1, 2026</em></p>
        <h3>1. General</h3>
        <p>By placing an order on fluffhaven.shop, you agree to these Terms of Service. All orders are subject to product availability.</p>
        <h3>2. Pricing</h3>
        <p>All prices are listed in Euros (€) and include applicable taxes. We reserve the right to change prices at any time without prior notice.</p>
        <h3>3. Payment</h3>
        <p>Payments are processed securely via Stripe. We accept Visa, Mastercard and other major credit cards. Your payment is encrypted and secure.</p>
        <h3>4. Shipping</h3>
        <p>We offer free worldwide shipping on all orders. Delivery takes 5–8 business days. A tracking link will be sent to your email once your order ships.</p>
        <h3>5. Returns</h3>
        <p>You have 14 days from receipt to return any item in its original condition. Contact us at contact@fluffhaven.shop to initiate a return.</p>
        <h3>6. Liability</h3>
        <p>FluffHaven is not liable for any indirect, incidental or consequential damages arising from the use of our products. Products are intended for pets under supervision.</p>
        <h3>7. Contact</h3>
        <p>📧 contact@fluffhaven.shop · 🌐 fluffhaven.shop</p>
      </>
    ),
  },
  returns: {
    title: "Returns & Refunds",
    content: (
      <>
        <p><em>Last updated: May 1, 2026</em></p>
        <h3>14-Day Return Guarantee</h3>
        <p>We want you to be completely happy with your order. If you're not satisfied for any reason, you have <strong>14 days</strong> from the date of receipt to return your item.</p>
        <h3>How to Return</h3>
        <p>1. Email us at <strong>contact@fluffhaven.shop</strong> with your order number and reason for return.<br />
        2. We'll send you return instructions within 24 hours.<br />
        3. Once we receive your item in its original condition, we'll process your refund within 3–5 business days.</p>
        <h3>Conditions</h3>
        <p>Items must be returned in their original, unused condition and packaging. We do not accept returns for items that have been damaged through misuse.</p>
        <h3>Refunds</h3>
        <p>Refunds are processed to your original payment method. You'll receive a confirmation email once your refund has been issued.</p>
        <h3>Questions?</h3>
        <p>📧 contact@fluffhaven.shop</p>
      </>
    ),
  },
};

function PageModal({ page, onClose }) {
  const data = PAGES[page];
  if (!data) return null;

  return (
    <div className="page-modal-overlay" onClick={onClose}>
      <div className="page-modal" onClick={(e) => e.stopPropagation()}>
        <div className="page-modal-header">
          <h2>{data.title}</h2>
          <button className="cart-close" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="page-modal-body">{data.content}</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// PRODUCT CARD
// ─────────────────────────────────────────────────────────────
function ProductCard({ product, onAddToCart }) {
  const hasVariants = Boolean(product.variants);
  const [activeVariant, setActiveVariant] = useState(0);
  const [currentImg, setCurrentImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);
  const [sizeError, setSizeError] = useState(false);

  const variant = hasVariants ? product.variants[activeVariant] : null;
  const images = variant?.images ?? product.images ?? null;
  const hasMultipleImages = images && images.length > 1;

  function handleVariantChange(i) {
    setActiveVariant(i);
    setCurrentImg(0);
    setSizeError(false);
  }

  function handleAddToCart() {
    if (hasVariants && product.sizes && !selectedSize) { setSizeError(true); return; }
    setSizeError(false);

    let priceId = null;
    if (product.variants) {
      const v = product.variants[activeVariant];
      priceId = product.sizes ? v.priceIds[selectedSize] : v.priceId;
    } else {
      priceId = product.priceId;
    }

    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      priceId,
      image: images ? images[currentImg] : null,
      subtitle: variant
        ? variant.label + (selectedSize ? ` · Size ${selectedSize}` : "")
        : product.subtitle,
    });
  }

  return (
    <div className="product">
      {product.badge && <span className="product-badge">{product.badge}</span>}

      <div className="product-img-zone">
        <div className="product-img-wrap">
          {images && images.length > 0 ? (
            <>
              <img
                src={images[currentImg]}
                alt={product.name}
                className="product-photo"
                onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
              />
              <div className="product-emoji-fallback" style={{ display: "none" }}>🐾</div>
            </>
          ) : (
            <div className="product-emoji-display" style={{ background: `${product.color}22` }}>
              <span>{product.emoji}</span>
            </div>
          )}
        </div>

        {hasMultipleImages && !hasVariants && (
          <div className="product-thumbs">
            {images.map((src, i) => (
              <button key={i} className={`product-thumb${i === currentImg ? " active" : ""}`} onClick={() => setCurrentImg(i)} aria-label={`Photo ${i + 1}`}>
                <img src={src} alt={`${product.name} ${i + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="product-body">
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="product-sub">{product.subtitle}</p>
          <p className="product-desc">{product.description}</p>

          {hasVariants && (
            <div className="variant-section">
              <p className="variant-label">Colour: <strong>{product.variants[activeVariant].label}</strong></p>
              <div className="color-swatches">
                {product.variants.map((v, i) => (
                  <button key={v.label} className={`color-swatch${i === activeVariant ? " active" : ""}`} style={{ "--swatch-color": v.color }} onClick={() => handleVariantChange(i)} title={v.label} aria-label={v.label} />
                ))}
              </div>
            </div>
          )}

          {product.sizes && (
            <div className="variant-section">
              <p className={`variant-label${sizeError ? " has-error" : ""}`}>
                {sizeError ? <>Size: <strong className="err-msg">Please choose a size</strong></> : <>Size: <strong>{selectedSize}</strong></>}
              </p>
              <div className="size-buttons">
                {product.sizes.map((s) => (
                  <button key={s} className={`size-btn${selectedSize === s ? " active" : ""}`} onClick={() => { setSelectedSize(s); setSizeError(false); }}>{s}</button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="delivery-badge">🚚 Free delivery · 5–8 business days</div>
        <div className="product-footer">
          <span className="product-price">{eur(product.price)}</span>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────────────────────
export default function App() {
  // ── FIX COOKIES : on lit localStorage au démarrage ──
  const [showCookies, setShowCookies] = useState(
    () => localStorage.getItem("fh_cookies_accepted") !== "true"
  );
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const [checkoutStatus, setCheckoutStatus] = useState(null);
  const [activePage, setActivePage] = useState(null); // "privacy" | "terms" | "returns"

  // ── FIX COOKIES : on sauvegarde dans localStorage ──
  function acceptCookies() {
    localStorage.setItem("fh_cookies_accepted", "true");
    setShowCookies(false);
  }

  function declineCookies() {
    localStorage.setItem("fh_cookies_accepted", "true"); // on cache la bannière dans les deux cas
    setShowCookies(false);
  }

  // ── FIX CHECKOUT STATUS : auto-dismiss après 6 secondes ──
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const checkout = params.get("checkout");
    if (checkout === "success" || checkout === "cancel") {
      setCheckoutStatus(checkout);
      // Nettoie l'URL immédiatement
      window.history.replaceState({}, "", window.location.pathname);
      // ── FIX : auto-dismiss après 6 secondes ──
      const timer = setTimeout(() => setCheckoutStatus(null), 6000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  async function handleCheckout() {
    try {
      const response = await fetch("/.netlify/functions/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map((item) => ({ priceId: item.priceId, quantity: item.quantity || 1 })),
        }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Checkout error. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  }

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  const addToCart = (item) => { setCart((prev) => [...prev, item]); setOpenCart(true); };
  const removeFromCart = (i) => setCart((prev) => prev.filter((_, idx) => idx !== i));
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="site">

      {/* ── CHECKOUT BANNERS ── */}
      {checkoutStatus === "success" && (
        <div className="checkout-banner success">
          <strong>🎉 Thank you for your order!</strong>
          <span>Your payment was successful. We'll prepare your FluffHaven package soon. Check your email for confirmation.</span>
          <button onClick={() => setCheckoutStatus(null)} aria-label="Close">×</button>
        </div>
      )}
      {checkoutStatus === "cancel" && (
        <div className="checkout-banner cancel">
          <strong>Checkout cancelled</strong>
          <span>No worries — your cart is still here whenever you're ready.</span>
          <button onClick={() => setCheckoutStatus(null)} aria-label="Close">×</button>
        </div>
      )}

      {/* TOP BAR */}
      <div className="top-bar">
        <span>✦</span> Free worldwide shipping • 5–8 business days <span>✦</span>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="logo" onClick={() => scrollTo("#home")}>
          <svg className="logo-paw" viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="18" cy="18" r="8" /><circle cx="32" cy="12" r="8" />
            <circle cx="46" cy="18" r="8" /><circle cx="22" cy="34" r="7" />
            <path d="M32 28c-12 0-21 9-21 18 0 7 6 11 13 8 4-2 6-3 8-3s4 1 8 3c7 3 13-1 13-8 0-9-9-18-21-18z" />
          </svg>
          FluffHaven
        </div>
        <nav>
          <span onClick={() => scrollTo("#home")}>Home</span>
          <span onClick={() => scrollTo("#shop")}>Shop</span>
          <span onClick={() => scrollTo("#about")}>About</span>
          <span onClick={() => scrollTo("#reviews")}>Reviews</span>
          <span onClick={() => scrollTo("#faq")}>FAQ</span>
        </nav>
        <button className="cart-btn" onClick={() => setOpenCart(true)} aria-label="Open cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
          </svg>
          {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </button>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-tag">🐾 Premium Pet Essentials</div>
          <h1>Happy pets,<br /><em>Happy life.</em></h1>
          <p>Carefully curated essentials for dogs & cats.<br />Free shipping · Secure checkout · Easy returns.</p>
          <button className="primary-btn" onClick={() => scrollTo("#shop")}>Shop Now <span>→</span></button>
          <div className="hero-proof">
            <div className="avatars"><span>👩</span><span>👨</span><span>👩‍🦱</span></div>
            <div><strong>100+ happy pet parents</strong><div className="stars">★★★★★</div></div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust">
        <div className="trust-item"><div className="trust-icon">🚚</div><div><strong>Free Shipping</strong><span>Worldwide · 5–8 business days</span></div></div>
        <div className="trust-item"><div className="trust-icon">🔒</div><div><strong>Secure Payment</strong><span>SSL encrypted · Stripe</span></div></div>
        <div className="trust-item"><div className="trust-icon">✅</div><div><strong>Premium Quality</strong><span>Vet-approved products</span></div></div>
        <div className="trust-item"><div className="trust-icon">↩️</div><div><strong>Easy Returns</strong><span>14-day no-questions guarantee</span></div></div>
      </section>

      {/* SHOP */}
      <section id="shop" className="section">
        <div className="section-label">Our Collection</div>
        <h2>Best Sellers</h2>
        <div className="products">
          {PRODUCTS.map((p) => <ProductCard key={p.id} product={p} onAddToCart={addToCart} />)}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="about-inner">
          <div className="about-text">
            <div className="section-label">Our Story</div>
            <h2 style={{ textAlign: "left" }}>Designed for<br />comfort & simplicity</h2>
            <p>FluffHaven brings you carefully selected pet products designed to improve daily life. No accounts, no complexity — just fast checkout, free delivery and trusted quality for the pets you love.</p>
            <ul className="about-list">
              <li>✦ Vet-approved product selection</li>
              <li>✦ No account required to order</li>
              <li>✦ 14-day hassle-free returns</li>
              <li>✦ Ships worldwide, always free</li>
            </ul>
          </div>
          <div className="about-visual">
            <div className="about-card"><div className="about-stat">100+</div><div className="about-stat-label">Happy Pet Parents</div></div>
            <div className="about-card"><div className="about-stat">4.9★</div><div className="about-stat-label">Average Rating</div></div>
            <div className="about-card"><div className="about-stat">12+</div><div className="about-stat-label">Products Curated</div></div>
            <div className="about-card"><div className="about-stat">14</div><div className="about-stat-label">Day Return Policy</div></div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="section reviews-section">
        <div className="section-label">Testimonials</div>
        <h2>What pet parents say</h2>
        <div className="reviews">
          {[
            { name: "Emma R.",   pet: "Golden Retriever owner", text: "The paw cleaner is genuinely incredible. My dog used to leave muddy prints everywhere — now it takes 10 seconds after every walk."},
            { name: "Lucas M.", pet: "Cat & dog dad",           text: "Fast shipping, premium packaging, and the products actually last. I've ordered three times now and every time it's been perfect."},
            { name: "Sophie L.", pet: "Labrador owner",         text: "The Premium Cooling Mat is perfect for hot days! My dog loves it and uses it all the time. It cools instantly and feels really high quality. Super easy to clean too. Highly recommend!" },
          ].map((r) => (
            <div key={r.name} className="review">
              <div className="review-top"><div className="review-avatar-initials">
                {r.name.split(" ").map(n => n[0]).join("")}
              </div><div><h4>{r.name}</h4><span className="review-pet">{r.pet}</span></div></div>
              <div className="stars">★★★★★</div>
              <p>"{r.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section faq-section">
        <div className="section-label">Support</div>
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {[
            ["Do I need an account to order?", "No, you can order instantly without creating an account. Just add to cart and checkout with Stripe."],
            ["Is shipping really free?", "Yes, we offer free shipping worldwide on all orders, always — no minimum spend required."],
            ["Where do I enter my address?", "Your delivery address is entered securely during Stripe checkout. We never store payment details."],
            ["How long does delivery take?", "Delivery usually takes 5–8 business days worldwide. You'll receive a tracking link by email."],
            ["Can I return my order?", "Absolutely. You have a 14-day return guarantee. Contact us and we'll arrange a free return."],
          ].map(([q, a]) => (
            <details key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <circle cx="18" cy="18" r="8" /><circle cx="32" cy="12" r="8" />
              <circle cx="46" cy="18" r="8" /><circle cx="22" cy="34" r="7" />
              <path d="M32 28c-12 0-21 9-21 18 0 7 6 11 13 8 4-2 6-3 8-3s4 1 8 3c7 3 13-1 13-8 0-9-9-18-21-18z" />
            </svg>
            FluffHaven
          </div>
          <p>Premium essentials for happy pets.<br />Free shipping · Always.</p>
          <p style={{ marginTop: "10px" }}>
            <a href="mailto:contact@fluffhaven.shop" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
              📧 contact@fluffhaven.shop
            </a>
          </p>
        </div>
        <div className="footer-nav">
          <h4>Navigation</h4>
          <span onClick={() => scrollTo("#about")}>About Us</span>
          <span onClick={() => scrollTo("#reviews")}>Reviews</span>
          <span onClick={() => scrollTo("#faq")}>FAQ</span>
          {/* ── PAGES LÉGALES — ouvrent une modale ── */}
          <span onClick={() => setActivePage("privacy")}>Privacy Policy</span>
          <span onClick={() => setActivePage("terms")}>Terms of Service</span>
          <span onClick={() => setActivePage("returns")}>Returns</span>
        </div>
        <div className="footer-trust">
          <h4>Secure &amp; Trusted</h4>
          <div className="trust-badges">
            <div className="trust-badge"><span>💳</span> Visa / Mastercard</div>
            <div className="trust-badge"><span>🔒</span> SSL Encrypted</div>
            <div className="trust-badge"><span>⚡</span> Powered by Stripe</div>
            <div className="trust-badge"><span>↩️</span> 14-Day Returns</div>
          </div>
        </div>
        <div className="footer-copy">© 2026 FluffHaven. All rights reserved.</div>
      </footer>

      {/* CART DRAWER */}
      {openCart && (
        <div className="cart-overlay" onClick={() => setOpenCart(false)}>
          <aside className="cart-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <div>
                <h3>Your Cart</h3>
                <p>{cart.length === 0 ? "Empty" : `${cart.length} item${cart.length > 1 ? "s" : ""}`}</p>
              </div>
              <button className="cart-close" onClick={() => setOpenCart(false)} aria-label="Close cart">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            {cart.length === 0 ? (
              <div className="empty-cart">
                <span>🛒</span>
                <p>Your cart is empty.</p>
                <button className="continue-shopping" onClick={() => { setOpenCart(false); scrollTo("#shop"); }}>Browse products</button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item, i) => (
                    <div key={i} className="cart-item">
                      <div className="cart-item-icon">
                        {item.image
                          ? <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }} />
                          : item.emoji || "🐾"
                        }
                      </div>
                      <div className="cart-item-info">
                        <strong>{item.name}</strong>
                        <span>{item.subtitle}</span>
                        <p>{eur(item.price)}</p>
                      </div>
                      <button className="cart-item-remove" onClick={() => removeFromCart(i)} aria-label="Remove">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-summary">
                  <div className="cart-total"><span>Subtotal</span><strong>{eur(total)}</strong></div>
                  <p className="cart-free-ship">✓ Free shipping included</p>
                  <div className="cart-security">
                    <span>🔒 SSL Secure</span>
                    <span>💳 Stripe</span>
                    <span>↩️ 14-day returns</span>
                  </div>
                  <button className="checkout-btn" onClick={handleCheckout}>Continue to Checkout →</button>
                  <button className="continue-shopping" onClick={() => setOpenCart(false)}>Continue shopping</button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {/* MODAL PAGES LÉGALES */}
      {activePage && <PageModal page={activePage} onClose={() => setActivePage(null)} />}

      {/* BACK TO TOP */}
      {showBackTop && (
        <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">↑</button>
      )}

      {/* COOKIES — FIX : sauvegardé dans localStorage */}
      {showCookies && (
        <div className="cookie">
          <p>🍪 We use cookies to improve your shopping experience.</p>
          <div className="cookie-actions">
            <button onClick={declineCookies}>Decline</button>
            <button className="accept" onClick={acceptCookies}>Accept All</button>
          </div>
        </div>
      )}

    </div>
  );
}