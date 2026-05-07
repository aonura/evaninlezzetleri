/**
 * POST /api/evde-ne-var
 * Server-side only. DEEPSEEK_API_KEY never reaches the client.
 */

import { callDeepSeek } from "@/lib/deepseek";

export const runtime = "nodejs";

const SYSTEM =
  "Türk ev mutfağı tarif asistanısın. " +
  "Kısa, sade, uygulanabilir Türkçe tarifler ver. " +
  "Sadece verilen malzemeleri kullan. " +
  "Sadece geçerli JSON döndür.";

export async function POST(request: Request) {
  try {
    let body: Record<string, string>;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Geçersiz istek." }, { status: 400 });
    }

    const {
      ingredients      = "",
      avoidIngredients = "",
      cookingTime      = "",
      equipment        = "",
      servings         = "",
    } = body;

    if (!ingredients.trim()) {
      return Response.json(
        { error: "Lütfen en az bir malzeme gir." },
        { status: 400 },
      );
    }

    const user = [
      `Malzemeler: ${ingredients}`,
      avoidIngredients ? `Kullanma: ${avoidIngredients}` : "",
      cookingTime      ? `Süre: ${cookingTime}`          : "",
      equipment        ? `Ekipman: ${equipment}`         : "",
      servings         ? `Kişi: ${servings}`             : "",
      "",
      'Yukarıdaki malzemeleri kullanarak 3 pratik Türk ev yemeği tarifi öner. Ekstra alışveriş gerektirme. Her tarif kısa tutulsun (adımlar 3-4 cümle). JSON formatı:',
      '{"recipes":[{"title":"","description":"","time":"","difficulty":"Kolay","ingredients":[],"steps":[],"evaNote":""}]}',
    ].filter(Boolean).join("\n");

    const { parsed, error } = await callDeepSeek(SYSTEM, user);

    if (error) {
      return Response.json({ error }, { status: 502 });
    }

    if (!Array.isArray((parsed as { recipes?: unknown[] })?.recipes)) {
      return Response.json(
        { error: "Beklenmedik yanıt formatı. Lütfen tekrar dene." },
        { status: 502 },
      );
    }

    return Response.json({ recipes: (parsed as { recipes: unknown[] }).recipes });

  } catch {
    return Response.json(
      { error: "Bir şey ters gitti. Lütfen tekrar dene." },
      { status: 500 },
    );
  }
}
