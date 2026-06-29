import { useEffect } from "react";

export default function CalmAnxiousDogHome() {

  useEffect(() => {
    document.title =
      "How To Calm An Anxious Dog At Home | FluffHaven";
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
            How To Calm An Anxious Dog At Home
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
            ❤️ 287 readers found this helpful
          </p>
        </div>

        <div style={content}>
          <p style={lead}>
            Anxiety in dogs can appear in many different ways — barking,
            pacing, destructive behavior or constant stress when left alone.
          </p>

          <p style={text}>
            Creating a calm daily environment can help your dog feel safer,
            happier and more relaxed at home.
          </p>

          <h2 style={h2}>Why some dogs feel anxious</h2>

          <p style={text}>
            Dogs can become anxious because of loud noises, loneliness,
            boredom, changes in routine or lack of mental stimulation.
          </p>

          <p style={text}>
            Rescue dogs and highly energetic breeds may also be more sensitive
            to stress inside the home environment.
          </p>

          <h2 style={h2}>Simple ways to calm your dog naturally</h2>

          <ul style={list}>
            <li>Create a quiet resting area for your dog</li>
            <li>Keep a stable daily routine</li>
            <li>Use calming walks and regular exercise</li>
            <li>Provide mentally stimulating toys</li>
            <li>Avoid shouting during stressful moments</li>
          </ul>

          <h2 style={h2}>A peaceful home helps your dog feel secure</h2>

          <p style={text}>
            Small daily habits can greatly improve your dog’s emotional comfort
            and reduce anxious behavior over time.
          </p>

          <p style={text}>
            Many pet owners also use calming accessories and interactive toys
            to help create a more relaxing environment indoors.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>
              Explore calming dog essentials
            </h3>

            <p style={ctaText}>
              Discover practical dog accessories and daily comfort products at
              FluffHaven.
            </p>

            <a href="/product/premium-cooling-mat" style={ctaButton}>
              View cooling mat →
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