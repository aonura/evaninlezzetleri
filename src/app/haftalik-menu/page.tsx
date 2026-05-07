import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";
import HaftalikMenuClient from "./HaftalikMenuClient";

export const metadata: Metadata = {
  title: "Haftalık Menü",
  description: "7 günlük yemek planı",
};

export default function HaftalikMenuPage() {
  return (
    <VintageLayout
      title="Haftalık Menü"
      subtitle="7 günlük yemek planınızı önceden hazırlayın."
      accentColor="#8a9870"
    >
      <HaftalikMenuClient />
    </VintageLayout>
  );
}
