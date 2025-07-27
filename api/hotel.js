export default async function handler(req, res) {
  const { destinazione, checkin, checkout, persone } = req.query;

  try {
    res.status(200).json({
      success: true,
      data: [
        {
          provider: "Booking",
          link: `https://www.booking.com/searchresults.html?ss=${destinazione}&checkin=${checkin}&checkout=${checkout}&group_adults=${persone}`
        },
        {
          provider: "Expedia",
          link: `https://www.expedia.it/Hotel-Search?destination=${destinazione}&startDate=${checkin}&endDate=${checkout}`
        },
        {
          provider: "Hotels.com",
          link: `https://it.hotels.com/search.do?q-destination=${destinazione}&q-check-in=${checkin}&q-check-out=${checkout}`
        }
      ]
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
