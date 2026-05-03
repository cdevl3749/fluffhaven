import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("/.netlify/functions/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  if (!stats) return <p style={{ padding: 40 }}>Loading...</p>;

  return (
    <div style={{ padding: 40 }}>
      <h1>⚡ FluffHaven Dashboard</h1>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        <Card title="Visiteurs" value={stats.visitors} />
        <Card title="Clic Checkout" value={stats.clicks} />
        <Card title="Arrivés Stripe" value={stats.stripe} />
        <Card title="Paiements" value={stats.payments} />
      </div>

      <h2 style={{ marginTop: 40 }}>🌍 Pays</h2>
      {Object.entries(stats.countries || {}).map(([c, v]) => (
        <div key={c}>{c} : {v}</div>
      ))}
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div style={{
      background: "#f5f5f5",
      padding: 20,
      borderRadius: 10,
      width: 200
    }}>
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}