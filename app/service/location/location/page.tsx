import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Service de location | RNJ Immobilier" };

export default function Page() {
  return (
    <main>
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Service de location</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Ce qui est inclus</h3>
            <ul className="text-gray-300 list-disc ml-5 space-y-1">
              <li>Photos + annonce multi-plateformes</li>
              <li>Présélection + visites</li>
              <li>Vérifications (crédit, antécédents, références)</li>
              <li>Bail et remise des clés</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Délai & tarif</h3>
            <p className="text-gray-300">Délai moyen : 7–14 jours. Tarif sur demande selon le type d’unité et le marché local.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
