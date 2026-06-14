import { useEffect } from "react";

export default function CatFollowMeEverywhere() {
  useEffect(() => {
    document.title =
      "Why Is My Cat Following Me Everywhere? | FluffHaven";
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
            Why Is My Cat Following Me Everywhere?
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
            ❤️ 356 readers found this helpful
          </p>
        </div>

        <div style={content}>
          <p style={lead}>
            Does your cat follow you from room to room, wait outside the
            bathroom door, or appear the moment you stand up?
          </p>

          <p style={text}>
            While some cats are known for being independent, many develop strong
            bonds with their owners and enjoy staying close throughout the day.
          </p>

          <h2 style={h2}>Your cat enjoys your company</h2>

          <p style={text}>
            One of the most common reasons is simple: your cat likes being near
            you. Cats often form strong attachments and feel comfortable around
            familiar people.
          </p>

          <p style={text}>
            Following you can be a sign of trust, affection and curiosity. Your
            cat may simply want to know what you are doing and be part of the
            action.
          </p>

          <h2 style={h2}>Other reasons cats follow their owners</h2>

          <ul style={list}>
            <li>Your cat is looking for attention</li>
            <li>They expect food or treats</li>
            <li>They are feeling playful</li>
            <li>They are curious about your activities</li>
            <li>They enjoy feeling safe near you</li>
          </ul>

          <p style={text}>
            Cats quickly learn routines. If following you has previously led to
            playtime, meals or affection, they may repeat the behavior
            regularly.
          </p>

          <h2 style={h2}>When should you be concerned?</h2>

          <p style={text}>
            In most cases, following behavior is completely normal. However, if
            it appears suddenly alongside changes in appetite, vocalization or
            energy levels, it may be worth discussing with your veterinarian.
          </p>

          <p style={text}>
            Providing daily enrichment, toys and interactive play sessions can
            help keep your cat happy while encouraging healthy independence.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>
              Keep your cat happy and engaged
            </h3>

            <p style={ctaText}>
              Discover interactive cat toys and practical accessories designed
              to support indoor cats every day.
            </p>

            <a href="https://fluffhaven.shop/?product=19" style={ctaButton}>
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