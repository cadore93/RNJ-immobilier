import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RNJ Immobilier – Rive-Nord",
  description: "Location & gestion d’immeubles – Blainville et Rive-Nord.",
  icons: { icon: "/rnj-logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "RNJ Immobilier",
      image: "/rnj-background.png",
      url: "https://rnjimmobilier.vercel.app",
      address: { "@type": "PostalAddress", addressLocality: "Blainville", addressRegion: "QC", addressCountry: "CA" },
      areaServed: ["Blainville", "Rive-Nord de Montréal"],
      description: "Location et gestion d’immeubles résidentiels. Rendre votre investissement passif.",
      telephone: "+1-000-000-0000"
    }),
  }}
/>

      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

