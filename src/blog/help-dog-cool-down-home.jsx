import { useEffect } from "react";

export default function HelpDogCoolDownHome() {

  useEffect(() => {
    document.title =
      "Best Ways To Help Dogs Cool Down At Home | FluffHaven";
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
            Summer dog guide
          </p>

          <h1
            style={{
              color: "#15110f",
              fontSize: "clamp(34px, 5vw, 56px)",
              lineHeight: "1.05",
              margin: "0 0 16px",
            }}
          >
            Best Ways To Help Dogs Cool Down At Home
          </h1>

          <p style={{ color: "#7b6f6a", fontSize: "18px", margin: 0 }}>
            Published: June 2026 · 5 min read
          </p>

          <p
            style={{
              fontSize: "14px",
              color: "#b46b7f",
              marginTop: "8px",
              fontWeight: "500",
            }}
          >
            🐶 Easy summer comfort tips for dogs
          </p>
        </div>

        <div style={{ padding: "42px 36px", color: "#1f1a17" }}>
          <p style={lead}>
            Dogs can struggle with heat indoors during summer, especially in the
            afternoon when rooms become warmer and airflow decreases.
          </p>

          <p style={text}>
            The good news is that a few simple changes can help your dog feel
            much more comfortable at home.
          </p>

          <h2 style={h2}>Keep fresh water available</h2>

          <p style={text}>
            Always make sure your dog has access to clean and cool water during
            hot days.
          </p>

          <h2 style={h2}>Create cooler resting spots</h2>

          <p style={text}>
            Many dogs naturally search for cooler surfaces during summer. Tiles,
            shaded areas and cooling mats can help them relax more comfortably.
          </p>

          <h2 style={h2}>Improve airflow indoors</h2>

          <ul style={list}>
            <li>Open windows during cooler hours</li>
            <li>Use fans safely around pets</li>
            <li>Keep curtains closed during peak heat</li>
            <li>Avoid intense play during hot afternoons</li>
          </ul>

          <h2 style={h2}>Watch for signs of discomfort</h2>

          <p style={text}>
            Excessive panting, low energy and constantly changing resting spots
            may indicate your dog is feeling too warm.
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
              Make summer more comfortable for your dog
            </h3>

            <p style={{ color: "#ddd", marginBottom: "20px" }}>
              Explore cooling accessories and pet essentials at FluffHaven.
            </p>

            <a
              href="https://fluffhaven.shop/#shop"
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
              View pet accessories →
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