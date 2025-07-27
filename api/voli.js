export default async function handler(req, res) {
  const { origin, destinazione, dataPartenza, dataRitorno } = req.query;

  try {
    res.status(200).json({
      success: true,
      data: [
        {
          provider: "Skyscanner",
          link: `https://www.skyscanner.it/trasporti/voli/${origin}/${destinazione}/${dataPartenza.replaceAll("-","")}/${dataRitorno.replaceAll("-","")}`
        },
        {
          provider: "Kayak",
          link: `https://www.kayak.it/flights/${origin}-${destinazione}/${dataPartenza}/${dataRitorno}`
        }
      ]
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
