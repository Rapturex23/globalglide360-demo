export default async function handler(req, res) {
  const { destinazione } = req.query;

  try {
    res.status(200).json({
      success: true,
      data: [
        {
          provider: "TripAdvisor",
          link: `https://www.tripadvisor.it/Search?q=${destinazione}+ristoranti`
        }
      ]
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
