import fs from "node:fs";
import { PRODUCTS } from "./src/data/products.js";

const SITE_URL = "https://fluffhaven.shop";

function escapeXml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const items = PRODUCTS.map((product) => {
  const image = product.images?.[0]
    ? `${SITE_URL}${product.images[0]}`
    : "";

  return `
    <item>
      <g:id>${escapeXml(product.id)}</g:id>
      <g:title>${escapeXml(product.name)}</g:title>
      <g:description>${escapeXml(product.description)}</g:description>
      <g:link>${SITE_URL}/product/${escapeXml(product.slug)}</g:link>
      <g:image_link>${escapeXml(image)}</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:price>${Number(product.price).toFixed(2)} USD</g:price>
      <g:brand>${escapeXml(product.brand || "FluffHaven")}</g:brand>
      <g:condition>new</g:condition>
    </item>`;
}).join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>FluffHaven Products</title>
    <link>${SITE_URL}/</link>
    <description>Premium pet essentials for dogs and cats</description>
${items}
  </channel>
</rss>
`;

fs.writeFileSync("./public/google-products.xml", xml, "utf8");

console.log(`Google Merchant feed generated: ${PRODUCTS.length} products`);