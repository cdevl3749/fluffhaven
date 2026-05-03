import { useEffect, useState, useRef } from "react";

const ROSE = "#c8475e";
const INK  = "#1a1714";

export default function Dashboard() {
  const [stats, setStats]     = useState(null);
  const [error, setError]     = useState(null);
  const prevPayRef            = useRef(0);

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
        .then((r) => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          return r.json();
        })
        .then((data) => {
          setError(null);
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
        })
        .catch((err) => {
          setError(err.message);
        });
    };

    load();
    const interval = setInterval(load, 5000);
    return () => clearInterval(interval);
  }, []);

  // ── Loading ──
  if (!stats && !error) {
    return (
      <div style={styles.loading}>
        <div style={styles.spinner} />
        <p style={{ color: "#888", marginTop: 16, fontFamily: "sans-serif" }}>
          Chargement du dashboard…
        </p>
      </div>
    );
  }

  // ── Erreur ──
  if (error) {
    return (
      <div style={styles.loading}>
        <p style={{ color: "red", fontFamily: "sans-serif" }}>
          ❌ Erreur : {error}
        </p>
        <p style={{ color: "#888", fontFamily: "sans-serif", fontSize: 13 }}>
          Vérifie que la fonction Netlify "stats" est bien déployée.
        </p>
      </div>
    );
  }

  // ── Taux de conversion ──
  const convRate = stats.clicks > 0
    ? ((stats.payments / stats.clicks) * 100).toFixed(1) + "%"
    : "0.0%";

  const cards = [
    { label: "Visiteurs",      value: stats.visitors,  icon: "👁️",  color: "#4f7ef8" },
    { label: "Clic Checkout",  value: stats.clicks,    icon: "🛒",  color: "#f59e0b" },
    { label: "Arrivés Stripe", value: stats.stripe,    icon: "💳",  color: "#8b5cf6" },
    { label: "Paiements",      value: stats.payments,  icon: "✅",  color: "#10b981" },
    { label: "Conversion",     value: convRate,        icon: "📈",  color: ROSE      },
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
                  new Notification("🐾 Notifications activées !", {
                    body: "Vous serez notifié à chaque nouveau paiement FluffHaven.",
                    icon: "/favicon-paw.svg",
                  });
                } else {
                  alert("Notifications refusées. Autorisez-les dans les paramètres du navigateur (icône 🔒 dans la barre d'adresse).");
                }
              });
            }}
          >
            🔔 Activer notifications
          </button>
          <button
            style={styles.btnReset}
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

      {/* CARDS — String() pour afficher 0 */}
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
        <h2 style={styles.sectionTitle}>🌍 Visiteurs par pays</h2>
        {topCountries.length === 0 ? (
          <p style={{ color: "#888", fontFamily: "sans-serif", fontSize: 14 }}>
            Aucune donnée encore — les visites sur fluffhaven.shop apparaîtront ici.
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

      {/* FUNNEL */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🔄 Tunnel de conversion</h2>
        <div style={styles.funnel}>
          {[
            { label: "Visiteurs",       val: stats.visitors, bg: "#4f7ef815" },
            { label: "Checkout cliqué", val: stats.clicks,   bg: "#f59e0b15" },
            { label: "Arrivés Stripe",  val: stats.stripe,   bg: "#8b5cf615" },
            { label: "Paiements",       val: stats.payments, bg: "#10b98115" },
          ].map((f, i, arr) => (
            <div key={f.label}>
              <div style={{ ...styles.funnelStep, background: f.bg }}>
                <span style={styles.funnelNum}>{String(f.val)}</span>
                <span style={styles.funnelLabel}>{f.label}</span>
              </div>
              {i < arr.length - 1 && (
                <div style={{ textAlign: "center", fontSize: 18, color: "#ccc", lineHeight: 1.2 }}>▼</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <p style={{ textAlign: "center", color: "#ccc", fontSize: 12, marginTop: 40, fontFamily: "sans-serif" }}>
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