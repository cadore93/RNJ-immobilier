import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Blog | RNJ Immobilier" };

export default function Page() {
  return (
    <main>
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Conseils & SEO local</h1>
        <p className="text-gray-300">Bientôt : guides pour propriétaires, tendances du marché Rive-Nord, et plus.</p>
      </section>
      <Footer />
    </main>
  );
}
