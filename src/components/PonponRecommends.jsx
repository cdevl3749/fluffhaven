import "./PonponRecommends.css";

export default function PonponRecommends() {
  return (
    <section className="ponpon-recommends">
      <div
        className="ponpon-recommends-bar"
        onClick={() => (window.location.href = "/#shop")}
      >
        <img
          src="/ponpon.webp"
          alt="Ponpon"
          className="ponpon-avatar"
        />

        <div className="ponpon-content">
          <span className="ponpon-label">
            Recommended by Ponpon
          </span>

          <h3>Ponpon's Picks</h3>

          <p>
            Carefully selected for quality, comfort and everyday adventures.
          </p>
        </div>

        <button
          className="ponpon-button"
          onClick={(e) => {
            e.stopPropagation();
            window.location.href = "/#shop";
          }}
        >
          Explore Shop →
        </button>
      </div>
    </section>
  );
}