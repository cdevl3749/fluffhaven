import { useEffect } from "react";

export default function DogLickPawsAfterWalks() {

  useEffect(() => {
    document.title =
      "Why Dogs Lick Their Paws After Walks | FluffHaven";
  }, []);

  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>
            ← Back to Blog
          </a>

          <p style={category}>Dog care guide</p>

          <h1 style={title}>
            Why Dogs Lick Their Paws After Walks
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
            ❤️ 243 readers found this helpful
          </p>
        </div>

        <div style={content}>
          <p style={lead}>
            Many dogs lick their paws after walks, especially after walking on
            wet grass, sidewalks, dirt paths or hot pavement.
          </p>

          <p style={text}>
            In most cases this behavior is completely normal, but dirty paws,
            irritation or small outdoor particles can make dogs clean their paws
            more often after coming home.
          </p>

          <h2 style={h2}>Why dogs lick their paws</h2>

          <p style={text}>
            Dogs naturally clean themselves with licking. After outdoor walks,
            paws can collect dust, pollen, mud, salt or small debris that may
            feel uncomfortable.
          </p>

          <p style={text}>
            During warmer months, hot pavement can also dry paw pads and make
            dogs lick them more frequently once indoors.
          </p>

          <h2 style={h2}>Simple ways to keep paws cleaner after walks</h2>

          <ul style={list}>
            <li>Wipe paws with a soft towel after outdoor walks</li>
            <li>Use lukewarm water to remove dirt or salt</li>
            <li>Check paws for small stones or debris</li>
            <li>Keep fur around paw pads trimmed when needed</li>
            <li>Use a gentle paw cleaning routine before entering the house</li>
          </ul>

          <h2 style={h2}>A cleaner home starts with cleaner paws</h2>

          <p style={text}>
            Keeping your dog’s paws cleaner can help reduce muddy floors,
            furniture stains and unnecessary licking after walks.
          </p>

          <p style={text}>
            A quick routine only takes a few seconds and can make your home feel
            fresher every day.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>
              Make post-walk cleanup easier
            </h3>

            <p style={ctaText}>
              Discover simple dog paw cleaning accessories and everyday pet care
              essentials from FluffHaven.
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