export default async function handler(req, res) {
  const { destinazione } = req.query;

  try {
    // DATI RISTORANTI CON IMMAGINI E LINK (simulazione)
    const ristoranti = [
      {
        nome: "Trattoria Da Mario",
        rating: 4.5,
        descrizione: "Cucina tradizionale locale in un'atmosfera rustica.",
        img: "https://picsum.photos/300/200?ristorante1",
        link: "#"
      },
      {
        nome: "Ristorante Gourmet",
        rating: 4.7,
        descrizione: "Menu ricercato e piatti stellati per palati esigenti.",
        img: "https://picsum.photos/300/200?ristorante2",
        link: "#"
      }
    ];

    res.status(200).json({ success: true, data: ristoranti });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
