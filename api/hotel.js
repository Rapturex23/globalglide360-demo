export default async function handler(req, res) {
  const { destinazione, checkin, checkout, adulti, bambini } = req.query;

  try {
    // DATI HOTEL CON IMMAGINI E LINK (simulazione)
    const hotel = [
      {
        nome: "Hotel Centrale",
        prezzo: 90,
        rating: "8.5",
        descrizione: "In pieno centro, perfetto per famiglie e coppie.",
        img: "https://picsum.photos/300/200?hotel1",
        link: "#"
      },
      {
        nome: "Resort Relax",
        prezzo: 120,
        rating: "9.1",
        descrizione: "Resort con spa e piscina all'aperto, ideale per relax.",
        img: "https://picsum.photos/300/200?hotel2",
        link: "#"
      },
      {
        nome: "B&B Famiglia",
        prezzo: 70,
        rating: "8.0",
        descrizione: "Bed & Breakfast accogliente per famiglie con bambini.",
        img: "https://picsum.photos/300/200?hotel3",
        link: "#"
      }
    ];

    res.status(200).json({ success: true, data: hotel });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
