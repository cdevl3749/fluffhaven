export default function PonponPick() {
  return (
    <section className="ponpon-pick">
      <div className="ponpon-pick-card">

       <div className="ponpon-pick-visual">

        <img
            src="/ponpon-card.webp"
            alt="Ponpon"
            className="ponpon-pick-photo"
        />

        <img
            src="/gourde_ponpon.png"
            alt="Portable Dog Water Bottle"
            className="ponpon-pick-product"
        />

        </div>

        <div className="ponpon-pick-right">

          <span className="ponpon-pick-badge">
            <span className="ponpon-pick-paw">🐾</span>
              Ponpon's Summer Pick
          </span>

          <h3>
            Ponpon's favourite summer essential
          </h3>

          <p>
            Ponpon never goes on a summer walk without his
            favourite portable water bottle.
          </p>

          <a
            href="/product/portable-dog-water-bottle"
            className="ponpon-btn"
          >
            View Product →
          </a>

        </div>

      </div>
    </section>
  );
}