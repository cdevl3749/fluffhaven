export default function CatMeowNight() {
  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>
            ← Back to Blog
          </a>

          <p style={category}>Cat behavior guide</p>

          <h1 style={title}>Why does my cat meow at night?</h1>

          <p style={meta}>Published: May 2026 · 4 min read</p>
        </div>

        <div style={content}>
          <p style={lead}>
            Many cats meow at night because they feel bored, hungry, active or
            simply want attention when the house becomes quiet.
          </p>

          <p style={text}>
            Nighttime meowing can be frustrating for owners, but it is often a
            sign that your cat needs a better evening routine or more activity
            during the day.
          </p>

          <h2 style={h2}>Why cats meow during the night</h2>

          <p style={text}>
            Cats are naturally more active during quiet hours, especially early
            in the morning or late in the evening. Indoor cats may also use
            meowing to ask for food, play or company.
          </p>

          <p style={text}>
            If your cat spends a lot of time sleeping during the day, they may
            still have energy when you are ready to rest.
          </p>

          <h2 style={h2}>Simple ways to reduce nighttime meowing</h2>

          <ul style={list}>
            <li>Play with your cat for 10 to 15 minutes before bedtime</li>
            <li>Use feather toys or interactive toys to release energy</li>
            <li>Keep feeding times consistent every day</li>
            <li>Create a calm sleeping area away from noisy distractions</li>
            <li>Avoid rewarding meowing with too much attention at night</li>
          </ul>

          <h2 style={h2}>Build a calm evening routine</h2>

          <p style={text}>
            A predictable evening routine can help your cat understand when it
            is time to play, eat and settle down.
          </p>

          <p style={text}>
            Small changes like evening play, toy rotation and a quiet resting
            space can make nights calmer for both cats and their owners.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>Help your cat stay active before bedtime</h3>

            <p style={ctaText}>
              Discover simple cat toys and indoor accessories from FluffHaven.
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