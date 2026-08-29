import { useState, useEffect } from "react";
import "./App.css";
import { PRODUCTS } from "./data/products";
import ProductPage from "./pages/ProductPage";
import HomeSwitcher from "./home/HomeSwitcher";
import HomeClassic from "./home/HomeClassic";
import PonponPick from "./components/PonponPick";
import PonponRecommends from "./components/PonponRecommends";
import BandanaPopup from "./components/BandanaPopup";

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
        <p>All prices are listed in US Dollars (USD). Any applicable taxes are calculated during checkout where required. We reserve the right to change prices at any time without prior notice.</p>
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
        <p>
          1. Email us at <strong>contact@fluffhaven.shop</strong> with your order number and reason for return.<br />
          2. We'll send you free return instructions within 24 hours.<br />
          3. Return shipping is free for eligible returns.<br />
          4. Once we receive your item in its original condition, we'll process your refund within 3–5 business days.
        </p>
        <h3>Conditions</h3>
        <p>
          Items must be returned in their original, unused condition and packaging. 
          Free return shipping applies to eligible returns initiated within 14 days of receipt.
        </p>
        <h3>Refunds</h3>
        <p>Refunds are processed to your original payment method within 3–5 business days.</p>
        <h3>Questions?</h3>
        <p>📧 contact@fluffhaven.shop</p>
      </>
    ),
  },
    contact: {
    title: "Contact Us",
    content: (
      <>
        <p>
          Have a question about an order, one of our products, shipping or returns?
          We're happy to help.
        </p>

        <h3>Customer Support</h3>

        <p>
          You can contact us anytime at:
        </p>

        <p>
          <a
            href="mailto:contact@fluffhaven.shop"
            style={{
              fontWeight: "700",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            📧 contact@fluffhaven.shop
          </a>
        </p>

        <p>
          We usually reply within 1–2 business days.
        </p>

        <h3>FluffHaven</h3>

        <p>
          Premium essentials for happy pets. 🐾
        </p>
      </>
    ),
  },
  shipping: {
  title: "Shipping Policy",
  content: (
    <>
      <p><em>Last updated: August 19, 2026</em></p>

      <h3>Free Worldwide Shipping</h3>
      <p>
        FluffHaven offers free standard shipping on all orders with no minimum
        purchase required.
      </p>

      <h3>Delivery Time</h3>
      <p>
        Estimated delivery is 5–8 business days after your order has been
        processed and shipped.
      </p>

      <h3>Order Tracking</h3>
      <p>
        When tracking information is available, a tracking link will be sent
        to the email address provided during checkout.
      </p>

      <h3>Delivery Address</h3>
      <p>
        Please make sure your shipping address is complete and accurate when
        placing your order through our secure Stripe checkout.
      </p>

      <h3>Questions?</h3>
      <p>
        For questions about your shipment, contact us at
        <strong> contact@fluffhaven.shop</strong>.
      </p>
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
            <div className="product-rating">
              <span className="product-stars">★★★★★</span>
              <span>Loved by Ponpon</span>
            </div>
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

        <div className="product-trust-line">
          🔒 Secure checkout · ↩ 14-day returns
        </div>

        <div className="product-footer">
          <div className="product-price">
            <div>
              {usd(product.price)}
              <span> USD</span>
            </div>

          <div
            style={{
              minHeight: "28px",
              marginTop: "8px",
              fontSize: "14px",
              fontWeight: "700",
              color: "#d97706",
            }}
          >
            {product.promo && (
              <>🏷️ {product.promo} — Code: {product.promoCode}</>
            )}
          </div>

          </div>
          <div className="product-btns">
            {product.details && (
              <button className="view-details-btn" onClick={handleShowDetails}>View details →</button>
            )}
            <button className="shop-add-cart-btn"
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

function productHasSeason(product, season) {
  if (Array.isArray(product.seasons)) {
    return product.seasons.includes(season);
  }

  return product.season === season;
}
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
  const [petFilter, setPetFilter] = useState("all");
  const [seasonFilter, setSeasonFilter] = useState("all");
  const [productTypeFilter, setProductTypeFilter] = useState("all");
  const featuredSummerProduct = PRODUCTS.find(
  (product) => product.slug === "premium-floating-rope-ball"
);

const featuredSummerImages = [
  "/premium-floating-rope-ball-main.webp",
  "/premium-floating-rope-ball-beach.webp",
  "/premium-floating-rope-ball-details.webp",
  "/premium-floating-rope-ball-pool.webp",
  "/premium-floating-rope-ball-underwater.webp",
];

const [featuredSummerImage, setFeaturedSummerImage] = useState(
  featuredSummerImages[0]
);
 const visibleProducts = PRODUCTS.filter(
  (product) => !product.hidden
);

const totalProducts = visibleProducts.length;

const dogCount = visibleProducts.filter(
  (product) => product.category === "dog"
).length;

const catCount = visibleProducts.filter(
  (product) => product.category === "cat"
).length;

const summerCount = PRODUCTS.filter(
  (product) => productHasSeason(product, "summer")
).length;

const autumnCount = PRODUCTS.filter(
  (product) => productHasSeason(product, "autumn")
).length;

const winterCount = PRODUCTS.filter(
  (product) => productHasSeason(product, "winter")
).length;
const filteredProducts = PRODUCTS.filter((product) => {
  // Les produits cachés restent absents du Shop classique,
  // sauf lorsqu'on consulte leur saison.
  if (product.hidden) {
    const seasonalFilterActive =
      seasonFilter === "summer" ||
      seasonFilter === "autumn" ||
      seasonFilter === "winter";

    if (!seasonalFilterActive) {
      return false;
    }

    if (!productHasSeason(product, seasonFilter)) {
      return false;
    }
  }

  // Filtre animal
  if (
    petFilter !== "all" &&
    product.category !== petFilter
  ) {
    return false;
  }

  // Filtre saison
  if (
    seasonFilter !== "all" &&
    !productHasSeason(product, seasonFilter)
  ) {
    return false;
  }

  // Filtre type de produit
if (
  productTypeFilter !== "all" &&
  product.productType !== productTypeFilter
) {
  return false;
}

    return true;
}).sort((a, b) => {
  // Quand "All Seasons" est sélectionné,
  // on garde exactement l'ordre actuel du catalogue.
  if (seasonFilter === "all") {
    return 0;
  }

  // Nombre de saisons attribuées à chaque produit.
  // Plus le nombre est petit, plus le produit est
  // spécifique à la saison sélectionnée.
  const aSeasonCount = Array.isArray(a.seasons)
    ? a.seasons.length
    : a.season
    ? 1
    : 99;

  const bSeasonCount = Array.isArray(b.seasons)
    ? b.seasons.length
    : b.season
    ? 1
    : 99;

  return aSeasonCount - bSeasonCount;
});
  const [checkoutStatus, setCheckoutStatus] = useState(null);
  const [activePage, setActivePage] = useState(null);

  useEffect(() => {
  const path = window.location.pathname.replace(/\/+$/, "");

  if (path === "/returns") {
    setActivePage("returns");
  }
}, []);

  useEffect(() => {
  if (window.location.hash === "#shop") {
    setTimeout(() => {
      document.getElementById("shop")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  }
}, []);

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
    // Dashboard : compte le clic sur "Buy now"
    fetch("/.netlify/functions/stats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "click",
      }),
    }).catch(() => {});

    // Création de la session Stripe
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
  const addToCart = (item) => {
  setCart((prev) => [...prev, item]);
  setOpenCart(true);

  fetch("/.netlify/functions/stats", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type: "addToCart" }),
  }).catch(() => {});
};
  const removeFromCart = (i) => setCart((prev) => prev.filter((_, idx) => idx !== i));
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="site">
      <BandanaPopup />

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
          <button className="primary-btn" onClick={() => scrollTo("#shop")}>Shop Now →</button>
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

     <section className="featured-rope-section">
  <div className="featured-rope-content">

    <div className="featured-rope-header">
      <span>💦 PONPON'S SUMMER PICK</span>
      <h2>Make Every Splash Count</h2>
      <p>
        Meet the Premium Floating Rope Ball — made for pool, lake and beach
        adventures with your best friend.
      </p>
    </div>

    {featuredSummerProduct && (
      <div className="featured-rope-showcase">

        <div className="featured-rope-gallery">
          <div className="featured-rope-main-image">
            <img
              src={featuredSummerImage}
              alt="Premium Floating Rope Ball"
            />
          </div>

          <div className="featured-rope-thumbnails">
            {featuredSummerImages.map((image, index) => (
              <button
                key={image}
                type="button"
                className={
                  featuredSummerImage === image
                    ? "featured-rope-thumb active"
                    : "featured-rope-thumb"
                }
                onClick={() => setFeaturedSummerImage(image)}
                aria-label={`View Premium Floating Rope Ball image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`Premium Floating Rope Ball view ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="featured-rope-info">

          <div className="featured-rope-video">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/premium-floating-rope-ball-main.webp"
            >
              <source
                src="/premium-floating-rope-ball-video.mp4"
                type="video/mp4"
              />
              Your browser does not support video playback.
            </video>
          </div>

          <span className="featured-rope-badge">
            💦 Water Adventure
          </span>

          <h3>{featuredSummerProduct.name}</h3>

          <div className="featured-rope-rating">
            ★★★★★ <span>Loved by Ponpon</span>
          </div>

          <p className="featured-rope-description">
            {featuredSummerProduct.subtitle}
          </p>

          <div className="featured-rope-delivery">
            ✓ Free delivery &nbsp; • &nbsp; Ships in 5–8 business days
          </div>

          <div className="featured-rope-price">
            ${featuredSummerProduct.price.toFixed(2)}
            <span> USD</span>
          </div>

          <div className="featured-rope-actions">
            <button
              type="button"
              className="featured-rope-cart"
              onClick={() => {
                addToCart(featuredSummerProduct);
                setCartNotice(true);
              }}
            >
              Add to cart
            </button>

            <button
              type="button"
              className="featured-rope-buy"
              onClick={() => handleBuyNow(featuredSummerProduct)}
            >
              Buy now →
            </button>
          </div>

          <p className="featured-rope-secure">
            🔒 Secure checkout powered by Stripe
          </p>

        </div>
      </div>
    )}

  </div>
</section>

{/* PONPON'S AUTUMN PICKS */}
<section className="world-cup-section">
  <div className="section-label">🍂 Ponpon's Autumn Picks</div>

  <h2>Cozy Essentials for Autumn Adventures</h2>

  <p className="world-cup-intro">
    Ponpon has selected her favorite essentials for cozy walks, rainy
    adventures and comfortable moments as the seasons change.
  </p>

  <div className="world-cup-grid">

    <div className="world-cup-card">
      <img
        src="/autumn_walks.webp"
        alt="Ponpon enjoying a cozy autumn walk"
      />
      <h3>🍂 Autumn Walks</h3>
      <button
        onClick={() => (window.location.href = "/product/premium-reflective-dog-harness")}
        className="world-cup-share-btn"
      >
        🍂 Shop This Pick
      </button>
    </div>

    <div className="world-cup-card">
      <img
        src="/rainy_day_jaune_section.webp"
        alt="Ponpon ready for rainy days"
      />
      <h3>☔ Rainy Days</h3>
      <button
        onClick={() => (window.location.href = "/product/premium-waterproof-dog-raincoat")}
        className="world-cup-share-btn"
      >
        ☔ Shop This Pick
      </button>
    </div>

    <div className="world-cup-card">
      <img
        src="/stay_warm.webp"
        alt="Ponpon staying warm during autumn"
      />
      <h3>🧣 Stay Warm</h3>
      <button
        onClick={() => (window.location.href = "/product/premium-orthopedic-dog-bed")}
        className="world-cup-share-btn"
      >
        🧣 Shop This Pick
      </button>
    </div>

    <div className="world-cup-card">
      <img
        src="/ponpon_favorite.webp"
        alt="Ponpon's favorite autumn essential"
      />
      <h3>❤️ Ponpon's Favorite</h3>
      <button
        onClick={() => (window.location.href = "/product/premium-dog-snuffle-mat")}
        className="world-cup-share-btn"
      >
        ❤️ Shop Ponpon’s Pick
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
        <div className="trust-item"><div className="trust-icon">🛡️</div><div><strong>Carefully Selected</strong><span>Quality pet essentials</span></div></div>
        <div className="trust-item"><div className="trust-icon">↩️</div><div><strong>Easy Returns</strong><span>14-day no-questions guarantee</span></div></div>
      </section>

      {/* SHOP */}
      <section id="shop" className="section">
        <div className="section-label">Our Collection</div>
        <h2>Best Sellers</h2>
        <div className="shop-tabs">

  <select
  value={petFilter}
  onChange={(e) => setPetFilter(e.target.value)}
  className="shop-select"
>
  <option value="all">
    🐾 All Pets
  </option>

  <option value="dog">
    🐶 Dogs
  </option>

  <option value="cat">
    🐱 Cats
  </option>
</select>

 <select
  value={seasonFilter}
  onChange={(e) => setSeasonFilter(e.target.value)}
  className="shop-select"
>
  <option value="all">
    🌍 All Seasons
  </option>

  <option value="summer">
    ☀️ Summer
  </option>

  <option value="autumn">
    🍂 Autumn
  </option>

  <option value="winter">
    ❄️ Winter
  </option>
</select>

<select
  value={productTypeFilter}
  onChange={(e) => setProductTypeFilter(e.target.value)}
  className="shop-select"
>
  <option value="all">🛍️ All Products</option>
  <option value="feeding">🍽️ Food & Water</option>
  <option value="toys">🎾 Toys & Play</option>
  <option value="beds-comfort">🛏️ Beds & Comfort</option>
  <option value="walking-travel">🐾 Walk & Travel</option>
  <option value="grooming-care">🧼 Grooming & Care</option>
  <option value="clothing">👕 Clothing</option>
  <option value="accessories-home">🏠 Home & Accessories</option>
</select>

</div>

<p className="products-found">
  {filteredProducts.length}{" "}
  {filteredProducts.length === 1
    ? "product found"
    : "products found"}
</p>

        {/* BANNER — No account needed */}
        {(activeTab === "all" || activeTab === "dog" || activeTab === "cat") && (
          <div className="no-account-banner">
            <span className="no-account-icon">🛍️</span>
            <div className="no-account-text">
            <strong>No account needed to order</strong>
            <span>Just add to cart and checkout in seconds — it's that simple.</span>
            <span><strong>🎁 FREE PONPON MUG</strong> — Orders $49+ · First 10 only</span>
          </div>
          <span className="no-account-check">✓ Instant checkout</span>
          </div>
        )}

     <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
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

            <h2 style={{ textAlign: "left" }}>
              Designed for<br />comfort & simplicity
            </h2>

            <p>
              FluffHaven brings you carefully selected pet products designed to improve daily life. No accounts, no complexity — just fast checkout, free delivery and trusted quality for the pets you love.
            </p>

            <ul className="about-list">
              <li>✦ Carefully selected pet essentials</li>
              <li>✦ No account required to order</li>
              <li>✦ 14-day hassle-free returns</li>
              <li>✦ Ships worldwide, always free</li>
            </ul>
          </div>

          <div className="about-visual">
            <div className="about-card">
              <div className="about-stat">130+</div>
              <div className="about-stat-label">Carefully Selected Products</div>
            </div>

            <div className="about-card">
              <div className="about-stat">5–8</div>
              <div className="about-stat-label">Business Days Delivery</div>
            </div>

            <div className="about-card">
              <div className="about-stat">FREE</div>
              <div className="about-stat-label">Worldwide Shipping</div>
            </div>

            <div className="about-card">
              <div className="about-stat">14</div>
              <div className="about-stat-label">Day Return Policy</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
<section id="reviews" className="section reviews-section">
  <div className="section-label">Customer Reviews</div>

  <h2>Real feedback. Real pet parents.</h2>

  <div className="reviews">
    <div
      className="review"
      style={{
        gridColumn: "1 / -1",
        maxWidth: "850px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <div
        className="review-avatar-initials"
        style={{ margin: "0 auto 20px" }}
      >
        🐾
      </div>

      <h3>FluffHaven is growing</h3>

      <p>
        We're building our community one happy pet at a time.
        As genuine customer feedback comes in, we'll feature it here.
      </p>

      <p>
        <strong>Already ordered from FluffHaven?</strong>
        <br />
        We'd love to hear about your experience.
      </p>

      <p>
        <a
          href="mailto:contact@fluffhaven.shop?subject=My%20FluffHaven%20Review"
          style={{
            fontWeight: "700",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          📧 Share your experience
        </a>
      </p>

      <p style={{ fontSize: "14px", opacity: "0.7" }}>
        Only genuine customer feedback is featured on FluffHaven.
      </p>
      <div className="reviews-trust">
        <span>🔒 Secure checkout</span>
        <span>↩ 14-day returns</span>
      </div>
    </div>
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

          <p style={{ marginTop: "10px" }}>
            <a
              href="https://www.linkedin.com/in/christophe-devleeshouwer-882377399/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
            >
              💼 LinkedIn
            </a>
          </p>

        </div>
        <div className="footer-nav">
          <h4>Navigation</h4>
          <span onClick={() => window.location.href = "/#shop"}>Shop</span>
          <span onClick={() => scrollTo("#about")}>About Us</span>
          <span onClick={() => scrollTo("#reviews")}>Reviews</span>
          <span onClick={() => scrollTo("#faq")}>FAQ</span>
          <span onClick={() => (window.location.href = "/blog")}>Blog</span>
          <span onClick={() => setActivePage("contact")}>Contact Us</span>
          <span onClick={() => setActivePage("privacy")}>Privacy Policy</span>
          <span onClick={() => setActivePage("terms")}>Terms of Service</span>
          <span onClick={() => (window.location.href = "/returns")}>Returns</span>
          <span onClick={() => setActivePage("shipping")}>Shipping Policy</span>
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

                  {cartNotice && (
                    <div className="cart-notice">
                      <strong>✓ Added to cart</strong>
                      <p>Your item is ready for checkout.</p>
                    </div>
                  )}

                  <div className="cart-actions-sticky">
                    <button className="checkout-btn" onClick={handleCheckout}>Continue to Checkout →</button>
                    <button className="continue-shopping" onClick={() => setOpenCart(false)}>Continue shopping</button>
                  </div>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
      
      {/* MODAL PAGES LÉGALES */}
      {activePage && <PageModal page={activePage} onClose={() => setActivePage(null)} />}

      {/* FLOATING CART */}
        {cart.length > 0 && !openCart && showBackTop && (
          <button
            className="floating-cart"
            onClick={() => setOpenCart(true)}
            aria-label="Open cart"
          >
            <span className="floating-cart-icon">🛒</span>
            <span className="floating-cart-count">{cart.length}</span>
          </button>
        )}

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