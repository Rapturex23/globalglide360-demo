export default async function handler(req, res) {
  const { origin, destinazione, dataPartenza, dataRitorno } = req.query;

  try {
    res.status(200).json({
      success: true,
      provider: "voli",
      data: [
        {
          provider: "Skyscanner",
          prezzo: "Cerca voli",
          link: `https://www.skyscanner.it/trasporti/voli/${origin}/${destinazione}/${dataPartenza}/${dataRitorno}`
        },
        {
          provider: "Kayak",
          prezzo: "Cerca voli",
          link: `https://www.kayak.it/flights/${origin}-${destinazione}/${dataPartenza}/${dataRitorno}`
        }
      ]
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
