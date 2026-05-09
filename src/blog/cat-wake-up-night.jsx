export default function CatWakeUpNight() {
  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>
            ← Back to Blog
          </a>

          <p style={category}>Cat behavior guide</p>

          <h1 style={title}>Why does my cat wake me up at night?</h1>

          <p style={meta}>Published: May 2026 · 4 min read</p>
        </div>

        <div style={content}>
          <p style={lead}>
            Many indoor cats become more active during the night, especially
            when they do not get enough stimulation during the day.
          </p>

          <p style={text}>
            Night zoomies, meowing and paw tapping are common behaviours for
            cats that still have energy before bedtime.
          </p>

          <h2 style={h2}>Why cats become active at night</h2>

          <p style={text}>
            Cats naturally follow hunting instincts. Even indoor cats often feel
            more alert early in the morning or late at night.
          </p>

          <p style={text}>
            Boredom, lack of play and irregular feeding schedules can also make
            nighttime activity worse.
          </p>

          <h2 style={h2}>Simple ways to improve sleep</h2>

          <ul style={list}>
            <li>Play with your cat before bedtime</li>
            <li>Use interactive toys during the evening</li>
            <li>Keep feeding times consistent every day</li>
            <li>Create a calm sleeping area for your cat</li>
            <li>Avoid encouraging nighttime attention-seeking</li>
          </ul>

          <h2 style={h2}>Keep routines consistent</h2>

          <p style={text}>
            Most cats adapt well when they follow a predictable daily routine
            with regular meals, playtime and rest.
          </p>

          <p style={text}>
            Small changes in activity and stimulation can help both cats and
            owners sleep more peacefully at night.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>Help your cat stay active during the day</h3>

            <p style={ctaText}>
              Discover fun toys and simple indoor accessories from FluffHaven.
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