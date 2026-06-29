import { useEffect } from "react";

export default function SummerVacationChecklistPets() {

  useEffect(() => {
    document.title =
      "Summer Vacation Checklist For Pet Owners | FluffHaven";
  }, []);

  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>
            ← Back to Blog
          </a>

          <p style={category}>Pet care guide</p>

          <h1 style={title}>
            Summer Vacation Checklist For Pet Owners
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
            ❤️ Stress-free travel preparation for pets
          </p>
        </div>

        <div style={content}>
          <p style={lead}>
            Planning a summer vacation with your pet can be exciting, but a
            little preparation makes the experience much easier for everyone.
          </p>

          <p style={text}>
            Whether you're taking a road trip, visiting family or spending time
            at a pet-friendly destination, having the essentials ready helps
            keep your pet safe and comfortable.
          </p>

          <h2 style={h2}>Travel essentials to pack</h2>

          <ul style={list}>
            <li>Fresh drinking water</li>
            <li>Food for the entire trip</li>
            <li>Food and water bowls</li>
            <li>Leash and harness</li>
            <li>Favorite toys and comfort items</li>
            <li>Waste bags or litter supplies</li>
          </ul>

          <h2 style={h2}>Don't forget health and safety items</h2>

          <p style={text}>
            Bring any medications your pet may need and make sure identification
            tags are up to date before leaving home.
          </p>

          <p style={text}>
            It's also a good idea to keep your veterinarian's contact
            information available in case of emergencies.
          </p>

          <h2 style={h2}>Prepare for summer temperatures</h2>

          <p style={text}>
            Hot weather can be difficult for both dogs and cats. Always provide
            shade, fresh water and cool resting areas during your travels.
          </p>

          <p style={text}>
            Avoid outdoor activities during the hottest part of the day whenever
            possible.
          </p>

          <h2 style={h2}>Make the trip more enjoyable</h2>

          <p style={text}>
            Familiar toys, blankets and routines can help reduce stress while
            traveling. Many pets feel more relaxed when surrounded by familiar
            smells and objects.
          </p>

          <p style={text}>
            A little preparation before departure can make your vacation safer,
            calmer and more enjoyable for both you and your pet.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>
              Discover summer-ready pet essentials
            </h3>

            <p style={ctaText}>
              Browse practical products designed to make life easier for pet
              owners at home and on the go.
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