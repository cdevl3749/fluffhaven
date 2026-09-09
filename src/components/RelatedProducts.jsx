import { useState } from "react";
import { PRODUCTS } from "../data/products";

export default function RelatedProducts({ product }) {
  const categoryProducts = PRODUCTS.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id &&
      item.slug &&
      item.images &&
      item.images.length > 0
  );

  const [startIndex, setStartIndex] = useState(0);

  const getVisibleProducts = () => {
    if (categoryProducts.length <= 4) {
      return categoryProducts;
    }

    return Array.from({ length: 4 }, (_, index) => {
      return categoryProducts[
        (startIndex + index) % categoryProducts.length
      ];
    });
  };

  const relatedProducts = getVisibleProducts();

  const handlePrevious = (event) => {
    event.preventDefault();

    setStartIndex((current) => {
      const newIndex = current - 4;
      return newIndex < 0
        ? (newIndex + categoryProducts.length) % categoryProducts.length
        : newIndex;
    });
  };

  const handleNext = (event) => {
    event.preventDefault();

    setStartIndex(
      (current) => (current + 4) % categoryProducts.length
    );
  };

  return (
    <section className="related-products">
      <div className="related-heading-nav">
        <button
          type="button"
          className="related-nav-link"
          onClick={handlePrevious}
        >
          ← Previous
        </button>

        <h2>You may also like</h2>

        <button
          type="button"
          className="related-nav-link"
          onClick={handleNext}
        >
          Next →
        </button>
      </div>

      <div className="related-grid">
        {relatedProducts.map((item) => (
          <a
            key={item.id}
            href={`/product/${item.slug}`}
            className="related-card"
          >
            <img
              src={item.images?.[0]}
              alt={item.name}
            />

            <h3>{item.name}</h3>

            {item.badge && (
              <span className="related-badge">
                {item.badge}
              </span>
            )}

            <p className="related-price">
              ${item.price.toFixed(2)} USD
            </p>

            <span className="related-view-btn">
              View Product →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}