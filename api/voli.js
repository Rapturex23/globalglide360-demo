export default async function handler(req, res) {
  const { origin, destinazione, dataPartenza, dataRitorno } = req.query;

  try {
    // DATI VOLI CON IMMAGINI E LINK (simulazione)
    const voli = [
      { compagnia: "Ryanair", prezzo: 150, durata: "1h50m", img: "https://picsum.photos/200/150?ryanair", link: "#" },
      { compagnia: "Air France", prezzo: 200, durata: "2h00m", img: "https://picsum.photos/200/150?airfrance", link: "#" },
      { compagnia: "EasyJet", prezzo: 180, durata: "1h55m", img: "https://picsum.photos/200/150?easyjet", link: "#" }
    ];

    res.status(200).json({ success: true, data: voli });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
