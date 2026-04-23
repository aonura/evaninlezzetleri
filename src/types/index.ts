export type Difficulty = "Kolay" | "Orta" | "Zor";

export type Category =
  | "Kahvaltı"
  | "Ana Yemek"
  | "Tatlı"
  | "Çorba"
  | "Salata"
  | "Pratik"
  | "Vejetaryen";

export interface Tag {
  id: number;
  name: string;
}

export interface RecipeIngredient {
  id: number;
  recipeId: number;
  name: string;
  amount: string;
  notes: string | null;
}

export interface RecipeStep {
  id: number;
  recipeId: number;
  order: number;
  instruction: string;
  tip: string | null;
}

export interface Recipe {
  id: number;
  slug: string;
  title: string;
  description: string;
  intro: string | null;
  category: string;
  difficulty: string;
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: number;
  imageUrl: string;
  featured: boolean;
  popular: boolean;
  tags: Tag[];
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  createdAt: Date;
  updatedAt: Date;
}

export type RecipeCard = Pick<
  Recipe,
  | "id"
  | "slug"
  | "title"
  | "description"
  | "category"
  | "difficulty"
  | "totalTime"
  | "servings"
  | "imageUrl"
  | "featured"
  | "popular"
  | "tags"
  | "createdAt"
>;

export interface SearchResult extends RecipeCard {
  matchScore?: number;
}
