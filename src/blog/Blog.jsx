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
    {
      title: "How to keep your dog cool during summer walks",
      category: "Summer dog guide",
      date: "May 2026",
      read: "4 min read",
      description:
        "Simple ways to help dogs stay cooler, safer and more comfortable during hot summer walks.",
      url: "/blog/keep-dog-cool-summer",
    },
    {
      title: "How to keep your cat entertained indoors",
      category: "Cat care guide",
      date: "May 2026",
      read: "4 min read",
      description:
        "Simple ways to keep indoor cats active, curious and less destructive at home.",
      url: "/blog/keep-cat-entertained-indoors",
    },
  ];

  const scroll = (direction) => {
    const container = document.getElementById("blog-slider");

    if (container) {
      container.scrollBy({
        left: direction === "left" ? -380 : 380,
        behavior: "smooth",
      });
    }
  };

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
          maxWidth: "1180px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "28px",
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "26px 32px 0",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "28px",
              color: "#221b18",
            }}
          >
            Latest articles
          </h2>

          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={() => scroll("left")}
              style={arrowButton}
            >
              ←
            </button>

            <button
              onClick={() => scroll("right")}
              style={arrowButton}
            >
              →
            </button>
          </div>
        </div>

        <div
          id="blog-slider"
          style={{
            display: "flex",
            gap: "22px",
            overflowX: "auto",
            padding: "30px 32px 44px",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {articles.map((article) => (
            <a
              key={article.url}
              href={article.url}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(0,0,0,0.04)";
              }}
              style={{
                minWidth: "320px",
                maxWidth: "320px",
                background: "#fff",
                borderRadius: "24px",
                padding: "28px",
                textDecoration: "none",
                color: "#15110f",
                border: "1px solid #f2e7e7",
                transition: "all 0.25s ease",
                boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                flexShrink: 0,
              }}
            >
              <p
                style={{
                  color: "#d14d68",
                  fontWeight: "800",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontSize: "12px",
                  marginBottom: "12px",
                }}
              >
                {article.category}
              </p>

              <h2
                style={{
                  fontSize: "38px",
                  lineHeight: "1.08",
                  marginBottom: "14px",
                  color: "#2a211d",
                  letterSpacing: "-0.03em",
                }}
              >
                {article.title}
              </h2>

              <p
                style={{
                  color: "#85756f",
                  fontSize: "15px",
                  marginBottom: "18px",
                }}
              >
                {article.date} · {article.read}
              </p>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.65",
                  color: "#3d3531",
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

const arrowButton = {
  width: "46px",
  height: "46px",
  borderRadius: "999px",
  border: "1px solid #eadede",
  background: "#fff",
  cursor: "pointer",
  fontSize: "20px",
  fontWeight: "700",
  color: "#2a211d",
  transition: "all 0.2s ease",
  boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
};