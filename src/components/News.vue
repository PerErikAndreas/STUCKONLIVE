export async function handler(event, context) {
  const { id } = event.queryStringParameters || {};

  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Event-ID saknas" }),
    };
  }

  try {
    // Hämta åtkomsttoken från miljövariabler
    const accessToken = process.env.BILLETO_ACCESS_TOKEN;

    if (!accessToken) {
      throw new Error("Åtkomsttoken saknas");
    }

    // Anropa Billetto API för att hämta eventdata
    const response = await fetch(`https://api.billetto.com/v1/events/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Billetto API-fel:", errorText);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Kunde inte hämta event" }),
      };
    }

    const data = await response.json();

    const eventData = {
      title: data.title || "Okänt event",
      description: data.description || "",
      image: data.image?.url || null,
      date: data.startDate || null,
    };

    return {
      statusCode: 200,
      body: JSON.stringify(eventData),
    };
  } catch (err) {
    console.error("Fel vid hämtning av event:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Kunde inte hämta event" }),
    };
  }
}
