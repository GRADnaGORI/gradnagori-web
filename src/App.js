import React from "react";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-white text-gray-900">
      <section className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Grad na gori d.o.o.</h1>
        <p className="text-lg mb-2">Pantovčak 196b, Zagreb</p>
        <p className="text-lg mb-2">OIB: 97020427579</p>
        <p className="text-lg mb-2">Telefon: 099 810 9961</p>
        <p className="text-lg mb-6">Email: (uskoro dostupan)</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Usluge</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Računovodstvene usluge</li>
          <li>Investicijsko savjetovanje</li>
          <li>Poslovno savjetovanje</li>
          <li>Savjetovanje o mogućnostima u sektoru nekretnina (real estate)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Kontakt forma</h2>
        <form className="space-y-4 max-w-xl">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ime i prezime</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email adresa</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Poruka</label>
            <textarea id="message" name="message" rows="5" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">Pošalji poruku</button>
        </form>
      </section>
    </main>
  );
}

export default App;
