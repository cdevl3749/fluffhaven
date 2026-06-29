import { useEffect } from "react";

export default function ReduceCatHairFurniture() {

  useEffect(() => {
    document.title =
      "How To Reduce Cat Hair On Furniture | FluffHaven";
  }, []);

  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>
            ← Back to Blog
          </a>

          <p style={category}>Cat care guide</p>

          <h1 style={title}>
            How To Reduce Cat Hair On Furniture
          </h1>

          <p style={meta}>Published: May 2026 · 5 min read</p>

          <p
            style={{
              fontSize: '14px',
              color: '#b46b7f',
              marginTop: '8px',
              fontWeight: '500'
            }}
          >
            ❤️ 318 readers found this helpful
          </p>
        </div>

        <div style={content}>
          <p style={lead}>
            Cat hair on sofas, beds and furniture can quickly build up,
            especially during shedding seasons or in homes with indoor cats.
          </p>

          <p style={text}>
            While shedding is completely normal, a few simple habits can help
            reduce loose fur and keep your home cleaner every day.
          </p>

          <h2 style={h2}>Why cat hair sticks everywhere</h2>

          <p style={text}>
            Soft fabrics, blankets and couches naturally attract loose cat fur.
            Static electricity can also make hair cling to furniture and clothing.
          </p>

          <p style={text}>
            Long-haired cats and seasonal coat changes often increase shedding,
            especially during spring and warmer months.
          </p>

          <h2 style={h2}>Simple ways to reduce cat hair indoors</h2>

          <ul style={list}>
            <li>Brush your cat regularly to remove loose fur</li>
            <li>Use washable blankets on sofas and beds</li>
            <li>Vacuum furniture frequently during shedding periods</li>
            <li>Keep lint rollers in common living areas</li>
            <li>Clean cat resting spots more often</li>
          </ul>

          <h2 style={h2}>Create a cleaner and more comfortable home</h2>

          <p style={text}>
            A consistent cleaning routine can make a huge difference for keeping
            furniture cleaner and reducing visible fur around the house.
          </p>

          <p style={text}>
            Small daily habits are often enough to keep cat hair under control
            without adding stress to your routine.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>
              Keep your home cleaner with simple pet care tools
            </h3>

            <p style={ctaText}>
              Discover practical pet cleaning accessories and home essentials
              from FluffHaven.
            </p>

            <a href="/product/cat-self-grooming-brush" style={ctaButton}>
              View cat tunnel →
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