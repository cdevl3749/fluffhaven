import { useEffect } from "react";

export default function CatSensitiveSkinCauses() {
  useEffect(() => {
    document.title =
      "Why Does My Cat Have Sensitive Skin? | FluffHaven";
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
            Why Does My Cat Have Sensitive Skin?
          </h1>

          <p style={meta}>Published: June 2026 · 5 min read</p>

          <p
            style={{
              fontSize: "14px",
              color: "#b46b7f",
              marginTop: "8px",
              fontWeight: "500",
            }}
          >
            ❤️ 312 readers found this helpful
          </p>
        </div>

        <div style={content}>
          <p style={lead}>
            Has your cat been scratching more than usual, over-grooming, or
            developing dry patches on their skin?
          </p>

          <p style={text}>
            Sensitive skin can affect cats of all ages. While some cats naturally
            have more delicate skin, environmental factors, grooming habits and
            seasonal changes can also play a role.
          </p>

          <h2 style={h2}>What causes sensitive skin in cats?</h2>

          <p style={text}>
            A cat's skin acts as a protective barrier. When that barrier becomes
            irritated, cats may experience itching, dryness or discomfort.
          </p>

          <p style={text}>
            In many cases, the cause is relatively simple and related to daily
            life rather than a serious medical issue.
          </p>

          <h2 style={h2}>Common triggers to watch for</h2>

          <ul style={list}>
            <li>Dry indoor air during colder months</li>
            <li>Dust and household allergens</li>
            <li>Seasonal pollen exposure</li>
            <li>Harsh grooming products</li>
            <li>Food sensitivities</li>
            <li>Flea bites and skin irritation</li>
          </ul>

          <p style={text}>
            Cats are often very good at hiding discomfort. Excessive grooming,
            licking or scratching may be one of the first signs that something is
            bothering them.
          </p>

          <h2 style={h2}>Signs your cat may have sensitive skin</h2>

          <p style={text}>
            You may notice dry skin flakes, excessive shedding, over-grooming,
            redness or small areas where the fur appears thinner than usual.
          </p>

          <p style={text}>
            Some cats may also become more restless or spend extra time grooming
            specific parts of their body.
          </p>

          <h2 style={h2}>How gentle grooming can help</h2>

          <p style={text}>
            Choosing a mild shampoo designed for sensitive skin can help remove
            dirt and excess oils without causing additional irritation.
          </p>

          <p style={text}>
            Gentle grooming can also help maintain a healthy coat and provide an
            opportunity to spot skin issues early before they become more
            noticeable.
          </p>

          <h2 style={h2}>When should you contact a veterinarian?</h2>

          <p style={text}>
            If your cat develops persistent itching, open sores, significant hair
            loss or sudden skin changes, it is always best to consult your
            veterinarian.
          </p>

          <p style={text}>
            A professional can determine whether allergies, parasites or another
            underlying issue may be contributing to the problem.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>
              Care for your cat's skin gently
            </h3>

            <p style={ctaText}>
              Discover our Sensitive Skin Cat Shampoo, formulated to help clean,
              moisturise and support cats with delicate skin.
            </p>

            <a href="/product/sensitive-skin-cat-shampoo" style={ctaButton}>
              View cat shampoo →
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