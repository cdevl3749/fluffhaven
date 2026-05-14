const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

async function redis(cmd) {
  const res = await fetch(
    `${REDIS_URL}/${cmd.map(encodeURIComponent).join("/")}`,
    {
      headers: {
        Authorization: `Bearer ${REDIS_TOKEN}`,
      },
    }
  );

  const json = await res.json();
  return json.result;
}

export async function handler(event) {

  // OPTIONS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: HEADERS,
      body: "",
    };
  }

  // GET STATS
  if (event.httpMethod === "GET") {

    const [
      visitors,
      clicks,
      stripe,
      payments,
      countriesRaw,
    ] = await Promise.all([
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

  // POST EVENTS
  if (event.httpMethod === "POST") {

    let data = {};

    try {
      data = JSON.parse(event.body || "{}");
    } catch {}

    // VISIT
    if (data.type === "visit") {

      try {

        // Incrémente visiteurs
        await redis(["INCR", "visitors"]);

        // Détection pays Netlify
        let country = "Unknown";

        try {
          country =
            event.headers["x-country"] ||
            event.headers["cf-ipcountry"] ||
            event.headers["x-vercel-ip-country"] ||
            "Unknown";
        } catch (e) {
          console.log("Country detect error:", e);
        }

        console.log("VISIT FROM:", country);

        // Récupère pays existants
        const countriesRaw = await redis(["GET", "countries"]);

        let countries = {};

        try {
          countries = JSON.parse(countriesRaw || "{}");
        } catch {
          countries = {};
        }

        // Incrémente pays
        countries[country] = (countries[country] || 0) + 1;

        // Sauvegarde
        await redis([
          "SET",
          "countries",
          JSON.stringify(countries),
        ]);

      } catch (err) {
        console.log("VISIT ERROR:", err);
      }
    }

    // CLICK
    if (data.type === "click") {
      try {
        await redis(["INCR", "clicks"]);
      } catch (err) {
        console.log("CLICK ERROR:", err);
      }
    }

    // STRIPE
    if (data.type === "stripe") {
      try {
        await redis(["INCR", "stripe"]);
      } catch (err) {
        console.log("STRIPE ERROR:", err);
      }
    }

    // PAYMENT
    if (data.type === "payment") {
      try {
        await redis(["INCR", "payments"]);
      } catch (err) {
        console.log("PAYMENT ERROR:", err);
      }
    }

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({
        success: true,
      }),
    };
  }

  // RESET
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
      body: JSON.stringify({
        reset: true,
      }),
    };
  }

  // METHOD NOT ALLOWED
  return {
    statusCode: 405,
    headers: HEADERS,
    body: JSON.stringify({
      error: "Method not allowed",
    }),
  };
}
