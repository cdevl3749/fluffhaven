import { useEffect } from "react";

export default function DogSensitiveSkinCauses() {
  useEffect(() => {
    document.title =
      "Why Does My Dog Have Sensitive Skin? | FluffHaven";
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
            Why Does My Dog Have Sensitive Skin?
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
            ❤️ 289 readers found this helpful
          </p>
        </div>

        <div style={content}>
          <p style={lead}>
            Does your dog scratch often, lick their paws, or seem uncomfortable
            after walks, baths or grooming?
          </p>

          <p style={text}>
            Sensitive skin is common in dogs and can be caused by many everyday
            factors, from seasonal changes to grooming products, dust, grass or
            dry indoor air.
          </p>

          <h2 style={h2}>What does sensitive skin look like in dogs?</h2>

          <p style={text}>
            Dogs with sensitive skin may scratch more than usual, chew at their
            paws, develop dry patches, or react badly after being washed with
            harsh products.
          </p>

          <p style={text}>
            Some dogs may also have redness, flaky skin, a dull coat or a strong
            smell if their skin becomes irritated. These signs can appear slowly,
            so they are not always obvious at first.
          </p>

          <h2 style={h2}>Common causes of sensitive skin</h2>

          <ul style={list}>
            <li>Harsh shampoos or over-washing</li>
            <li>Seasonal allergies, pollen or grass</li>
            <li>Dry air inside the home</li>
            <li>Dust, dirt or residue after walks</li>
            <li>Food sensitivities or diet changes</li>
            <li>Fleas, mites or other skin irritants</li>
          </ul>

          <p style={text}>
            Because there are many possible causes, it is important to look at
            your dog’s full routine: walks, food, grooming, bedding and how often
            they are bathed.
          </p>

          <h2 style={h2}>How gentle grooming can help</h2>

          <p style={text}>
            For many dogs, a gentler grooming routine can make a big difference.
            Using a mild shampoo designed for sensitive skin may help clean the
            coat without stripping away too much natural moisture.
          </p>

          <p style={text}>
            Bathing too often can sometimes make dryness worse, so it is usually
            best to keep baths occasional and use a soft, skin-friendly formula
            when needed.
          </p>

          <h2 style={h2}>When should you ask a vet?</h2>

          <p style={text}>
            If your dog is scratching constantly, losing hair, bleeding, licking
            the same area every day, or seems in pain, it is best to speak with
            your veterinarian.
          </p>

          <p style={text}>
            Sensitive skin can sometimes be linked to allergies, infections or
            parasites, so a vet can help rule out anything more serious.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>
              Support your dog’s sensitive skin routine
            </h3>

            <p style={ctaText}>
              Discover our gentle Sensitive Skin Dog Shampoo, designed to help
              clean, moisturise and soothe without harsh ingredients.
            </p>

            <a href="https://fluffhaven.shop/#shop" style={ctaButton}>
              View dog shampoo →
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