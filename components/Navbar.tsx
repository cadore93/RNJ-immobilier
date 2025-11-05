"use client";
import Link from "next/link";
import { useEffect } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process",  label: "Processus" },
  { href: "#avantages",label: "Avantages" },
  { href: "#secteur",  label: "Secteurs" },
  { href: "#temoins",  label: "Témoignages" },
  { href: "#contact",  label: "Contact" },
  { href: "#blog",     label: "Blog" },
];

export default function Navbar() {
  useEffect(()=>{ document.documentElement.style.scrollBehavior="smooth";},[]);
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-black/40 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto h-14 px-4 flex items-center justify-between">
        <a href="#accueil" className="font-semibold text-gold">RNJ Immobilier</a>
        <ul className="flex gap-4 text-sm text-gray-300">
          {links.map(l=>(
            <li key={l.href}><Link href={l.href} className="px-3 py-1 rounded-lg hover:bg-white/10">{l.label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
