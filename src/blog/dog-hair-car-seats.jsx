export default function DogHairCarSeats() {
  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>
            ← Back to Blog
          </a>

          <p style={category}>Dog care guide</p>

          <h1 style={title}>
            How to Keep Dog Hair Off Car Seats
          </h1>

          <p style={meta}>Published: May 2026 · 4 min read</p>
        </div>

        <div style={content}>
          <p style={lead}>
            Dog hair on car seats can quickly become frustrating, especially
            after daily walks, road trips or rainy outdoor adventures.
          </p>

          <p style={text}>
            Fur, dirt and muddy paws often stick to fabric seats and can be
            difficult to clean without the right routine or protection.
          </p>

          <h2 style={h2}>Why dog hair sticks to car seats</h2>

          <p style={text}>
            Many seat fabrics create static electricity that attracts pet hair.
            Long-haired dogs and thick winter coats can leave fur everywhere
            after even short car rides.
          </p>

          <p style={text}>
            Moisture from rain or wet paws can also make hair stick more deeply
            into seat fabrics and floor mats.
          </p>

          <h2 style={h2}>Simple ways to reduce dog hair in your car</h2>

          <ul style={list}>
            <li>Use a protective seat cover during trips</li>
            <li>Brush your dog before entering the car</li>
            <li>Keep a pet hair roller inside the vehicle</li>
            <li>Clean seats regularly with a handheld vacuum</li>
            <li>Wipe muddy paws before your dog jumps inside</li>
          </ul>

          <h2 style={h2}>Protect your car during everyday trips</h2>

          <p style={text}>
            A simple cleaning routine combined with seat protection can make a
            huge difference for keeping your car cleaner and fresher.
          </p>

          <p style={text}>
            Waterproof seat covers and quick hair removal tools help reduce
            stress after dog walks, vet visits or weekend travel.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>
              Keep your car cleaner during dog trips
            </h3>

            <p style={ctaText}>
              Discover dog travel accessories and seat protection products from
              FluffHaven.
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