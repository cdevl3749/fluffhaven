export const PRODUCTS = [

  // 🔥 PRODUITS QUI CONVERTISSENT (EN PREMIER)
  {
    id: 8,
    slug: "pet-hair-remover-roller",
    name: "Pet Hair Remover Roller",
    category: "dog",
    subtitle: "No tape · reusable · instant clean",
    price: 39.90,
    badge: "🔥 Best Seller",
    rating: 4.9,
    reviews: 284,
    customers: "2,500+",
    priceId: "price_1TnRLzKn0lmTcQ11cl1ya902",
    images: ["/brosse_anti_poils.webp","/brosse_anti_poils2.webp","/brosse_anti_poils3.webp"],
    description: "Remove pet hair in seconds. No sticky tape, no mess. Perfect for home, clothes and car.",
    seoTitle: "Pet Hair Remover Roller | Dog Hair Remover | FluffHaven",
    seoDescription:
  "Remove pet hair in seconds with our reusable Pet Hair Remover Roller. Eco-friendly, durable and perfect for sofas, clothes and car seats.",
    brand: "FluffHaven",
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
    slug: "dog-car-seat-cover",
    name: "Dog Car Seat Cover",
    category: "dog",
    subtitle: "Waterproof · anti-slip · full protection",
    price: 89.90,
    badge: "⭐ Premium",
    priceId: "price_1TnRJKKn0lmTcQ11EWFaj5lt",
    images: ["/housse_chien.webp","/housse_chien2.webp","/housse_chien3.webp"],
    description: "Protect your car from dirt, scratches and pet hair. Waterproof and easy to install.",
    seoTitle: "Dog Car Seat Cover | Waterproof Car Protection | FluffHaven",
    seoDescription: "Protect your car seats from dog hair, dirt and scratches with this waterproof Dog Car Seat Cover. Easy to install, anti-slip and ideal for daily travel.",
    brand: "FluffHaven",
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
    slug: "no-pull-dog-harness",
    name: "No-Pull Dog Harness",
    category: "dog",
    subtitle: "No-pull · strong · comfortable",
    price: 59.90,
    badge: "🔥 Best Seller",
    priceId: "price_1TnRHQKn0lmTcQ11EgBfVKzy",
    images: ["/harnais_chien.webp","/harnais_chien2.webp","/harnais_chien3.webp"],
    description: "Stop pulling instantly. Comfortable harness designed for strong dogs and daily walks.",
    seoTitle: "No-Pull Dog Harness | Comfortable Dog Harness | FluffHaven",
    seoDescription: "Walk your dog comfortably with this No-Pull Dog Harness. Strong, adjustable and designed to reduce pulling while keeping your dog safe.",
    brand: "FluffHaven",
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
    slug: "electric-dog-nail-grinder",
    name: "Electric Dog Nail Grinder",
    category: "dog",
    subtitle: "Quiet · LED · safe grooming",
    price: 49.90,
    badge: "⚡ Popular",
    priceId: "price_1TnRF0Kn0lmTcQ115JFX0Ue8",
    images: ["/ponceuse_griffe.webp","/ponceuse_griffe2.webp","/ponceuse_griffe3.webp"],
    description: "Trim your pet's nails safely and stress-free. Quiet, precise and easy to use.",
    seoTitle: "Electric Dog Nail Grinder | Safe Dog Nail Trimmer | FluffHaven",
    seoDescription: "Trim your dog's nails safely with this quiet electric nail grinder. Precise, rechargeable and stress-free grooming at home.",
    brand: "FluffHaven",
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
    slug: "dog-paw-cleaner",
    name: "Dog Paw Cleaner",
    category: "dog",
    subtitle: "Portable silicone cleaner — S / M / L",
    price: 37.90,
    badge: "Best Seller",
    images: [
    "/nettoyant_bleu.webp",
    "/nettoyant_orange.webp",
    ],
    description: "Gentle silicone bristles remove mud & dirt effortlessly after every walk. No more muddy floors. Works for all breeds.",
    seoTitle: "Dog Paw Cleaner | Portable Paw Washer | FluffHaven",
    seoDescription: "Clean muddy paws in seconds with this portable Dog Paw Cleaner. Soft silicone bristles, multiple sizes and perfect after every walk.",
    brand: "FluffHaven",
    details: `
✔ Soft silicone bristles
✔ Available in S / M / L
✔ Blue & Orange colours
✔ Easy to clean
✔ Works for all breeds

No more muddy floors after walks.
`,
    variants: [
      { color: "#5B9BD5", label: "Blue",   images: ["/nettoyant_bleu.webp"],   priceIds: { S: "price_1TnS7uKn0lmTcQ11ah5XaZmu", M: "price_1TnS6EKn0lmTcQ11huc2Cvaa", L: "price_1TnS4WKn0lmTcQ11jBY7xu76" } },
      { color: "#F4845F", label: "Orange", images: ["/nettoyant_orange.webp"], priceIds: { S: "price_1TnS34Kn0lmTcQ11SC9mC0vA", M: "price_1TnS1JKn0lmTcQ11MIaiRPAN", L: "price_1TnRyvKn0lmTcQ11bGVV74Qe" } },
    ],
    sizes: ["S", "M", "L"],
  },
  {
    id: 1,
    slug: "portable-dog-water-bottle",
    name: "Portable Dog Water Bottle",
    category: "dog",
    subtitle: "Foldable silicone bowl-lid · 580 ml",
    price: 22.90,
    badge: "New",

    images: [
      "/sac_vert.webp",
      "/sac_orange.webp",
      "/sac_gris.webp",
    ],

    description: "Travel water bottle for dogs with a foldable lid that doubles as a drinking bowl. Leak-proof, BPA-free silicone, 580 ml. Perfect for hikes, walks & road trips.",
    seoTitle: "Portable Dog Water Bottle | Leak-Proof Travel Bottle | FluffHaven",
    seoDescription: "Keep your dog hydrated anywhere with this portable leak-proof water bottle. Foldable drinking bowl, BPA-free and perfect for walks and travel.",
    brand: "FluffHaven",
    details: `
✔ Foldable lid doubles as bowl
✔ Leak-proof design
✔ BPA-free silicone
✔ 580 ml capacity
✔ Available in Green, Orange & Grey

Perfect for outdoor adventures.
`,
    variants: [
      {
        color: "#7DB87D",
        label: "Green",
        images: ["/sac_vert.webp"],
        priceId: "price_1TnRogKn0lmTcQ11CFFYi5XD",
      },
      {
        color: "#F4845F",
        label: "Orange",
        images: ["/sac_orange.webp"],
        priceId: "price_1TnRnFKn0lmTcQ11KadzxgRj",
      },
      {
        color: "#888888",
        label: "Grey",
        images: ["/sac_gris.webp"],
        priceId: "price_1TnRkiKn0lmTcQ111EgJzD8U",
      },
    ],
},
  {
    id: 2,
    slug: "premium-cooling-mat",
    name: "Premium Cooling Mat",
    category: "dog",
    subtitle: "Self-cooling silk · waterproof base · L 70×55 cm",
    price: 29.90,
    badge: "Summer",
    priceId: "price_1TnRi3Kn0lmTcQ11LovAAnUy",
    images: ["/tapis_rafraichissant.webp", "/tapis_rafraichissant_2.webp", "/tapis_rafraichissant_3.webp"],
    description: "Self-cooling silk surface keeps your pet comfortable all summer. Waterproof & non-slip bottom. Machine washable. Perfect for dogs & cats.",
    seoTitle: "Premium Cooling Mat for Dogs | Summer Cooling Pad | FluffHaven",
    seoDescription: "Help your dog stay cool during hot summer days with this self-cooling mat. Waterproof, washable and comfortable for home or travel.",
    brand: "FluffHaven",
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
    slug: "3-in-1-steam-grooming-brush",
    name: "3-in-1 Steam Grooming Brush",
    category: "dog",
    subtitle: "Electric spray & massage brush · USB rechargeable",
    price: 34.90,
    badge: "Popular",
    priceId: "price_1TnRbAKn0lmTcQ11q9YMW9qe",
    images: ["/peigne_brosse_3.webp", "/peigne_brosse_2.webp", "/peigne_brosse.webp"],
    description: "One-click steam & water spray, electric massage, and detangling bristles all in one. USB rechargeable. Helps reduce flying hair.",
    seoTitle: "3-in-1 Steam Grooming Brush | Pet Grooming Brush | FluffHaven",
    seoDescription: "Reduce shedding and groom your pet easily with this 3-in-1 steam grooming brush. Gentle, rechargeable and suitable for dogs and cats.",
    brand: "FluffHaven",
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
  slug: "pet-hair-remover-glove",
  name: "Pet Hair Remover Glove",
  category: "dog",
  subtitle: "Reusable · electrostatic · easy cleaning",
  price: 29.90,
  badge: "🔥 Trending",
  images: [
  "/gant_anti_poils.webp",
  "/gant_anti_poils2.webp",
  "/gant_anti_poils3.webp",
  "/gant_anti_poils4.webp",
],
  description: "Remove pet hair instantly from sofas, clothes, carpets and car seats. Reusable, washable and easy to use every day.",
  seoTitle: "Pet Hair Remover Glove | Reusable Pet Grooming Glove | FluffHaven",
  seoDescription: "Remove loose pet hair easily with this reusable grooming glove. Comfortable, washable and perfect for dogs and cats.",
  brand: "FluffHaven",
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
        "/gant_anti_poils.webp",
        "/gant_anti_poils2.webp",
        "/gant_anti_poils3.webp"
      ],
      priceId: "price_1TnR2kKn0lmTcQ11ITawJHag"
    },

    {
      color: "#5DA9E9",
      label: "Blue",
      images: [
        "/gant_anti_poils4.webp"
      ],
      priceId: "price_1TnR0HKn0lmTcQ11W9ytYo7E"
    },
  ],
},

