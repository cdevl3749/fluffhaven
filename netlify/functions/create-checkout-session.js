const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const items = body.items || [];

    if (!items.length) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Cart is empty" }),
      };
    }

    const line_items = items.map((item) => ({
      price: item.priceId,
      quantity: item.quantity || 1,
    }));

    const siteUrl =
      process.env.SITE_URL || event.headers.origin || "https://fluffhaven.shop";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      shipping_address_collection: {
        allowed_countries: [
          "US", "CA", "GB", "IE", "FR", "BE", "NL", "DE", "LU", "ES", "IT",
          "PT", "AT", "CH", "SE", "DK", "NO", "FI", "AU", "NZ"
        ],
      },
      shipping_options: [
        {
          shipping_rate: process.env.STRIPE_FREE_SHIPPING_RATE_ID,
        },
      ],
      success_url: `${siteUrl}/?checkout=success`,
      cancel_url: `${siteUrl}/?checkout=cancel`,
      allow_promotion_codes: true,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    console.error("Stripe checkout error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Unable to create checkout session",
        details: error.message,
      }),
    };
  }
};