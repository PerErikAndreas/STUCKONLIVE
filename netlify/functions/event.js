export async function handler() {
  try {
    const keyId = process.env.BILLETO_ACCESS_KEY_ID;
    const secretKey = process.env.BILLETO_SECRET_KEY;

    if (!keyId || !secretKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "API-nycklar saknas" }),
      };
    }

    const keypair = `${keyId}:${secretKey}`;

    const response = await fetch("https://billetto.se/api/v3/organizer/events", {
      headers: {
        "Api-Keypair": keypair,
        Accept: "application/vnd.api+json",
      },
    });

    const text = await response.text();

    return {
      statusCode: response.status,
      body: text, // skicka tillbaka rått API-svar
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
