export async function handler(event, context) {
  const { id } = event.queryStringParameters || {}

  try {
    // Basic Auth: base64(ACCESS_KEY_ID:SECRET_KEY)
    const auth = Buffer.from(
      `${process.env.BILLETO_ACCESS_KEY_ID}:${process.env.BILLETO_SECRET_KEY}`
    ).toString('base64')

    const response = await fetch(`https://api.billetexempel.se/v1/events/${id}`, {
      headers: {
        "Authorization": `Basic ${auth}`,
        "Content-Type": "application/json"
      }
    })

    // Logga statuskod för felsökning
    console.log("Billetto status:", response.status)

    if (!response.ok) {
      const text = await response.text()
      console.error("Billetto svar:", text)
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
    console.error("Error i funktionen:", err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Kunde inte hämta event" })
    }
  }
}
