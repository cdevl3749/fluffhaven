import { useEffect, useState, useRef } from "react";

const ROSE = "#c8475e";
const INK  = "#1a1714";

export default function Dashboard() {
  const [stats, setStats]     = useState(null);
  const [error, setError]     = useState(null);
  const prevPayRef            = useRef(0);

  // â”€â”€ Demande permission notification au chargement â”€â”€
  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  // â”€â”€ Charge les stats toutes les 5 secondes â”€â”€
  useEffect(() => {
    const load = () => {
      fetch("/.netlify/functions/stats")
        .then((r) => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          return r.json();
        })
        .then((data) => {
          setError(null);
          setStats(data);

          // â”€â”€ Notification Windows si nouveau paiement â”€â”€
          if (
            prevPayRef.current > 0 &&
            data.payments > prevPayRef.current &&
            Notification.permission === "granted"
          ) {
            new Notification("ðŸŽ‰ FluffHaven â€” Nouveau paiement !", {
              body: `Total paiements : ${data.payments}`,
              icon: "/favicon-paw.svg",
            });
          }
          prevPayRef.current = data.payments;
        })
        .catch((err) => {
          setError(err.message);
        });
    };

    load();
    const interval = setInterval(load, 300000);
    return () => clearInterval(interval);
  }, []);

  // â”€â”€ Loading â”€â”€
  if (!stats && !error) {
    return (
      <div style={styles.loading}>
        <div style={styles.spinner} />
        <p style={{ color: "#888", marginTop: 16, fontFamily: "sans-serif" }}>
          Chargement du dashboardâ€¦
        </p>
      </div>
    );
  }

  // â”€â”€ Erreur â”€â”€
  if (error) {
    return (
      <div style={styles.loading}>
        <p style={{ color: "red", fontFamily: "sans-serif" }}>
          âŒ Erreur : {error}
        </p>
        <p style={{ color: "#888", fontFamily: "sans-serif", fontSize: 13 }}>
          VÃ©rifie que la fonction Netlify "stats" est bien dÃ©ployÃ©e.
        </p>
      </div>
    );
  }

  // â”€â”€ Taux de conversion â”€â”€
  const convRate = stats.clicks > 0
    ? ((stats.payments / stats.clicks) * 100).toFixed(1) + "%"
    : "0.0%";

  const cards = [
    { label: "Visiteurs",      value: stats.visitors,  icon: "ðŸ‘ï¸",  color: "#4f7ef8" },
    { label: "Produits vus",   value: stats.productViews,  icon: "ðŸ‘ï¸", color: "#0ea5e9" },
    { label: "Ajouts panier", value: stats.cartAdds || 0, icon: "ðŸ›’", color: "#22c55e" },
    { label: "Clic Checkout",  value: stats.clicks,    icon: "ðŸ›’",  color: "#f59e0b" },
    { label: "ArrivÃ©s Stripe", value: stats.stripe,    icon: "ðŸ’³",  color: "#8b5cf6" },
    { label: "Paiements",      value: stats.payments,  icon: "âœ…",  color: "#10b981" },
    { label: "Conversion",     value: convRate,        icon: "ðŸ“ˆ",  color: ROSE      },
  ];

  const topCountries = Object.entries(stats.countries || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const topCartCountries = Object.entries(stats.cartCountryStats || {})
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10);

  const topProducts = Object.entries(stats.productStats || {})
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20);

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 32 }}>ðŸ¾</span>
          <div>
            <h1 style={styles.title}>FluffHaven Dashboard</h1>
            <p style={styles.subtitle}>Stats en temps rÃ©el Â· refresh toutes les 5min</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            style={styles.btnNotif}
            onClick={() => {
              if (!("Notification" in window)) {
                alert("Votre navigateur ne supporte pas les notifications.");
                return;
              }
              Notification.requestPermission().then((p) => {
                if (p === "granted") {
                  new Notification("ðŸ¾ Notifications activÃ©es !", {
                    body: "Vous serez notifiÃ© Ã  chaque nouveau paiement FluffHaven.",
                    icon: "/favicon-paw.svg",
                  });
                } else {
                  alert("Notifications refusÃ©es. Autorisez-les dans les paramÃ¨tres du navigateur (icÃ´ne ðŸ”’ dans la barre d'adresse).");
                }
              });
            }}
          >
            ðŸ”” Activer notifications
          </button>
        </div>
      </div>

      {/* CARDS â€” String() pour afficher 0 */}
      <div style={styles.grid}>
        {cards.map((c) => (
          <div key={c.label} style={{ ...styles.card, borderTop: `4px solid ${c.color}` }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
            <div style={{ ...styles.cardValue, color: c.color }}>
              {String(c.value)}
            </div>
            <div style={styles.cardLabel}>{c.label}</div>
          </div>
        ))}
      </div>

      {/* PAYS */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>ðŸŒ Visiteurs par pays</h2>
        {topCountries.length === 0 ? (
          <p style={{ color: "#888", fontFamily: "sans-serif", fontSize: 14 }}>
            Aucune donnÃ©e encore â€” les visites sur fluffhaven.shop apparaÃ®tront ici.
          </p>
        ) : (
          <div style={styles.countryList}>
            {topCountries.map(([country, count]) => {
              const pct = stats.visitors > 0
                ? Math.round((count / stats.visitors) * 100)
                : 0;
              return (
                <div key={country} style={styles.countryRow}>
                  <span style={styles.countryName}>{country}</span>
                  <div style={styles.barBg}>
                    <div style={{ ...styles.barFill, width: `${pct}%` }} />
                  </div>
                  <span style={styles.countryCount}>{count}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* AJOUTS PANIER PAR PAYS */}
<div style={styles.section}>
  <h2 style={styles.sectionTitle}>ðŸ›’ Ajouts panier par pays</h2>

  {topCartCountries.length === 0 ? (
    <p style={{ color: "#888", fontFamily: "sans-serif", fontSize: 14 }}>
      Aucun ajout panier enregistrÃ© par pays pour le moment.
    </p>
  ) : (
    <div style={styles.countryList}>
      {topCartCountries.map(([country, count]) => {
        const pct =
          stats.cartAdds > 0
            ? Math.round((count / stats.cartAdds) * 100)
            : 0;

        return (
          <div key={country} style={styles.countryRow}>
            <span style={styles.countryName}>{country}</span>

            <div style={styles.barBg}>
              <div style={{ ...styles.barFill, width: `${pct}%` }} />
            </div>

            <span style={styles.countryCount}>{count}</span>
          </div>
        );
      })}
    </div>
  )}
</div>

      
{/* DEVICES â€“ PC vs Mobile */}
<div style={styles.section}>
  <h2 style={styles.sectionTitle}>ðŸ“± PC vs Mobile</h2>

  {(() => {
    const devices = stats.devices || {};

    const totals = Object.entries(devices).reduce(
      (acc, [device, count]) => {
        const type = device.trim().toLowerCase();
        const category = type === "mobile" ? "Mobile" : "Desktop";

        acc[category] += Number(count) || 0;
        return acc;
      },
      { Mobile: 0, Desktop: 0 }
    );

    const total = totals.Mobile + totals.Desktop;

    return total === 0 ? (
      <p style={{ color: "#888", fontFamily: "sans-serif", fontSize: 14 }}>
        Aucune donnÃ©e encore.
      </p>
    ) : (
      <div style={styles.countryList}>
        {Object.entries(totals).map(([device, count]) => {
          const pct = Math.round((count / total) * 100);

          return (
            <div key={device} style={styles.countryRow}>
              <span style={styles.countryName}>
                {device === "Mobile" ? "ðŸ“± Mobile" : "ðŸ–¥ï¸ Desktop"}
              </span>
              <div style={styles.barBg}>
                <div style={{ ...styles.barFill, width: `${pct}%` }} />
              </div>
              <span style={styles.countryCount}>{count}</span>
            </div>
          );
        })}
      </div>
    );
  })()}
</div>

      {/* SOURCES */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>ðŸ”— Sources de trafic</h2>
        {Object.keys(stats.sources || {}).length === 0 ? (
          <p style={{ color: "#888", fontFamily: "sans-serif", fontSize: 14 }}>
            Aucune donnÃ©e encore.
          </p>
        ) : (
          <div style={styles.countryList}>
            {Object.entries(stats.sources || {})
              .sort((a, b) => b[1] - a[1])
              .map(([source, count]) => {
                const pct = stats.visitors > 0 ? Math.round((count / stats.visitors) * 100) : 0;
                return (
                  <div key={source} style={styles.countryRow}>
                    <span style={styles.countryName}>{source}</span>
                    <div style={styles.barBg}>
                      <div style={{ ...styles.barFill, width: `${pct}%` }} />
                    </div>
                    <span style={styles.countryCount}>{count}</span>
                  </div>
                );
              })}
          </div>
        )}
      </div>

      {/* TOP PAGES */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>ðŸ“„ Pages les plus visitÃ©es</h2>
        {Object.keys(stats.pages || {}).length === 0 ? (
          <p style={{ color: "#888", fontFamily: "sans-serif", fontSize: 14 }}>
            Aucune donnÃ©e encore.
          </p>
        ) : (
          <div style={styles.countryList}>
            {Object.entries(stats.pages || {})
              .sort((a, b) => b[1] - a[1])
              .slice(0, 10)
              .map(([page, count]) => {
                const pct = stats.visitors > 0 ? Math.round((count / stats.visitors) * 100) : 0;
                return (
                  <div key={page} style={{ ...styles.countryRow, gridTemplateColumns: "1fr 120px 40px" }}>
                    <span style={{ ...styles.countryName, fontSize: 12 }}>{page}</span>
                    <div style={styles.barBg}>
                      <div style={{ ...styles.barFill, width: `${pct}%` }} />
                    </div>
                    <span style={styles.countryCount}>{count}</span>
                  </div>
                );
              })}
          </div>
        )}
      </div>

      {/* TOP PRODUCTS */}
<div style={styles.section}>
  <h2 style={styles.sectionTitle}>ðŸ”¥ Produits les plus consultÃ©s</h2>

  {topProducts.length === 0 ? (
    <p
      style={{
        color: "#888",
        fontFamily: "sans-serif",
        fontSize: 14,
      }}
    >
      Aucune donnÃ©e produit encore.
    </p>
  ) : (
    <div style={styles.countryList}>
      {topProducts.map(([productName, count]) => {
        const pct =
          stats.productViews > 0
            ? Math.round((count / stats.productViews) * 100)
            : 0;

            const timeData = stats.productTimeStats?.[productName];

            const countryData = stats.productCountryStats?.[productName] || {};

const topProductCountries = Object.entries(countryData)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 3);

const avgTime =
  timeData?.sessions > 0
    ? Math.round(timeData.totalTime / timeData.sessions)
    : 0;

        return (
          <div
            key={productName}
            style={{
              ...styles.countryRow,
              gridTemplateColumns: "260px 1fr 40px",
            }}
          >
            <div>
  <span
    style={{
      ...styles.countryName,
      fontSize: 13,
    }}
  >
    {productName}
  </span>

  {avgTime > 0 && (
    <div
      style={{
        fontSize: 12,
        color: "#888",
        marginTop: 3,
      }}
    >
      â±ï¸ {Math.floor(avgTime / 60)}m {avgTime % 60}s moy.
    </div>
  )}
  {topProductCountries.length > 0 && (
  <div
    style={{
      fontSize: 12,
      color: "#666",
      marginTop: 3,
    }}
  >
    ðŸŒ {topProductCountries
      .map(([country, views]) => `${country}: ${views}`)
      .join(" â€¢ ")}
  </div>
)}
</div>

            <div style={styles.barBg}>
              <div
                style={{
                  ...styles.barFill,
                  width: `${pct}%`,
                }}
              />
            </div>

            <span style={styles.countryCount}>{count}</span>
          </div>
        );
      })}
    </div>
  )}
</div>

      {/* FUNNEL */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>ðŸ”„ Tunnel de conversion</h2>
        <div style={styles.funnel}>
          {[
            { label: "Visiteurs",       val: stats.visitors, bg: "#4f7ef815" },
            { label: "Produits vus", val: stats.productViews, bg: "#0ea5e915" },
            { label: "Ajouts panier", val: stats.cartAdds, bg: "#ec489915" },
            { label: "Checkout cliquÃ©", val: stats.clicks,   bg: "#f59e0b15" },
            { label: "ArrivÃ©s Stripe",  val: stats.stripe,   bg: "#8b5cf615" },
            { label: "Paiements",       val: stats.payments, bg: "#10b98115" },
          ].map((f, i, arr) => (
            <div key={f.label}>
              <div style={{ ...styles.funnelStep, background: f.bg }}>
                <span style={styles.funnelNum}>{String(f.val)}</span>
                <span style={styles.funnelLabel}>{f.label}</span>
              </div>
              {i < arr.length - 1 && (
                <div style={{ textAlign: "center", fontSize: 18, color: "#ccc", lineHeight: 1.2 }}>â–¼</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <p style={{ textAlign: "center", color: "#ccc", fontSize: 12, marginTop: 40, fontFamily: "sans-serif" }}>
        Â© 2026 FluffHaven Â· Dashboard privÃ©
      </p>
    </div>
  );
}

// â”€â”€ STYLES â”€â”€
const styles = {
  page: {
    minHeight: "100vh",
    background: "#f8f7f5",
    padding: "32px 5%",
    fontFamily: "'DM Sans', -apple-system, sans-serif",
  },
  loading: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
  },
  spinner: {
    width: 40,
    height: 40,
    border: "4px solid #eee",
    borderTop: `4px solid ${ROSE}`,
    borderRadius: "50%",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16,
    marginBottom: 28,
    background: "white",
    borderRadius: 16,
    padding: "20px 28px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  },
  title: {
    margin: 0,
    fontSize: 22,
    fontWeight: 700,
    color: INK,
  },
  subtitle: {
    margin: "4px 0 0",
    fontSize: 13,
    color: "#888",
  },
  btnNotif: {
    padding: "10px 16px",
    borderRadius: 10,
    border: "1.5px solid #e8e2db",
    background: "white",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 13,
    color: INK,
    fontFamily: "inherit",
  },
  btnReset: {
    padding: "10px 16px",
    borderRadius: 10,
    border: "1.5px solid #fee2e2",
    background: "#fff5f5",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 13,
    color: "#b91c1c",
    fontFamily: "inherit",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: 16,
    marginBottom: 24,
  },
  card: {
    background: "white",
    borderRadius: 16,
    padding: "24px 16px",
    textAlign: "center",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  },
  cardValue: {
    fontSize: 38,
    fontWeight: 800,
    lineHeight: 1,
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 12,
    color: "#888",
    fontWeight: 500,
  },
  section: {
    background: "white",
    borderRadius: 16,
    padding: "24px 28px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    marginBottom: 20,
  },
  sectionTitle: {
    margin: "0 0 20px",
    fontSize: 17,
    fontWeight: 700,
    color: INK,
  },
  countryList: {
    display: "grid",
    gap: 12,
  },
  countryRow: {
    display: "grid",
    gridTemplateColumns: "130px 1fr 40px",
    alignItems: "center",
    gap: 12,
  },
  countryName: {
    fontSize: 14,
    fontWeight: 600,
    color: INK,
  },
  barBg: {
    height: 8,
    background: "#f0eeeb",
    borderRadius: 999,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    background: ROSE,
    borderRadius: 999,
    transition: "width 0.4s ease",
    minWidth: 4,
  },
  countryCount: {
    fontSize: 13,
    color: "#888",
    textAlign: "right",
  },
  funnel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    maxWidth: 440,
    margin: "0 auto",
  },
  funnelStep: {
    width: "100%",
    borderRadius: 12,
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  funnelNum: {
    fontSize: 28,
    fontWeight: 800,
    color: INK,
  },
  funnelLabel: {
    fontSize: 14,
    color: "#555",
    fontWeight: 500,
  },
};
