export default function ProtectCarFromDogHair() {
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
            Travel & car guide
          </p>

          <h1
            style={{
              color: "#15110f",
              fontSize: "clamp(34px, 5vw, 56px)",
              lineHeight: "1.05",
              margin: "0 0 16px",
            }}
          >
            How to protect your car from dog hair and mud
          </h1>

          <p style={{ color: "#7b6f6a", fontSize: "18px", margin: 0 }}>
            Published: May 2026 · 4 min read
          </p>
        </div>

        <div style={{ padding: "42px 36px", color: "#1f1a17" }}>
          <p style={lead}>
            Dogs make every road trip more fun — but they also bring mud, fur
            and scratches into your car.
          </p>

          <p style={text}>
            After a few walks or rainy days, car seats can quickly become full
            of hair, paw prints and dirt.
          </p>

          <h2 style={h2}>Why car protection matters</h2>

          <p style={text}>
            Dog hair sticks deeply into fabric seats and can take a long time to
            clean. Wet paws and claws may also damage the back seats over time.
          </p>

          <h2 style={h2}>The common problem</h2>

          <p style={text}>
            Many dog owners use towels or blankets, but they usually slide
            around or fail to fully protect the seats.
          </p>

          <ul style={list}>
            <li>Hair gets trapped in the fabric</li>
            <li>Mud spreads after rainy walks</li>
            <li>Seats become harder to clean over time</li>
            <li>Dogs may slip during turns or braking</li>
          </ul>

          <h2 style={h2}>A simpler solution</h2>

          <p style={text}>
            Some pet owners use a waterproof dog car seat cover designed to
            protect the back seats from dirt, scratches and fur.
          </p>

          <p style={text}>
            It creates a cleaner space for your dog while helping keep your car
            easier to maintain after trips and walks.
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
              Want cleaner car rides with your dog?
            </h3>

            <p style={{ color: "#ddd", marginBottom: "20px" }}>
              Discover the waterproof dog car seat cover available on
              FluffHaven.
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
              View dog car seat cover →
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