import { REVIEWS } from "../data/reviews";

export default function ProductReviews({ product }) {
    const productReviews = REVIEWS[product?.category] || REVIEWS.dog;

    const randomReview =
        productReviews[Math.floor(Math.random() * productReviews.length)];

    const stars = "⭐".repeat(randomReview.rating);

    const initial = randomReview.name.charAt(0);

    const reviewDates = ["May 2026", "June 2026", "2 weeks ago", "1 month ago"];
    const randomDate =
    reviewDates[Math.floor(Math.random() * reviewDates.length)];

    return (
        <section className="product-reviews">
            <h2>Customer Reviews</h2>

            <div className="review-card">
               <div className="review-header">
                    <div className="review-avatar">{initial}</div>

                    <div>
                        <div className="review-name">
                            {randomReview.name} • {randomReview.country}
                        </div>
                    </div>
                </div>

                <div className="review-stars">{stars}</div>

                <div className="review-verified">
                    ✓ Verified Purchase
                </div>

                <div className="review-date">
                    {randomDate}
                </div>

                <p className="review-text">{randomReview.text}</p>
            </div>
        </section>
    );
}