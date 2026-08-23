import { useEffect } from "react";
import "./ProductPage.css";
import { PRODUCTS } from "../data/products";

import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductReviews from "../components/ProductReviews";
import ProductSEO from "../components/ProductSEO";
import RelatedProducts from "../components/RelatedProducts";

export default function ProductPage({ onAddToCart }) {
  const slug = window.location.pathname.replace("/product/", "");

  const product = PRODUCTS.find((item) => item.slug === slug);

 useEffect(() => {
  if (!product) return;

  fetch("/.netlify/functions/stats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "productView",
      product: product.slug,
      productName: product.name,
    }),
  }).catch(() => {});
}, [product]);

  function handleAddToCart(product) {
  const savedCart = localStorage.getItem("fluffhaven_cart");
  const currentCart = savedCart ? JSON.parse(savedCart) : [];

  const cartProduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    priceId: product.priceId,
    image: product.images?.[0],
    subtitle: product.subtitle,
  };

  localStorage.setItem(
  "fluffhaven_cart",
      JSON.stringify([...currentCart, cartProduct])
    );

    fetch("/.netlify/functions/stats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "addToCart" }),
    }).catch(() => {});

    window.location.href = "/?cart=open";
}

  if (!product) {
    return (
      <main className="product-page">
        <h1>Product not found</h1>
        <p>This product page does not exist yet.</p>
      </main>
    );
  }

  return (
    <>
      <ProductSEO product={product} />

      <div className="product-back-wrapper">
        <a href="/#shop" className="product-back-link">
          ← Back to Shop
        </a>
      </div>

      <main className="product-page">

        <div>
            <ProductGallery product={product} />
        </div>

        <div>
            <ProductInfo
            product={product}
            onAddToCart={handleAddToCart}
            />
        </div>

        </main>

      <ProductReviews product={product} />

      <RelatedProducts product={product} />
    </>
  );
}