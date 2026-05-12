export default function StopCatScratchingFurniture() {
  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>
            ← Back to Blog
          </a>

          <p style={category}>Cat behavior guide</p>

          <h1 style={title}>
            How to Stop Cats Scratching Furniture
          </h1>

          <p style={meta}>Published: May 2026 · 4 min read</p>
          <p
            style={{
              fontSize: '14px',
              color: '#b46b7f',
              marginTop: '8px',
              fontWeight: '500'
            }}
          >
            ❤️ 479 readers found this helpful
          </p>
        </div>

        <div style={content}>
          <p style={lead}>
            Scratching is a completely natural behavior for cats, but it can
            quickly become frustrating when sofas, chairs or furniture are
            damaged every day.
          </p>

          <p style={text}>
            Fortunately, there are simple ways to redirect scratching habits and
            help your cat use more appropriate surfaces at home.
          </p>

          <h2 style={h2}>Why cats scratch furniture</h2>

          <p style={text}>
            Cats scratch to stretch their muscles, mark territory and maintain
            healthy claws. Furniture often becomes a target because it is stable
            and easy to grip.
          </p>

          <p style={text}>
            Indoor cats may also scratch more when they feel bored, stressed or
            lack enough stimulation during the day.
          </p>

          <h2 style={h2}>Simple ways to reduce destructive scratching</h2>

          <ul style={list}>
            <li>Place scratching posts near favorite resting areas</li>
            <li>Reward your cat when they use scratching surfaces</li>
            <li>Use interactive play to release extra energy</li>
            <li>Protect furniture corners temporarily if needed</li>
            <li>Rotate scratching toys to maintain interest</li>
          </ul>

          <h2 style={h2}>Create a cat-friendly environment</h2>

          <p style={text}>
            Giving cats dedicated scratching areas can reduce frustration and
            protect furniture at the same time.
          </p>

          <p style={text}>
            Combining scratching posts, climbing areas and regular play sessions
            often helps cats develop healthier indoor habits.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>
              Help your cat scratch the right surfaces
            </h3>

            <p style={ctaText}>
              Discover scratching toys and indoor cat accessories from
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