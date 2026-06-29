import { useState } from "react";

export default function ProductGallery({ product }) {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    return (
        <section className="product-gallery">
            <img
                className="product-main-image"
                src={selectedImage}
                alt={product.name}
            />

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
        </section>
    );
}