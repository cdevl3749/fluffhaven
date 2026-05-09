export default function CatScratchSofa() {
  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>
            ← Back to Blog
          </a>

          <p style={category}>Cat behavior guide</p>

          <h1 style={title}>Why does my cat scratch the sofa?</h1>

          <p style={meta}>Published: May 2026 · 4 min read</p>
        </div>

        <div style={content}>
          <p style={lead}>
            Scratching is completely natural for cats, even when it becomes
            frustrating for furniture owners.
          </p>

          <p style={text}>
            Cats scratch sofas, carpets and furniture to stretch their muscles,
            mark territory and maintain healthy claws.
          </p>

          <h2 style={h2}>Why cats love scratching sofas</h2>

          <p style={text}>
            Sofas often have textures cats enjoy digging their claws into. They
            are also large objects placed in busy parts of the home.
          </p>

          <p style={text}>
            Cats naturally choose places where they spend time with their
            owners, which is why scratching near the living room is very common.
          </p>

          <h2 style={h2}>Simple ways to protect your furniture</h2>

          <ul style={list}>
            <li>Place a scratcher close to the sofa</li>
            <li>Reward your cat when they use the scratcher</li>
            <li>Try different scratching textures and shapes</li>
            <li>Keep your cat mentally stimulated with daily play</li>
            <li>Rotate toys regularly to reduce boredom</li>
          </ul>

          <h2 style={h2}>Avoid punishment</h2>

          <p style={text}>
            Punishing a cat for scratching usually creates stress and confusion.
            It is more effective to redirect the behaviour toward appropriate
            scratching surfaces.
          </p>

          <p style={text}>
            Most cats quickly learn new habits when they have attractive places
            to scratch nearby.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>Help your cat scratch the right place</h3>

            <p style={ctaText}>
              Discover simple cat toys and scratching accessories from
              FluffHaven.
            </p>

            <a href="https://fluffhaven.shop/#shop" style={ctaButton}>
              View cat accessories →
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}

const page = {
  background: "#f6f2ed",
  minHeight: "100vh",
  padding: "50px 18px",
  fontFamily: "inherit",
};

const article = {
  maxWidth: "880px",
  margin: "0 auto",
  background: "#fff",
  borderRadius: "24px",
  overflow: "hidden",
  boxShadow: "0 18px 50px rgba(0,0,0,0.08)",
};

const hero = {
  padding: "48px 36px 34px",
  background: "linear-gradient(135deg, #fff7f8, #ffffff)",
  textAlign: "center",
  borderBottom: "1px solid #f0e6e6",
};

const backLink = {
  display: "inline-block",
  marginBottom: "22px",
  color: "#d14d68",
  textDecoration: "none",
  fontWeight: "700",
};

const category = {
  color: "#d14d68",
  fontWeight: "800",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  fontSize: "13px",
  marginBottom: "14px",
};

const title = {
  color: "#15110f",
  fontSize: "clamp(34px, 5vw, 56px)",
  lineHeight: "1.05",
  margin: "0 0 16px",
};

const meta = {
  color: "#7b6f6a",
  fontSize: "18px",
  margin: 0,
};

const content = {
  padding: "42px 36px",
  color: "#1f1a17",
};

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

const cta = {
  marginTop: "38px",
  padding: "28px",
  background: "#17120f",
  color: "#fff",
  borderRadius: "20px",
  textAlign: "center",
};

const ctaTitle = {
  fontSize: "26px",
  margin: "0 0 10px",
};

const ctaText = {
  color: "#ddd",
  marginBottom: "20px",
};

const ctaButton = {
  display: "inline-block",
  background: "#fff",
  color: "#111",
  padding: "14px 22px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "800",
};