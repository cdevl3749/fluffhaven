import { getStore } from "@netlify/blobs";

export async function handler(event) {
  const store = getStore("fluffhaven");

  let stats =
    (await store.get("stats", { type: "json" })) || {
      visitors: 0,
      clicks: 0,
      stripe: 0,
      payments: 0,
      countries: {},
    };

  // GET
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify(stats),
    };
  }

  // POST
  if (event.httpMethod === "POST") {
    const data = JSON.parse(event.body || "{}");

    // VISIT (anti refresh)
    if (data.type === "visit") {
    stats.visitors++;

    const country =
        data.country === "auto"
        ? event.headers["x-nf-geo"]?.country || "Unknown"
        : data.country || "Unknown";

    stats.countries[country] =
        (stats.countries[country] || 0) + 1;
    }

    if (data.type === "click") stats.clicks++;
    if (data.type === "stripe") stats.stripe++;
    if (data.type === "payment") stats.payments++;

    await store.set("stats", stats);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  }

  // RESET
  if (event.httpMethod === "DELETE") {
    await store.set("stats", {
      visitors: 0,
      clicks: 0,
      stripe: 0,
      payments: 0,
      countries: {},
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ reset: true }),
    };
  }

  return { statusCode: 405 };
}