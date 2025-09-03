<script>
/* GG GetYourGuide Resolver v1.0 */
(function(){
  const PARTNER = (window.GG_CFG && window.GG_CFG.gyg_partner) || "HWU00MZ";

  // normalizza stringhe: minuscole, senza accenti, spazi singoli
  function norm(s){
    return (s||"")
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
      .replace(/\s+/g," ")
      .trim();
  }

  // alias rapidi (IATA aggregate & varianti comuni)
  const ALIAS = {
    "par": "paris",
    "lon": "london",
    "nyc": "new york",
    "cdmx": "mexico city",
    "saint cristobal": "san cristobal de las casas",
    "san cristobal": "san cristobal de las casas"
  };

  // carica mappa slug una volta sola
  let _slugMapPromise = null;
  function loadMap(){
    if(_slugMapPromise) return _slugMapPromise;
    _slugMapPromise = fetch("/assets/data/gyg-cities.json", {cache:"no-store"})
      .then(r => r.json())
      .catch(() => ({}));
    return _slugMapPromise;
  }

  // risolve input libero -> URL affiliato stabile GYG
  async function resolveGygUrl(query, subId){
    const map = await loadMap();
    let q = norm(query);

    // normalizza "city, country" -> "city"
    if(q.includes(",")) q = q.split(",")[0].trim();
    if(ALIAS[q]) q = ALIAS[q];

    // match diretto o parziale
    let slug = map[q];
    if(!slug){
      // prova match parziale: cerca una key contenuta dentro q
      const keys = Object.keys(map);
      const hit = keys.find(k => q.includes(k));
      if(hit) slug = map[hit];
    }

    // fallback: homepage GYG (meglio di una 404)
    const base = slug ? `https://www.getyourguide.com/${slug}/` : `https://www.getyourguide.com/`;

    // compone query affiliazione
    const params = new URLSearchParams({
      partner_id: PARTNER,
      sub_id: (subId || window.GG_SUBID || "home")
    });

    return `${base}?${params.toString()}`;
  }

  // attacca automaticamente a tutti i bottoni [.cta-gyg]
  async function wireGygCtas(){
    const nodes = document.querySelectorAll("[data-gyg], .cta-gyg");
    if(!nodes.length) return;

    for(const el of nodes){
      const city = el.getAttribute("data-gyg") || el.dataset.city || el.textContent;
      const subId = el.getAttribute("data-subid") || window.GG_SUBID || "home";
      try{
        const url = await resolveGygUrl(city, subId);
        if(el.tagName === "A"){
          el.href = url;
          el.rel = "nofollow sponsored";
          el.target = "_blank";
        }else{
          // se è un <button> o wrapper, cerca un <a> dentro
          const a = el.querySelector("a");
          if(a){
            a.href = url;
            a.rel = "nofollow sponsored";
            a.target = "_blank";
          }
        }
        el.dataset.gygReady = "1";
      }catch(e){
        console.warn("GYG resolve error", city, e);
      }
    }
  }

  // esponi in globale (per usi manuali)
  window.GG_GYG = { resolveGygUrl, wireGygCtas };

  // auto-run quando DOM pronto
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", wireGygCtas);
  }else{
    wireGygCtas();
  }
})();
</script>
