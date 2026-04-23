"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

interface SearchFormProps {
  initialQuery: string;
}

export default function SearchForm({ initialQuery }: SearchFormProps) {
  const [query, setQuery] = useState(initialQuery);
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
          autoFocus
          className="w-full h-14 pl-12 pr-28 rounded-2xl bg-[#FFFEF9] text-[#2C2218] placeholder-[#A89A8A] border-2 border-[#E8DDD0] focus:border-[#C4603A] focus:outline-none shadow-sm text-base transition-all"
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
  );
}
