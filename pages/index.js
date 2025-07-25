export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-gradient-to-r from-blue-500 to-teal-400 p-6 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">GlobalGlide360</h1>
          <button className="bg-white text-blue-600 hover:text-teal-500 font-semibold px-4 py-2 rounded-md">Scopri di più</button>
        </div>
      </header>

      <section className="text-center py-20 bg-gray-50">
        <h2 className="text-4xl font-extrabold mb-4">Il tuo viaggio perfetto, creato da un'AI</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Inserisci la tua destinazione e le tue preferenze. GlobalGlide360 troverà per te i voli, gli hotel e le esperienze migliori con prezzi aggiornati.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">Inizia ora</button>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-bold mb-8 text-center">Come funziona</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center">
            <h4 className="font-semibold text-xl mb-2">1. Inserisci la tua meta</h4>
            <p>Digita dove vuoi andare, quando, e il tuo budget.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center">
            <h4 className="font-semibold text-xl mb-2">2. L'AI cerca per te</h4>
            <p>L'agente intelligente analizza le offerte in tempo reale.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center">
            <h4 className="font-semibold text-xl mb-2">3. Ricevi l'itinerario</h4>
            <p>Ricevi un piano completo con link prenotabili e contenuti visuali.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Esempio di viaggio: Lisbona 3 giorni</h3>
          <p className="mb-6">Famiglia con bambini, volo da Milano, hotel centrale, attività selezionate. Tutto per 187 € a persona!</p>
        </div>
      </section>

      <section className="bg-teal-50 py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Vuoi ricevere itinerari come questo?</h3>
          <div className="flex gap-2 justify-center">
            <input className="border border-gray-300 rounded-md px-4 py-2 w-2/3" placeholder="Inserisci la tua email" />
            <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md">Iscriviti</button>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        <p>© 2025 GlobalGlide360 – Tutti i diritti riservati</p>
        <p>GlobalGlide360 non vende pacchetti turistici. I contenuti sono informativi con link affiliati.</p>
      </footer>
    </div>
  );
}
