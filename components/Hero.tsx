import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "RNJ Immobilier — Location & gestion | Blainville, Rive-Nord",
  description: "Rendre votre investissement passif. Location et gestion d’immeubles résidentiels sur la Rive-Nord.",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <Image src="/rnj-background.png" alt="RNJ Immobilier" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mt-24 text-center space-y-6 px-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="gold-text block">RNJ IMMOBILIER</span>
            <span className="text-gray-300 text-lg md:text-xl">Rendre votre investissement passif</span>
          </h1>
          <div className="flex gap-4 justify-center">
            <Link href="/services/location" className="btn-gold">Service de location</Link>
            <Link href="/services/gestion" className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10">Gestion d’immeubles</Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-2xl font-semibold mb-2">Location clé en main</h3>
          <p className="text-gray-300">Annonce, présélection, visites, vérifs, bail, remise des clés. On s’occupe de tout.</p>
        </div>
        <div className="card">
          <h3 className="text-2xl font-semibold mb-2">Gestion proactive</h3>
          <p className="text-gray-300">Suivi des paiements, entretien, communications locataires, rapports propriétaires.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
