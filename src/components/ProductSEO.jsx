
import { useEffect } from "react";

export default function ProductSEO({ product }) {
  useEffect(() => {
    if (!product) return;

    // SEO title
    document.title =
      product.seoTitle || `${product.name} | FluffHaven`;

    // SEO description
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

    // Remove previous product structured data
    document
      .querySelectorAll('script[data-fluffhaven-product-seo]')
      .forEach((script) => script.remove());

    const baseUrl = "https://fluffhaven.shop";

    const imageUrls = (product.images || []).map((image) =>
      new URL(image, baseUrl).href
    );

    const price = Number(product.price);

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description:
        product.seoDescription ||
        product.description ||
        product.name,
      image: imageUrls,
      sku: String(product.id),
      brand: {
        "@type": "Brand",
        name: product.brand || "FluffHaven",
      },
      offers: {
        "@type": "Offer",
        url: `${baseUrl}/product/${product.slug}`,
        priceCurrency: "USD",
        price: price.toFixed(2),
        availability:
          product.inStock === false
            ? "https://schema.org/OutOfStock"
            : "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@type": "Organization",
          name: "FluffHaven",
        },
      },
    };

    if (Number.isFinite(price) && imageUrls.length > 0) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-fluffhaven-product-seo", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      document
        .querySelectorAll('script[data-fluffhaven-product-seo]')
        .forEach((script) => script.remove());
    };
  }, [product]);

  return null;
}
