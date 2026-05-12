export default function RemovePetHair() {
  return (
    <main
      style={{
        background: "#f6f2ed",
        minHeight: "100vh",
        padding: "50px 18px",
        fontFamily: "inherit",
      }}
    >
      <article
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 18px 50px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            padding: "48px 36px 34px",
            background: "linear-gradient(135deg, #fff7f8, #ffffff)",
            textAlign: "center",
            borderBottom: "1px solid #f0e6e6",
          }}
        >
          <a
            href="/blog"
            style={{
              display: "inline-block",
              marginBottom: "22px",
              color: "#d14d68",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            ← Back to Blog
          </a>

          <p
            style={{
              color: "#d14d68",
              fontWeight: "800",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontSize: "13px",
              marginBottom: "14px",
            }}
          >
            Pet cleaning guide
          </p>

          <h1
            style={{
              color: "#15110f",
              fontSize: "clamp(34px, 5vw, 56px)",
              lineHeight: "1.05",
              margin: "0 0 16px",
            }}
          >
            How to remove pet hair from your home
          </h1>

          <p style={{ color: "#7b6f6a", fontSize: "18px", margin: 0 }}>
            Published: May 2026 · 4 min read
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#b46b7f',
              marginTop: '8px',
              fontWeight: '500'
            }}
          >
            ❤️ 222 readers found this helpful
          </p>
        </div>

        <div style={{ padding: "42px 36px", color: "#1f1a17" }}>
          <p style={lead}>
            Pet hair is part of life with dogs and cats. It gets on clothes,
            sofas, carpets and sometimes even places you cleaned the same day.
          </p>

          <p style={text}>
            The good news is that you do not need a complicated routine. A few
            simple habits can make your home feel much cleaner.
          </p>

          <h2 style={h2}>Why pet hair builds up so quickly</h2>
          <p style={text}>
            Dogs and cats naturally shed hair every day. Some breeds shed more
            than others, especially during seasonal changes.
          </p>

          <h2 style={h2}>Simple ways to reduce pet hair</h2>
          <ul style={list}>
            <li>Brush your pet regularly</li>
            <li>Use washable blankets on sofas and beds</li>
            <li>Vacuum high-traffic areas more often</li>
            <li>Keep a small cleaning tool near the sofa or entrance</li>
          </ul>

          <h2 style={h2}>Do not wait until it becomes overwhelming</h2>
          <p style={text}>
            Removing a little hair every day is much easier than doing one big
            cleaning session at the end of the week.
          </p>

          <h2 style={h2}>A cleaner routine for pet owners</h2>
          <p style={text}>
            A simple grooming tool can help remove loose hair before it spreads
            around your home. This is especially useful before cuddles, car
            rides or after outdoor time.
          </p>

          <div
            style={{
              marginTop: "38px",
              padding: "28px",
              background: "#17120f",
              color: "#fff",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "26px", margin: "0 0 10px" }}>
              Want an easier pet-hair routine?
            </h3>

            <p style={{ color: "#ddd", marginBottom: "20px" }}>
              Discover simple grooming accessories from FluffHaven.
            </p>

            <a
              href="https://fluffhaven.shop/#shop"
              style={{
                display: "inline-block",
                background: "#fff",
                color: "#111",
                padding: "14px 22px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: "800",
              }}
            >
              View pet accessories →
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}

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