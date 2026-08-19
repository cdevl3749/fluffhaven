import { useState } from "react";

export default function ProductGallery({ product }) {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    const [isZoomOpen, setIsZoomOpen] = useState(false);

    return (
        <section className="product-gallery">
            <button
                type="button"
                className="product-main-image-button"
                onClick={() => setIsZoomOpen(true)}
                aria-label={`View ${product.name} image larger`}
            >
                <img
                    className="product-main-image"
                    src={selectedImage}
                    alt={product.name}
                />
            </button>

            <div className="product-thumbnails">
                {product.images.map((image, index) => (
                    <button
                        key={index}
                        className={
                            selectedImage === image
                                ? "product-thumbnail active"
                                : "product-thumbnail"
                        }
                        onClick={() => setSelectedImage(image)}
                        type="button"
                    >
                        <img
                            src={image}
                            alt={`${product.name} view ${index + 1}`}
                        />
                    </button>
                ))}
            </div>
            {isZoomOpen && (
            <div
                className="product-lightbox"
                onClick={() => setIsZoomOpen(false)}
            >
                <button
                    type="button"
                    className="product-lightbox-close"
                    onClick={() => setIsZoomOpen(false)}
                    aria-label="Close enlarged image"
                >
                    ×
                </button>

                <img
                    className="product-lightbox-image"
                    src={selectedImage}
                    alt={`${product.name} enlarged`}
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        )}
        </section>
    );
}