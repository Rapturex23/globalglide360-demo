export default async function handler(req, res) {
  const { destinazione, dataPartenza, dataRitorno } = req.query;

  try {
    res.status(200).json({
      success: true,
      data: [
        {
          provider: "GetYourGuide",
          link: `https://www.getyourguide.it/s/?q=${destinazione}&date_from=${dataPartenza}&date_to=${dataRitorno}`
        },
        {
          provider: "Booking Experiences",
          link: `https://www.booking.com/attractions/city/${destinazione.toLowerCase()}.html`
        }
      ]
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
