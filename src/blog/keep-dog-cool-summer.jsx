export default function KeepDogCoolSummer() {
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
            How to keep your dog cool during summer walks
          </h1>

          <p style={{ color: "#7b6f6a", fontSize: "18px", margin: 0 }}>
            Published: May 2026 · 4 min read
          </p>
        </div>

        <div style={{ padding: "42px 36px", color: "#1f1a17" }}>
          <p style={lead}>
            Summer walks can quickly become dangerous for dogs when temperatures
            rise too much.
          </p>

          <p style={text}>
            Many owners underestimate how fast dogs can overheat, especially on
            hot pavement or during long afternoon walks.
          </p>

          <h2 style={h2}>Why summer heat is risky for dogs</h2>

          <p style={text}>
            Dogs do not cool down like humans. They mainly regulate heat through
            panting, which becomes less effective during extreme temperatures.
          </p>

          <p style={text}>
            Hot asphalt can also burn sensitive paws in just a few minutes.
          </p>

          <h2 style={h2}>Signs your dog is overheating</h2>

          <ul style={list}>
            <li>Heavy panting</li>
            <li>Walking slower than usual</li>
            <li>Excessive drooling</li>
            <li>Looking for shade constantly</li>
            <li>Refusing to continue walking</li>
          </ul>

          <h2 style={h2}>Simple ways to keep your dog cooler</h2>

          <p style={text}>
            Try walking earlier in the morning or later in the evening when the
            ground is cooler.
          </p>

          <p style={text}>
            Bring fresh water during walks and take regular breaks in shaded
            areas whenever possible.
          </p>

          <p style={text}>
            Some dog owners also use cooling mats, portable water bottles or
            breathable harnesses during summer months.
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
              Summer walks made easier
            </h3>

            <p style={{ color: "#ddd", marginBottom: "20px" }}>
              Discover simple accessories used by FluffHaven customers during
              hot summer walks.
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
              View summer accessories →
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