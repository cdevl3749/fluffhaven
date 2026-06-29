export default function ProductReviews({ product }) {

    const reviews = [
        {
        name: "Emily",
        country: "Texas, USA",
        rating: 5,
        text: "This roller removed so much hair from my couch. Highly recommended!"
    }
];

    return (
        <section className="product-reviews">
            <h2>Customer Reviews</h2>

            <div className="review-card">
                <div className="review-name">
                    {reviews[0].name} • {reviews[0].country}
                </div>

                <div className="review-stars">
                    ⭐⭐⭐⭐⭐
                </div>

                <p className="review-text">
                    {reviews[0].text}
                </p>
            </div>
        </section>
            );
}