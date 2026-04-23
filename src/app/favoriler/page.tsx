import type { Metadata } from "next";
import FavoritesList from "./FavoritesList";

export const metadata: Metadata = {
  title: "Favorilerim",
};

export default function FavorilerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
      <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#2C2218] mb-6">
        Favorilerim
      </h1>
      <FavoritesList />
    </div>
  );
}