{
  id: 13,
  slug: "slow-feeder-dog-bowl",
  name: "Slow Feeder Dog Bowl",
  category: "dog",
  subtitle: "Medium · anti-choking · slow eating",
  price: 24.90,
  badge: "⭐ Smart Choice",
  images: [
  "/Gamelle_chien.webp",
  "/gamelle_chien2.webp",
  "/gamelle_chien3.webp",
  "/gamelle_chien_bleu.webp",
  "/gamelle_chien_gris.webp",
  "/gamelle_chien_magenta.webp",
  "/gamelle_chien_rose.webp",
],

  description:
    "Help your dog eat slower and reduce gulping. A practical slow feeder bowl designed for calmer, healthier mealtimes.",
  seoTitle: "Slow Feeder Dog Bowl | Healthy Eating Bowl | FluffHaven",
  seoDescription: "Encourage healthier eating habits with this slow feeder dog bowl. Helps reduce gulping, improves digestion and is easy to clean.",
  brand: "FluffHaven",

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
        "/Gamelle_chien.webp",
        "/gamelle_chien2.webp",
        "/gamelle_chien3.webp"
      ],
      priceId: "price_1TnQvNKn0lmTcQ115ZBiOUth"
    },

    {
      color: "#2F8DBD",
      label: "Blue",
      images: [
        "/gamelle_chien_bleu.webp"
      ],
      priceId: "price_1TnQt4Kn0lmTcQ11DX8DwEJB"
    },

    {
      color: "#B7B7B7",
      label: "Grey",
      images: [
        "/gamelle_chien_gris.webp"
      ],
      priceId: "price_1TnQqkKn0lmTcQ11OUZ3etAf"
    },

    {
      color: "#F8B6B6",
      label: "Light Pink",
      images: [
        "/gamelle_chien_magenta.webp"
      ],
      priceId: "price_1TnQg1Kn0lmTcQ11phuMn4N8"
    },

    {
      color: "#E91E8F",
      label: "Pink",
      images: [
        "/gamelle_chien_rose.webp"
      ],
      priceId: "price_1TnQoZKn0lmTcQ11eRd5W0i4"
    }
  ]
},

