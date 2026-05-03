import { useEffect, useState, useRef } from "react";

const ROSE = "#c8475e";
const INK  = "#1a1714";

export default function Dashboard() {
  const [stats, setStats]       = useState(null);
  const [lastPay, setLastPay]   = useState(0);
  const prevPayRef              = useRef(0);

  // ── Demande permission notification au chargement ──
  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  // ── Charge les stats toutes les 5 secondes ──
  useEffect(() => {
    const load = () => {
      fetch("/.netlify/functions/stats")
        .then((r) => r.json())
        .then((data) => {
          setStats(data);

          // ── Notification Windows si nouveau paiement ──
          if (
            prevPayRef.current > 0 &&
            data.payments > prevPayRef.current &&
            Notification.permission === "granted"
          ) {
            new Notification("🎉 FluffHaven — Nouveau paiement !", {
              body: `Total paiements : ${data.payments}`,
              icon: "/favicon-paw.svg",
            });
          }
          prevPayRef.current = data.payments;
          setLastPay(data.payments);
        })
        .catch(() => {});
    };

    load();
    const interval = setInterval(load, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!stats) {
    return (
      <div style={styles.loading}>
        <div style={styles.spinner} />
        <p style={{ color: "#888", marginTop: 16 }}>Chargement du dashboard…</p>
      </div>
    );
  }

  // ── Calcul taux de conversion ──
  const convRate = stats.clicks > 0
    ? ((stats.payments / stats.clicks) * 100).toFixed(1)
    : "0.0";

  const cards = [
    { label: "Visiteurs",      value: stats.visitors,  icon: "👁️",  color: "#4f7ef8" },
    { label: "Clic Checkout",  value: stats.clicks,    icon: "🛒",  color: "#f59e0b" },
    { label: "Arrivés Stripe", value: stats.stripe,    icon: "💳",  color: "#8b5cf6" },
    { label: "Paiements",      value: stats.payments,  icon: "✅",  color: "#10b981" },
    { label: "Conversion",     value: convRate + "%",  icon: "📈",  color: ROSE       },
  ];

  const topCountries = Object.entries(stats.countries || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 32 }}>🐾</span>
          <div>
            <h1 style={styles.title}>FluffHaven Dashboard</h1>
            <p style={styles.subtitle}>Stats en temps réel · refresh toutes les 5s</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button style={styles.btnNotif}
            onClick={() => {
              if ("Notification" in window) {
                Notification.requestPermission().then((p) => {
                  if (p === "granted") {
                    new Notification("🐾 Notifications activées !", {
                      body: "Vous serez notifié à chaque paiement.",
                      icon: "/favicon-paw.svg",
                    });
                  } else {
                    alert("Notifications refusées. Autorisez-les dans les paramètres du navigateur.");
                  }
                });
              }
            }}
          >
            🔔 Activer notifications
          </button>
          <button style={styles.btnReset}
            onClick={async () => {
              if (!window.confirm("Remettre toutes les stats à zéro ?")) return;
              await fetch("/.netlify/functions/stats", { method: "DELETE" });
              window.location.reload();
            }}
          >
            🗑️ Reset stats
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div style={styles.grid}>
        {cards.map((c) => (
          <div key={c.label} style={{ ...styles.card, borderTop: `4px solid ${c.color}` }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
            <div style={{ ...styles.cardValue, color: c.color }}>{c.value}</div>
            <div style={styles.cardLabel}>{c.label}</div>
          </div>
        ))}
      </div>

      {/* PAYS */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🌍 Visiteurs par pays</h2>
        {topCountries.length === 0 ? (
          <p style={{ color: "#888" }}>Aucune donnée encore.</p>
        ) : (
          <div style={styles.countryList}>
            {topCountries.map(([country, count]) => {
              const pct = Math.round((count / stats.visitors) * 100);
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

      {/* FUNNEL */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🔄 Tunnel de conversion</h2>
        <div style={styles.funnel}>
          {[
            { label: "Visiteurs",      val: stats.visitors,  bg: "#4f7ef820" },
            { label: "Checkout cliqué",val: stats.clicks,    bg: "#f59e0b20" },
            { label: "Arrivés Stripe", val: stats.stripe,    bg: "#8b5cf620" },
            { label: "Paiements",      val: stats.payments,  bg: "#10b98120" },
          ].map((f, i) => (
            <div key={f.label} style={{ ...styles.funnelStep, background: f.bg }}>
              <span style={styles.funnelNum}>{f.val}</span>
              <span style={styles.funnelLabel}>{f.label}</span>
              {i < 3 && <span style={styles.funnelArrow}>▼</span>}
            </div>
          ))}
        </div>
      </div>

      <p style={{ textAlign: "center", color: "#ccc", fontSize: 12, marginTop: 40 }}>
        © 2026 FluffHaven · Dashboard privé
      </p>
    </div>
  );
}

// ── STYLES ──
const styles = {
  page: {
    minHeight: "100vh",
    background: "#f8f7f5",
    padding: "32px 5%",
    fontFamily: "'DM Sans', sans-serif",
  },
  loading: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {
    width: 40,
    height: 40,
    border: "4px solid #eee",
    borderTop: `4px solid ${ROSE}`,
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16,
    marginBottom: 32,
    background: "white",
    borderRadius: 16,
    padding: "20px 28px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  },
  title: {
    margin: 0,
    fontSize: 24,
    fontWeight: 700,
    color: INK,
  },
  subtitle: {
    margin: "4px 0 0",
    fontSize: 13,
    color: "#888",
  },
  btnNotif: {
    padding: "10px 18px",
    borderRadius: 10,
    border: "1.5px solid #e8e2db",
    background: "white",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 13,
    color: INK,
  },
  btnReset: {
    padding: "10px 18px",
    borderRadius: 10,
    border: "1.5px solid #fee2e2",
    background: "#fff5f5",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 13,
    color: "#b91c1c",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 16,
    marginBottom: 32,
  },
  card: {
    background: "white",
    borderRadius: 16,
    padding: "24px 20px",
    textAlign: "center",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  },
  cardValue: {
    fontSize: 36,
    fontWeight: 800,
    lineHeight: 1,
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 13,
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
    fontSize: 18,
    fontWeight: 700,
    color: INK,
  },
  countryList: {
    display: "grid",
    gap: 10,
  },
  countryRow: {
    display: "grid",
    gridTemplateColumns: "120px 1fr 40px",
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
    gap: 0,
  },
  funnelStep: {
    width: "100%",
    maxWidth: 400,
    borderRadius: 12,
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    marginBottom: 4,
  },
  funnelNum: {
    fontSize: 24,
    fontWeight: 800,
    color: INK,
  },
  funnelLabel: {
    fontSize: 14,
    color: "#555",
    fontWeight: 500,
  },
  funnelArrow: {
    fontSize: 18,
    color: "#ccc",
    position: "absolute",
    bottom: -16,
    left: "50%",
    transform: "translateX(-50%)",
  },
};