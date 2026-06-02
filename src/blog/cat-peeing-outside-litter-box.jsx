import { useEffect } from "react";

export default function CatPeeingOutsideLitterBox() {

  useEffect(() => {
    document.title =
      "Why Is My Cat Peeing Outside The Litter Box? | FluffHaven";
  }, []);

  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>
            ← Back to Blog
          </a>

          <p style={category}>Cat behavior guide</p>

          <h1 style={title}>
            Why is my cat peeing outside the litter box?
          </h1>

          <p style={meta}>Published: May 2026 · 5 min read</p>

          <p
            style={{
              fontSize: "14px",
              color: "#b46b7f",
              marginTop: "8px",
              fontWeight: "500",
            }}
          >
            ❤️ 412 readers found this helpful
          </p>
        </div>

        <div style={content}>
          <p style={lead}>
            When a cat suddenly starts peeing outside the litter box, it is
            often a sign that something has changed in their environment,
            routine or health.
          </p>

          <p style={text}>
            While many owners assume it is a behavior problem, litter box
            accidents can have several causes. Understanding the reason is the
            first step toward solving the issue and helping your cat feel
            comfortable again.
          </p>

          <h2 style={h2}>Common reasons cats avoid the litter box</h2>

          <p style={text}>
            Cats are naturally clean animals. If they stop using their litter
            box, there is usually a reason behind it.
          </p>

          <ul style={list}>
            <li>A dirty litter box that is not cleaned often enough</li>
            <li>Stress caused by changes in the home</li>
            <li>A new pet or family member</li>
            <li>Dislike of a new litter type or scent</li>
            <li>Medical problems affecting urination</li>
          </ul>

          <p style={text}>
            Even small changes, such as moving the litter box to a different
            room, can sometimes cause a sensitive cat to avoid it.
          </p>

          <h2 style={h2}>Check for possible health issues</h2>

          <p style={text}>
            If the behavior appears suddenly, it is important to rule out
            medical causes. Urinary tract infections, bladder problems and
            other health conditions can make urination painful or difficult.
          </p>

          <p style={text}>
            A veterinarian can help identify whether there is an underlying
            medical issue that needs treatment.
          </p>

          <h2 style={h2}>Reduce stress and improve litter box comfort</h2>

          <p style={text}>
            Cats thrive on routine. Providing a quiet, predictable environment
            can help reduce stress-related litter box problems.
          </p>

          <ul style={list}>
            <li>Keep litter boxes clean every day</li>
            <li>Place boxes in quiet locations</li>
            <li>Avoid sudden litter changes when possible</li>
            <li>Provide enough litter boxes for multiple cats</li>
            <li>Maintain a consistent daily routine</li>
          </ul>

          <p style={text}>
            Many cats return to normal litter box habits once the source of
            stress or discomfort has been addressed.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>
              Create a happier environment for your cat
            </h3>

            <p style={ctaText}>
              Discover cat accessories and enrichment products designed to help
              indoor cats feel comfortable and relaxed.
            </p>

            <a href="https://fluffhaven.shop/#shop" style={ctaButton}>
              View cat products →
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

