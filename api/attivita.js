export default async function handler(req, res) {
  const { destinazione } = req.query;

  try {
    res.status(200).json({
      success: true,
      provider: "attivita",
      data: [
        {
          titolo: "Scopri attività su GetYourGuide",
          link: `https://www.getyourguide.it/s/?q=${destinazione}`
        },
        {
          titolo: "Esperienze su Booking",
          link: `https://www.booking.com/attractions/city/${destinazione.toLowerCase()}.html`
        }
      ]
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
