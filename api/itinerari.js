let itinerari = {};

export default function handler(req, res) {
  if (req.method === "POST") {
    // Salva l'itinerario
    const { id, data } = req.body;
    itinerari[id] = data;
    return res.status(200).json({ ok: true });
  }

  if (req.method === "GET") {
    // Restituisce l'itinerario richiesto
    const { id } = req.query;
    if (!itinerari[id]) {
      return res.status(404).json({ error: "Itinerario non trovato" });
    }
    return res.status(200).json(itinerari[id]);
  }

  return res.status(405).end();
}
