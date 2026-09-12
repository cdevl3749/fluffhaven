export default function ProductReviews({ product }) {
    const isPetHairRemover = product?.slug === "pet-hair-remover-roller";

    // No review yet: don't display the reviews section
    if (!isPetHairRemover) {
        return null;
    }

    return (
        <section className="product-reviews">
            <h2>Customer Reviews</h2>

            <div className="review-card">
                <div className="review-header">
                    <img
                        src="/images/reviews/khoula-faheem.webp"
                        alt="Khoula Faheem"
                        className="review-avatar"
                    />

                    <div>
                        <div className="review-name">
                            Khoula Faheem
                        </div>
                        <div className="review-stars">
                            ★★★★★
                        </div>
                    </div>
                </div>

                <div className="review-verified">
                    ✓ Product Review
                </div>

                <p className="review-text">
                    “A must-have for keeping furniture fur-free!
                    The Pet Hair Remover Roller works instantly on
                    couches and clothes with zero sticky tape or hassle.
                    Highly recommend it to any pet owner!”
                </p>
            </div>
        </section>
    );
}