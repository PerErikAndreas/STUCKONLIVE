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
    const organizerId = "652330"; // ditt organizer ID

    const url = `https://billetto.se/api/v3/organizers/${organizerId}/events`;

    const response = await fetch(url, {
      headers: {
        "Api-Keypair": apiKeypair,
        "Accept": "application/vnd.api+json",
      },
    });

    const raw = await response.text();

    return {
      statusCode: response.status,
      body: raw, // 👉 returnera exakt det API:et skickar
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Fel i function", details: err.message }),
    };
  }
}
