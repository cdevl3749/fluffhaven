import { useState, useEffect } from "react";
import "./App.css";
import { PRODUCTS } from "./data/products";
import ProductPage from "./pages/ProductPage";
import HomeSwitcher from "./home/HomeSwitcher";
import HomeClassic from "./home/HomeClassic";
import PonponPick from "./components/PonponPick";
import PonponRecommends from "./components/PonponRecommends";

// ─────────────────────────────────────────────────────────────
// PRODUCTS
// ─────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────
// PRICE FORMATTER
// ─────────────────────────────────────────────────────────────
function eur(price) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(price);
}

function usd(price) {
  return `$${price.toFixed(2)}`;
}

function eurApprox(price) {
  const eur = (price * 0.92).toFixed(2);
  return `≈ €${eur}`;
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
        <p>Items must be returned in their original, unused condition and packaging.</p>
        <h3>Refunds</h3>
        <p>Refunds are processed to your original payment method within 3–5 business days.</p>
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
// PRODUCT CARD — sans modale dedans
// ─────────────────────────────────────────────────────────────
function ProductCard({ product, onAddToCart, onShowDetails }) {
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

  // Construit l'objet produit enrichi pour la modale
  function handleShowDetails() {

    if (product.slug) {
    window.location.href = `/product/${product.slug}`;
    return;
}
    onShowDetails({
      ...product,
      currentImage: images ? images[currentImg] : null,
      onAddToCart: handleAddToCart,
    });
  }

  return (
    <div
      className="product"
      onClick={handleShowDetails}
      style={{ cursor: "pointer" }}
    >
      {product.badge && <span className="product-badge">{product.badge}</span>}
      <span className="product-stock">Only a few left</span>

      <div className="product-img-zone">
        <div className="product-img-wrap">
          {images && images.length > 0 ? (
            <>
              <img
                src={images[currentImg]}
                alt={product.name}
                className={`product-photo ${product.imageClass || ""}`}
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

        {hasMultipleImages && (
  <>
    {/* Flèches navigation — visibles uniquement sur mobile */}
    <button
      className="img-arrow img-arrow-left"
      onClick={() => setCurrentImg((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
      aria-label="Photo précédente"
    >‹</button>
    <button
      className="img-arrow img-arrow-right"
      onClick={() => setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
      aria-label="Photo suivante"
    >›</button>

    {/* Dots — cachés sur mobile, visibles sur PC */}
    <div className="product-thumbs product-thumbs-desktop">
      {[...new Set(images)].map((src, i) => (
        <button key={i} className={`product-thumb${i === currentImg ? " active" : ""}`} onClick={() => setCurrentImg(i)} aria-label={`Photo ${i + 1}`}>
          <img src={src} alt={`${product.name} ${i + 1}`} />
        </button>
      ))}
    </div>
  </>
)}
      </div>

      <div className="product-body">
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="product-sub">{product.subtitle}</p>
          {/* <p className="product-desc">{product.description}</p> */}

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

        <div className="delivery-badge">
          ✓ Free delivery &nbsp;•&nbsp; Ships in 5–8 business days
        </div>

        <div className="product-footer">
          <div className="product-price">
            <div>
              {usd(product.price)}
              <span> USD</span>
            </div>
            
          </div>
          <div className="product-btns">
            {product.details && (
              <button className="view-details-btn" onClick={handleShowDetails}>View details →</button>
            )}
            <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
          >
            Add to Cart
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────────────────────
const handleShare = (country) => {
  const url = "https://fluffhaven.shop/";
  const text = `Check out this ${country} World Cup dog collection! 🐾⚽`;
  if (navigator.share) {
    navigator.share({ title: text, url: url }).catch(() => {});
  } else {
    navigator.clipboard.writeText(url);
    alert("Link copied! Share it anywhere 🐾");
  }
};
export default function App() {
  const [showCookies, setShowCookies] = useState(
    () => localStorage.getItem("fh_cookies_accepted") !== "true"
  );
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("fluffhaven_cart");
  return savedCart ? JSON.parse(savedCart) : [];
});

useEffect(() => {
  localStorage.setItem("fluffhaven_cart", JSON.stringify(cart));
}, [cart]);
  const [openCart, setOpenCart] = useState(false);
  const [cartNotice, setCartNotice] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [checkoutStatus, setCheckoutStatus] = useState(null);
  const [activePage, setActivePage] = useState(null);

  // ── Bloque le scroll quand une modale est ouverte ──
  useEffect(() => {
    const isOpen = !!activePage || openCart;
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [activePage, openCart]);

  function acceptCookies() {
    localStorage.setItem("fh_cookies_accepted", "true");
    setShowCookies(false);
  }

  function declineCookies() {
    localStorage.setItem("fh_cookies_accepted", "true");
    setShowCookies(false);
  }

  useEffect(() => {
    const KEY = "fh_visit_tracked";
    if (sessionStorage.getItem(KEY)) return;
    fetch("/.netlify/functions/stats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "visit", country: "auto", device: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? "mobile" : "desktop", page: window.location.pathname, source: (() => { const params = new URLSearchParams(window.location.search); const sourceParam = params.get("source"); if (sourceParam) return sourceParam; const ref = document.referrer; if (!ref) return "Direct"; if (ref.includes("reddit.com")) return "Reddit"; if (ref.includes("google.")) return "Google"; if (ref.includes("pinterest.")) return "Pinterest"; if (ref.includes("quora.com")) return "Quora"; if (ref.includes("facebook.com")) return "Facebook"; if (ref.includes("tiktok.com")) return "TikTok"; if (ref.includes("instagram.com")) return "Instagram"; return new URL(ref).hostname; })() }),
    }).then(() => sessionStorage.setItem(KEY, "true")).catch(() => {});
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const checkout = params.get("checkout");
    const openCart = params.get("cart");

    if (openCart === "open") {
      setOpenCart(true);
      setCartNotice(true);

      setTimeout(() => {
        setCartNotice(false);
      }, 3000);

      window.history.replaceState({}, "", window.location.pathname);
    }

    if (checkout === "success" || checkout === "cancel") {
      setCheckoutStatus(checkout);
      if (checkout === "success" && !sessionStorage.getItem("fh_payment_tracked")) {
        fetch("/.netlify/functions/stats", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "payment" }) });
        sessionStorage.setItem("fh_payment_tracked", "true");
      }
      window.history.replaceState({}, "", window.location.pathname);
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
    fetch("/.netlify/functions/stats", { method: "POST", body: JSON.stringify({ type: "click" }) });
    try {
      const response = await fetch("/.netlify/functions/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart.map((item) => ({ priceId: item.priceId, quantity: item.quantity || 1 })) }),
      });
      await fetch("/.netlify/functions/stats", {
        method: "POST",
        body: JSON.stringify({ type: "stripe" }),
      });
      const data = await response.json();

      console.log(data);

      if (!response.ok) {
        alert(data.details || data.error || "Stripe checkout error");
        return;
      }
      if (data.url) window.location.href = data.url;
    } catch (error) {
      alert("Error");
    }
  }

  async function handleBuyNow(item) {
  try {
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
              priceId: item.priceId,
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
    alert("Error");
  }
}

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  const addToCart = (item) => { setCart((prev) => [...prev, item]); setOpenCart(true); };
  const removeFromCart = (i) => setCart((prev) => prev.filter((_, idx) => idx !== i));
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="site">

      {/* CHECKOUT BANNERS */}
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
          <span onClick={() => (window.location.href = "/blog")}>Blog</span>
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
      <HomeSwitcher />
      <HomeClassic>
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-tag">Premium Pet Essentials</div>
          <h1>Happy pets,<br /><em>Happy life.</em></h1>
          <p>
            We don't sell thousands of products.
            <br />
            We select the ones truly worth owning.
          </p>
          <button className="primary-btn" onClick={() => scrollTo("#shop")}>Shop Now <span>→</span></button>
          <div className="hero-trust-line">
            <span>Trusted by pet owners in</span>
            <strong>USA</strong>
            <span>·</span>
            <strong>Canada</strong>
            <span>·</span>
            <strong>UK</strong>
            <span>·</span>
            <strong>Germany</strong>
          </div>
          <div className="hero-proof">
            
            <div>
            <strong>Carefully selected for dogs & cats</strong>
          </div>
          </div>
        </div>
      </section>
      </HomeClassic>

      <PonponPick />

      <PonponRecommends />

     <section className="summer-promo">
        <div className="summer-promo-content">
          <div className="summer-promo-header">
            <span>☀️ SUMMER PET CARE</span>
            <h2>Keep dogs & cats comfortable this summer</h2>
            <p>
              Discover our gentle hypoallergenic shampoos designed for sensitive
              skin and warm weather care.
            </p>
          </div>

          <div className="summer-products">
            <div className="summer-card">
              <img src="/dog_shampoo_bt.webp" alt="Sensitive Skin Dog Shampoo" />
              <h3>Dog Shampoo</h3>
              <p>Hypoallergenic • Sensitive Skin</p>

              <a
                className="summer-btn"
                href="/product/sensitive-skin-dog-shampoo"
              >
                View details →
              </a>
            </div>

            <div className="summer-card">
              <img src="/cat_shampoo_bt.webp" alt="Sensitive Skin Cat Shampoo" />
              <h3>Cat Shampoo</h3>
              <p>Hypoallergenic • Sensitive Skin</p>

              <a
                className="summer-btn"
                href="/product/sensitive-skin-cat-shampoo"
              >
                View details →
              </a>
            </div>
          </div>
        </div>
      </section>

    {/* WORLD CUP 2026 DOG STYLE */}
<section className="world-cup-section">
  <div className="section-label">World Cup 2026</div>
  <h2>Golden Retriever Fan Collection</h2>
  <p className="world-cup-intro">
    Our Golden Retriever mascot is cheering for teams around the world.
    Which team would your dog support?
  </p>
  <div className="world-cup-grid">
    <div className="world-cup-card">
      <img src="/world_cup_usa_2026.webp" alt="USA Golden Retriever Fan Edition" />
      <h3>USA</h3>
      <button onClick={() => handleShare("USA")} className="world-cup-share-btn">
        🔗 Share
      </button>
    </div>
    <div className="world-cup-card">
      <img src="/world_cup_canada_2026.webp" alt="Canada Golden Retriever Fan Edition" />
      <h3>Canada</h3>
      <button onClick={() => handleShare("Canada")} className="world-cup-share-btn">
        🔗 Share
      </button>
    </div>
    <div className="world-cup-card">
      <img src="/world_cup_belgium_2026.webp" alt="Belgium Golden Retriever Fan Edition" />
      <h3>Belgium</h3>
      <button onClick={() => handleShare("Belgium")} className="world-cup-share-btn">
        🔗 Share
      </button>
    </div>
    <div className="world-cup-card">
      <img src="/world_cup_france_2026.webp" alt="France Golden Retriever Fan Edition" />
      <h3>France</h3>
      <button onClick={() => handleShare("France")} className="world-cup-share-btn">
        🔗 Share
      </button>
    </div>
    <div className="world-cup-card">
      <img src="/world_cup_australia_2026.webp" alt="Australia Golden Retriever Fan Edition" />
      <h3>Australia</h3>
      <button onClick={() => handleShare("Australia")} className="world-cup-share-btn">
        🔗 Share
      </button>
    </div>
    <div className="world-cup-card">
      <img src="/world_cup_brazil_2026.webp" alt="Brazil Golden Retriever Fan Edition" />
      <h3>Brazil</h3>
      <button onClick={() => handleShare("Brazil")} className="world-cup-share-btn">
        🔗 Share
      </button>
    </div>
    <div className="world-cup-card">
      <img src="/world_cup_argentina_2026.webp" alt="Argentina Golden Retriever Fan Edition" />
      <h3>Argentina</h3>
      <button onClick={() => handleShare("Argentina")} className="world-cup-share-btn">
        🔗 Share
      </button>
    </div>
    <div className="world-cup-card">
      <img
        src="/world_cup_england_2026.webp"
        alt="England Golden Retriever Fan Edition"
      />
      <h3>England</h3>
      <button onClick={() => handleShare("England")} className="world-cup-share-btn">
        🔗 Share
      </button>
    </div>
  </div>
</section>
      {/* WHY FLUFFHAVEN */}
      <section className="why-fluffhaven">
        <div className="why-card">
          <div className="section-label">Why FluffHaven?</div>

          <h2>Not every pet product makes the cut.</h2>

          <p>
            We only keep products that meet our standards
            for safety, usefulness and value.
            <br />
            If we wouldn't use it with our own pets,
            it doesn't make the cut.
          </p>

          <div className="criteria-grid">
          <div><span className="check-icon">✓</span> Useful in everyday life</div>
          <div><span className="check-icon">✓</span> Positive customer feedback</div>
          <div><span className="check-icon">✓</span> Safe for pets</div>
          <div><span className="check-icon">✓</span> Easy to use</div>
          <div><span className="check-icon">✓</span> Built to last</div>
          <div><span className="check-icon">✓</span> Good value for money</div>
          <div><span className="check-icon">✓</span> Something we'd use with our own pets</div>
        </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust">
        <div className="trust-item"><div className="trust-icon">📦</div><div><strong>Free Shipping</strong><span>Worldwide · 5–8 business days</span></div></div>
        <div className="trust-item"><div className="trust-icon">🔒</div><div><strong>Secure Payment</strong><span>SSL encrypted · Stripe</span></div></div>
        <div className="trust-item"><div className="trust-icon">🛡️</div><div><strong>Premium Quality</strong><span>Vet-approved products</span></div></div>
        <div className="trust-item"><div className="trust-icon">↩️</div><div><strong>Easy Returns</strong><span>14-day no-questions guarantee</span></div></div>
      </section>

      {/* SHOP */}
      <section id="shop" className="section">
        <div className="section-label">Our Collection</div>
        <h2>Best Sellers</h2>
        <div className="shop-tabs">
  <button
    className={activeTab === "all" ? "tab active" : "tab"}
    onClick={() => setActiveTab("all")}
  >
    All
  </button>

  <button
    className={activeTab === "dog" ? "tab active" : "tab"}
    onClick={() => setActiveTab("dog")}
  >
    Dogs
  </button>

  <button
    className={activeTab === "cat" ? "tab active" : "tab"}
    onClick={() => setActiveTab("cat")}
  >
    Cats
  </button>
</div>

        {/* BANNER — No account needed */}
        {(activeTab === "all" || activeTab === "dog" || activeTab === "cat") && (
          <div className="no-account-banner">
            <span className="no-account-icon">🛍️</span>
            <div className="no-account-text">
              <strong>No account needed to order</strong>
              <span>Just add to cart and checkout in seconds — it's that simple.</span>
            </div>
            <span className="no-account-check">✓ Instant checkout</span>
          </div>
        )}

        <div className="products">
          {PRODUCTS.filter(p => activeTab === "all" || p.category === activeTab).map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={addToCart}
            />
          ))}
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
            <div className="about-card"><div className="about-stat">26+</div><div className="about-stat-label">Pet Essentials</div></div>
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
            {
  name: "Emma R.",
  pet: "Golden Retriever owner",
  location: "Texas, USA",
  text: "The paw cleaner is genuinely incredible. My dog used to leave muddy prints everywhere — now it takes 10 seconds after every walk."
},
{
  name: "Lucas M.",
  pet: "Cat & dog dad",
  location: "Ontario, Canada",
  text: "Fast shipping, premium packaging, and the products actually last. I've ordered three times now and every time it's been perfect."
},
{
  name: "Sophie L.",
  pet: "Labrador owner",
  location: "Manchester, UK",
  text: "The Premium Cooling Mat is perfect for hot days! My dog loves it and uses it all the time. It cools instantly and feels really high quality. Super easy to clean too. Highly recommend!"
},
          ].map((r) => (
            <div key={r.name} className="review">
              <div className="review-top">
                <div className="review-avatar-initials">{r.name.split(" ").map(n => n[0]).join("")}</div>
                <div>
                  <h4>{r.name}</h4>
                  <span className="review-pet">
                    {r.pet} · {r.location}
                  </span>
                </div>
              </div>
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
          <p style={{ marginTop: "10px" }}>
            <a
              href="https://www.pinterest.com/0elvujxmqgf3b36bmj26ehuq52e7k1/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
            >
              📌 Pinterest
            </a>
          </p>
        </div>
        <div className="footer-nav">
          <h4>Navigation</h4>
          <span onClick={() => scrollTo("#about")}>About Us</span>
          <span onClick={() => scrollTo("#reviews")}>Reviews</span>
          <span onClick={() => scrollTo("#faq")}>FAQ</span>
          <span onClick={() => (window.location.href = "/blog")}>Blog</span>
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
                        <div>
  <p style={{ margin: 0 }}>
    {usd(item.price)} USD
  </p>

</div>
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

                  {cartNotice && (
                    <div className="cart-notice">
                      <strong>✓ Added to cart</strong>
                      <p>Your item is ready for checkout.</p>
                    </div>
                  )}

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

      {/* COOKIES */}
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