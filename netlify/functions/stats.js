let stats = {
  visitors: 0,
  clicks: 0,
  stripe: 0,
  payments: 0,
  countries: {},
};

export async function handler(event) {
  // GET = récupérer stats
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify(stats),
    };
  }

  // POST = ajouter event
  if (event.httpMethod === "POST") {
    const data = JSON.parse(event.body || "{}");

    if (data.type === "visit") {
      stats.visitors++;
      if (data.country) {
        stats.countries[data.country] =
          (stats.countries[data.country] || 0) + 1;
      }
    }

    if (data.type === "click") stats.clicks++;
    if (data.type === "stripe") stats.stripe++;
    if (data.type === "payment") stats.payments++;

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  }

  return { statusCode: 405 };
}