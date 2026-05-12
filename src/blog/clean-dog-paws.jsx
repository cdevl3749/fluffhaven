export default function CleanDogPaws() {
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
            href="https://fluffhaven.shop"
            style={{
              display: "inline-block",
              marginBottom: "22px",
              color: "#d14d68",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            ← Back to FluffHaven
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
            Dog care guide
          </p>

          <h1
            style={{
              color: "#15110f",
              fontSize: "clamp(34px, 5vw, 56px)",
              lineHeight: "1.05",
              margin: "0 0 16px",
            }}
          >
            How to clean dog paws after a walk
          </h1>

          <p style={{ color: "#7b6f6a", fontSize: "18px", margin: 0 }}>
            Published: May 2026 · 3 min read
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#b46b7f',
              marginTop: '8px',
              fontWeight: '500'
            }}
          >
            ❤️ 514 readers found this helpful
          </p>
        </div>

        <div style={{ padding: "42px 36px", color: "#1f1a17" }}>
          <p style={lead}>
            After every walk, dogs bring dirt, mud and bacteria into your home.
            This is one of the most common daily frustrations for dog owners.
          </p>

          <p style={text}>
            And the worst part? Cleaning it usually turns into a messy routine.
          </p>

          <h2 style={h2}>Why cleaning paws matters</h2>
          <p style={text}>
            Mud and dirt can damage floors, carpets and furniture. It can also
            irritate your dog’s paws if left dirty.
          </p>

          <h2 style={h2}>The usual problem</h2>
          <p style={text}>
            Most people use towels, wipes or even rinse in the sink. But this
            quickly becomes:
          </p>

          <ul style={list}>
            <li>Time-consuming after every walk</li>
            <li>Messy when your dog is impatient</li>
            <li>Not always enough for mud between toes</li>
          </ul>

          <h2 style={h2}>A simpler solution</h2>
          <p style={text}>
            Some dog owners switch to a simple paw cleaner cup. It uses water
            and soft silicone bristles to remove most of the dirt in seconds.
          </p>

          <p style={text}>
            It is not magic — you may still dry the paws after — but it can make
            the whole routine much quicker and cleaner.
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
              Want a simpler paw-cleaning routine?
            </h3>
            <p style={{ color: "#ddd", marginBottom: "20px" }}>
              See the paw cleaner used by FluffHaven customers.
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
              View paw cleaner →
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