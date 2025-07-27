export default async function handler(req, res) {
  const { destinazione, preferenze } = req.query;

  try {
    // DATI ATTIVITÀ CON IMMAGINI E LINK (simulazione)
    const attivita = [
      {
        titolo: "Tour guidato nel centro storico",
        prezzo: 25,
        tipo: "cultura",
        descrizione: "Scopri i monumenti più iconici e le piazze storiche.",
        img: "https://picsum.photos/300/200?attivita1",
        link: "#"
      },
      {
        titolo: "Parco avventura",
        prezzo: 40,
        tipo: "avventura",
        descrizione: "Percorsi sugli alberi e zip-line per tutta la famiglia.",
        img: "https://picsum.photos/300/200?attivita2",
        link: "#"
      },
      {
        titolo: "Spa & Wellness",
        prezzo: 60,
        tipo: "relax",
        descrizione: "Giornata di relax con massaggi e piscina termale.",
        img: "https://picsum.photos/300/200?attivita3",
        link: "#"
      },
      {
        titolo: "Degustazione gastronomica",
        prezzo: 35,
        tipo: "cibo",
        descrizione: "Assaggia i piatti tipici e i vini locali.",
        img: "https://picsum.photos/300/200?attivita4",
        link: "#"
      }
    ];

    res.status(200).json({ success: true, data: attivita });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
