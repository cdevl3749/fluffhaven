import "./HomePonpon.css";
import { HOME_VERSION } from "./homeConfig";

export default function HomePonpon() {
    if (HOME_VERSION !== "B") return null;

  return (
    <section className="ponpon-home">

      <div className="ponpon-container">

       <div className="ponpon-left">

        <div className="ponpon-photo">

            <img
              src="/ponpon.webp"
              alt="Ponpon"
              loading="eager"
              fetchPriority="high"
            />

        </div>

        </div>

        <div className="ponpon-right">

          <div className="ponpon-kicker">
            MEET PONPON
          </div>

        <h1 className="ponpon-title">
        Pet essentials
        <br />
        <span>chosen by Ponpon</span>
        </h1>

          <p className="ponpon-description">
           Premium essentials for dogs and cats, carefully selected and approved by Ponpon.
          </p>

          <button
            className="ponpon-shop-btn"
            onClick={() =>
                document.getElementById("shop")?.scrollIntoView({
                behavior: "smooth",
                })
            }
            >
            SHOP NOW →
            </button>

            <div className="ponpon-usa">
  <svg
    className="ponpon-usa-flag"
    viewBox="0 0 741 390"
    aria-hidden="true"
  >
    <rect width="741" height="390" fill="#fff" />

    <g fill="#b22234">
      <rect width="741" height="30" y="0" />
      <rect width="741" height="30" y="60" />
      <rect width="741" height="30" y="120" />
      <rect width="741" height="30" y="180" />
      <rect width="741" height="30" y="240" />
      <rect width="741" height="30" y="300" />
      <rect width="741" height="30" y="360" />
    </g>

    <rect width="296" height="210" fill="#3c3b6e" />
    <g fill="#fff">
  {Array.from({ length: 5 }).map((_, row) =>
    Array.from({ length: 6 }).map((_, col) => (
      <circle
        key={`star-${row}-${col}`}
        cx={24 + col * 48}
        cy={20 + row * 40}
        r="6"
      />
    ))
  )}
</g>
  </svg>

  <span>
    Loved by pet parents across the <strong>USA</strong>
  </span>
</div>

          <div className="ponpon-features">

    <div className="ponpon-feature">
        <div className="ponpon-icon">✓</div>

        <div>
        <strong>Premium Quality</strong>
        <span>Carefully selected</span>
        </div>
    </div>

    <div className="ponpon-feature">
      <div className="ponpon-icon">✓</div>

      <div>
        <strong>Secure Checkout</strong>
        <span>Protected payment</span>
      </div>
    </div>

    <div className="ponpon-feature">
        <div className="ponpon-icon">✓</div>

        <div>
        <strong>Fast Shipping</strong>
        <span>Reliable & secure</span>
        </div>
    </div>

    <div className="ponpon-feature">
        <div className="ponpon-icon">✓</div>

    <div>
      <strong>14-Day Returns</strong>
      <span>Easy returns</span>
    </div>
  </div>

</div>

        </div>

      </div>

    </section>
  );
}