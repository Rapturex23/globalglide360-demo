export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md flex justify-between items-center px-6 py-3 z-50">
        <div className="flex items-center gap-3">
          <img
            src="/logo-globalglide360.png"
            alt="GlobalGlide360 Logo"
            className="h-9"
          />
          <h1 className="text-xl font-bold text-brandBlue">
            GlobalGlide360
          </h1>
        </div>
        <button className="bg-brandBlue text-white px-4 py-2 rounded-lg hover:bg-brandTeal transition">
          Scopri di più
        </button>
      </header>

      {/* HERO */}
      <section className="relative w-full h-screen">
        <img
          src="/hero-travel.png"
          alt="Hero Travel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Il tuo viaggio perfetto, creato da un'AI
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl">
            Lascia che GlobalGlide360 trovi per te voli, hotel e attività ai
            migliori prezzi.
          </p>
          <button className="bg-brandTeal text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-brandBlue transition">
            Inizia ora
          </button>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="max-w-6xl mx-auto py-20 px-6 mt-[-50px] relative z-10">
        <h3 className="text-3xl font-bold mb-14 text-center text-brandBlue">
          Come funziona
        </h3>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white border rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <div className="text-4xl mb-4">🛫</div>
            <h4 className="font-semibold text-xl mb-2">1. Inserisci la tua meta</h4>
            <p>Digita la destinazione, le date e il tuo budget ideale.</p>
          </div>
          <div className="bg-white border rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <div className="text-4xl mb-4">🤖</div>
            <h4 className="font-semibold text-xl mb-2">2. L'AI cerca per te</h4>
            <p>Scansiona voli, hotel ed esperienze in tempo reale.</p>
          </div>
          <div className="bg-white border rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <div className="text-4xl mb-4">📍</div>
            <h4 className="font-semibold text-xl mb-2">3. Ricevi l'itinerario</h4>
            <p>Ottieni un piano completo con link prenotabili e foto.</p>
          </div>
        </div>
      </section>

      {/* ITINERARIO ESEMPIO */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-brandBlue">
            Esempio: Lisbona 3 giorni
          </h3>
          <p className="mb-10 text-lg">
            Famiglia con bambini, volo da Milano, hotel centrale, attività
            selezionate. Tutto per <span className="font-bold">187 €</span> a
            persona!
          </p>
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
            <img
              src="/hero-travel.png"
              alt="Lisbona"
              className="rounded-xl mb-6"
            />
            <button className="bg-brandBlue text-white px-6 py-3 rounded-lg hover:bg-brandTeal transition">
              Scopri l'itinerario
            </button>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-brandTeal py-20 px-6 text-center text-white">
        <h3 className="text-2xl font-bold mb-6">
          Vuoi ricevere itinerari come questo?
        </h3>
        <div className="flex gap-2 justify-center max-w-lg mx-auto">
          <input
            className="border border-gray-300 rounded-md px-4 py-2 w-2/3 text-gray-900"
            placeholder="Inserisci la tua email"
          />
          <button className="bg-brandBlue text-white font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-brandBlue transition">
            Iscriviti
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 text-center text-sm py-6">
        <p>© 2025 GlobalGlide360 – Tutti i diritti riservati</p>
        <p>
          GlobalGlide360 non vende pacchetti turistici. I contenuti sono
          informativi con link affiliati.
        </p>
      </footer>
    </div>
  );
}
