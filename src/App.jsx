import { useState, useEffect } from "react";
import "./App.css";

// ─────────────────────────────────────────────────────────────
// PRODUCTS
// ─────────────────────────────────────────────────────────────
const PRODUCTS = [

  // 🔥 PRODUITS QUI CONVERTISSENT (EN PREMIER)
  {
    id: 8,
    name: "Pet Hair Remover Roller",
    category: "dog",
    subtitle: "No tape · reusable · instant clean",
    price: 39.90,
    badge: "🔥 Best Seller",
    priceId: "price_1TTQgZKn0lmTcQ11QW74njjh",
    images: ["/brosse_anti_poils.jpg","/brosse_anti_poils2.jpg","/brosse_anti_poils3.jpg"],
    description: "Remove pet hair in seconds. No sticky tape, no mess. Perfect for home, clothes and car.",
    details: `
✔ Removes pet hair instantly
✔ No sticky tape needed
✔ Reusable & eco-friendly
✔ Works on sofa, clothes & car seats
✔ Self-cleaning system

Perfect for keeping your home clean every day.
`,
  },

  {
    id: 9,
    name: "Dog Car Seat Cover",
    category: "dog",
    subtitle: "Waterproof · anti-slip · full protection",
    price: 89.90,
    badge: "⭐ Premium",
    priceId: "price_1TTRPvKn0lmTcQ11Q926IlD8",
    images: ["/housse_chien.jpg","/housse_chien2.jpg","/housse_chien3.jpg"],
    description: "Protect your car from dirt, scratches and pet hair. Waterproof and easy to install.",
    details: `
✔ 100% waterproof protection
✔ Anti-slip backing
✔ Protects against mud, hair & scratches
✔ Easy installation in seconds
✔ Fits most cars & SUVs

Travel with your dog stress-free.
`,
  },

  {
    id: 10,
    name: "No-Pull Dog Harness",
    category: "dog",
    subtitle: "No-pull · strong · comfortable",
    price: 59.90,
    badge: "🔥 Best Seller",
    priceId: "price_1TTRdcKn0lmTcQ11BVllH8Sy",
    images: ["/harnais_chien.jpg","/harnais_chien2.jpg","/harnais_chien3.jpg"],
    description: "Stop pulling instantly. Comfortable harness designed for strong dogs and daily walks.",
    details: `
✔ Reduces pulling instantly
✔ Front clip control system
✔ Comfortable padding
✔ Strong & durable materials
✔ Adjustable for all sizes

Perfect for daily walks and training.
`,
  },

  {
    id: 11,
    name: "Electric Dog Nail Grinder",
    category: "dog",
    subtitle: "Quiet · LED · safe grooming",
    price: 49.90,
    badge: "⚡ Popular",
    priceId: "price_1TTRrOKn0lmTcQ11kjI4jVrr",
    images: ["/ponceuse_griffe.jpg","/ponceuse_griffe2.jpg","/ponceuse_griffe3.jpg"],
    description: "Trim your pet's nails safely and stress-free. Quiet, precise and easy to use.",
    details: `
✔ Safe & painless nail trimming
✔ Quiet motor (no stress)
✔ 2 speed settings
✔ Built-in LED for precision
✔ USB rechargeable

Professional grooming at home.
`,
  },

  // 🐶 PRODUITS CHIENS
  {
    id: 0,
    name: "Dog Paw Cleaner",
    category: "dog",
    subtitle: "Portable silicone cleaner — S / M / L",
    price: 37.90,
    badge: "Best Seller",
    description: "Gentle silicone bristles remove mud & dirt effortlessly after every walk. No more muddy floors. Works for all breeds.",
    details: `
✔ Soft silicone bristles
✔ Available in S / M / L
✔ Blue & Orange colours
✔ Easy to clean
✔ Works for all breeds

No more muddy floors after walks.
`,
    variants: [
      { color: "#5B9BD5", label: "Blue",   images: ["/nettoyant_bleu.jpg"],   priceIds: { S: "price_1TSLe2Kn0lmTcQ11HUyJFJg2", M: "price_1TSLm2Kn0lmTcQ11I0ryLfKG", L: "price_1TSLoaKn0lmTcQ11QLJFs164" } },
      { color: "#F4845F", label: "Orange", images: ["/nettoyant_orange.jpg"], priceIds: { S: "price_1TSLu2Kn0lmTcQ11mRvFvCU7", M: "price_1TSLvRKn0lmTcQ110ovh6Wgw", L: "price_1TSLwpKn0lmTcQ114MQiZ8Ow" } },
    ],
    sizes: ["S", "M", "L"],
  },
  {
    id: 1,
    name: "Portable Dog Water Bottle",
    category: "dog",
    subtitle: "Foldable silicone bowl-lid · 580 ml",
    price: 22.90,
    badge: "New",
    description: "Travel water bottle for dogs with a foldable lid that doubles as a drinking bowl. Leak-proof, BPA-free silicone, 580 ml. Perfect for hikes, walks & road trips.",
    details: `
✔ Foldable lid doubles as bowl
✔ Leak-proof design
✔ BPA-free silicone
✔ 580 ml capacity
✔ Available in Green, Orange & Grey

Perfect for outdoor adventures.
`,
    variants: [
      { color: "#7DB87D", label: "Green",  images: ["/sac_vert.jpg"],   priceId: "price_1TSM4mKn0lmTcQ11yMEtLXIz" },
      { color: "#F4845F", label: "Orange", images: ["/sac_orange.jpg"], priceId: "price_1TSM5qKn0lmTcQ11zG9ePOa5" },
      { color: "#888888", label: "Grey",   images: ["/sac_gris.jpg"],   priceId: "price_1TSM7EKn0lmTcQ11aw43pEVb" },
    ],
  },
  {
    id: 2,
    name: "Premium Cooling Mat",
    category: "dog",
    subtitle: "Self-cooling silk · waterproof base · L 70×55 cm",
    price: 29.90,
    badge: "Summer",
    priceId: "price_1TSMB9Kn0lmTcQ11az73rxbZ",
    images: ["/tapis_rafraichissant.jpg", "/tapis_rafraichissant_2.jpg"],
    description: "Self-cooling silk surface keeps your pet comfortable all summer. Waterproof & non-slip bottom. Machine washable. Perfect for dogs & cats.",
    details: `
✔ Self-cooling silk surface
✔ Waterproof & non-slip bottom
✔ Machine washable
✔ Size: 70×55 cm
✔ Blue colour

Keeps your pet cool all summer long.
`,
  },
  {
    id: 3,
    name: "3-in-1 Steam Grooming Brush",
    category: "dog",
    subtitle: "Electric spray & massage brush · USB rechargeable",
    price: 34.90,
    badge: "Popular",
    priceId: "price_1TSMRBKn0lmTcQ117Az7zJwR",
    images: ["/peigne_brosse.jpg", "/peigne_brosse_2.jpg", "/peigne_brosse_3.jpg"],
    description: "One-click steam & water spray, electric massage, and detangling bristles all in one. USB rechargeable. Helps reduce flying hair.",
    details: `
✔ One-click steam spray
✔ Electric massage function
✔ Detangling bristles
✔ USB rechargeable
✔ For cats & dogs

Professional grooming at home.
`,
  },

    {
  id: 12,
  name: "Pet Hair Remover Glove",
  category: "dog",
  subtitle: "Reusable · electrostatic · easy cleaning",
  price: 29.90,
  badge: "🔥 Trending",
  description: "Remove pet hair instantly from sofas, clothes, carpets and car seats. Reusable, washable and easy to use every day.",
  details: `
✔ Electrostatic hair removal
✔ Reusable & washable
✔ Works on clothes, sofas & carpets
✔ Comfortable five-finger design
✔ Perfect for dogs & cats

A simple and effective way to keep your home clean.
`,
  variants: [
    {
      color: "#F4841F",
      label: "Orange",
      images: [
        "/gant_anti_poils.jpg",
        "/gant_anti_poils2.jpg",
        "/gan_anti_poils3.jpg"
      ],
      priceId: "price_1TVz1LKn0lmTcQ11NQbngAuG"
    },

    {
      color: "#5DA9E9",
      label: "Blue",
      images: [
        "/gant_anti_poils4.jpg"
      ],
      priceId: "price_1TVz4qKn0lmTcQ11kjiQ0Lvl"
    },
  ],
},

{
  id: 13,
  name: "Slow Feeder Dog Bowl",
  category: "dog",
  subtitle: "Medium · anti-choking · slow eating",
  price: 24.90,
  badge: "⭐ Smart Choice",

  description:
    "Help your dog eat slower and reduce gulping. A practical slow feeder bowl designed for calmer, healthier mealtimes.",

  details: `
✔ Helps slow down fast eating
✔ Anti-choking raised maze design
✔ Medium size for daily meals
✔ Easy to clean
✔ Available in multiple colours

A simple way to make mealtime calmer and safer.
`,

  variants: [
    {
      color: "#111111",
      label: "Black",
      images: [
        "/Gamelle_chien.jpg",
        "/gamelle_chien2.jpg",
        "/gamelle_chien3.jpg"
      ],
      priceId: "price_1TVzfwKn0lmTcQ11Ew4219Uv"
    },

    {
      color: "#2F8DBD",
      label: "Blue",
      images: [
        "/gamelle_chien_bleu.jpg"
      ],
      priceId: "price_1TVzjFKn0lmTcQ11e622lV9l"
    },

    {
      color: "#B7B7B7",
      label: "Grey",
      images: [
        "/gamelle_chien_gris.jpg"
      ],
      priceId: "price_1TVzltKn0lmTcQ11vsj1zYeh"
    },

    {
      color: "#F8B6B6",
      label: "Light Pink",
      images: [
        "/gamelle_chien_rose.jpg"
      ],
      priceId: "price_1TVzo4Kn0lmTcQ11xs2ZMQ0f"
    },

    {
      color: "#E91E8F",
      label: "Pink",
      images: [
        "/gamelle_chien_magenta.jpg"
      ],
      priceId: "price_1TVzqLKn0lmTcQ11i49w7tcj"
    }
  ]
},

{
  id: 15,
  name: "Calming Donut Cat Bed",
  category: "cat",
  subtitle: "Ultra soft · calming · cozy nest",
  price: 37.90,
  badge: "☁️ Cozy",
  priceId: "price_1TW1lQKn0lmTcQ11P0uq4z9U",
  images: [
    "/lit_rond_chat.jpg",
    "/lit_rond_chat2.jpg",
    "/lit_rond_chat3.jpg"
  ],
  description: "A soft and cozy donut bed designed to help your cat feel safe, warm and relaxed during naps.",
  details: `
✔ Ultra soft plush fabric
✔ Calming donut shape
✔ Raised rim for head and neck support
✔ Non-slip bottom
✔ Easy to clean and maintain
✔ Perfect for cats who love curling up

A warm and comfortable sleeping spot for everyday rest.
`,
},
  // 🐱 PRODUITS CHATS

  {
  id: 14,
  name: "Cat Water Fountain",
  category: "cat",
  subtitle: "2L · quiet pump · filtered water",
  price: 49.90,
  badge: "💧 Premium",
  priceId: "price_1TW0Q9Kn0lmTcQ11iSwrx9Z7",
  images: [
    "/fontaine_chat.jpg",
    "/fontaine_chat3.jpg",
    "/fontaine_chat4.jpg"
  ],
  description: "Encourage your cat to drink more with a quiet 2L water fountain that keeps water fresh, moving and filtered.",
  details: `
✔ 2L water capacity
✔ Quiet pump for daily use
✔ Flowing water encourages drinking
✔ Built-in filtration system
✔ BPA-free design

A simple way to keep your cat hydrated every day.
`,
},

{
  id: 16,
  name: "Cat Window Hammock",
  category: "cat",
  subtitle: "Window perch · soft plush · strong suction cups",
  price: 54.90,
  badge: "🪟 Cozy",
  variants: [
    {
      color: "#F2E8DC",
      label: "Ivory",
      images: [
        "/hamac_chat_couleur_ivoir.jpg",
        "/hamac_chat2.jpg",
        "/hamac_chat3.jpg"
      ],
      priceId: "price_1TW0kwKn0lmTcQ113dEfbnNA"
    },

    {
      color: "#8A8A8A",
      label: "Grey",
      images: [
        "/hamac_chat_couleur_gris.jpg",
        "/hamac_chat2.jpg",
        "/hamac_chat3.jpg"
      ],
      priceId: "price_1TW0n7Kn0lmTcQ111zYwBsMH"
    }
  ],

  description: "A soft and elevated window hammock that gives your cat the perfect sunny spot to relax, nap and watch the world outside.",

  details: `
✔ Strong suction cup support
✔ Soft plush removable cover
✔ Machine washable fabric
✔ Stable steel frame
✔ Comfortable elevated resting spot

Perfect for indoor cats who love sunlight, window views and cozy naps.
`,
},
  {
    id: 4,
    name: "Interactive Smart Cat Ball",
    category: "cat",
    subtitle: "Auto rolling toy · 2 speeds · USB rechargeable",
    price: 29.90,
    badge: "New",
    priceId: "price_1TSMUsKn0lmTcQ11sXCLEtkj",
    images: ["/balle_chat.jpg", "/balle_chat2.jpg", "/balle_chat3.jpg"],
    description: "Automatic interactive ball toy for indoor cats. Features 2 speed modes, feather tail and auto shut-off. Keeps cats active and entertained.",
    details: `
✔ 2 speed modes (Normal & Smart)
✔ Feather tail attachment
✔ Auto shut-off after 5 min
✔ USB rechargeable
✔ For small & medium cats

Hours of entertainment for your cat.
`,
  },
  {
    id: 5,
    name: "L-Shape Cat Scratcher",
    category: "cat",
    subtitle: "48 cm tall · premium corrugated cardboard · ball toy",
    price: 39.90,
    badge: "Popular",
    priceId: "price_1TSMYPKn0lmTcQ11bejbHtc0",
    images: ["/griffoir_chat.jpg", "/griffoir_chat2.jpg", "/griffoir_chat3.jpg"],
    description: "Premium L-shaped cat scratcher made from high-density corrugated cardboard. Perfect for stretching, scratching and protecting your furniture.",
    details: `
✔ 48 cm tall L-shape design
✔ High-density corrugated cardboard
✔ Includes ball toy
✔ Breathable & abrasion-resistant
✔ Protects your furniture

The perfect scratching solution.
`,
  },
  {
    id: 6,
    name: "Feather Wand Cat Toy Set",
    category: "cat",
    subtitle: "2 retractable wands · 10 feather & teaser refills",
    price: 21.90,
    badge: "Fun",
    priceId: "price_1TSMbNKn0lmTcQ11ADoo7Dqy",
    images: ["/plume_chat.jpg", "/plume_chat2.jpg", "/plume_chat3.jpg"],
    description: "12-piece interactive feather toy set for cats & kittens. Includes retractable wands and colourful feather attachments for daily play.",
    details: `
✔ 2 retractable wands (extends to 96 cm)
✔ 10 colourful feather attachments
✔ Non-toxic dyes
✔ For cats & kittens
✔ Easy to store

Daily playtime made fun & easy.
`,
  },
  {
    id: 7,
    name: "Premium Cat Play Tunnel",
    category: "cat",
    subtitle: "Foldable linen tunnel · 30×70 cm · pompom ball included",
    price: 25.90,
    badge: null,
    priceId: "price_1TSMeWKn0lmTcQ11TOytJsNX",
    images: ["/tunnel_chat.jpg", "/tunnel_chat2.jpg", "/tunnel_chat3.jpg"],
    description: "Collapsible cat tunnel made from durable faux-linen fabric. Includes a hanging pompom ball inside. Ideal for hiding, chasing and exploring.",
    details: `
✔ 30 cm diameter · 70 cm long
✔ Durable faux-linen fabric
✔ Hanging pompom ball inside
✔ Collapsible & easy to store
✔ Durable material

Cats never get bored.
`,
  },
  {
  id: 17,
  name: "Interactive Cat Puzzle Feeder",
  category: "cat",
  subtitle: "Mental stimulation · slow feeding · boredom relief",
  price: 34.90,
  badge: "🧠 Smart Play",
  priceId: "price_1TWh3AKn0lmTcQ11myH6JngD",

  images: [
    "/puzzle_chat.jpg",
    "/puzzle_chat2.jpg",
    "/puzzle_chat3.jpg"
  ],

  description:
    "Interactive puzzle feeder designed to mentally stimulate indoor cats while slowing down eating and reducing boredom.",

  details: `
✔ Encourages mental stimulation
✔ Helps reduce boredom & stress
✔ Slow feeding design
✔ Multiple hidden treat compartments
✔ Interactive daily enrichment
✔ Durable BPA-free material

Perfect for indoor cats who need more stimulation, play and enrichment during the day.
`,
},
{
  id: 18,
  name: "Cozy Cat Cave Bed",
  category: "cat",
  subtitle: "Soft faux-linen · cozy hideaway · removable cushion",
  price: 49.90,
  badge: "☁️ Cozy",

  priceId: "price_1TWhvuKn0lmTcQ11dz0kPJGn",

  images: [
    "/niche_chat.jpg",
    "/niche_chat2.jpg",
    "/niche_chat3.jpg"
  ],

  description:
    "A soft and cozy cat cave bed designed to create a warm, safe and calming space for indoor cats.",

  details: `
✔ Soft faux-linen fabric
✔ Warm & comfortable cushion
✔ Cozy enclosed hideaway design
✔ Foldable & easy to store
✔ Non-slip bottom
✔ Perfect for indoor cats

A calming resting space where your cat can sleep, hide and relax comfortably every day.
`,
},
{
  id: 19,
  name: "Cat Self Grooming Brush",
  category: "cat",
  subtitle: "Wall mounted · soft bristles · stress relief",
  price: 24.90,
  badge: "✨ Relaxing",

  priceId: "price_1TWiqjKn0lmTcQ11HLRMP1LK",

  images: [
    "/brush_chat.jpg",
    "/brush_chat2.jpg",
    "/brush_chat3.jpg"
  ],

  description:
    "A wall-mounted self grooming brush designed to help indoor cats scratch, rub and relax whenever they want.",

  details: `
✔ Soft silicone bristles
✔ Wall-mounted corner design
✔ Helps remove loose hair
✔ Encourages natural rubbing behaviour
✔ Easy to clean
✔ Perfect for indoor cats

A simple daily grooming and relaxation spot your cat can enjoy on its own.
`,
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
    onShowDetails({
      ...product,
      currentImage: images ? images[currentImg] : null,
      onAddToCart: handleAddToCart,
    });
  }

  return (
    <div className="product">
      {product.badge && <span className="product-badge">{product.badge}</span>}
      <span className="product-stock">Only a few left</span>

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
          <div className="product-btns">
            {product.details && (
              <button className="view-details-btn" onClick={handleShowDetails}>View details</button>
            )}
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────────────────────
export default function App() {
  const [showCookies, setShowCookies] = useState(
    () => localStorage.getItem("fh_cookies_accepted") !== "true"
  );
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [checkoutStatus, setCheckoutStatus] = useState(null);
  const [activePage, setActivePage] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null); // ← modale details

  // ── Bloque le scroll quand une modale est ouverte ──
  useEffect(() => {
    const isOpen = !!activeProduct || !!activePage || openCart;
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
  }, [activeProduct, activePage, openCart]);

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
      body: JSON.stringify({ type: "visit", country: "auto" }),
    }).then(() => sessionStorage.setItem(KEY, "true")).catch(() => {});
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const checkout = params.get("checkout");
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
      fetch("/.netlify/functions/stats", { method: "POST", body: JSON.stringify({ type: "stripe" }) });
      const data = await response.json();
      if (data.url) window.location.href = data.url;
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
        <div className="shop-tabs">
          <button className={activeTab === "all" ? "tab active" : "tab"} onClick={() => setActiveTab("all")}>🐾 All</button>
          <button className={activeTab === "dog" ? "tab active" : "tab"} onClick={() => setActiveTab("dog")}>🐶 Dogs</button>
          <button className={activeTab === "cat" ? "tab active" : "tab"} onClick={() => setActiveTab("cat")}>🐱 Cats</button>
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
            <ProductCard key={p.id} product={p} onAddToCart={addToCart} onShowDetails={setActiveProduct} />
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
            <div className="about-card"><div className="about-stat">20+</div><div className="about-stat-label">Products Curated</div></div>
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
            { name: "Emma R.",   pet: "Golden Retriever owner", text: "The paw cleaner is genuinely incredible. My dog used to leave muddy prints everywhere — now it takes 10 seconds after every walk." },
            { name: "Lucas M.", pet: "Cat & dog dad",           text: "Fast shipping, premium packaging, and the products actually last. I've ordered three times now and every time it's been perfect." },
            { name: "Sophie L.", pet: "Labrador owner",         text: "The Premium Cooling Mat is perfect for hot days! My dog loves it and uses it all the time. It cools instantly and feels really high quality. Super easy to clean too. Highly recommend!" },
          ].map((r) => (
            <div key={r.name} className="review">
              <div className="review-top">
                <div className="review-avatar-initials">{r.name.split(" ").map(n => n[0]).join("")}</div>
                <div><h4>{r.name}</h4><span className="review-pet">{r.pet}</span></div>
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

      {/* MODALE DETAILS PRODUIT — au niveau App, pas dans la carte */}
      {activeProduct && (
        <div className="details-overlay" onClick={() => setActiveProduct(null)}>
          <div className="details-modal" onClick={(e) => e.stopPropagation()}>
            <button className="details-close" onClick={() => setActiveProduct(null)}>×</button>
            {activeProduct.currentImage && (
              <div className="details-image-wrap">
                <img src={activeProduct.currentImage} alt={activeProduct.name} />
              </div>
            )}
            <h3>{activeProduct.name}</h3>
            <p className="details-subtitle">{activeProduct.subtitle}</p>
            <div className="details-text">
              {activeProduct.details?.split("\n").filter(Boolean).map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <button className="details-add-btn" onClick={() => {
              activeProduct.onAddToCart();
              setActiveProduct(null);
            }}>
              Add to Cart · {eur(activeProduct.price)}
            </button>
          </div>
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