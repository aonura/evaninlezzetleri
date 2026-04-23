import { prisma } from "@/lib/db";
import Link from "next/link";
import { Pencil, Trash2, PlusCircle } from "lucide-react";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default async function AdminPage() {
  const recipes = await prisma.recipe.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { ingredients: true, steps: true } } },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-serif text-2xl font-bold text-[#2C2218]">
          Tarifler ({recipes.length})
        </h1>
        <Link
          href="/admin/tarifler/yeni"
          className="flex items-center gap-2 px-4 h-10 rounded-xl bg-[#C4603A] text-white text-sm font-medium hover:bg-[#9E4A2B] transition-all"
        >
          <PlusCircle size={16} />
          Yeni Tarif
        </Link>
      </div>

      <div className="bg-[#FFFEF9] rounded-2xl border border-[#E8DDD0] overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#FAF7F2] border-b border-[#E8DDD0]">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-[#7A6A5A]">
                Başlık
              </th>
              <th className="hidden md:table-cell text-left px-4 py-3 font-medium text-[#7A6A5A]">
                Kategori
              </th>
              <th className="hidden md:table-cell text-left px-4 py-3 font-medium text-[#7A6A5A]">
                Zorluk
              </th>
              <th className="text-right px-4 py-3 font-medium text-[#7A6A5A]">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E8DDD0]">
            {recipes.map((recipe) => (
              <tr key={recipe.id} className="hover:bg-[#FAF7F2] transition-colors">
                <td className="px-4 py-3">
                  <div>
                    <p className="font-medium text-[#2C2218]">{recipe.title}</p>
                    <p className="text-xs text-[#A89A8A] mt-0.5">
                      {recipe._count.ingredients} malzeme ·{" "}
                      {recipe._count.steps} adım
                    </p>
                  </div>
                </td>
                <td className="hidden md:table-cell px-4 py-3 text-[#7A6A5A]">
                  {recipe.category}
                </td>
                <td className="hidden md:table-cell px-4 py-3 text-[#7A6A5A]">
                  {recipe.difficulty}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 justify-end">
                    <Link
                      href={`/admin/tarifler/${recipe.id}/duzenle`}
                      className="flex items-center gap-1 px-3 h-8 rounded-lg border border-[#E8DDD0] text-[#7A6A5A] hover:border-[#C4603A] hover:text-[#C4603A] transition-all text-xs"
                    >
                      <Pencil size={14} />
                      Düzenle
                    </Link>
                    <DeleteRecipeButton id={recipe.id} title={recipe.title} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
