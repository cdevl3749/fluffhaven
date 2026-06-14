import { useEffect } from "react";

export default function CatKnockThingsOffTable() {
  useEffect(() => {
    document.title =
      "Why Does My Cat Knock Things Off Tables? | FluffHaven";
  }, []);

  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>
            ← Back to Blog
          </a>

          <p style={category}>Cat behavior guide</p>

          <h1 style={title}>
            Why Does My Cat Knock Things Off Tables?
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
            ❤️ 298 readers found this helpful
          </p>
        </div>

        <div style={content}>
          <p style={lead}>
            One moment your coffee mug is safely on the table. The next moment,
            your cat has pushed it straight onto the floor.
          </p>

          <p style={text}>
            While this behavior may seem mischievous, cats usually have very
            specific reasons for knocking objects off tables, shelves and
            counters.
          </p>

          <h2 style={h2}>Cats are naturally curious</h2>

          <p style={text}>
            Cats explore the world with their paws just as much as with their
            eyes. A small object sitting on a table can quickly become an
            interesting experiment.
          </p>

          <p style={text}>
            By tapping, pushing or swatting an object, your cat learns how it
            moves and reacts. To them, this can simply be part of exploring
            their environment.
          </p>

          <h2 style={h2}>Sometimes they want your attention</h2>

          <ul style={list}>
            <li>Your cat knocks items over when you are nearby</li>
            <li>The behavior increases when you are busy</li>
            <li>Your cat immediately looks at you afterward</li>
            <li>It often happens around feeding times</li>
            <li>Your cat seems bored or under-stimulated</li>
          </ul>

          <p style={text}>
            Cats quickly learn that knocking something onto the floor gets an
            immediate reaction from humans. Even negative attention can still
            feel rewarding.
          </p>

          <h2 style={h2}>How to reduce this behavior</h2>

          <p style={text}>
            Providing more mental stimulation is often one of the best
            solutions. Interactive toys, climbing spaces and daily play sessions
            help keep cats engaged and entertained.
          </p>

          <p style={text}>
            It also helps to remove fragile objects from areas where your cat
            regularly jumps. Creating safe spaces for exploration can reduce the
            temptation to investigate your favorite belongings.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>
              Keep curious cats entertained
            </h3>

            <p style={ctaText}>
              Discover interactive toys and practical cat accessories designed
              to keep indoor cats active and mentally stimulated.
            </p>

            <a href="https://fluffhaven.shop/?product=16" style={ctaButton}>
              View cat tunnel →
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
