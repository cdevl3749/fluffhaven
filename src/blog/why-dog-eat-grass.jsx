import { useEffect } from "react";

export default function WhyDogEatGrass() {
  useEffect(() => {
    document.title =
      "Why Does My Dog Eat Grass? | FluffHaven";
  }, []);

  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>
            ← Back to Blog
          </a>

          <p style={category}>Dog behavior guide</p>

          <h1 style={title}>
            Why Does My Dog Eat Grass?
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
            ❤️ 327 readers found this helpful
          </p>
        </div>

        <div style={content}>
          <p style={lead}>
            Seeing your dog suddenly stop during a walk to chew on grass can be
            confusing. Many owners immediately worry that something is wrong.
          </p>

          <p style={text}>
            The good news is that eating grass is extremely common in dogs and,
            in most cases, is considered normal behavior.
          </p>

          <h2 style={h2}>Why do dogs eat grass?</h2>

          <p style={text}>
            Experts still debate the exact reason, but several explanations may
            help explain this behavior. Some dogs simply enjoy the taste or
            texture of fresh grass.
          </p>

          <p style={text}>
            Others may eat grass out of boredom, curiosity, or as part of their
            natural instinct to explore their environment. It does not
            necessarily mean your dog is sick.
          </p>

          <h2 style={h2}>Should you be concerned?</h2>

          <p style={text}>
            Most dogs that eat grass show no signs of illness and continue their
            normal activities afterward.
          </p>

          <ul style={list}>
            <li>Your dog eats grass occasionally</li>
            <li>Your dog remains active and energetic</li>
            <li>There is no vomiting or diarrhea</li>
            <li>Your dog continues eating regular meals</li>
            <li>The behavior happens only from time to time</li>
          </ul>

          <p style={text}>
            However, if grass eating suddenly becomes excessive or is combined
            with digestive problems, it may be worth speaking with your
            veterinarian.
          </p>

          <h2 style={h2}>How to reduce unwanted grass eating</h2>

          <p style={text}>
            Keeping your dog mentally stimulated and physically active can help
            reduce repetitive behaviors. Longer walks, interactive toys and
            regular play sessions often make a noticeable difference.
          </p>

          <p style={text}>
            Many owners also find that maintaining a healthy daily routine helps
            their dog stay focused and engaged throughout the day.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>
              Explore practical dog essentials
            </h3>

            <p style={ctaText}>
              Discover useful accessories designed to make daily walks, playtime
              and pet care easier with FluffHaven.
            </p>

            <a href="https://fluffhaven.shop/?product=13" style={ctaButton}>
              View slow feeder bowl →
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
