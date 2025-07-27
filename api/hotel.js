export default async function handler(req, res) {
  const { destinazione, checkin, checkout, persone } = req.query;

  try {
    res.status(200).json({
      success: true,
      provider: "hotel",
      data: [
        {
          provider: "Booking",
          nome: "Hotel su Booking",
          link: `https://www.booking.com/searchresults.html?ss=${destinazione}&checkin=${checkin}&checkout=${checkout}&group_adults=${persone}`
        },
        {
          provider: "Expedia",
          nome: "Hotel su Expedia",
          link: `https://www.expedia.it/Hotel-Search?destination=${destinazione}&startDate=${checkin}&endDate=${checkout}`
        },
        {
          provider: "Hotels.com",
          nome: "Hotel su Hotels.com",
          link: `https://it.hotels.com/search.do?q-destination=${destinazione}&q-check-in=${checkin}&q-check-out=${checkout}`
        }
      ]
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
