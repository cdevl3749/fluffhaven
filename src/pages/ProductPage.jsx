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