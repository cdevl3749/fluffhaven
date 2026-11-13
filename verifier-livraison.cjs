
const fs = require("node:fs");
const path = require("node:path");

async function verifier() {
  const { PRODUCTS } = await import("./src/data/products.js");

  const checkoutFile = path.join(
    __dirname,
    "netlify",
    "functions",
    "create-checkout-session.js"
  );

  const code = fs.readFileSync(checkoutFile, "utf8");

  const section = code.match(
    /const FAST_SHIPPING_SLUGS = new Set\(\[([\s\S]*?)\]\)/
  );

  if (!section) {
    throw new Error(
      "Liste FAST_SHIPPING_SLUGS introuvable."
    );
  }

  const slugs = [...section[1].matchAll(/"([^"]+)"/g)]
    .map((match) => match[1]);

  if (slugs.length === 0) {
    throw new Error("Aucun produit de livraison rapide.");
  }

  const resultats = slugs.map((slug) => {
    const produit = PRODUCTS.find((p) => p.slug === slug);

    return {
      slug,
      priceId: produit?.priceId || "MANQUANT",
      statut: produit?.priceId ? "OK" : "ERREUR",
    };
  });

  console.table(resultats);

  const erreurs = resultats.filter(
    (p) => p.statut === "ERREUR"
  );

  console.log("Produits vérifiés :", resultats.length);
  console.log("Erreurs :", erreurs.length);

  if (erreurs.length > 0) {
    throw new Error(
      "Génération annulée : certains produits sont invalides."
    );
  }

  const correspondance = Object.fromEntries(
    resultats.map((p) => [p.slug, p.priceId])
  );

  const destination = path.join(
    __dirname,
    "netlify",
    "functions",
    "fast-shipping-prices.json"
  );

  fs.writeFileSync(
    destination,
    JSON.stringify(correspondance, null, 2) + "\n",
    "utf8"
  );

  console.log(
    "Correspondance Stripe générée :",
    destination
  );
}

verifier().catch((erreur) => {
  console.error(erreur);
  process.exitCode = 1;
});

