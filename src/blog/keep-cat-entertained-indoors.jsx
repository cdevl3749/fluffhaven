export default function KeepCatEntertainedIndoors() {
  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>
            ← Back to Blog
          </a>

          <p style={category}>Cat care guide</p>

          <h1 style={title}>How to keep your cat entertained indoors</h1>

          <p style={meta}>Published: May 2026 · 4 min read</p>
          <p
          style={{
            fontSize: '14px',
            color: '#b46b7f',
            marginTop: '8px',
            fontWeight: '500'
          }}
        >
          ❤️ 203 readers found this helpful
        </p>
        </div>

        <div style={content}>
          <p style={lead}>
            Indoor cats need daily stimulation to stay happy, active and less
            destructive around the home.
          </p>

          <p style={text}>
            Without enough play, cats can become bored, restless or start
            scratching furniture simply because they need something to do.
          </p>

          <h2 style={h2}>Why indoor cats get bored</h2>

          <p style={text}>
            Cats are natural hunters. Even calm indoor cats still enjoy chasing,
            jumping, hiding and exploring.
          </p>

          <p style={text}>
            A few short play sessions every day can make a big difference in
            their mood and behaviour.
          </p>

          <h2 style={h2}>Simple ways to entertain your cat</h2>

          <ul style={list}>
            <li>Use feather toys for short hunting-style play sessions</li>
            <li>Add a tunnel or hiding space for exploration</li>
            <li>Rotate toys every few days to keep them interesting</li>
            <li>Place a scratcher near your cat’s favourite resting spot</li>
            <li>Try interactive toys when your cat has extra energy</li>
          </ul>

          <h2 style={h2}>Keep play simple</h2>

          <p style={text}>
            You do not need a complicated setup. Most cats prefer simple toys
            that move, make soft sounds or give them a place to hide.
          </p>

          <p style={text}>
            The goal is to create small moments of activity throughout the day,
            especially if your cat spends many hours indoors.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>Make indoor play more fun</h3>

            <p style={ctaText}>
              Discover simple cat toys and accessories from FluffHaven.
            </p>

            <a href="https://fluffhaven.shop/#shop" style={ctaButton}>
              View cat toys →
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