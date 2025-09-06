export async function handler() {
  try {
    const keyId = process.env.BILLETO_ACCESS_KEY_ID;
    const secretKey = process.env.BILLETO_SECRET_KEY;

    if (!keyId || !secretKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "API keys saknas" }),
      };
    }

    const apiKeypair = `${keyId}:${secretKey}`;
    const organizerId = "652330"; // <-- ditt organizer ID

    const response = await fetch(`https://billetto.se/api/v3/organizers/${organizerId}/events`, {
      headers: {
        "Api-Keypair": apiKeypair,
        "Accept": "application/vnd.api+json",
      },
    });

    const raw = await response.text();

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: "Kunde inte hämta events",
          raw,
        }),
      };
    }

    const data = JSON.parse(raw);

    return {
      statusCode: 200,
      body: JSON.stringify(data, null, 2),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Fel i function",
        details: err.message,
      }),
    };
  }
}
