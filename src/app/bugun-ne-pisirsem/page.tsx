import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";
import BugunNePisirsemClient from "./BugunNePisirsemClient";

export const metadata: Metadata = {
  title: "Bugün Ne Pişirsem?",
  description: "Sana özel tarif önerileri",
};

export default function BugunNePisirsemPage() {
  return (
    <VintageLayout
      title="Bugün Ne Pişirsem?"
      subtitle="Birkaç bilgi ver, sana uygun tarifler getirelim."
      accentColor="#c0392b"
    >
      <BugunNePisirsemClient />
    </VintageLayout>
  );
}
