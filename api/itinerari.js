// /api/itinerari.js
let itinerari = {}; // 🔹 cache in memoria (sparisce al riavvio su Vercel)

export default function handler(req, res) {
  if (req.method === "POST") {
    const { id, data } = req.body;

    if (!id || !data) {
      return res.status(400).json({ error: "Dati mancanti" });
    }

    itinerari[id] = data;
    return res.status(200).json({ success: true });
  }

  if (req.method === "GET") {
    const { id } = req.query;

    if (!id || !itinerari[id]) {
      return res.status(404).json({ error: "Itinerario non trovato" });
    }

    return res.status(200).json(itinerari[id]);
  }

  res.status(405).end(); // Metodo non permesso
}
