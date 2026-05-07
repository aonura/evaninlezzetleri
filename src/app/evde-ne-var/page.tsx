import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";
import EvdeNeVarClient from "./EvdeNeVarClient";

export const metadata: Metadata = {
  title: "Evde Ne Var?",
  description: "Elindeki malzemelerle ne pişirebilirsin?",
};

export default function EvdeNeVarPage() {
  return (
    <VintageLayout
      title="Evde Ne Var?"
      subtitle="Elindeki malzemeleri gir, sana uygun tarifler bulalım."
      accentColor="#5c6e3a"
    >
      <EvdeNeVarClient />
    </VintageLayout>
  );
}
