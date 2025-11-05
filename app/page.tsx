import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import Link from "next/link";

export const metadata = {
  title: "RNJ Immobilier – Gestion & Location | Rive-Nord",
  description: "Rendre votre investissement passif. Gestion et location d’immeubles résidentiels sur la Rive-Nord.",
};

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO minimal, icône immeuble en watermark */}
      <section id="accueil" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        {/* fond uni */}
        <div className="absolute inset-0 bg-[#0b0b0d]" />
        {/* watermark */}
        <Image src="/rnj-building.png" alt="Immeuble RNJ" fill className="object-contain object-center watermark" priority />
        {/* voile léger */}
        <div className="absolute inset-0 bg-black/30" />
        {/* contenu */}
        <div className="relative z-10 mt-20 text-center space-y-6 px-6">
          <h1 className="h1 text-gold">RNJ IMMOBILIER</h1>
          <p className="text-gold font-semibold text-xl">Rendre votre investissement passif</p>
          <div className="flex gap-4 justify-center">
            <a href="#services" className="btn-gold">Nos services</a>
            <a href="#contact" className="btn-ghost">Nous contacter</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2 className="h2 mb-3">Services</h2>
        <p className="lead mb-10 max-w-3xl">
          Gestion complète et service de location clé-en-main pour vos immeubles résidentiels
          (Blainville et Rive-Nord).
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <Photo src="/photos/location.jpg" alt="Service de location" />
            <h3 className="text-2xl font-semibold mt-4 mb-2">Service de location</h3>
            <p className="text-gray-300">
              Annonce multi-plateformes, présélection, visites, vérifications (crédit, antécédents,
              références), bail et remise des clés.
            </p>
            <Link href="#process" className="inline-block mt-4 btn-ghost">Voir le processus</Link>
          </div>
          <div className="card">
            <Photo src="/photos/gestion.jpg" alt="Gestion d’immeubles" />
            <h3 className="text-2xl font-semibold mt-4 mb-2">Gestion d’immeubles</h3>
            <p className="text-gray-300">
              Perception des loyers, relances, entretien, urgences (au besoin), communications locataires,
              rapports clairs aux propriétaires.
            </p>
            <Link href="#avantages" className="inline-block mt-4 btn-ghost">Nos avantages</Link>
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section id="process" className="section">
        <h2 className="h2 mb-3">Processus simple</h2>
        <p className="lead mb-10">4 étapes pour louer sans stress.</p>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["Analyse & prix", "Étude du marché local et positionnement optimal."],
            ["Mise en marché", "Photos, annonce, diffusion multi-plateformes."],
            ["Vérifs & bail", "Dossiers complets, bail signé, état des lieux."],
            ["Remise des clés", "Entrée du locataire et suivi initial."],
          ].map(([t,d])=>(
            <div key={t} className="card">
              <h3 className="font-semibold text-lg mb-2 text-gold">{t}</h3>
              <p className="text-gray-300">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AVANTAGES */}
      <section id="avantages" className="section">
        <h2 className="h2 mb-3">Pourquoi RNJ</h2>
        <p className="lead mb-10">Transparence, réactivité et résultats.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card"><h3 className="font-semibold text-lg mb-2">Communication claire</h3><p className="text-gray-300">Un seul point de contact, réponses rapides, rapports mensuels.</p></div>
          <div className="card"><h3 className="font-semibold text-lg mb-2">Réseau local</h3><p className="text-gray-300">Entrepreneurs fiables pour entretien et réparations.</p></div>
          <div className="card"><h3 className="font-semibold text-lg mb-2">Sélection rigoureuse</h3><p className="text-gray-300">Vérifications complètes pour protéger votre investissement.</p></div>
        </div>
      </section>

      {/* SECTEURS DESSERVIS */}
      <section id="secteur" className="section">
        <h2 className="h2 mb-3">Secteurs desservis</h2>
        <p className="lead mb-8">Blainville, Boisbriand, Sainte-Thérèse, Mirabel & Rive-Nord.</p>
        <Photo src="/photos/carte.jpg" alt="Carte Rive-Nord" />
      </section>

      {/* TÉMOIGNAGES (placeholders) */}
      <section id="temoins" className="section">
        <h2 className="h2 mb-3">Témoignages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i=>(
            <div className="card" key={i}>
              <p className="text-gray-300">“Service impeccable, dossier loué rapidement et sans tracas.”</p>
              <p className="mt-3 text-sm text-gray-400">— Propriétaire sur la Rive-Nord</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <h2 className="h2 mb-4">Prêt à rendre votre investissement passif?</h2>
        <div className="flex gap-4 justify-center">
          <a href="#contact" className="btn-gold">Parler à RNJ</a>
          <a href="#services" className="btn-ghost">Voir nos services</a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2 className="h2 mb-3">Contact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-0 overflow-hidden">
            {/* Zoho Forms (remplace SRC) */}
            <iframe title="Formulaire RNJ" src="https://forms.zoho.com/TON_LIEN_EMBED" className="w-full h-[520px]" />
          </div>
          <div className="card p-6">
            <p className="text-gray-300 mb-2"><span className="text-gold">Email:</span> contact@rnjimmobilier.ca</p>
            <p className="text-gray-300 mb-6"><span className="text-gold">Zone:</span> Blainville & Rive-Nord</p>
            <Photo src="/photos/bureau.jpg" alt="Bureau RNJ" />
            <a href="https://calendly.com/" className="btn-gold mt-6 inline-block">Prendre un rendez-vous</a>
          </div>
        </div>
      </section>

      {/* BLOG (placeholder) */}
      <section id="blog" className="section">
        <h2 className="h2 mb-3">Blog</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i=>(
            <div key={i} className="card">
              <Photo alt="Article" />
              <h3 className="font-semibold text-lg mt-4 mb-2">Article à venir</h3>
              <p className="text-gray-300">Conseils pour propriétaires, tendances du marché, checklists.</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
