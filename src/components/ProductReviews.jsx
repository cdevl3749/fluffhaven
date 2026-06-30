import { REVIEWS } from "../data/reviews";

export default function ProductReviews({ product }) {
    const productReviews = REVIEWS[product?.category] || REVIEWS.dog;

    const randomReview =
        productReviews[Math.floor(Math.random() * productReviews.length)];

    const stars = "⭐".repeat(randomReview.rating);

    return (
        <section className="product-reviews">
            <h2>Customer Reviews</h2>

            <div className="review-card">
                <div className="review-name">
                    {randomReview.name} • {randomReview.country}
                </div>

                <div className="review-stars">{stars}</div>

                <p className="review-text">{randomReview.text}</p>
            </div>
        </section>
    );
}