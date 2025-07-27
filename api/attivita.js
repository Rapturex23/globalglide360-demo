export default async function handler(req, res) {
  const { destinazione, preferenze } = req.query;

  try {
    res.status(200).json({
      success: true,
      provider: "attivita",
      data: [
        {
          titolo: "Tour guidato della città",
          prezzo: "35€",
          link: `https://www.getyourguide.it/s/?q=${destinazione}`
        },
        {
          titolo: "Crociera panoramica",
          prezzo: "40€",
          link: `https://www.getyourguide.it/s/?q=${destinazione}`
        }
      ]
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
