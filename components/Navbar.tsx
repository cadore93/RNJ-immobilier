"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { href: "/", label: "Accueil" },
  { href: "/services/location", label: "Location" },
  { href: "/services/gestion", label: "Gestion" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-black/40 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide text-[#d4af37]">RNJ Immobilier</Link>
        <ul className="flex gap-4 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`px-3 py-1 rounded-lg hover:bg-white/10 ${
                  pathname === l.href ? "text-white" : "text-gray-300"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
