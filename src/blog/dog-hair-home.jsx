export default function DogHairHome() {
  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>
            ← Back to Blog
          </a>

          <p style={category}>Dog care guide</p>

          <h1 style={title}>
            How to Stop Dog Hair From Taking Over Your Home
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
            ❤️ 312 readers found this helpful
          </p>
        </div>

        <div style={content}>
          <p style={lead}>
            Dog hair can quickly spread across sofas, carpets, clothes and even
            your bed — especially during shedding season.
          </p>

          <p style={text}>
            While pet owners love their dogs, cleaning fur every single day can
            become exhausting without the right routine and tools.
          </p>

          <h2 style={h2}>Why dog hair gets everywhere</h2>

          <p style={text}>
            Some dog breeds naturally shed more hair than others, but even
            short-haired dogs can leave fur around the house daily.
          </p>

          <p style={text}>
            Hair often sticks to fabrics because of static electricity and can
            easily collect on blankets, couches, rugs and car seats.
          </p>

          <h2 style={h2}>Simple ways to reduce dog hair indoors</h2>

          <ul style={list}>
            <li>Brush your dog regularly outdoors</li>
            <li>Use washable blankets on sofas and beds</li>
            <li>Vacuum floors and carpets frequently</li>
            <li>Keep a reusable pet hair remover nearby</li>
            <li>Wash dog bedding often to reduce loose fur</li>
          </ul>

          <h2 style={h2}>Create a cleaner home without stress</h2>

          <p style={text}>
            A few small habits can make a huge difference for keeping your home
            fresher and reducing visible pet hair every day.
          </p>

          <p style={text}>
            Many dog owners use reusable hair removal tools and furniture
            protection to save time and make cleaning easier.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>
              Discover simple dog cleaning essentials
            </h3>

            <p style={ctaText}>
              Explore practical pet accessories and reusable hair removal tools
              from FluffHaven.
            </p>

            <a href="https://fluffhaven.shop/#shop" style={ctaButton}>
              View dog accessories →
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