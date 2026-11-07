import React, { useState } from "react";
import { PRODUCTS } from "../data/products";
import Footer from "../components/Footer";

const categories = [
  { id: "coat", title: "Winter Coats", emoji: "🧥" },
  { id: "sweater", title: "Cozy Sweaters", emoji: "🧶" },
  { id: "christmas", title: "Christmas", emoji: "🎄" },
];

export default function CustomDog() {
  const [activeCategory, setActiveCategory] = useState("coat");
  const [selected, setSelected] = useState({});
  const [sizes, setSizes] = useState({});

 
const mannequinImage =
    selected.coat?.productId === 49
    ? "/custom-dog/dog-raincoat-waterproof-yellow-v2.png"
    :
    selected.coat?.productId === 27
    ? "/custom-dog/dog-raincoat-waterproof-yellow.png"
    :
    selected.coat?.productId === 69
    ? "/custom-dog/dog-vest-arctic-blue.png"
    :
      selected.coat?.productId === 64
    ? "/custom-dog/dog-coat-winter-reflective.png"
    : selected.coat?.productId === 176
    ? "/custom-dog/dog-coat-olive-green.png"
    : selected.coat?.product?.slug === "dusty-pink-winter-dog-coat"
    ? "/custom-dog/dog-coat-dusty-pink.png"
    : selected.sweater?.productId === 180
    ? "/custom-dog/dog-sweater-turquoise.png"
    : selected.christmas?.productId === 178
    ? "/custom-dog/dog-sweater-christmas-green.png"
    : selected.christmas?.productId === 179
    ? "/custom-dog/dog-sweater-christmas-reindeer.png"
    : selected.sweater?.productId === 181
    ? "/custom-dog/dog-sweater-pink-striped.png"
    : "/custom-dog/dog-mannequin-base.png";


  const resetOutfit = () => {
  setSelected({});
  setSizes({});
  setActiveCategory("coat");
};

  const choices = PRODUCTS
  .filter(
    (product) =>
      product.customDogCategory &&
      Array.isArray(product.customDogSizes) &&
      product.customDogSizes.length > 0 &&
      product.inStock !== false
  )
  .map((product) => ({
    productId: product.id,
    category: product.customDogCategory,
    sizes: product.customDogSizes,
    product,
  }));

  const visibleItems = choices.filter(
    (item) => item.category === activeCategory
  );

  const selectedItems = Object.entries(selected).filter(
    ([, item]) => Boolean(item)
  );

  const total = selectedItems.reduce(
    (sum, [, item]) => sum + Number(item.product.price || 0),
    0
  );

  const handleCustomCheckout = async () => {
  if (selectedItems.length === 0) return;

  for (const [category] of selectedItems) {
    if (!sizes[category]) {
      alert("Please choose a size for each selected item.");
      return;
    }
  }

 const items = selectedItems.map(([category, item]) => ({
  priceId: item.product.priceId,
  quantity: 1,
  size: sizes[category],
}));

  try {
    const response = await fetch(
      "/.netlify/functions/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.url) {
      alert(data.details || data.error || "Stripe checkout error");
      return;
    }

    window.location.href = data.url;
  } catch (error) {
    alert("Unable to connect to checkout. Please try again.");
  }
};

  const currentCategory = categories.find(
    (category) => category.id === activeCategory
  );

  
function chooseProduct(category, item) {
  const alreadySelected =
    selected[category]?.productId === item.productId;

  setSelected(() => ({
    coat: null,
    sweater: null,
    christmas: null,
    [category]: alreadySelected ? null : item,
  }));

  setSizes((previous) => ({
    coat: "",
    sweater: "",
    christmas: "",
    [category]: alreadySelected ? "" : previous[category] || "",
  }));
}


  const styles = {
    page: {
      minHeight: "100vh",
      padding: "18px 12px 45px",
      background: "linear-gradient(#edf6fb, #ffffff)",
      color: "#333",
      textAlign: "center",
    },
    container: {
      maxWidth: 1050,
      margin: "18px auto",
      padding: "clamp(12px, 3vw, 25px)",
      background: "#fff",
      borderRadius: 22,
      boxShadow: "0 8px 30px #00000010",
    },
    mannequin: {
      width: "100%",
      maxWidth: 440,
      margin: "12px auto 18px",
      padding: 8,
      borderRadius: 18,
      background: "#f0f7fb",
      boxSizing: "border-box",
    },
    tabs: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 8,
      margin: "14px 0 20px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(125px, 155px))",
      justifyContent: "center",
      gap: 12,
      marginTop: 12,
    },
    card: {
      padding: 9,
      borderRadius: 14,
      background: "#fff",
      cursor: "pointer",
      color: "#333",
      textAlign: "center",
      minWidth: 0,
      width: "100%",
      fontFamily: "inherit",
      boxSizing: "border-box",
    },
    image: {
      width: "100%",
      aspectRatio: "1 / 1",
      objectFit: "cover",
      borderRadius: 10,
      display: "block",
    },
    select: {
      width: "100%",
      maxWidth: 250,
      padding: 10,
      borderRadius: 10,
      border: "1px solid #c9c9c9",
      background: "#fff",
      color: "#333",
      fontSize: 16,
    },
  };

  return (
  <>
    <main style={styles.page}>
      <a
        href="/"
        style={{
          color: "#876654",
          fontWeight: 700,
          display: "inline-block",
          marginBottom: 12,
        }}
      >
        ← Back to Home
      </a>

      <h1
        style={{
          color: "#49372f",
          fontSize: "clamp(25px, 5vw, 39px)",
          margin: "8px 0",
          lineHeight: 1.2,
        }}
      >
        ❄️ Ponpon's Winter Custom Dog 🐾
      </h1>

      <p style={{ margin: "8px 0" }}>
        Create your dog's perfect winter outfit!
      </p>

      <div style={styles.container}>
        <h2
          style={{
            color: "#49372f",
            fontSize: "clamp(20px, 4vw, 27px)",
            margin: "5px 0",
          }}
        >
          🐶 Your Winter Outfit
        </h2>

        <p style={{ margin: "7px 0", fontSize: 14 }}>
          Choose your favorite styles and sizes.
        </p>

        
<div style={{ ...styles.mannequin, position: "relative" }}>
  <img
    src={mannequinImage}
    alt="Dog mannequin wearing selected outfit"
    style={{
      width: "100%",
      height: "auto",
      display: "block",
      objectFit: "contain",
    }}
  />

</div>

        <button
        type="button"
        onClick={resetOutfit}
        style={{
            cursor: "pointer",
            padding: "12px 24px",
            margin: "0 auto 20px",
            borderRadius: "25px",
            border: "1px solid #a77b63",
            background: "#f5ebe5",
            color: "#563c30",
            fontWeight: "bold",
            fontSize: "15px",
        }}
        >
        ↺ Reset Outfit
        </button>

        {/* Interactive category tabs */}
        <div
          role="group"
          aria-label="Choose an outfit category"
          style={styles.tabs}
        >
          {categories.map((category) => {
            const active = activeCategory === category.id;
            const hasSelection = Boolean(selected[category.id]);

            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  padding: "10px 14px",
                  borderRadius: 30,
                  border: active
                    ? "2px solid #96705d"
                    : "2px solid transparent",
                  background: active ? "#e9d7c8" : "#f4ebe4",
                  color: "#49372f",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  boxShadow: active
                    ? "0 3px 10px #00000012"
                    : "none",
                }}
              >
                {category.emoji} {category.title}
                {hasSelection ? " ✓" : ""}
              </button>
            );
          })}
        </div>

        {/* Only the active category is displayed */}
        <section
          aria-label={currentCategory?.title}
          style={{
            margin: "16px 0",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              color: "#49372f",
              fontSize: "clamp(18px, 3vw, 22px)",
              margin: "0 0 10px",
            }}
          >
            {currentCategory?.emoji} {currentCategory?.title}
          </h3>

        <div
        style={{
            ...styles.grid,
            justifyContent: "safe center",
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "auto",
            overflowY: "hidden",
            scrollSnapType: "x mandatory",
            gap: "12px",
            padding: "4px",
            maxWidth: "100%",
            boxSizing: "border-box",
        }}
        >
            {visibleItems.map((item) => {
              const active =
                selected[activeCategory]?.productId ===
                item.productId;

              return (
                <button
                  key={item.productId}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    chooseProduct(activeCategory, item)
                  }
                  style={{
                    ...styles.card,
                    flex: "0 0 145px",
                    minWidth: "0",
                    width: "145px",
                    boxSizing: "border-box",
                    scrollSnapAlign: "start",
                    border: active
                      ? "3px solid #a07860"
                      : "2px solid #e8e2dd",
                    background: active ? "#fff6ee" : "#fff",
                  }}
                >
                  <img
                    src={
                        item.productId === 49
                          ? "/custom-dog/dog-raincoat-waterproof-yellow-v2.png"
                        : item.productId === 27
                        ? "/custom-dog/dog-raincoat-waterproof-yellow.png"
                        : item.productId === 69
                        ? "/custom-dog/dog-vest-arctic-blue.png"
                        : item.productId === 64
                        ? "/custom-dog/dog-coat-winter-reflective.png"
                        : item.product.images?.[0]
                    }
                    alt={item.product.name}
                    style={styles.image}
                  />

                  <strong
                    style={{
                      display: "block",
                      marginTop: 7,
                      fontSize: 13,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.product.name}
                  </strong>

                  <span
                    style={{
                      display: "block",
                      marginTop: 5,
                      fontWeight: 800,
                      fontSize: 15,
                    }}
                  >
                    ${Number(item.product.price).toFixed(2)}
                  </span>

                  <span
                    style={{
                      display: "block",
                      marginTop: 5,
                      color: active ? "#79533e" : "#777",
                      fontSize: 13,
                    }}
                  >
                    {active ? "✓ Selected" : "Select"}
                  </span>
                </button>
              );
            })}
          </div>

          {selected[activeCategory] && (
            <div
              style={{
                maxWidth: 360,
                margin: "14px auto 0",
                padding: 12,
                background: "#f5f8fa",
                borderRadius: 12,
                textAlign: "center",
              }}
            >
              <label
                htmlFor={`size-${activeCategory}`}
                style={{
                  display: "block",
                  fontWeight: 700,
                  marginBottom: 8,
                  fontSize: 14,
                }}
              >
                Choose your size
              </label>

              <select
                id={`size-${activeCategory}`}
                value={sizes[activeCategory] || ""}
                onChange={(event) =>
                  setSizes((previous) => ({
                    ...previous,
                    [activeCategory]: event.target.value,
                  }))
                }
                style={{ ...styles.select, cursor: "pointer" }}
              >
                <option value="">Select a size</option>
                {selected[activeCategory].sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}
        </section>

        {/* Persistent outfit summary */}
        <div
          style={{
            marginTop: 22,
            padding: "18px 12px",
            borderRadius: 16,
            background: "#f8f0e9",
          }}
        >
          <h3
            style={{
              color: "#49372f",
              margin: "0 0 12px",
            }}
          >
            🛍️ Your Winter Selection
          </h3>

          {selectedItems.length === 0 ? (
            <p style={{ fontSize: 14 }}>
              Select your favorite winter items above.
            </p>
          ) : (
            selectedItems.map(([category, item]) => (
              <p
                key={category}
                style={{
                  fontSize: 14,
                  margin: "7px 0",
                }}
              >
                {item.product.name}
                {" — "}
                {sizes[category] || "Choose a size"}
              </p>
            ))
          )}

          <p
            style={{
              fontSize: 25,
              fontWeight: 800,
              color: "#49372f",
              margin: "15px 0 8px",
            }}
          >
            Total: ${total.toFixed(2)} USD
          </p>

                    <button
            type="button"
            onClick={handleCustomCheckout}
            disabled={selectedItems.length === 0}
            style={{
              display: "block",
              width: "100%",
              maxWidth: 420,
              margin: "18px auto",
              padding: "15px 20px",
              background: "#f7b940",
              color: "#30251e",
              border: "none",
              borderRadius: 14,
              fontSize: 18,
              fontWeight: 700,
              cursor: selectedItems.length ? "pointer" : "not-allowed",
              opacity: selectedItems.length ? 1 : 0.5,
              transition: "background 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
            if (!selectedItems.length) return;
            e.currentTarget.style.background = "#e9a72f";
            e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
            e.currentTarget.style.background = "#f7b940";
            e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span style={{ fontSize: 12, marginRight: 5 }}>🔒</span>
                Buy Now →
          </button>

          <p
            style={{
              color: "#77695f",
              fontSize: 12,
              margin: 0,
            }}
          >
            Secure payment powered by Stripe
          </p>
        </div>
      </div>
            
         </main>

      {/* FOOTER CUSTOM DOG */}
      <Footer />

    </>
  );
}
  
