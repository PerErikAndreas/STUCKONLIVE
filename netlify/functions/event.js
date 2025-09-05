export async function handler(event, context) {
  // Hämta id från query string, t.ex. /.netlify/functions/event?id=12345
  const { id } = event.queryStringParameters || {}

  try {
    const response = await fetch(`https://api.billeto.se/v1/events/${id}`, {
      headers: {
        "Authorization": `Bearer ${process.env.BILLETO_SECRET_KEY}`,
        "x-access-key-id": process.env.BILLETO_ACCESS_KEY_ID,
        "Content-Type": "application/json"
      }
    })

    if (!response.ok) {
      throw new Error(`Billetto API fel: ${response.status}`)
    }

    const data = await response.json()

    const eventData = {
      title: data.title || "Okänt event",
      description: data.description || "",
      image: data.image?.url || null,
      date: data.startDate || null,
    }

    return {
      statusCode: 200,
      body: JSON.stringify(eventData)
    }
  } catch (err) {
    console.error("Error:", err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Kunde inte hämta event" })
    }
  }
}
