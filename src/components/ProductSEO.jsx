import { useEffect } from "react";

export default function ProductSEO({ product }) {
  useEffect(() => {
    if (!product) return;

    document.title =
      product.seoTitle || `${product.name} | FluffHaven`;

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content =
      product.seoDescription ||
      product.description ||
      `Discover ${product.name} at FluffHaven. Premium pet essentials for dogs and cats.`;
  }, [product]);

  return null;
}