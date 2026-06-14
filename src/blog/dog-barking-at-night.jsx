import { useEffect } from "react";

export default function DogBarkingAtNight() {
  useEffect(() => {
    document.title =
      "Why Is My Dog Barking At Night? | FluffHaven";
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
            Why Is My Dog Barking At Night?
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
            ❤️ 341 readers found this helpful
          </p>
        </div>

        <div style={content}>
          <p style={lead}>
            Few things are more frustrating than being woken up by a dog that
            suddenly starts barking in the middle of the night.
          </p>

          <p style={text}>
            While occasional barking is normal, repeated nighttime barking may
            indicate that your dog is reacting to something in its environment
            or trying to communicate a need.
          </p>

          <h2 style={h2}>Common reasons dogs bark at night</h2>

          <p style={text}>
            Dogs have sensitive hearing and may react to sounds that humans
            barely notice. Wildlife outside, passing cars, neighbors or unusual
            noises can easily trigger barking.
          </p>

          <p style={text}>
            Some dogs may also bark because they feel lonely, bored, anxious or
            have excess energy that was not burned off during the day.
          </p>

          <h2 style={h2}>Signs your dog needs more stimulation</h2>

          <ul style={list}>
            <li>Restlessness before bedtime</li>
            <li>Pacing around the house at night</li>
            <li>Excessive attention-seeking behavior</li>
            <li>Frequent barking without an obvious reason</li>
            <li>Difficulty settling down to sleep</li>
          </ul>

          <p style={text}>
            Dogs that receive enough physical exercise and mental stimulation
            during the day are often calmer and sleep more peacefully at night.
          </p>

          <h2 style={h2}>How to reduce nighttime barking</h2>

          <p style={text}>
            Establishing a consistent routine can make a big difference. Try to
            provide a final walk before bedtime and ensure your dog has a quiet,
            comfortable sleeping area.
          </p>

          <p style={text}>
            Interactive toys, training sessions and regular exercise can help
            reduce boredom and make it easier for your dog to relax overnight.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>
              Make daily dog care easier
            </h3>

            <p style={ctaText}>
              Discover practical dog accessories designed to support walks,
              playtime and a happier daily routine.
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
