export default function CatBoredAtHome() {
  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>
            ← Back to Blog
          </a>

          <p style={category}>Cat behavior guide</p>

          <h1 style={title}>
            Signs Your Indoor Cat Is Bored
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
            ❤️ 438 readers found this helpful
          </p>
        </div>

        <div style={content}>
          <p style={lead}>
            Indoor cats can become bored when they do not have enough activity,
            stimulation or play during the day.
          </p>

          <p style={text}>
            Bored cats may develop unusual behaviors, sleep too much or seek
            constant attention around the house.
          </p>

          <h2 style={h2}>Common signs of boredom in indoor cats</h2>

          <p style={text}>
            Cats naturally enjoy hunting, climbing and exploring. Without enough
            stimulation, they may try to create their own entertainment.
          </p>

          <p style={text}>
            Some cats become louder, scratch furniture more often or suddenly
            become very active at night.
          </p>

          <ul style={list}>
            <li>Sleeping most of the day</li>
            <li>Zoomies during the night</li>
            <li>Scratching walls or furniture</li>
            <li>Meowing constantly for attention</li>
            <li>Following owners everywhere around the house</li>
          </ul>

          <h2 style={h2}>Easy ways to keep indoor cats active</h2>

          <p style={text}>
            Small daily routines can make indoor cats happier and more relaxed.
            Interactive toys and climbing spaces help cats release energy in a
            healthy way.
          </p>

          <p style={text}>
            Rotating toys every few days can also make playtime feel more
            exciting and prevent boredom from returning too quickly.
          </p>

          <h2 style={h2}>Create a more stimulating environment</h2>

          <p style={text}>
            Window perches, scratching areas and short play sessions can help
            indoor cats stay mentally active and physically healthy.
          </p>

          <p style={text}>
            Even a few minutes of interactive play every evening can improve
            your cat’s mood and reduce destructive behaviors.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>
              Keep your indoor cat happy and active
            </h3>

            <p style={ctaText}>
              Discover interactive cat toys and indoor accessories from
              FluffHaven.
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