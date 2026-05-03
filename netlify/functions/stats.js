let stats = {
  visitors: 0,
  clicks: 0,
  stripe: 0,
  payments: 0,
  countries: {},
};

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

export async function handler(event) {

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: HEADERS, body: "" };
  }

  // GET
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify(stats),
    };
  }

  // POST
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

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({ success: true }),
    };
  }

  // RESET
  if (event.httpMethod === "DELETE") {
    stats = {
      visitors: 0,
      clicks: 0,
      stripe: 0,
      payments: 0,
      countries: {},
    };

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