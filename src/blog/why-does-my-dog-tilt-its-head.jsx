import { useEffect } from "react";

export default function WhyDoesMyDogTiltItsHead() {
  useEffect(() => {
    document.title =
      "Why Does My Dog Tilt Its Head? | FluffHaven";
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
            Why Does My Dog Tilt Its Head?
          </h1>

          <p style={{ color: "#7b6f6a", fontSize: "18px", margin: 0 }}>
            Published: July 2026 · 6 min read
          </p>

          <p
            style={{
              fontSize: "14px",
              color: "#b46b7f",
              marginTop: "8px",
              fontWeight: "500",
            }}
          >
            ❤️ 297 readers found this helpful
          </p>
        </div>

        <div style={{ padding: "42px 36px", color: "#1f1a17" }}>
          <p style={lead}>
            Have you ever spoken to your dog only to see them suddenly tilt
            their head from one side to the other?
          </p>

          <p style={text}>
            It's one of the cutest behaviors dogs display, but it's not just
            adorable. In many cases, head tilting is your dog's way of trying
            to better understand you and the world around them.
          </p>

          <h2 style={h2}>They're listening carefully</h2>

          <p style={text}>
            Dogs rely heavily on sounds to understand what's happening around
            them. Tilting their head may help them locate where a sound is
            coming from or make certain tones easier to hear.
          </p>

          <p style={text}>
            Many owners notice their dog tilts their head when hearing an
            unfamiliar word, a squeaky toy or a funny noise. It's often a sign
            that they're paying close attention.
          </p>

          <h2 style={h2}>They want to understand you</h2>

          <p style={text}>
            Dogs become surprisingly good at recognizing human words,
            expressions and routines.
          </p>

          <p style={text}>
            When you speak to them, they may tilt their head while trying to
            process your voice, facial expressions and body language all at the
            same time.
          </p>

          <h2 style={h2}>Their nose can block part of their vision</h2>

          <p style={text}>
            Some experts believe head tilting may simply improve your dog's
            view of your face. Dogs with longer muzzles sometimes adjust their
            head position so they can better see your eyes and mouth while you
            speak.
          </p>

          <p style={text}>
            Since dogs communicate through facial expressions too, getting a
            clearer view of you may help them understand your emotions.
          </p>

          <h2 style={h2}>When is head tilting completely normal?</h2>

          <ul style={list}>
            <li>During conversations with you</li>
            <li>When hearing unusual sounds</li>
            <li>While listening to squeaky toys</li>
            <li>When learning new commands</li>
            <li>When they're curious about something</li>
          </ul>
                    <p style={text}>
            If your dog only tilts their head occasionally in situations like
            these, it's usually considered completely normal and even a sign
            they're engaged with what's happening.
          </p>

          <h2 style={h2}>When should you speak to your veterinarian?</h2>

          <p style={text}>
            While occasional head tilting is harmless, frequent or persistent
            tilting combined with other symptoms can sometimes indicate an ear
            infection, balance disorder or another medical condition.
          </p>

          <p style={text}>
            Contact your veterinarian if your dog also experiences:
          </p>

          <ul style={list}>
            <li>Loss of balance</li>
            <li>Walking in circles</li>
            <li>Rapid eye movements</li>
            <li>Constant head tilting</li>
            <li>Pain or scratching around the ears</li>
          </ul>

          <p style={text}>
            If your dog seems healthy and only tilts their head during
            conversations or interesting sounds, there's usually nothing to
            worry about.
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
              Keep your dog's mind active every day
            </h3>

            <p style={{ color: "#ddd", marginBottom: "20px" }}>
              Mental stimulation helps curious dogs stay happy, confident and
              engaged. A snuffle mat is a fun way to encourage natural sniffing
              and problem-solving.
            </p>

            <a
              href="/product/premium-dog-snuffle-mat"
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
              View Dog Snuffle Mat →
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