export default async function handler(req, res) {
  const { origin, destinazione, dataPartenza, dataRitorno, persone } = req.query;

  try {
    res.status(200).json({
      success: true,
      provider: "voli",
      data: [
        {
          provider: "Skyscanner",
          prezzo: "120€",
          link: `https://www.skyscanner.it/trasporti/voli/${origin}/${destinazione}/${dataPartenza}`
        },
        {
          provider: "Kayak",
          prezzo: "130€",
          link: `https://www.kayak.it/flights/${origin}-${destinazione}/${dataPartenza}`
        }
      ]
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
