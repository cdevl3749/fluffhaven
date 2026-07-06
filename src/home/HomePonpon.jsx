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
        <strong>Pet Approved</strong>
        <span>Tested by Ponpon</span>
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
      <strong>Happy Pets</strong>
      <span>Happy Humans</span>
    </div>
  </div>

</div>

        </div>

      </div>

    </section>
  );
}