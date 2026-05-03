// stats.js — version sans @netlify/blobs pour diagnostiquer le 502
// Utilise uniquement les variables d'environnement Netlify Blobs natives

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

// ── Helpers Netlify Blobs via fetch natif (pas besoin du package) ──
async function getStats() {
  try {
    const siteId   = process.env.NETLIFY_SITE_ID;
    const token    = process.env.NETLIFY_BLOBS_TOKEN || process.env.NETLIFY_AUTH_TOKEN;
    const storeUrl = `https://blobs.netlify.com/api/v1/${siteId}/fluffhaven-stats/stats`;

    if (!siteId || !token) {
      // Fallback : retourne les stats vides si pas de credentials
      return { ...DEFAULT_STATS };
    }

    const res = await fetch(storeUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) return { ...DEFAULT_STATS };
    return await res.json();
  } catch {
    return { ...DEFAULT_STATS };
  }
}

async function setStats(stats) {
  try {
    const siteId   = process.env.NETLIFY_SITE_ID;
    const token    = process.env.NETLIFY_BLOBS_TOKEN || process.env.NETLIFY_AUTH_TOKEN;
    const storeUrl = `https://blobs.netlify.com/api/v1/${siteId}/fluffhaven-stats/stats`;

    if (!siteId || !token) return;

    await fetch(storeUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stats),
    });
  } catch (e) {
    console.error("setStats error:", e);
  }
}

exports.handler = async function (event) {
  // OPTIONS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: HEADERS, body: "" };
  }

  let stats = await getStats();

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

      // Détection pays
      let country = "Unknown";
      try {
        const geoRaw = event.headers["x-nf-geo"];
        if (geoRaw) {
          const geo = JSON.parse(geoRaw);
          country = geo.country?.name || geo.country_code || "Unknown";
        } else {
          country =
            event.headers["x-country"] ||
            event.headers["cf-ipcountry"] ||
            "Unknown";
        }
      } catch { country = "Unknown"; }

      stats.countries = stats.countries || {};
      stats.countries[country] = (stats.countries[country] || 0) + 1;
    }

    if (data.type === "click")   stats.clicks   = (stats.clicks   || 0) + 1;
    if (data.type === "stripe")  stats.stripe   = (stats.stripe   || 0) + 1;
    if (data.type === "payment") stats.payments = (stats.payments || 0) + 1;

    await setStats(stats);

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({ success: true }),
    };
  }

  // ── DELETE (reset) ──
  if (event.httpMethod === "DELETE") {
    await setStats({ ...DEFAULT_STATS });
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
};