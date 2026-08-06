export default function PonponPick() {
  return (
    <section className="ponpon-pick">
      <div className="ponpon-pick-card">

        <div className="ponpon-pick-visual">

          <img
            src="/ponpon-beach.webp"
            alt="Ponpon at the beach"
            className="ponpon-pick-photo"
          />

          <img
            src="/premium-beach-bundle-bag.webp"
            alt="Premium Beach Bundle"
            className="ponpon-pick-product"
          />

        </div>

        <div className="ponpon-pick-right">

          <span className="ponpon-pick-badge">
            <span className="ponpon-pick-paw">🌴</span>
            Ponpon's Beach Adventure
          </span>

          <h3>
            Ponpon's favourite beach bundle
          </h3>

          <p>
            Everything Ponpon needs for the perfect beach day:
            premium beach bag, floating toys and a soft microfiber towel.
          </p>

          <a
            href="/product/premium-beach-bundle"
            className="ponpon-btn"
          >
            Explore Bundle →
          </a>

        </div>

      </div>
    </section>
  );
}