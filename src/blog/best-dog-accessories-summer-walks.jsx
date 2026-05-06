export default function BestDogAccessoriesSummerWalks() {
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
            Summer dog guide
          </p>

          <h1
            style={{
              color: "#15110f",
              fontSize: "clamp(34px, 5vw, 56px)",
              lineHeight: "1.05",
              margin: "0 0 16px",
            }}
          >
            Best dog accessories for summer walks
          </h1>

          <p style={{ color: "#7b6f6a", fontSize: "18px", margin: 0 }}>
            Published: May 2026 · 5 min read
          </p>
        </div>

        <div style={{ padding: "42px 36px", color: "#1f1a17" }}>
          <p style={lead}>
            Summer walks are fun for dogs, but hot weather can quickly become
            uncomfortable without the right accessories.
          </p>

          <p style={text}>
            From warm sidewalks to long car rides and muddy park walks, small
            accessories can make daily walks cleaner, safer and more enjoyable.
          </p>

          <h2 style={h2}>Keeping your dog hydrated</h2>

          <p style={text}>
            Dogs can become thirsty very quickly during warm summer days,
            especially during long walks or road trips.
          </p>

          <p style={text}>
            Many dog owners now use portable water bottles designed for walks,
            hikes and outdoor trips.
          </p>

          <h2 style={h2}>Helping dogs stay cool</h2>

          <p style={text}>
            During heatwaves or warm afternoons, cooling mats can help dogs stay
            more comfortable indoors and after walks.
          </p>

          <ul style={list}>
            <li>Useful during hot summer days</li>
            <li>More comfortable after long walks</li>
            <li>Helps reduce overheating</li>
            <li>Easy to place at home or while traveling</li>
          </ul>

          <h2 style={h2}>Keeping paws and cars cleaner</h2>

          <p style={text}>
            Summer walks often mean dust, grass, mud and dirty paws — especially
            after park visits or beach trips.
          </p>

          <p style={text}>
            Some dog owners use paw cleaners and waterproof car seat covers to
            reduce dirt and hair inside the car after walks.
          </p>

          <h2 style={h2}>Small accessories can make walks easier</h2>

          <p style={text}>
            The best dog accessories are usually simple things that improve
            comfort, cleanliness and convenience during daily routines.
          </p>

          <p style={text}>
            Whether it is hydration, cooling or cleaner travel, small upgrades
            can make summer walks more enjoyable for both dogs and owners.
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
              Discover summer essentials for dogs
            </h3>

            <p style={{ color: "#ddd", marginBottom: "20px" }}>
              Explore practical accessories for walks, travel and hot summer
              days on FluffHaven.
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
              View summer dog accessories →
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