import { prisma } from "./db";
import { RecipeCard } from "@/types";

const ingredientAliases: Record<string, string[]> = {
  domates: ["tomato", "domates"],
  patates: ["potato", "patates"],
  soğan: ["onion", "soğan", "sogan"],
  sarımsak: ["garlic", "sarımsak", "sarimsak"],
  biber: ["pepper", "biber"],
  yumurta: ["egg", "yumurta"],
  un: ["flour", "un"],
  şeker: ["sugar", "seker", "şeker"],
  tuz: ["salt", "tuz"],
  zeytinyağı: ["olive oil", "zeytinyagi", "zeytinyağı"],
  peynir: ["cheese", "peynir"],
  tavuk: ["chicken", "tavuk"],
  et: ["meat", "beef", "et"],
  süt: ["milk", "sut", "süt"],
  tereyağı: ["butter", "tereyagi", "tereyağı"],
  patlıcan: ["eggplant", "aubergine", "patlican", "patlıcan"],
  mercimek: ["lentil", "mercimek"],
  pirinç: ["rice", "pirinc", "pirinç"],
  maydanoz: ["parsley", "maydanoz"],
  limon: ["lemon", "limon"],
};

// Normalize a search term using alias table
function normalizeIngredient(term: string): string[] {
  const lower = term.toLowerCase().trim();
  for (const [canonical, aliases] of Object.entries(ingredientAliases)) {
    if (aliases.includes(lower)) return [canonical, ...aliases];
  }
  return [lower];
}

export async function searchRecipes(query: string): Promise<RecipeCard[]> {
  const terms = query
    .split(/[,+]/)
    .map((t) => t.trim())
    .filter(Boolean);

  if (terms.length === 0) return [];

  // Collect all search variants for all terms
  const allVariants = terms.flatMap((t) => normalizeIngredient(t));
  const uniqueVariants = [...new Set(allVariants)];

  const recipes = await prisma.recipe.findMany({
    where: {
      OR: [
        { title: { contains: query } },
        { description: { contains: query } },
        { intro: { contains: query } },
        { category: { contains: query } },
        ...uniqueVariants.map((v) => ({
          ingredients: { some: { name: { contains: v } } },
        })),
        ...uniqueVariants.map((v) => ({
          tags: { some: { name: { contains: v } } },
        })),
      ],
    },
    include: { tags: true },
    orderBy: { createdAt: "desc" },
  });

  return recipes;
}

export async function searchByIngredients(
  ingredients: string[]
): Promise<Array<RecipeCard & { matchScore: number; matchCount: number }>> {
  if (ingredients.length === 0) return [];

  const allRecipes = await prisma.recipe.findMany({
    include: { tags: true, ingredients: true },
  });

  const scored = allRecipes.map((recipe) => {
    let matchCount = 0;

    for (const ingredient of ingredients) {
      const variants = normalizeIngredient(ingredient);
      const matched = recipe.ingredients.some((ri) =>
        variants.some((v) => ri.name.toLowerCase().includes(v.toLowerCase()))
      );
      if (matched) matchCount++;
    }

    return {
      ...recipe,
      matchScore: matchCount / ingredients.length,
      matchCount,
    };
  });

  return scored
    .filter((r) => r.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount);
}

export const COMMON_INGREDIENTS = [
  "domates",
  "soğan",
  "sarımsak",
  "yumurta",
  "un",
  "şeker",
  "tuz",
  "zeytinyağı",
  "peynir",
  "tavuk",
  "süt",
  "tereyağı",
  "patlıcan",
  "mercimek",
  "pirinç",
  "maydanoz",
  "limon",
  "patates",
  "biber",
];