{
  id: 15,
  slug: "calming-donut-cat-bed",
  name: "Calming Donut Cat Bed",
  category: "cat",
  subtitle: "Ultra soft · calming · cozy nest",
  price: 37.90,
  badge: "☁️ Cozy",
  priceId: "price_1TnQFyKn0lmTcQ11WmQulDvE",
  images: [
    "/lit_rond_chat.webp",
    "/lit_rond_chat2.webp",
    "/lit_rond_chat3.webp"
  ],
  description: "A soft and cozy donut bed designed to help your cat feel safe, warm and relaxed during naps.",
  seoTitle: "Calming Donut Cat Bed | Cozy Cat Bed | FluffHaven",
  seoDescription: "Give your cat a warm and calming place to rest with this ultra-soft donut cat bed. Cozy, supportive and easy to maintain.",
  brand: "FluffHaven",
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
  slug: "cat-water-fountain",
  name: "Cat Water Fountain",
  category: "cat",
  subtitle: "2L · quiet pump · filtered water",
  price: 49.90,
  badge: "💧 Premium",
  priceId: "price_1TnQUSKn0lmTcQ11G4oFY4Xq",
  images: [
    "/fontaine_chat.webp",
    "/fontaine_chat3.webp",
    "/fontaine_chat4.webp"
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
  slug: "cat-window-hammock",
  name: "Cat Window Hammock",
  category: "cat",
  subtitle: "Window perch · soft plush · strong suction cups",
  price: 54.90,
  badge: "🪟 Cozy",
  images: [
  "/hamac_chat_couleur_ivoir.webp",
  "/hamac_chat2.webp",
  "/hamac_chat3.webp",
  "/hamac_chat_couleur_gris.webp",
],
  variants: [
    {
      color: "#F2E8DC",
      label: "Ivory",
      images: [
        "/hamac_chat_couleur_ivoir.webp",
        "/hamac_chat2.webp",
        "/hamac_chat3.webp"
      ],
      priceId: "price_1TnQRxKn0lmTcQ110wWlzwk3"
    },

    {
      color: "#8A8A8A",
      label: "Grey",
      images: [
        "/hamac_chat_couleur_gris.webp",
        "/hamac_chat2.webp",
        "/hamac_chat3.webp"
      ],
      priceId: "price_1TnQLAKn0lmTcQ118Dv8wvcv"
    }
  ],

  description: "A soft and elevated window hammock that gives your cat the perfect sunny spot to relax, nap and watch the world outside.",
  seoTitle: "Cat Window Hammock | Cozy Window Perch | FluffHaven",
  seoDescription: "Give your cat a cozy elevated window seat with this sturdy window hammock. Soft, comfortable and easy to install.",
  brand: "FluffHaven",

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
    slug: "interactive-smart-cat-ball",
    name: "Interactive Smart Cat Ball",
    category: "cat",
    subtitle: "Auto rolling toy · 2 speeds · USB rechargeable",
    price: 29.90,
    badge: "New",
    priceId: "price_1TnRYnKn0lmTcQ11ZAJNfpvw",
    images: ["/balle_chat.webp", "/balle_chat2.webp", "/balle_chat3.webp"],
    description: "Automatic interactive ball toy for indoor cats. Features 2 speed modes, feather tail and auto shut-off. Keeps cats active and entertained.",
    seoTitle: "Interactive Smart Cat Ball | Automatic Cat Toy | FluffHaven",
    seoDescription: "Keep your indoor cat active and entertained with this automatic interactive ball. Smart movement, USB rechargeable and fun to chase.",
    brand: "FluffHaven",
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
    slug: "l-shape-cat-scratcher",
    name: "L-Shape Cat Scratcher",
    category: "cat",
    subtitle: "48 cm tall · premium corrugated cardboard · ball toy",
    price: 39.90,
    badge: "Popular",
    priceId: "price_1TnRVlKn0lmTcQ11jId6Q9sK",
    images: ["/griffoir_chat.webp", "/griffoir_chat2.webp", "/griffoir_chat3.webp"],
    description: "Premium L-shaped cat scratcher made from high-density corrugated cardboard. Perfect for stretching, scratching and protecting your furniture.",
    seoTitle: "L-Shape Cat Scratcher | Cardboard Cat Scratching Post | FluffHaven",
    seoDescription: "Protect your furniture while satisfying your cat's natural scratching instincts with this durable L-shaped cardboard scratcher.",
    brand: "FluffHaven",
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
    slug: "feather-wand-cat-toy-set",
    name: "Feather Wand Cat Toy Set",
    category: "cat",
    subtitle: "2 retractable wands · 10 feather & teaser refills",
    price: 21.90,
    badge: "Fun",
    priceId: "price_1TnRPPKn0lmTcQ112OPwMWwn",
    images: ["/plume_chat.webp", "/plume_chat2.webp", "/plume_chat3.webp"],
    description: "12-piece interactive feather toy set for cats & kittens. Includes retractable wands and colourful feather attachments for daily play.",
    seoTitle: "Feather Wand Cat Toy Set | Interactive Cat Teaser | FluffHaven",
    seoDescription: "Keep your cat active with this interactive feather wand toy set featuring retractable wands and colorful teaser refills.",
    brand: "FluffHaven",
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
    slug: "premium-cat-play-tunnel",
    name: "Premium Cat Play Tunnel",
    category: "cat",
    subtitle: "Foldable linen tunnel · 30×70 cm · pompom ball included",
    price: 25.90,
    badge: null,
    priceId: "price_1TnRTFKn0lmTcQ11pRh2KjlR",
    images: ["/tunnel_chat.webp", "/tunnel_chat2.webp", "/tunnel_chat3.webp"],
    description: "Collapsible cat tunnel made from durable faux-linen fabric. Includes a hanging pompom ball inside. Ideal for hiding, chasing and exploring.",
    seoTitle: "Premium Cat Play Tunnel | Foldable Cat Tunnel | FluffHaven",
    seoDescription: "Keep your cat entertained with this foldable play tunnel featuring durable fabric, a hanging pompom toy, and easy storage.",
    brand: "FluffHaven",
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
  slug: "interactive-cat-puzzle-feeder",
  name: "Interactive Cat Puzzle Feeder",
  category: "cat",
  subtitle: "Mental stimulation · slow feeding · boredom relief",
  price: 34.90,
  badge: "🧠 Smart Play",
  priceId: "price_1TnQDJKn0lmTcQ110FNngvHn",

  images: [
    "/puzzle_chat.webp",
    "/puzzle_chat2.webp",
    "/puzzle_chat3.webp"
  ],

  description:
    "Interactive puzzle feeder designed to mentally stimulate indoor cats while slowing down eating and reducing boredom.",
  seoTitle: "Interactive Cat Puzzle Feeder | Mental Stimulation Toy | FluffHaven",
  seoDescription: "Stimulate your cat's mind and slow down eating with this interactive puzzle feeder designed for daily enrichment.",
  brand: "FluffHaven",

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
  slug: "cozy-cat-cave-bed",
  name: "Cozy Cat Cave Bed",
  category: "cat",
  subtitle: "Soft faux-linen · cozy hideaway · removable cushion",
  price: 49.90,
  badge: "☁️ Cozy",

  priceId: "price_1TnQ8ZKn0lmTcQ11KvM6Ve8y",

  images: [
    "/niche_chat.webp",
    "/niche_chat2.webp",
    "/niche_chat3.webp"
  ],

  description:
    "A soft and cozy cat cave bed designed to create a warm, safe and calming space for indoor cats.",
  seoTitle: "Cozy Cat Cave Bed | Soft Indoor Cat Hideaway | FluffHaven",
  seoDescription: "Give your cat a warm and secure place to rest with this cozy cave bed featuring a soft cushion and enclosed design.",
  brand: "FluffHaven",

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
  slug: "cat-self-grooming-brush",
  name: "Cat Self Grooming Brush",
  category: "cat",
  subtitle: "Wall mounted · soft bristles · stress relief",
  price: 24.90,
  badge: "✨ Relaxing",

  priceId: "price_1TnQ4HKn0lmTcQ117lpavjZZ",

  images: [
    "/brush_chat.webp",
    "/brush_chat2.webp",
    "/brush_chat3.webp"
  ],

  description:
    "A wall-mounted self grooming brush designed to help indoor cats scratch, rub and relax whenever they want.",
  seoTitle: "Cat Self Grooming Brush | Wall Mounted Cat Brush | FluffHaven",
  seoDescription: "Help your cat groom itself naturally with this wall-mounted self grooming brush featuring soft silicone bristles for everyday comfort.",
  brand: "FluffHaven",

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
{
  id: 20,

  slug: "sensitive-skin-dog-shampoo",

  name: "Sensitive Skin Dog Shampoo",

  category: "dog",

  subtitle: "Hypoallergenic • Gentle formula • Sensitive skin",

  price: 27.90,

  badge: null,

  priceId: "price_1TnPy6Kn0lmTcQ11ay13p6hN",

  images: [
    "/dog_shampoo_bt.webp",
    "/dog_shampoo2.webp",
    "/dog_shampoo3.webp"
  ],

  description:
    "A gentle hypoallergenic dog shampoo designed for sensitive skin. Helps clean, moisturise and soothe without harsh ingredients.",
  seoTitle: "Sensitive Skin Dog Shampoo | Hypoallergenic Pet Shampoo | FluffHaven",
  seoDescription: "Soothe and cleanse sensitive skin with this gentle hypoallergenic dog shampoo. Ideal for regular grooming and healthy coats.",
  brand: "FluffHaven",

  details: `
✓ Hypoallergenic formula

✓ Suitable for sensitive skin

✓ Helps relieve itching

✓ Aloe Vera enriched

✓ Moisturises dry coats

✓ pH balanced formula

✓ Free from harsh irritants

✓ Trusted by thousands of pet owners
  `,

  promo: "🌿 Gentle formula for sensitive skin",
},
{
  id: 21,

  slug: "sensitive-skin-cat-shampoo",

  name: "Sensitive Skin Cat Shampoo",

  category: "cat",

  subtitle: "Hypoallergenic • Gentle formula • Sensitive skin",

  price: 29.90,

  badge: "",

  priceId: "price_1TnPn8Kn0lmTcQ11E1SE7z4D",

  images: [
    "/cat_shampoo_bt.webp",
    "/cat_shampoo3.webp",
    "/cat_shampoo2.webp"
  ],

  description:
    "A gentle hypoallergenic cat shampoo designed for sensitive skin. Helps clean, moisturise and soothe without harsh ingredients.",
  seoTitle: "Sensitive Skin Cat Shampoo | Hypoallergenic Cat Shampoo | FluffHaven",
  seoDescription: "Clean and soothe sensitive skin with this gentle hypoallergenic cat shampoo. Perfect for healthy coats and regular grooming.",
  brand: "FluffHaven",

  details: `
✓ Hypoallergenic formula

✓ Suitable for sensitive skin

✓ Helps relieve itching

✓ Aloe Vera enriched

✓ Moisturises dry coats

✓ No water required

✓ Free from harsh irritants

✓ Trusted by thousands of pet owners
  `,

  promo: "🌿 Gentle formula for sensitive skin",
},
];