import { useState, useEffect } from "react";

export default function Blog() {
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const articles = [
    {
      title: "How to clean dog paws after a walk",
      category: "Dog care guide",
      date: "May 2026",
      read: "3 min read",
      description: "A simple routine to keep your home cleaner after muddy walks.",
      url: "/blog/clean-dog-paws",
    },
    {
      title: "How to remove pet hair from your home",
      category: "Pet cleaning guide",
      date: "May 2026",
      read: "4 min read",
      description: "Easy tips to reduce dog and cat hair on clothes, sofas and floors.",
      url: "/blog/remove-pet-hair",
    },
    {
      title: "How to protect your car from dog hair and mud",
      category: "Travel & car guide",
      date: "May 2026",
      read: "4 min read",
      description: "Simple ways to keep your car seats cleaner after walks, trips and muddy adventures.",
      url: "/blog/protect-car-from-dog-hair",
    },
    {
      title: "Best dog accessories for summer walks",
      category: "Summer dog guide",
      date: "May 2026",
      read: "5 min read",
      description: "Simple accessories to keep dogs comfortable, hydrated and cleaner during summer walks.",
      url: "/blog/best-dog-accessories-summer-walks",
    },
    {
      title: "How to keep your dog cool during summer walks",
      category: "Summer dog guide",
      date: "May 2026",
      read: "4 min read",
      description: "Simple ways to help dogs stay cooler, safer and more comfortable during hot summer walks.",
      url: "/blog/keep-dog-cool-summer",
    },
    {
      title: "How to keep your cat entertained indoors",
      category: "Cat care guide",
      date: "May 2026",
      read: "4 min read",
      description: "Simple ways to keep indoor cats active, curious and less destructive at home.",
      url: "/blog/keep-cat-entertained-indoors",
    },
    {
      title: "Why does my cat scratch the sofa?",
      category: "Cat behavior guide",
      date: "May 2026",
      read: "4 min read",
      description: "Understand why cats scratch sofas and simple ways to protect furniture while keeping cats happy indoors.",
      url: "/blog/cat-scratch-sofa",
    },
    {
      title: "Why does my cat wake me up at night?",
      category: "Cat behavior guide",
      date: "May 2026",
      read: "4 min read",
      description: "Simple reasons why cats become active at night and easy ways to improve sleep for both cats and owners.",
      url: "/blog/cat-wake-up-night",
    },
    {
      title: "Why does my cat meow at night?",
      category: "Cat behavior guide",
      date: "May 2026",
      read: "4 min read",
      description: "Simple reasons why cats meow at night and easy ways to create calmer nights at home.",
      url: "/blog/cat-meow-night",
    },
    {
      title: "How to Remove Wet Dog Smell After Rainy Walks",
      category: "Dog care guide",
      date: "May 2026",
      read: "4 min read",
      description: "Simple ways to remove wet dog smell after rainy walks and keep your home fresh and clean.",
      url: "/blog/dog-smell-rainy-walk",
    },
    {
      title: "How to Keep Dog Hair Off Car Seats",
      category: "Dog care guide",
      date: "May 2026",
      read: "4 min read",
      description: "Simple ways to protect your car seats from dog hair, dirt and everyday mess after trips.",
      url: "/blog/dog-hair-car-seats",
    },
    {
      title: "Signs Your Indoor Cat Is Bored",
      category: "Cat behavior guide",
      date: "May 2026",
      read: "4 min read",
      description: "Simple signs that your indoor cat may be bored and easy ways to keep them active at home.",
      url: "/blog/cat-bored-at-home",
    },
    {
      title: "How to Stop Cats Scratching Furniture",
      category: "Cat behavior guide",
      date: "May 2026",
      read: "4 min read",
      description: "Simple ways to protect your sofa and redirect your cat's scratching habits at home.",
      url: "/blog/stop-cat-scratching-furniture",
    },
    {
      title: "How to Stop Dog Hair From Taking Over Your Home",
      category: "Dog care guide",
      date: "May 2026",
      read: "5 min read",
      description: "Simple ways to reduce dog hair indoors and keep your home cleaner every day.",
      url: "/blog/dog-hair-home",
    },
    {
      title: "Why Dogs Lick Their Paws After Walks",
      category: "Dog care guide",
      date: "May 2026",
      read: "4 min read",
      description: "Learn why dogs lick their paws after walks and discover simple ways to keep their paws clean and comfortable.",
      url: "/blog/dog-lick-paws-after-walks",
    },
    {
      title: "How To Reduce Cat Hair On Furniture",
      category: "Cat care guide",
      date: "May 2026",
      read: "5 min read",
      description: "Simple ways to reduce cat hair on sofas, beds, and furniture while keeping your home cleaner every day.",
      url: "/blog/reduce-cat-hair-furniture",
    },
    {
      title: "How To Calm An Anxious Dog At Home",
      category: "Dog care guide",
      date: "May 2026",
      read: "5 min read",
      description: "Discover simple ways to calm an anxious dog at home and create a more peaceful daily routine for your pet.",
      url: "/blog/calm-anxious-dog-home",
    },
    {
      title: "Why Indoor Cats Need More Mental Stimulation",
      category: "Cat care guide",
      date: "May 2026",
      read: "4 min read",
      description: "Learn why indoor cats need daily mental stimulation and how simple activities can improve their happiness and behavior.",
      url: "/blog/indoor-cat-mental-stimulation",
    },
    {
      title: "Why Does My Dog Follow Me Everywhere?",
      category: "Dog behavior guide",
      date: "May 2026",
      read: "4 min read",
      description: "Learn why dogs follow their owners everywhere, what it means emotionally, and when clingy behavior may become a problem.",
      url: "/blog/dog-follow-me-everywhere",
    },
    {
      title: "How To Stop Cat Hair On Clothes",
      category: "Cat care guide",
      date: "May 2026",
      read: "4 min read",
      description: "Simple ways to reduce cat hair on clothes, laundry, blankets, and fabrics while keeping your home cleaner every day.",
      url: "/blog/cat-hair-on-clothes",
    },
    {
      title: "Signs Your Dog Is Too Hot During Summer Walks",
      category: "Summer dog guide",
      date: "June 2026",
      read: "5 min read",
      description: "Learn the most common signs dogs show when they become too hot during summer walks and simple ways to keep them safer and more comfortable.",
      url: "/blog/signs-dog-too-hot-summer",
    },
    {
      title: "Best Ways To Help Dogs Cool Down At Home",
      category: "Summer dog guide",
      date: "June 2026",
      read: "5 min read",
      description: "Simple ways to help dogs stay cooler and more comfortable at home during hot summer days with hydration, shade, airflow and cooling solutions.",
      url: "/blog/help-dog-cool-down-home",
    },
    {
      title: "Why Is My Cat Peeing Outside The Litter Box?",
      category: "Cat behavior guide",
      date: "June 2026",
      read: "5 min read",
      description: "Discover common reasons cats suddenly start peeing outside the litter box and simple steps that may help solve the problem.",
      url: "/blog/cat-peeing-outside-litter-box",
    },
    {
      title: "How To Remove Dog Hair From Clothes",
      category: "Dog care guide",
      date: "June 2026",
      read: "5 min read",
      description: "Simple ways to remove dog hair from clothes, blankets and laundry while keeping fabrics cleaner every day.",
      url: "/blog/dog-hair-on-clothes",
    },
    {
      title: "Why Does My Dog Eat Grass?",
      category: "Dog behavior guide",
      date: "June 2026",
      read: "5 min read",
      description: "Learn why dogs eat grass, whether it's normal behavior, and when it may be a sign that your dog needs veterinary attention.",
      url: "/blog/why-dog-eat-grass",
    },
    {
      title: "Why Is My Dog Barking At Night?",
      category: "Dog behavior guide",
      date: "June 2026",
      read: "5 min read",
      description: "Discover common reasons dogs bark at night and practical ways to help your dog stay calm and sleep better.",
      url: "/blog/dog-barking-at-night",
    },
    {
      title: "Why Does My Cat Knock Things Off Tables?",
      category: "Cat behavior guide",
      date: "June 2026",
      read: "5 min read",
      description: "Learn why cats love knocking objects off tables, shelves and counters, and what this behavior may be telling you.",
      url: "/blog/cat-knock-things-off-table",
    },
    {
      title: "Why Is My Cat Following Me Everywhere?",
      category: "Cat behavior guide",
      date: "June 2026",
      read: "5 min read",
      description: "Discover why some cats follow their owners everywhere and what this behavior says about your cat's personality and needs.",
      url: "/blog/cat-follow-me-everywhere",
    },
    {
      title: "Why Does My Dog Have Sensitive Skin?",
      category: "Dog care guide",
      date: "June 2026",
      read: "5 min read",
      description: "Discover the most common causes of sensitive skin in dogs and simple ways to help soothe itching, dryness and irritation.",
      url: "/blog/dog-sensitive-skin-causes",
    },
    {
      title: "Why Does My Cat Have Sensitive Skin?",
      category: "Cat care guide",
      date: "June 2026",
      read: "5 min read",
      description: "Learn why some cats develop sensitive skin, what signs to watch for and how gentle grooming can help keep them comfortable.",
      url: "/blog/cat-sensitive-skin-causes",
    },
  ];

  // ── Filtrage par recherche ──
  const isSearching = searchTerm.trim().length > 0;

  const filteredArticles = articles.filter((article) =>
    (article.title + article.category + article.description)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const scroll = (direction) => {
    const container = document.getElementById("blog-slider");
    if (container) {
      container.scrollBy({ left: direction === "left" ? -340 : 340, behavior: "smooth" });
    }
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "20px",
    padding: "22px",
    textDecoration: "none",
    color: "#15110f",
    border: "1px solid #f2e7e7",
    boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
    boxSizing: "border-box",
    display: "block",
  };

  // ── Cartes communes (mobile + résultats de recherche desktop) ──
  const renderCards = (articles) =>
    articles.map((article) => (
      <a key={article.url} href={article.url} style={cardStyle}>
        <p style={{ color: "#d14d68", fontWeight: "800", letterSpacing: "0.14em", textTransform: "uppercase", fontSize: "11px", margin: "0 0 10px" }}>
          {article.category}
        </p>
        <h2 style={{ fontSize: "18px", lineHeight: "1.25", margin: "0 0 10px", color: "#2a211d" }}>
          {article.title}
        </h2>
        <p style={{ color: "#85756f", fontSize: "13px", margin: "0 0 12px" }}>
          {article.date} · {article.read}
        </p>
        <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#3d3531", margin: 0 }}>
          {article.description}
        </p>
      </a>
    ));

  return (
    <main style={{ background: "#f6f2ed", minHeight: "100vh", padding: "50px 18px", fontFamily: "inherit", boxSizing: "border-box" }}>
      <section style={{ maxWidth: "1180px", margin: "0 auto", background: "#fff", borderRadius: "28px", overflow: "hidden", boxShadow: "0 18px 50px rgba(0,0,0,0.08)" }}>

        {/* HEADER */}
        <div style={{ padding: "48px 24px 34px", background: "linear-gradient(135deg, #fff7f8, #ffffff)", textAlign: "center", borderBottom: "1px solid #f0e6e6" }}>
          <a href="/" style={{ display: "inline-block", marginBottom: "22px", color: "#d14d68", textDecoration: "none", fontWeight: "700" }}>
            ← Back to FluffHaven
          </a>
          <p style={{ color: "#d14d68", fontWeight: "800", letterSpacing: "0.16em", textTransform: "uppercase", fontSize: "13px", marginBottom: "14px" }}>
            FluffHaven Blog
          </p>
          <h1 style={{ color: "#15110f", fontSize: "clamp(28px, 5vw, 56px)", lineHeight: "1.05", margin: "0 0 16px" }}>
            Pet care tips for cleaner, happier homes
          </h1>
          <p style={{ color: "#7b6f6a", fontSize: "18px", margin: 0 }}>
            Simple guides for dog and cat owners
          </p>
        </div>

        {/* MOBILE : liste verticale */}
        {isMobile ? (
          <div style={{ padding: "24px 16px 40px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 style={{ margin: "0 0 8px", fontSize: "22px", color: "#221b18" }}>Latest articles</h2>
            <input
              type="text"
              placeholder="🔍 Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 18px",
                borderRadius: "14px",
                border: "1px solid #eadede",
                fontSize: "15px",
                outline: "none",
                background: "#fff",
                color: "#15110f",
                marginBottom: "8px",
                boxSizing: "border-box",
              }}
            />
            {/* POPULAR SEARCHES MOBILE */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
              <span style={{ fontSize: "12px", color: "#85756f", alignSelf: "center", fontWeight: "600" }}>Popular:</span>
              {["Skin", "Hair", "Cat", "Dog", "Summer", "Night"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchTerm(searchTerm === tag ? "" : tag)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "999px",
                    border: "1px solid #eadede",
                    background: searchTerm === tag ? "#d14d68" : "#fff",
                    color: searchTerm === tag ? "#fff" : "#3d3531",
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
            {filteredArticles.length === 0 ? (
              <p style={{ color: "#85756f", fontSize: "15px", textAlign: "center", padding: "20px 0" }}>
                No articles found for "{searchTerm}"
              </p>
            ) : (
              renderCards(filteredArticles)
            )}
          </div>
        ) : (
          /* DESKTOP */
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "26px 24px 0" }}>
              <h2 style={{ margin: 0, fontSize: "28px", color: "#221b18" }}>Latest articles</h2>
              {/* Flèches visibles seulement quand pas de recherche */}
              {!isSearching && (
                <div style={{ display: "flex", gap: "12px" }}>
                  <button onClick={() => scroll("left")} style={arrowButton}>←</button>
                  <button onClick={() => scroll("right")} style={arrowButton}>→</button>
                </div>
              )}
            </div>

            {/* BARRE DE RECHERCHE */}
            <div style={{ padding: "20px 24px 0" }}>
              <input
                type="text"
                placeholder="🔍 Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  padding: "14px 18px",
                  borderRadius: "14px",
                  border: "1px solid #eadede",
                  fontSize: "15px",
                  outline: "none",
                  background: "#fff",
                  color: "#15110f",
                  boxSizing: "border-box",
                }}
              />
              {/* POPULAR SEARCHES DESKTOP */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                <span style={{ fontSize: "12px", color: "#85756f", alignSelf: "center", fontWeight: "600" }}>Popular:</span>
                {["Skin", "Hair", "Cat", "Dog", "Summer", "Night"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(searchTerm === tag ? "" : tag)}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "999px",
                      border: "1px solid #eadede",
                      background: searchTerm === tag ? "#d14d68" : "#fff",
                      color: searchTerm === tag ? "#fff" : "#3d3531",
                      fontSize: "13px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* RÉSULTATS DE RECHERCHE — grille */}
            {isSearching ? (
              <div style={{ padding: "24px 24px 40px" }}>
                {filteredArticles.length === 0 ? (
                  <p style={{ color: "#85756f", fontSize: "15px", padding: "20px 0" }}>
                    No articles found for "{searchTerm}"
                  </p>
                ) : (
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "16px",
                  }}>
                    {filteredArticles.map((article) => (
                      <a
                        key={article.url}
                        href={article.url}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.04)"; }}
                        style={{ ...cardStyle, transition: "transform 0.25s ease, box-shadow 0.25s ease" }}
                      >
                        <p style={{ color: "#d14d68", fontWeight: "800", letterSpacing: "0.14em", textTransform: "uppercase", fontSize: "11px", margin: "0 0 10px" }}>
                          {article.category}
                        </p>
                        <h2 style={{ fontSize: "18px", lineHeight: "1.25", margin: "0 0 12px", color: "#2a211d" }}>
                          {article.title}
                        </h2>
                        <p style={{ color: "#85756f", fontSize: "13px", margin: "0 0 14px" }}>
                          {article.date} · {article.read}
                        </p>
                        <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#3d3531", margin: 0 }}>
                          {article.description}
                        </p>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* SLIDER NORMAL — pas de recherche */
              <div
                id="blog-slider"
                style={{
                  display: "flex",
                  gap: "16px",
                  overflowX: "auto",
                  padding: "24px 24px 40px",
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  boxSizing: "border-box",
                }}
              >
                {articles.map((article) => (
                  <a
                    key={article.url}
                    href={article.url}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.04)"; }}
                    style={{ ...cardStyle, flex: "0 0 300px", width: "300px", transition: "transform 0.25s ease, box-shadow 0.25s ease" }}
                  >
                    <p style={{ color: "#d14d68", fontWeight: "800", letterSpacing: "0.14em", textTransform: "uppercase", fontSize: "11px", margin: "0 0 10px" }}>
                      {article.category}
                    </p>
                    <h2 style={{ fontSize: "18px", lineHeight: "1.25", margin: "0 0 12px", color: "#2a211d" }}>
                      {article.title}
                    </h2>
                    <p style={{ color: "#85756f", fontSize: "13px", margin: "0 0 14px" }}>
                      {article.date} · {article.read}
                    </p>
                    <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#3d3531", margin: 0 }}>
                      {article.description}
                    </p>
                  </a>
                ))}
              </div>
            )}
          </>
        )}

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