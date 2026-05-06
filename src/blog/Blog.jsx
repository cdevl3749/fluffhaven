export default function Blog() {
  const articles = [
    {
      title: "How to clean dog paws after a walk",
      category: "Dog care guide",
      date: "May 2026",
      read: "3 min read",
      description:
        "A simple routine to keep your home cleaner after muddy walks.",
      url: "/blog/clean-dog-paws",
    },
    {
      title: "How to remove pet hair from your home",
      category: "Pet cleaning guide",
      date: "May 2026",
      read: "4 min read",
      description:
        "Easy tips to reduce dog and cat hair on clothes, sofas and floors.",
      url: "/blog/remove-pet-hair",
    },
    {
      title: "How to protect your car from dog hair and mud",
      category: "Travel & car guide",
      date: "May 2026",
      read: "4 min read",
      description:
        "Simple ways to keep your car seats cleaner after walks, trips and muddy adventures.",
      url: "/blog/protect-car-from-dog-hair",
    },
    {
      title: "Best dog accessories for summer walks",
      category: "Summer dog guide",
      date: "May 2026",
      read: "5 min read",
      description:
        "Simple accessories to keep dogs comfortable, hydrated and cleaner during summer walks.",
      url: "/blog/best-dog-accessories-summer-walks",
    },
  ];

  return (
    <main
      style={{
        background: "#f6f2ed",
        minHeight: "100vh",
        padding: "50px 18px",
        fontFamily: "inherit",
      }}
    >
      <section
        style={{
          maxWidth: "980px",
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
            href="/"
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
            FluffHaven Blog
          </p>

          <h1
            style={{
              color: "#15110f",
              fontSize: "clamp(34px, 5vw, 56px)",
              lineHeight: "1.05",
              margin: "0 0 16px",
            }}
          >
            Pet care tips for cleaner, happier homes
          </h1>

          <p style={{ color: "#7b6f6a", fontSize: "18px", margin: 0 }}>
            Simple guides for dog and cat owners
          </p>
        </div>

        <div
          style={{
            padding: "38px 36px",
            display: "grid",
            gap: "22px",
          }}
        >
          {articles.map((article) => (
            <a
              key={article.url}
              href={article.url}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 18px 40px rgba(0,0,0,0.08)";
                e.currentTarget.style.borderColor = "#eadede";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(0,0,0,0.03)";
                e.currentTarget.style.borderColor = "#f0e6e6";
              }}
              style={{
                display: "block",
                padding: "26px",
                borderRadius: "20px",
                border: "1px solid #f0e6e6",
                background: "#fff",
                textDecoration: "none",
                color: "#15110f",
                transition: "all 0.2s ease",
                transform: "translateY(0)",
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
              }}
            >
              <p
                style={{
                  color: "#d14d68",
                  fontWeight: "800",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontSize: "12px",
                  margin: "0 0 10px",
                }}
              >
                {article.category}
              </p>

              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 34px)",
                  lineHeight: "1.2",
                  margin: "0 0 12px",
                  fontWeight: "600",
                  color: "#3a302b",
                  letterSpacing: "-0.02em",
                }}
              >
                {article.title}
              </h2>

              <p
                style={{
                  color: "#7b6f6a",
                  fontSize: "16px",
                  margin: "0 0 12px",
                }}
              >
                {article.date} · {article.read}
              </p>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {article.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}