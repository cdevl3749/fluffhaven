const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

async function redis(cmd) {

  if (!REDIS_URL || !REDIS_TOKEN) {
    throw new Error("Missing Redis ENV variables");
  }

  const url = `${REDIS_URL}/${cmd.map(encodeURIComponent).join("/")}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${REDIS_TOKEN}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Redis HTTP ${res.status}: ${text}`);
  }

  const json = await res.json();

  if (json.error) {
    throw new Error(json.error);
  }

  return json.result;
}

export async function handler(event) {

  console.log("METHOD:", event.httpMethod);

  // OPTIONS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: HEADERS,
      body: "",
    };
  }

  // GET
  if (event.httpMethod === "GET") {

    try {

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
          visitors: parseInt(visitors || "0"),
          clicks: parseInt(clicks || "0"),
          stripe: parseInt(stripe || "0"),
          payments: parseInt(payments || "0"),
          countries: JSON.parse(countriesRaw || "{}"),
        }),
      };

    } catch (err) {

      console.log("GET ERROR:", err);

      return {
        statusCode: 500,
        headers: HEADERS,
        body: JSON.stringify({
          error: err.message,
        }),
      };
    }
  }

  // POST
  if (event.httpMethod === "POST") {

    let data = {};

    try {
      data = JSON.parse(event.body || "{}");
    } catch (err) {
      console.log("JSON PARSE ERROR:", err);
    }

    console.log("POST DATA:", data);

    try {

      // VISIT
      if (data.type === "visit") {

        await redis(["INCR", "visitors"]);

        const headers = event.headers || {};

        const country =
          headers["x-country"] ||
          headers["cf-ipcountry"] ||
          headers["x-vercel-ip-country"] ||
          headers["client-country"] ||
          "Unknown";

        console.log("VISITOR COUNTRY:", country);

        const countriesRaw = await redis(["GET", "countries"]);

        let countries = {};

        try {
          countries = JSON.parse(countriesRaw || "{}");
        } catch {
          countries = {};
        }

        countries[country] = (countries[country] || 0) + 1;

        await redis([
          "SET",
          "countries",
          JSON.stringify(countries),
        ]);
      }

      // CLICK
      if (data.type === "click") {
        await redis(["INCR", "clicks"]);
      }

      // STRIPE
      if (data.type === "stripe") {
        await redis(["INCR", "stripe"]);
      }

      // PAYMENT
      if (data.type === "payment") {
        await redis(["INCR", "payments"]);
      }

      return {
        statusCode: 200,
        headers: HEADERS,
        body: JSON.stringify({
          success: true,
        }),
      };

    } catch (err) {

      console.log("POST ERROR:", err);

      return {
        statusCode: 500,
        headers: HEADERS,
        body: JSON.stringify({
          error: err.message,
        }),
      };
    }
  }

  // RESET
  if (event.httpMethod === "DELETE") {

    try {

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

    } catch (err) {

      console.log("RESET ERROR:", err);

      return {
        statusCode: 500,
        headers: HEADERS,
        body: JSON.stringify({
          error: err.message,
        }),
      };
    }
  }

  return {
    statusCode: 405,
    headers: HEADERS,
    body: JSON.stringify({
      error: "Method not allowed",
    }),
  };
}
