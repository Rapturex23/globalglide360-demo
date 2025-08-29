<script>
// === Config affiliazioni (riempi quando approvato) ===
window.GG_CFG = {
  sky_partner: "",   // Skyscanner associateid
  bkg_aid: "",       // Booking aid
  gyg_partner: ""    // GetYourGuide partner_id
};

// === Helpers ===
const pad = (n)=> n.toString().padStart(2,'0');
const toYMD = (d)=> { const t = new Date(d); if (isNaN(t)) return ""; return t.getFullYear()+"-"+pad(t.getMonth()+1)+"-"+pad(t.getDate()); };
const addDays = (dateStr, days)=>{ if(!dateStr) return ""; const d = new Date(dateStr); d.setDate(d.getDate()+days); return toYMD(d); };
const cleanIATA = (v)=> (v||"").trim().toUpperCase().slice(0,3);

// === Builders ===
window.ggBuildFlight = ({from, to, dep, ret, adults=2, cabin='economy'})=>{
  const base = `https://www.skyscanner.net/transport/flights/${cleanIATA(from)}/${cleanIATA(to)}/${dep}${ret?`/${ret}`:""}/`;
  const qs = new URLSearchParams({adults, cabinclass:cabin, locale:'it-IT', currency:'EUR'});
  if (window.GG_CFG.sky_partner) qs.set('associateid', window.GG_CFG.sky_partner);
  return `${base}?${qs.toString()}`;
};

window.ggBuildHotel = ({dest, checkin, checkout, adults=2, children=0, rooms=1})=>{
  const u = new URL('https://www.booking.com/searchresults.html');
  u.searchParams.set('ss', dest);
  u.searchParams.set('checkin', checkin);
  u.searchParams.set('checkout', checkout || addDays(checkin,3));
  u.searchParams.set('group_adults', adults);
  u.searchParams.set('group_children', children);
  u.searchParams.set('no_rooms', rooms);
  if (window.GG_CFG.bkg_aid) u.searchParams.set('aid', window.GG_CFG.bkg_aid);
  return u.toString();
};

window.ggBuildExp = ({city, fromDate, toDate, pax})=>{
  const u = new URL('https://www.getyourguide.com/s/');
  u.searchParams.set('q', city);
  if (fromDate) u.searchParams.set('date_from', fromDate);
  if (toDate)   u.searchParams.set('date_to', toDate);
  if (pax)      u.searchParams.set('number_of_participants', pax);
  if (window.GG_CFG.gyg_partner) u.searchParams.set('partner_id', window.GG_CFG.gyg_partner);
  return u.toString();
};
</script>
