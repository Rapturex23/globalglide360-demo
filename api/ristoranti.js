export default async function handler(req, res) {
  const { destinazione } = req.query;

  try {
    res.status(200).json({
      success: true,
      provider: "ristoranti",
      data: [
        {
          nome: "Ristoranti su TripAdvisor",
          link: `https://www.tripadvisor.it/Search?q=${destinazione}+ristoranti`
        }
      ]
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
