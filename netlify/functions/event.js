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

    // Bygg API Keypair som Billetto kräver
    const apiKeypair = `${keyId}:${secretKey}`;

    // Testa att hämta alla events för din organiser
    const response = await fetch("https://billetto.se/api/v3/organizer/events", {
      headers: {
        "Api-Keypair": apiKeypair,
        "Accept": "application/vnd.api+json",
      },
    });

    const raw = await response.text(); // <-- ta ALLT som text

    return {
      statusCode: response.status,
      body: JSON.stringify({
        ok: response.ok,
        status: response.status,
        raw, // <-- skicka tillbaka originaltexten vi fick
      }),
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
