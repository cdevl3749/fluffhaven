import { useEffect } from "react";

export default function CatHairOnClothes() {
  useEffect(() => {
    document.title =
      "How To Stop Cat Hair On Clothes | FluffHaven";
  }, []);

  return (
    <main
      style={{
        background: "#f6f2ed",
        minHeight: "100vh",
        padding: "50px 18px",
        fontFamily: "inherit",
      }}
    >
      <article
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 18px 50px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            padding: "48px 36px 34px",
            background: "linear-gradient(135deg, #fff7f8, #ffffff)",
            textAlign: "center",
            borderBottom: "1px solid #f0e6e6",
          }}
        >
          <a
            href="/blog"
            style={{
              display: "inline-block",
              marginBottom: "22px",
              color: "#d14d68",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            ← Back to Blog
          </a>

          <p
            style={{
              color: "#d14d68",
              fontWeight: "800",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontSize: "13px",
              marginBottom: "14px",
            }}
          >
            Cat care guide
          </p>

          <h1
            style={{
              color: "#15110f",
              fontSize: "clamp(34px, 5vw, 56px)",
              lineHeight: "1.05",
              margin: "0 0 16px",
            }}
          >
            How to stop cat hair on clothes
          </h1>

          <p style={{ color: "#7b6f6a", fontSize: "18px", margin: 0 }}>
            Published: May 2026 · 4 min read
          </p>

          <p
            style={{
              fontSize: "14px",
              color: "#b46b7f",
              marginTop: "8px",
              fontWeight: "500",
            }}
          >
            ❤️ 204 readers found this helpful
          </p>
        </div>

        <div style={{ padding: "42px 36px", color: "#1f1a17" }}>
          <p style={lead}>
            Cat hair on clothes can feel impossible to avoid, especially if
            your cat loves beds, blankets or sofas.
          </p>

          <p style={text}>
            The good news is that a few small habits can greatly reduce loose
            fur on your clothes and fabrics every day.
          </p>

          <h2 style={h2}>Why cat hair sticks everywhere</h2>

          <p style={text}>
            Cat fur is light and easily attaches to fabric because of static
            electricity. Soft materials like sweaters, blankets and dark
            clothes usually attract the most hair.
          </p>

          <h2 style={h2}>Simple ways to reduce cat hair on clothes</h2>

          <ul style={list}>
            <li>Brush your cat regularly</li>
            <li>Keep lint rollers near clothing areas</li>
            <li>Wash blankets and pet beds often</li>
            <li>Avoid leaving clean clothes exposed</li>
          </ul>

          <h2 style={h2}>A small daily routine helps a lot</h2>

          <p style={text}>
            Removing loose hair before it spreads around the house is much
            easier than trying to clean everything later.
          </p>

          <h2 style={h2}>Keep your home and fabrics cleaner</h2>

          <p style={text}>
            A simple grooming routine can help reduce shedding on couches,
            clothes and beds while keeping your cat comfortable at the same
            time.
          </p>

          <div
            style={{
              marginTop: "38px",
              padding: "28px",
              background: "#17120f",
              color: "#fff",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "26px", margin: "0 0 10px" }}>
              Looking for easy pet cleaning tools?
            </h3>

            <p style={{ color: "#ddd", marginBottom: "20px" }}>
              Discover simple pet accessories from FluffHaven.
            </p>

            <a
              href="https://fluffhaven.shop/?product=0"
              style={{
                display: "inline-block",
                background: "#fff",
                color: "#111",
                padding: "14px 22px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: "800",
              }}
            >
              View paw cleaner →
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}

const lead = {
  fontSize: "21px",
  lineHeight: "1.75",
  marginBottom: "18px",
};

const text = {
  fontSize: "18px",
  lineHeight: "1.75",
  marginBottom: "18px",
};

const h2 = {
  color: "#15110f",
  fontSize: "30px",
  marginTop: "38px",
  marginBottom: "12px",
};

const list = {
  fontSize: "18px",
  lineHeight: "1.9",
  paddingLeft: "24px",
  marginBottom: "22px",
};