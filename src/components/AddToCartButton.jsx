export default function AddToCartButton({
  onClick,
  children = "Add to Cart • Free Shipping",
}) {
  return (
    <button
      className="product-add-button"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}