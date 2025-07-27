export default async function handler(req, res) {
  const { destinazione, checkin, checkout, persone } = req.query;

  try {
    res.status(200).json({
      success: true,
      provider: "hotel",
      data: [
        {
          provider: "Booking",
          nome: "Hotel Centrale",
          prezzo: "250€ per 3 notti",
          link: `https://www.booking.com/searchresults.html?ss=${destinazione}&checkin=${checkin}&checkout=${checkout}&group_adults=${persone}`
        },
        {
          provider: "Expedia",
          nome: "Hotel Relax",
          prezzo: "260€ per 3 notti",
          link: `https://www.expedia.it/Hotel-Search?destination=${destinazione}`
        }
      ]
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
