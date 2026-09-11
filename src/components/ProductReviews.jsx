export default function ProductReviews({ product }) {
    const isPetHairRemover = product?.slug === "pet-hair-remover-roller";

    return (
        <section className="product-reviews">
            <h2>Customer Reviews</h2>

            {isPetHairRemover ? (
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
            ) : (
                <div className="review-card">
                    <div className="review-header">
                        <div className="review-avatar">🐾</div>

                        <div>
                            <div className="review-name">
                                FluffHaven Community
                            </div>
                        </div>
                    </div>

                    <div className="review-verified">
                        Your experience matters
                    </div>

                    <p className="review-text">
                        We're committed to happy pets and happy pet parents.
                        Genuine customer experiences will be shared here.
                    </p>
                </div>
            )}
        </section>
    );
}