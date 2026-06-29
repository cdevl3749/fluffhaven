import { useEffect } from "react";

export default function TravelSafelyWithDogSummer() {

  useEffect(() => {
    document.title =
      "How To Travel Safely With Your Dog This Summer | FluffHaven";
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
            How To Travel Safely With Your Dog This Summer
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
            ❤️ Summer travel guide for dog owners
          </p>
        </div>

        <div style={content}>
          <p style={lead}>
            Summer road trips and vacations can be exciting for both dogs and
            owners. With a little preparation, you can keep your dog safe,
            comfortable and happy throughout the journey.
          </p>

          <p style={text}>
            Hot weather, long drives and unfamiliar places can create stress
            for pets, so planning ahead is important.
          </p>

          <h2 style={h2}>Keep your dog cool during travel</h2>

          <p style={text}>
            Never leave your dog alone inside a parked vehicle during summer.
            Temperatures can rise extremely fast, even when it feels mild
            outside.
          </p>

          <p style={text}>
            Bring fresh water, offer frequent breaks and look for shaded areas
            whenever possible.
          </p>

          <h2 style={h2}>Make road trips more comfortable</h2>

          <ul style={list}>
            <li>Plan regular rest stops every few hours</li>
            <li>Carry enough drinking water</li>
            <li>Bring familiar toys or blankets</li>
            <li>Keep the vehicle well ventilated</li>
            <li>Use safe travel accessories when possible</li>
          </ul>

          <h2 style={h2}>Prepare for your destination</h2>

          <p style={text}>
            Before arriving, check whether your hotel, rental or campsite is
            pet friendly. Knowing where your dog can safely walk and rest helps
            avoid unnecessary stress.
          </p>

          <p style={text}>
            Bringing familiar items from home can also help your dog adapt more
            quickly to a new environment.
          </p>

          <h2 style={h2}>Enjoy a safer summer adventure</h2>

          <p style={text}>
            A little preparation goes a long way. By focusing on comfort,
            hydration and safety, you can make summer travel enjoyable for both
            you and your dog.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>
              Explore travel-friendly dog essentials
            </h3>

            <p style={ctaText}>
              Discover practical dog accessories designed to make everyday
              adventures easier.
            </p>

            <a href="/product/dog-car-seat-cover" style={ctaButton}>
              View car seat cover →
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