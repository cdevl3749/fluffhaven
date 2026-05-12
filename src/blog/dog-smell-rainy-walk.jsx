export default function DogSmellRainyWalk() {
  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>
            ← Back to Blog
          </a>

          <p style={category}>Dog care guide</p>

          <h1 style={title}>
            How to Remove Wet Dog Smell After Rainy Walks
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
            ❤️ 567 readers found this helpful
            </p>
        </div>

        <div style={content}>
          <p style={lead}>
            Wet dog smell after rainy walks is very common, especially during
            colder or humid seasons. Fortunately, a few simple habits can help
            keep your dog and home smelling fresh.
          </p>

          <p style={text}>
            Rainwater, wet fur and trapped moisture can create strong odors on
            blankets, furniture and carpets if dogs are not dried properly after
            walks.
          </p>

          <h2 style={h2}>Why wet dogs smell stronger after rain</h2>

          <p style={text}>
            When your dog gets wet, water helps release natural oils and
            bacteria trapped inside the coat. This creates the familiar wet dog
            smell many owners notice after outdoor walks.
          </p>

          <p style={text}>
            Long-haired dogs and dogs with thick coats often keep moisture for
            longer periods, especially around the paws, ears and belly.
          </p>

          <h2 style={h2}>Simple ways to reduce wet dog smell</h2>

          <ul style={list}>
            <li>Dry your dog with a towel immediately after walks</li>
            <li>Clean muddy paws before entering the house</li>
            <li>Wash blankets and dog beds regularly</li>
            <li>Brush wet fur gently to improve airflow</li>
            <li>Keep a clean drying towel near the entrance</li>
          </ul>

          <h2 style={h2}>Keep your home fresher after rainy walks</h2>

          <p style={text}>
            Creating a small cleaning routine after outdoor walks can greatly
            reduce humidity and odors inside your home.
          </p>

          <p style={text}>
            Paw cleaners, absorbent mats and quick drying habits can make rainy
            days much easier for both dogs and owners.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>
              Make rainy walks cleaner and easier
            </h3>

            <p style={ctaText}>
              Discover simple dog cleaning accessories and paw cleaners from
              FluffHaven.
            </p>

            <a href="https://fluffhaven.shop/#shop" style={ctaButton}>
              View dog accessories →
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