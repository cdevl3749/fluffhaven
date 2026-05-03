import { getStore } from "@netlify/blobs";

export async function handler(event) {
  const store = getStore("fluffhaven");

  // Headers CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // Charge les stats existantes
  let stats;
  try {
    stats = await store.get("stats", { type: "json" });
  } catch (e) {
    stats = null;
  }

  if (!stats) {
    stats = {
      visitors: 0,
      clicks: 0,
      stripe: 0,
      payments: 0,
      countries: {},
    };
  }

  // ── GET ──
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(stats),
    };
  }

  // ── POST ──
  if (event.httpMethod === "POST") {
    let data = {};
    try {
      data = JSON.parse(event.body || "{}");
    } catch (e) {
      data = {};
    }

    if (data.type === "visit") {
      stats.visitors = (stats.visitors || 0) + 1;

      // Détecte le pays depuis les headers Netlify
      const country =
        event.headers["x-nf-country"] ||
        event.headers["x-country"] ||
        event.headers["cf-ipcountry"] ||
        "Unknown";

      stats.countries = stats.countries || {};
      stats.countries[country] = (stats.countries[country] || 0) + 1;
    }

    if (data.type === "click")   stats.clicks   = (stats.clicks   || 0) + 1;
    if (data.type === "stripe")  stats.stripe   = (stats.stripe   || 0) + 1;
    if (data.type === "payment") stats.payments = (stats.payments || 0) + 1;

    await store.set("stats", stats);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true }),
    };
  }

  // ── DELETE (reset) ──
  if (event.httpMethod === "DELETE") {
    const empty = {
      visitors: 0,
      clicks: 0,
      stripe: 0,
      payments: 0,
      countries: {},
    };
    await store.set("stats", empty);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ reset: true }),
    };
  }

  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({ error: "Method not allowed" }),
  };
}