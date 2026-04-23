import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import RecipeForm from "@/components/admin/RecipeForm";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function DuzenlePage({ params }: Props) {
  const { id } = await params;
  const recipe = await prisma.recipe.findUnique({
    where: { id: parseInt(id) },
    include: {
      tags: true,
      ingredients: true,
      steps: { orderBy: { order: "asc" } },
    },
  });

  if (!recipe) notFound();

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold text-[#2C2218] mb-6">
        Düzenle: {recipe.title}
      </h1>
      <RecipeForm recipe={recipe} mode="edit" />
    </div>
  );
}
