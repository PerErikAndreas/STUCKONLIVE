export async function handler(event, context) {
  try {
    // Bygg headers med API-nycklar från Netlify-miljövariabler
    const headers = {
      "Api-Keypair": `${process.env.BILLETO_ACCESS_KEY_ID}:${process.env.BILLETO_SECRET_KEY}`,
      "Accept": "application/vnd.api+json",
    };

    console.log("Headers som skickas:", headers);

    // Hämta events
    const response = await fetch("https://billetto.se/api/v3/organizer/events", {
      headers,
    });

    console.log("Statuskod från Billetto:", response.status);

    const text = await response.text();
    console.log("Rått svar från Billetto:", text);

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Kunde inte hämta events", raw: text }),
      };
    }

    const data = JSON.parse(text);

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
