import "./HomeUS.css";
import { PRODUCTS } from "../data/products";
import { HOME_VERSION } from "./homeConfig";

// ─────────────────────────────────────────────────────────────
// Réglages faciles à modifier
// ─────────────────────────────────────────────────────────────
const HERO_IMAGE = "/Festive Ponpon Santa Portrait.webp";
const DOG_TILE_IMAGE = "/Cozy Winter Teepee Dog Bed.webp";
const CAT_TILE_IMAGE = "/premium-3-in-1-cozy-cat-tunnel-bed-lifestyle.webp";

// Les 4 premiers produits de products.js (change les slugs pour en choisir d'autres)
const FEATURED_SLUGS = [
  "ponpons-christmas-mystery-box",
  "cozy-striped-winter-dog-scarf",
  "olive-green-winter-dog-coat",
  "dusty-pink-winter-dog-coat",
];

function usd(price) {
  return `$${price.toFixed(2)}`;
}

function PawIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <circle cx="18" cy="18" r="8" />
      <circle cx="32" cy="12" r="8" />
      <circle cx="46" cy="18" r="8" />
      <circle cx="22" cy="34" r="7" />
      <path d="M32 28c-12 0-21 9-21 18 0 7 6 11 13 8 4-2 6-3 8-3s4 1 8 3c7 3 13-1 13-8 0-9-9-18-21-18z" />
    </svg>
  );
}

const TRUST_ITEMS = [
  {
    top: "Free Worldwide",
    bottom: "Shipping",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <path d="M4 12h24v20H4zM28 20h9l7 8v4H28z" />
        <circle cx="13" cy="35" r="4" />
        <circle cx="36" cy="35" r="4" />
      </svg>
    ),
  },
  {
    top: "Secure",
    bottom: "Checkout",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <path d="M24 5l16 6v11c0 10-7 18-16 21C15 40 8 32 8 22V11z" />
        <path d="M17 24l5 5 9-10" />
      </svg>
    ),
  },
  {
    top: "14-Day",
    bottom: "Returns",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <path d="M38 18a15 15 0 00-27-3M10 8v8h8" />
        <path d="M10 30a15 15 0 0027 3M38 40v-8h-8" />
      </svg>
    ),
  },
  {
    top: "Chosen with Love",
    bottom: "for Dogs & Cats",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <path d="M24 41S6 30 6 17c0-6 4-10 9-10 4 0 7 2 9 6 2-4 5-6 9-6 5 0 9 4 9 10 0 13-18 24-18 24z" />
      </svg>
    ),
  },
];

function CategoryTile({ pet, title, text, image, onSelect }) {
  return (
    <button type="button" className="hu-tile" onClick={() => onSelect(pet)}>
      <img className="hu-tile-img" src={image} alt="" loading="lazy" />
      <span className="hu-tile-body">
        <span className="hu-tile-title">
          <PawIcon className="hu-paw" />
          {title}
        </span>
        <span className="hu-tile-text">{text}</span>
        <span className="hu-btn hu-btn-sm">{title} →</span>
      </span>
    </button>
  );
}

function PickCard({ product }) {
  const image = product.images && product.images[0];
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <a className="hu-card" href={`/product/${product.slug}`}>
      <div className="hu-card-media">
        {product.badge && <span className="hu-badge">{product.badge}</span>}
        {image && <img src={image} alt={product.name} loading="lazy" />}
      </div>
      <div className="hu-card-body">
        <h3 className="hu-card-name">{product.name}</h3>
        <p className="hu-card-love">
          <span aria-hidden="true">♡</span> Loved by Ponpon
        </p>
        <p className="hu-card-price">
          {usd(product.price)}
          <span className="hu-usd"> USD</span>
          {hasDiscount && <s className="hu-was">{usd(product.originalPrice)}</s>}
        </p>
        <span className="hu-btn hu-btn-sm hu-btn-block">View details →</span>
      </div>
    </a>
  );
}

export default function HomeUS({ onShopPet }) {
  if (HOME_VERSION !== "C") return null;

  // Si App.jsx fournit onShopPet, on applique le filtre animal puis on défile vers #shop.
  // Sinon, on défile simplement vers #shop.
  const goShop = (pet = "all") => {
    if (typeof onShopPet === "function") {
      onShopPet(pet);
    } else {
      document.getElementById("shop")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const picks = FEATURED_SLUGS.map((slug) => PRODUCTS.find((p) => p.slug === slug)).filter(Boolean);

  return (
    <div id="home" className="hu">
      {/* HERO */}
      <section className="hu-hero">
        <div className="hu-hero-inner">
          <div className="hu-hero-text">
            <p className="hu-eyebrow">Meet Ponpon</p>
            <h1 className="hu-title">
              Pet essentials
              <br />
              <span>chosen by Ponpon</span>
            </h1>
            <p className="hu-lead">
              Inspired by Ponpon, our rescue dog from Spain. ❤️
              <br />
              Thoughtfully chosen essentials for dogs and cats we love.
            </p>
          </div>

          <div className="hu-hero-cta">
            <button type="button" className="hu-btn" onClick={() => goShop("all")}>
              Shop Now →
            </button>
          </div>

          <div className="hu-hero-photo">
            <img
              src={HERO_IMAGE}
              alt="Ponpon, our rescue dog, wearing a Santa hat"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="hu-trust" aria-label="Why shop with us">
        <ul className="hu-trust-list">
          {TRUST_ITEMS.map((item) => (
            <li key={item.top} className="hu-trust-item">
              <span className="hu-trust-icon">{item.icon}</span>
              <span className="hu-trust-text">
                {item.top}
                <br />
                {item.bottom}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* SHOP DOGS / CATS */}
      <section className="hu-cats" aria-label="Shop by pet">
        <CategoryTile
          pet="dog"
          title="Shop Dogs"
          text="Discover useful & cozy essentials for your dog."
          image={DOG_TILE_IMAGE}
          onSelect={goShop}
        />
        <CategoryTile
          pet="cat"
          title="Shop Cats"
          text="Fun, comfy & smart essentials for your cat."
          image={CAT_TILE_IMAGE}
          onSelect={goShop}
        />
      </section>

      {/* TOP PICKS */}
      <section className="hu-picks" aria-labelledby="hu-picks-title">
        <div className="hu-picks-head">
          <span className="hu-rule" aria-hidden="true" />
          <h2 id="hu-picks-title">
            <PawIcon className="hu-paw" />
            Ponpon’s Top Picks
          </h2>
          <span className="hu-rule" aria-hidden="true" />
        </div>

        <div className="hu-picks-grid">
          {picks.map((product) => (
            <PickCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
