"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, GripVertical } from "lucide-react";
import { slugify, CATEGORIES, DIFFICULTIES } from "@/lib/utils";
import type { Recipe } from "@/types";

interface RecipeFormProps {
  recipe?: Recipe;
  mode: "create" | "edit";
}

interface IngredientRow {
  name: string;
  amount: string;
  notes: string;
}

interface StepRow {
  order: number;
  instruction: string;
  tip: string;
}

export default function RecipeForm({ recipe, mode }: RecipeFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Form state
  const [title, setTitle] = useState(recipe?.title ?? "");
  const [slug, setSlug] = useState(recipe?.slug ?? "");
  const [description, setDescription] = useState(recipe?.description ?? "");
  const [intro, setIntro] = useState(recipe?.intro ?? "");
  const [category, setCategory] = useState(recipe?.category ?? CATEGORIES[0]);
  const [difficulty, setDifficulty] = useState(
    recipe?.difficulty ?? DIFFICULTIES[0]
  );
  const [prepTime, setPrepTime] = useState(recipe?.prepTime ?? 10);
  const [cookTime, setCookTime] = useState(recipe?.cookTime ?? 20);
  const [servings, setServings] = useState(recipe?.servings ?? 4);
  const [imageUrl, setImageUrl] = useState(recipe?.imageUrl ?? "");
  const [featured, setFeatured] = useState(recipe?.featured ?? false);
  const [popular, setPopular] = useState(recipe?.popular ?? false);
  const [tagInput, setTagInput] = useState(
    recipe?.tags.map((t) => t.name).join(", ") ?? ""
  );

  const [ingredients, setIngredients] = useState<IngredientRow[]>(
    recipe?.ingredients.map((i) => ({
      name: i.name,
      amount: i.amount,
      notes: i.notes ?? "",
    })) ?? [{ name: "", amount: "", notes: "" }]
  );

  const [steps, setSteps] = useState<StepRow[]>(
    recipe?.steps.map((s, idx) => ({
      order: idx + 1,
      instruction: s.instruction,
      tip: s.tip ?? "",
    })) ?? [{ order: 1, instruction: "", tip: "" }]
  );

  function handleTitleChange(val: string) {
    setTitle(val);
    if (mode === "create") setSlug(slugify(val));
  }

  function addIngredient() {
    setIngredients((prev) => [...prev, { name: "", amount: "", notes: "" }]);
  }

  function removeIngredient(idx: number) {
    setIngredients((prev) => prev.filter((_, i) => i !== idx));
  }

  function updateIngredient(
    idx: number,
    field: keyof IngredientRow,
    value: string
  ) {
    setIngredients((prev) =>
      prev.map((ing, i) => (i === idx ? { ...ing, [field]: value } : ing))
    );
  }

  function addStep() {
    setSteps((prev) => [
      ...prev,
      { order: prev.length + 1, instruction: "", tip: "" },
    ]);
  }

  function removeStep(idx: number) {
    setSteps((prev) =>
      prev.filter((_, i) => i !== idx).map((s, i) => ({ ...s, order: i + 1 }))
    );
  }

  function updateStep(idx: number, field: keyof StepRow, value: string) {
    setSteps((prev) =>
      prev.map((step, i) => (i === idx ? { ...step, [field]: value } : step))
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);

    const tags = tagInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const payload = {
      title,
      slug,
      description,
      intro: intro || null,
      category,
      difficulty,
      prepTime: Number(prepTime),
      cookTime: Number(cookTime),
      totalTime: Number(prepTime) + Number(cookTime),
      servings: Number(servings),
      imageUrl,
      featured,
      popular,
      tags,
      ingredients: ingredients.filter((i) => i.name && i.amount),
      steps: steps
        .filter((s) => s.instruction)
        .map((s, idx) => ({ ...s, order: idx + 1 })),
    };

    try {
      const url =
        mode === "create"
          ? "/api/admin/tarifler"
          : `/api/admin/tarifler/${recipe!.id}`;
      const method = mode === "create" ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Bir hata oluştu");
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bir hata oluştu");
    } finally {
      setSaving(false);
    }
  }

  const inputClass =
    "w-full h-10 px-3 rounded-xl border border-[#E8DDD0] bg-white focus:border-[#C4603A] focus:outline-none text-[#2C2218] text-sm transition-all";
  const labelClass = "block text-sm font-medium text-[#2C2218] mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-8">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
          {error}
        </div>
      )}

      {/* Basic info */}
      <section className="bg-[#FFFEF9] rounded-2xl border border-[#E8DDD0] p-5 space-y-4">
        <h2 className="font-serif text-lg font-semibold text-[#2C2218]">
          Temel Bilgiler
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className={labelClass}>Başlık *</label>
            <input
              className={inputClass}
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              required
              placeholder="Tarif başlığı"
            />
          </div>

          <div>
            <label className={labelClass}>Slug *</label>
            <input
              className={inputClass}
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
              placeholder="tarif-slug"
            />
          </div>

          <div>
            <label className={labelClass}>Görsel URL *</label>
            <input
              className={inputClass}
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
              type="url"
              placeholder="https://..."
            />
          </div>

          <div className="md:col-span-2">
            <label className={labelClass}>Kısa Açıklama *</label>
            <textarea
              className={`${inputClass} h-20 py-2 resize-none`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              maxLength={200}
              placeholder="Max 200 karakter"
            />
          </div>

          <div className="md:col-span-2">
            <label className={labelClass}>Uzun Giriş / Intro</label>
            <textarea
              className={`${inputClass} h-24 py-2 resize-none`}
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
              placeholder="Tarif hakkında daha uzun bir giriş metni (opsiyonel)"
            />
          </div>
        </div>
      </section>

      {/* Category & difficulty */}
      <section className="bg-[#FFFEF9] rounded-2xl border border-[#E8DDD0] p-5 space-y-4">
        <h2 className="font-serif text-lg font-semibold text-[#2C2218]">
          Sınıflandırma
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className={labelClass}>Kategori</label>
            <select
              className={inputClass}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Zorluk</label>
            <select
              className={inputClass}
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              {DIFFICULTIES.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Hazırlık (dk)</label>
            <input
              className={inputClass}
              type="number"
              min={0}
              value={prepTime}
              onChange={(e) => setPrepTime(Number(e.target.value))}
            />
          </div>
          <div>
            <label className={labelClass}>Pişirme (dk)</label>
            <input
              className={inputClass}
              type="number"
              min={0}
              value={cookTime}
              onChange={(e) => setCookTime(Number(e.target.value))}
            />
          </div>
          <div>
            <label className={labelClass}>Kişi Sayısı</label>
            <input
              className={inputClass}
              type="number"
              min={1}
              value={servings}
              onChange={(e) => setServings(Number(e.target.value))}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Etiketler (virgülle ayırın)</label>
          <input
            className={inputClass}
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="kolay, Türk mutfağı, vejetaryen"
          />
        </div>

        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm font-medium text-[#2C2218] cursor-pointer">
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="w-4 h-4 rounded border-[#E8DDD0] accent-[#C4603A]"
            />
            Öne Çıkan
          </label>
          <label className="flex items-center gap-2 text-sm font-medium text-[#2C2218] cursor-pointer">
            <input
              type="checkbox"
              checked={popular}
              onChange={(e) => setPopular(e.target.checked)}
              className="w-4 h-4 rounded border-[#E8DDD0] accent-[#C4603A]"
            />
            Popüler
          </label>
        </div>
      </section>

      {/* Ingredients */}
      <section className="bg-[#FFFEF9] rounded-2xl border border-[#E8DDD0] p-5 space-y-3">
        <h2 className="font-serif text-lg font-semibold text-[#2C2218]">
          Malzemeler
        </h2>

        <div className="space-y-2">
          {ingredients.map((ing, idx) => (
            <div key={idx} className="flex gap-2 items-center">
              <GripVertical size={16} className="text-[#E8DDD0] flex-none" />
              <input
                className={`${inputClass} flex-1`}
                placeholder="Malzeme adı"
                value={ing.name}
                onChange={(e) => updateIngredient(idx, "name", e.target.value)}
              />
              <input
                className={`${inputClass} w-32`}
                placeholder="Miktar"
                value={ing.amount}
                onChange={(e) =>
                  updateIngredient(idx, "amount", e.target.value)
                }
              />
              <input
                className={`${inputClass} w-32`}
                placeholder="Not (opt)"
                value={ing.notes}
                onChange={(e) =>
                  updateIngredient(idx, "notes", e.target.value)
                }
              />
              <button
                type="button"
                onClick={() => removeIngredient(idx)}
                disabled={ingredients.length === 1}
                className="flex-none text-[#A89A8A] hover:text-red-500 disabled:opacity-30 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addIngredient}
          className="flex items-center gap-2 text-sm text-[#C4603A] hover:text-[#9E4A2B] font-medium transition-colors"
        >
          <Plus size={16} />
          Malzeme Ekle
        </button>
      </section>

      {/* Steps */}
      <section className="bg-[#FFFEF9] rounded-2xl border border-[#E8DDD0] p-5 space-y-3">
        <h2 className="font-serif text-lg font-semibold text-[#2C2218]">
          Adımlar
        </h2>

        <div className="space-y-3">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-3">
              <span className="flex-none w-7 h-7 rounded-full bg-[#C4603A] text-white text-xs font-bold flex items-center justify-center mt-1.5">
                {idx + 1}
              </span>
              <div className="flex-1 space-y-2">
                <textarea
                  className={`${inputClass} h-20 py-2 resize-none`}
                  placeholder="Talimat"
                  value={step.instruction}
                  onChange={(e) =>
                    updateStep(idx, "instruction", e.target.value)
                  }
                />
                <input
                  className={inputClass}
                  placeholder="İpucu (opsiyonel)"
                  value={step.tip}
                  onChange={(e) => updateStep(idx, "tip", e.target.value)}
                />
              </div>
              <button
                type="button"
                onClick={() => removeStep(idx)}
                disabled={steps.length === 1}
                className="flex-none text-[#A89A8A] hover:text-red-500 disabled:opacity-30 transition-colors mt-1.5"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addStep}
          className="flex items-center gap-2 text-sm text-[#C4603A] hover:text-[#9E4A2B] font-medium transition-colors"
        >
          <Plus size={16} />
          Adım Ekle
        </button>
      </section>

      {/* Submit */}
      <div className="flex gap-3 pb-8">
        <button
          type="submit"
          disabled={saving}
          className="px-6 h-11 rounded-xl bg-[#C4603A] text-white font-medium hover:bg-[#9E4A2B] disabled:opacity-60 transition-all"
        >
          {saving
            ? "Kaydediliyor…"
            : mode === "create"
              ? "Tarifi Kaydet"
              : "Değişiklikleri Kaydet"}
        </button>
        <a
          href="/admin"
          className="px-6 h-11 rounded-xl border border-[#E8DDD0] text-[#7A6A5A] font-medium hover:bg-[#FAF7F2] transition-all flex items-center"
        >
          İptal
        </a>
      </div>
    </form>
  );
}
