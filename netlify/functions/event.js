export async function handler(event, context) {
  try {
    const response = await fetch("https://billetto.se/api/v3/organizer/events", {
      headers: {
        "Api-Keypair": `${process.env.BILLETO_ACCESS_KEY_ID}:${process.env.BILLETO_SECRET_KEY}`,
        "Accept": "application/vnd.api+json",
      },
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Billetto API-fel:", text);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Kunde inte hämta events", raw: text }),
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error("Fel vid hämtning av events:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internt fel", details: err.message }),
    };
  }
}
