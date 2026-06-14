import { useEffect } from "react";

export default function DogFollowMeEverywhere() {
  useEffect(() => {
    document.title =
      "Why Does My Dog Follow Me Everywhere? | FluffHaven";
  }, []);

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
            Dog behavior guide
          </p>

          <h1
            style={{
              color: "#15110f",
              fontSize: "clamp(34px, 5vw, 56px)",
              lineHeight: "1.05",
              margin: "0 0 16px",
            }}
          >
            Why does my dog follow me everywhere?
          </h1>

          <p style={{ color: "#7b6f6a", fontSize: "18px", margin: 0 }}>
            Published: May 2026 · 4 min read
          </p>

          <p
            style={{
              fontSize: "14px",
              color: "#b46b7f",
              marginTop: "8px",
              fontWeight: "500",
            }}
          >
            ❤️ 197 readers found this helpful
          </p>
        </div>

        <div style={{ padding: "42px 36px", color: "#1f1a17" }}>
          <p style={lead}>
            Some dogs follow their owners from room to room all day long.
            While it may look funny or adorable, this behavior is actually very
            common.
          </p>

          <p style={text}>
            In most cases, your dog simply feels attached, comfortable and safe
            around you.
          </p>

          <h2 style={h2}>Why dogs become so attached</h2>

          <p style={text}>
            Dogs are naturally social animals. They enjoy staying close to the
            people they trust most, especially after routines like walks,
            feeding or cuddles.
          </p>

          <h2 style={h2}>It can also be routine behavior</h2>

          <p style={text}>
            Many dogs learn your daily habits very quickly. If following you
            often leads to attention, treats or outdoor time, the behavior can
            become part of their normal routine.
          </p>

          <h2 style={h2}>When should you worry?</h2>

          <p style={text}>
            Following behavior only becomes a problem if your dog shows stress
            when left alone, destroys objects or becomes anxious constantly.
          </p>

          <h2 style={h2}>Helping your dog feel calm and independent</h2>

          <ul style={list}>
            <li>Create calm daily routines</li>
            <li>Give your dog mental stimulation</li>
            <li>Reward relaxed behavior</li>
            <li>Allow quiet rest time during the day</li>
          </ul>

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
              Looking for calm daily pet routines?
            </h3>

            <p style={{ color: "#ddd", marginBottom: "20px" }}>
              Discover simple accessories and pet care tips from FluffHaven.
            </p>

            <a
              href="https://fluffhaven.shop/?product=13"
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
              View slow feeder bowl →
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