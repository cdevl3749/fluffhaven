// stats.js — version minimale sans aucune dépendance
// Pour diagnostiquer le 502 : si ça marche, on ajoute le stockage ensuite

export async function handler(event) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // Version de test — retourne des stats statiques
  // pour confirmer que la fonction tourne bien
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        visitors: 0,
        clicks: 0,
        stripe: 0,
        payments: 0,
        countries: {},
        _debug: "function OK — no storage yet",
      }),
    };
  }

  if (event.httpMethod === "POST") {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true }),
    };
  }

  if (event.httpMethod === "DELETE") {
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