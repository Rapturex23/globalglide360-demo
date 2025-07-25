export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-brandBlue to-brandTeal p-4 text-white shadow-md flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/logo-globalglide360.png"
            alt="GlobalGlide360 Logo"
            className="h-10"
          />
          <h1 className="text-2xl font-bold">GlobalGlide360</h1>
        </div>
        <button className="bg-white text-brandBlue hover:text-brandTeal font-semibold px-4 py-2 rounded-md shadow">
          Scopri di più
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden">
        <img
          src="/hero-travel.png"
          alt="Hero Travel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Il tuo viaggio perfetto, creato da un'AI
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-6 max-w-2xl">
            GlobalGlide360 trova per te voli, hotel e esperienze con i migliori
            prezzi. Pianifica e sogna senza stress.
          </p>
          <button className="bg-brandBlue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brandTeal">
            Inizia ora
          </button>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-bold mb-10 text-center">
          Come funziona
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <h4 className="font-semibold text-xl mb-2">
              1. Inserisci la tua meta
            </h4>
            <p>Digita dove vuoi andare, quando e il tuo budget.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <h4 className="font-semibold text-xl mb-2">2. L'AI cerca per te</h4>
            <p>L'agente intelligente analizza le offerte in tempo reale.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <h4 className="font-semibold text-xl mb-2">
              3. Ricevi l'itinerario
            </h4>
            <p>Ottieni un piano completo con link prenotabili e contenuti visuali.</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-teal-50 py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">
            Vuoi ricevere itinerari come questo?
          </h3>
          <div className="flex gap-2 justify-center">
            <input
              className="border border-gray-300 rounded-md px-4 py-2 w-2/3"
              placeholder="Inserisci la tua email"
            />
            <button className="bg-brandBlue text-white font-semibold px-4 py-2 rounded-md hover:bg-brandTeal">
              Iscriviti
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 py-6">
        <p>© 2025 GlobalGlide360 – Tutti i diritti riservati</p>
        <p>
          GlobalGlide360 non vende pacchetti turistici. I contenuti sono
          informativi con link affiliati.
        </p>
      </footer>
    </div>
  );
}

