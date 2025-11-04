import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Gestion d’immeubles | RNJ Immobilier" };

export default function Page() {
  return (
    <main>
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Gestion d’immeubles</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Finance</h3>
            <ul className="text-gray-300 list-disc ml-5 space-y-1">
              <li>Perception loyers</li>
              <li>Relances et suivis</li>
              <li>Rapports mensuels</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Opérations</h3>
            <ul className="text-gray-300 list-disc ml-5 space-y-1">
              <li>Entretien & réparations</li>
              <li>Urgences 24/7 (au besoin)</li>
              <li>Entrepreneurs qualifiés</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Relation locataire</h3>
            <ul className="text-gray-300 list-disc ml-5 space-y-1">
              <li>Communications centralisées</li>
              <li>Suivi des demandes</li>
              <li>Renouvellements</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
