const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

async function redis(cmd) {
  const res = await fetch(`${REDIS_URL}/${cmd.map(encodeURIComponent).join("/")}`, {
    headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
  });
  const json = await res.json();
  return json.result;
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: HEADERS, body: "" };
  }

  if (event.httpMethod === "GET") {
    const [visitors, clicks, stripe, payments, countriesRaw] = await Promise.all([
      redis(["GET", "visitors"]),
      redis(["GET", "clicks"]),
      redis(["GET", "stripe"]),
      redis(["GET", "payments"]),
      redis(["GET", "countries"]),
    ]);
    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({
        visitors: parseInt(visitors) || 0,
        clicks: parseInt(clicks) || 0,
        stripe: parseInt(stripe) || 0,
        payments: parseInt(payments) || 0,
        countries: JSON.parse(countriesRaw || "{}"),
      }),
    };
  }

  if (event.httpMethod === "POST") {
    let data = {};
    try { data = JSON.parse(event.body || "{}"); } catch {}

    if (data.type === "visit") {
      await redis(["INCR", "visitors"]);

      // Géolocalisation par IP
      let country = "Unknown";
      try {
        const ip =
          event.headers["x-nf-client-connection-ip"] ||
          event.headers["x-forwarded-for"]?.split(",")[0]?.trim();
        if (ip && ip !== "127.0.0.1") {
          const geo = await fetch(`http://ip-api.com/json/${ip}?fields=country`);
          const geoJson = await geo.json();
          country = geoJson.country || "Unknown";
        }
      } catch {}

      const countriesRaw = await redis(["GET", "countries"]);
      const countries = JSON.parse(countriesRaw || "{}");
      countries[country] = (countries[country] || 0) + 1;
      await redis(["SET", "countries", JSON.stringify(countries)]);
    }

    if (data.type === "click")   await redis(["INCR", "clicks"]);
    if (data.type === "stripe")  await redis(["INCR", "stripe"]);
    if (data.type === "payment") await redis(["INCR", "payments"]);

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({ success: true }),
    };
  }

  if (event.httpMethod === "DELETE") {
    await Promise.all([
      redis(["SET", "visitors", "0"]),
      redis(["SET", "clicks", "0"]),
      redis(["SET", "stripe", "0"]),
      redis(["SET", "payments", "0"]),
      redis(["SET", "countries", "{}"]),
    ]);
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