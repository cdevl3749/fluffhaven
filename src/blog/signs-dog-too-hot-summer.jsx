import { useEffect } from "react";

export default function SignsDogTooHotSummer() {

  useEffect(() => {
    document.title =
      "Signs Your Dog Is Too Hot During Summer Walks | FluffHaven";
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
            Signs Your Dog Is Too Hot During Summer Walks
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
            ☀️ Summer safety tips for happier walks
          </p>
        </div>

        <div style={{ padding: "42px 36px", color: "#1f1a17" }}>
          <p style={lead}>
            Summer walks can be fun for dogs, but hot temperatures can quickly
            become dangerous if owners miss the warning signs.
          </p>

          <p style={text}>
            Dogs do not cool down the same way humans do. Even a normal walk can
            become too intense during hot weather.
          </p>

          <h2 style={h2}>Common signs your dog is overheating</h2>

          <ul style={list}>
            <li>Heavy panting</li>
            <li>Walking slower than usual</li>
            <li>Searching for shade constantly</li>
            <li>Drooling more than normal</li>
            <li>Lying down during walks</li>
            <li>Very warm ears or paws</li>
          </ul>

          <h2 style={h2}>Why hot sidewalks matter</h2>

          <p style={text}>
            Pavement and sidewalks can become extremely hot during summer and may
            hurt sensitive paws after only a few minutes outside.
          </p>

          <h2 style={h2}>Simple ways to keep dogs cooler</h2>

          <ul style={list}>
            <li>Walk early in the morning or later in the evening</li>
            <li>Bring fresh water during walks</li>
            <li>Take more breaks in shaded areas</li>
            <li>Avoid long walks during peak heat</li>
          </ul>

          <h2 style={h2}>Cooling comfort at home</h2>

          <p style={text}>
            After outdoor time, many dogs enjoy resting on cooler surfaces to
            recover comfortably from the heat.
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
              Help your dog stay cooler this summer
            </h3>

            <p style={{ color: "#ddd", marginBottom: "20px" }}>
              Discover simple summer essentials for dogs at FluffHaven.
            </p>

            <a
              href="https://fluffhaven.shop/?product=2"
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
              View cooling mat →
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