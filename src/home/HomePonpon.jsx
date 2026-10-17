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
          Inspired by Ponpon, our rescue dog from{" "}
          <span style={{ whiteSpace: "nowrap" }}>Spain. ❤️</span>
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
  <span className="ponpon-usa-flag" role="img" aria-label="United States" />

  <span className="ponpon-pr-flag" aria-label="Puerto Rico" role="img">
  <span className="ponpon-pr-star">★</span>
  </span>

 <span>
  <strong>USA & Puerto Rico</strong> welcome!
 </span>
</div>

        </div>

      </div>

    </section>
  );
}