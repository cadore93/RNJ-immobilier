import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Contact | RNJ Immobilier" };

export default function Page() {
  return (
    <main>
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-2 gap-6">
        <div className="card p-0 overflow-hidden">
          {/* ➜ Remplace SRC par le lien d’embed Zoho Forms */}
          <iframe
            title="Formulaire RNJ"
            src="https://forms.zoho.com/TON_LIEN_EMBED"
            className="w-full h-[520px]"
          />
        </div>
        <div className="card p-0 overflow-hidden">
          {/* ➜ Remplace par ton lien Calendly */}
          <iframe
            title="Calendly RNJ"
            src="https://calendly.com/"
            className="w-full h-[520px]"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
