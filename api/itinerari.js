// api/itinerario.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non consentito" });
  }

  const { meta, partenza, ritorno, adulti, bambini, budget, preferenze } = req.body;

  try {
    // Chiamata a voli (demo - sostituire con API reali come Skyscanner)
    const voli = [
      { compagnia: "ITA Airways", prezzo: 120, link: "https://skyscanner.it" },
      { compagnia: "Ryanair", prezzo: 90, link: "https://skyscanner.it" }
    ];

    // Chiamata a hotel (demo - Booking/Hotels.com)
    const hotel = [
      { nome: "Hotel Centrale", prezzo: 300, immagine: "https://picsum.photos/200/150", link: "https://booking.com" }
    ];

    // Attività (demo - GetYourGuide)
    const attivita = preferenze.includes("Musei")
      ? [{ nome: "Tour del museo", prezzo: 30, link: "https://getyourguide.com" }]
      : [{ nome: "Escursione naturalistica", prezzo: 40, link: "https://getyourguide.com" }];

    // Itinerario giornaliero
    const giorni = [
      { giorno: 1, descrizione: "Arrivo e visita al centro città", attivita: attivita[0] },
      { giorno: 2, descrizione: "Escursioni e relax", attivita: attivita[0] },
      { giorno: 3, descrizione: "Ultimi acquisti e rientro", attivita: attivita[0] }
    ];

    res.status(200).json({
      voli,
      hotel,
      attivita,
      giorni,
      meta,
      adulti,
      bambini,
      budget
    });
  } catch (error) {
    res.status(500).json({ error: "Errore generazione itinerario", details: error.message });
  }
}
