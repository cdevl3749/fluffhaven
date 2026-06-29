export default function AddToCartButton({
  onClick,
  children = "Add to Cart",
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