import { PRODUCTS } from "../data/products";

export default function RelatedProducts({ product }) {
  const relatedProducts = PRODUCTS
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id &&
        item.slug &&
        item.images &&
        item.images.length > 0
    )
    .slice(0, 4);
    
  return (
    <section className="related-products">
      <h2>You may also like</h2>

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