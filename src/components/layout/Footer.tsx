import Link from "next/link";
import { ChefHat } from "lucide-react";

export default function Footer() {
  return (
    <footer className="hidden md:block bg-[#2C2218] text-[#A89A8A] mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-serif text-lg font-semibold text-[#FAF7F2]"
          >
            <ChefHat size={20} aria-hidden />
            Eva&apos;nın Lezzetleri
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/tarifler" className="hover:text-[#FAF7F2] transition-colors">
              Tarifler
            </Link>
            <Link href="/ara" className="hover:text-[#FAF7F2] transition-colors">
              Arama
            </Link>
            <Link href="/favoriler" className="hover:text-[#FAF7F2] transition-colors">
              Favoriler
            </Link>
          </nav>

          <p className="text-xs">
            © {new Date().getFullYear()} Eva&apos;nın Lezzetleri
          </p>
        </div>
      </div>
    </footer>
  );
}
