import RecipeForm from "@/components/admin/RecipeForm";

export default function YeniTarifPage() {
  return (
    <div>
      <h1 className="font-serif text-2xl font-bold text-[#2C2218] mb-6">
        Yeni Tarif Ekle
      </h1>
      <RecipeForm mode="create" />
    </div>
  );
}
