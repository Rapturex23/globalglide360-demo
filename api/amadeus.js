export default async function handler(req, res) {
  // Chiavi API (usiamo le tue)
  const clientId = "kDR8582BVq2qikHZUQAaUBLlZNzTVp50";
  const clientSecret = "6e8Wjj1R9axfFAIx";

  try {
    // Ottieni token di accesso
    const tokenResponse = await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
    });

    const tokenData = await tokenResponse.json();
    if (!tokenData.access_token) {
      return res.status(500).json({ error: "Errore nel recupero token", details: tokenData });
    }

    // Estrai parametri dalla query
    const { type, cityCode, date, adults, lat, lon } = req.query;

    let url = "";
    if (type === "voli") {
      url = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MIL&destinationLocationCode=${cityCode}&departureDate=${date}&adults=${adults}&currencyCode=EUR`;
    } else if (type === "hotel") {
      url = `https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=${cityCode}`;
    } else if (type === "attivita") {
      url = `https://test.api.amadeus.com/v1/shopping/activities?latitude=${lat}&longitude=${lon}&radius=10`;
    }

    // Chiamata all'endpoint Amadeus corretto
    const apiResponse = await fetch(url, {
      headers: { Authorization: `Bearer ${tokenData.access_token}` }
    });
    const apiData = await apiResponse.json();

    return res.status(200).json(apiData);

  } catch (error) {
    return res.status(500).json({ error: "Errore generale", details: error.message });
  }
}

