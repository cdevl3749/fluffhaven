import { getStore } from "@netlify/blobs";

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

export async function handler(event) {

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: HEADERS, body: "" };
  }

  // ✅ IMPORTANT : MODE AUTO NETLIFY
  const store = getStore("fluffhaven-stats");

  let stats;
  try {
    stats = await store.get("stats", { type: "json" });
    if (!stats || typeof stats !== "object") {
      stats = { ...DEFAULT_STATS };
    }
  } catch {
    stats = { ...DEFAULT_STATS };
  }

  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify(stats),
    };
  }

  if (event.httpMethod === "POST") {
    let data = {};
    try { data = JSON.parse(event.body || "{}"); } catch {}

    if (data.type === "visit") {
      stats.visitors++;

      let country = "Unknown";
      try {
        const geoRaw = event.headers["x-nf-geo"];
        if (geoRaw) {
          const geo = JSON.parse(geoRaw);
          country = geo.country?.name || geo.country_code || "Unknown";
        }
      } catch {}

      stats.countries[country] = (stats.countries[country] || 0) + 1;
    }

    if (data.type === "click")   stats.clicks++;
    if (data.type === "stripe")  stats.stripe++;
    if (data.type === "payment") stats.payments++;

    await store.set("stats", stats);

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({ success: true }),
    };
  }

  if (event.httpMethod === "DELETE") {
    await store.set("stats", { ...DEFAULT_STATS });

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