"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import Image from "next/image";

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    startTransition(() => {
      router.push(`/ara?q=${encodeURIComponent(query.trim())}`);
    });
  }

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Background photo — pot lid / kitchen steam */}
      <Image
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark warm overlay for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(30,18,10,0.72) 0%, rgba(44,28,14,0.60) 60%, rgba(80,45,20,0.50) 100%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto text-center">
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#FAF7F2] mb-3 leading-tight drop-shadow-sm">
          Ne pişirsem?
        </h1>
        <p className="text-[#D4C4B0] mb-8 text-base md:text-lg">
          Malzeme veya tarif adı ile ara
        </p>

        <form onSubmit={handleSubmit} role="search">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A89A8A]"
              size={20}
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tarif, malzeme veya kategori ara…"
              aria-label="Tarif ara"
              className="w-full h-14 pl-12 pr-32 rounded-2xl bg-[#FFFEF9] text-[#2C2218] placeholder-[#A89A8A] border-2 border-transparent focus:border-[#C4603A] focus:outline-none shadow-lg text-base transition-all"
            />
            <button
              type="submit"
              disabled={isPending || !query.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-5 rounded-xl bg-[#C4603A] text-white text-sm font-medium hover:bg-[#9E4A2B] disabled:opacity-50 transition-all"
            >
              {isPending ? "…" : "Ara"}
            </button>
          </div>
        </form>

        <p className="mt-4 text-xs text-[#A89A8A]">
          Örn: menemen · mercimek · domates, peynir
        </p>
      </div>
    </section>
  );
}
