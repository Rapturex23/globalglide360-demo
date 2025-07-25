export default async function handler(req, res) {
  const { type, cityCode, date, adults, origin, lat, lon } = req.query;

  // Credenziali Amadeus
  const API_KEY = "kDR8582BVq2qikHZUQAaUBLlZNzTVp50";
  const API_SECRET = "6e8Wjj1R9axfFAIx";

  try {
    // 1️⃣ Ottenere il token
    const tokenRes = await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`
    });

    if (!tokenRes.ok) {
      const errorText = await tokenRes.text();
      console.error("❌ Errore token:", errorText);
      return res.status(500).json({ error: "Token non valido", details: errorText });
    }

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    // 2️⃣ Preparare l'URL in base al tipo di richiesta
    let url = "";
    if (type === "voli") {
      const originCode = origin ? origin.toUpperCase() : "MIL";
      url = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originCode}&destinationLocationCode=${cityCode}&departureDate=${date}&adults=${adults}&currencyCode=EUR&max=5`;
    } else if (type === "hotel") {
      url = `https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=${cityCode}`;
    } else if (type === "attivita") {
      url = `https://test.api.amadeus.com/v1/shopping/activities?latitude=${lat}&longitude=${lon}&radius=20`;
    } else {
      return res.status(400).json({ error: "Tipo non valido" });
    }

    // 3️⃣ Chiamata all'API Amadeus
    const apiRes = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    if (!apiRes.ok) {
      const errorText = await apiRes.text();
      console.error("❌ Errore API Amadeus:", errorText);
      return res.status(500).json({ error: "Errore API Amadeus", details: errorText });
    }

    const data = await apiRes.json();
    res.status(200).json(data);

  } catch (error) {
    console.error("❌ Errore generale:", error);
    res.status(500).json({ error: "Errore generale", details: error.message });
  }
}
