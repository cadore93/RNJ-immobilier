import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "À propos | RNJ Immobilier" };

export default function Page() {
  return (
    <main>
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">RNJ Immobilier</h1>
          <p className="text-gray-300">
            Entreprise locale dédiée à la location et à la gestion d’immeubles résidentiels
            sur la Rive-Nord. Notre mission : simplifier la vie des propriétaires et maximiser
            la valeur de leurs actifs.
          </p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold mb-2">Zone desservie</h3>
          <p className="text-gray-300">Blainville, Boisbriand, Sainte-Thérèse, Mirabel et environs.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
