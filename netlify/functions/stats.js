const { getStore } = require("@netlify/blobs");

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

const DEFAULT_STATS = {
  visitors: 0,
  clicks: 0,
  stripe: 0,
  payments: 0,
  countries: {},
};

exports.handler = async function(event) {
  // OPTIONS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: HEADERS, body: "" };
  }

  const store = getStore("fluffhaven-stats");

  // Charge stats avec fallback propre
  let stats;
  try {
    stats = await store.get("stats", { type: "json" });
    if (!stats || typeof stats !== "object") stats = { ...DEFAULT_STATS };
  } catch {
    stats = { ...DEFAULT_STATS };
  }

  // ── GET ──
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify(stats),
    };
  }

  // ── POST ──
  if (event.httpMethod === "POST") {
    let data = {};
    try { data = JSON.parse(event.body || "{}"); } catch { data = {}; }

    if (data.type === "visit") {
      stats.visitors = (stats.visitors || 0) + 1;

      // Détection pays — header Netlify correct
      let country = "Unknown";
      try {
        // Netlify Edge fournit x-nf-geo en JSON
        const geoRaw = event.headers["x-nf-geo"];
        if (geoRaw) {
          const geo = JSON.parse(geoRaw);
          country = geo.country?.name || geo.country_code || "Unknown";
        } else {
          // Fallback autres headers
          country =
            event.headers["x-country"] ||
            event.headers["cf-ipcountry"] ||
            event.headers["x-vercel-ip-country"] ||
            "Unknown";
        }
      } catch {
        country = "Unknown";
      }

      stats.countries = stats.countries || {};
      stats.countries[country] = (stats.countries[country] || 0) + 1;
    }

    if (data.type === "click")   stats.clicks   = (stats.clicks   || 0) + 1;
    if (data.type === "stripe")  stats.stripe   = (stats.stripe   || 0) + 1;
    if (data.type === "payment") stats.payments = (stats.payments || 0) + 1;

    try {
      await store.set("stats", stats);
    } catch (e) {
      console.error("Store set error:", e);
    }

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({ success: true }),
    };
  }

  // ── DELETE (reset) ──
  if (event.httpMethod === "DELETE") {
    try {
      await store.set("stats", { ...DEFAULT_STATS });
    } catch (e) {
      console.error("Store reset error:", e);
    }
    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({ reset: true }),
    };
  }

  return {
    statusCode: 405,
    headers: HEADERS,
    body: JSON.stringify({ error: "Method not allowed" }),
  };
}