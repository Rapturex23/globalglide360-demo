import fetch from "node-fetch";

export default async function handler(req, res) {
  const { type, cityCode, date, adults, origin, lat, lon } = req.query;

  // Le tue credenziali Amadeus
  const API_KEY = "kDR8582BVq2qikHZUQAaUBLlZNzTVp50";
  const API_SECRET = "6e8Wjj1R9axfFAIx";

  try {
    // 1️⃣ Otteniamo il token di autenticazione
    const tokenRes = await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`
    });
    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    // 2️⃣ Prepara l'URL in base al tipo di richiesta
    let url = "";
    if (type === "voli") {
      const originCode = origin ?
