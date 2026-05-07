/**
 * POST /api/bugun-ne-pisirsem
 * Server-side only. DEEPSEEK_API_KEY never reaches the client.
 */

import { callDeepSeek } from "@/lib/deepseek";

export const runtime = "nodejs";

const SYSTEM =
  "Sen Eva'nın Lezzetleri sitesindeki pratik, sıcak ve ev tipi Türk mutfağı odaklı yemek öneri asistanısın. " +
  "Cevapların Türkçe, sade, uygulanabilir ve kısa olmalı. " +
  "Kullanıcının seçimlerine uygun 3 yemek öner. " +
  "Pahalı, egzotik veya zor malzemeler önermeden ev mutfağına uygun kal. " +
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
      peopleCount     = "",
      mealType        = "",
      style           = "",
      mainIngredient  = "",
    } = body;

    const user = [
      peopleCount    ? `Kişi sayısı: ${peopleCount}`      : "",
      mealType       ? `Öğün: ${mealType}`                : "",
      style          ? `Tercih: ${style}`                  : "",
      mainIngredient ? `Ana malzeme: ${mainIngredient}`   : "",
      "",
      "Bu bilgilere göre 3 pratik Türk yemeği öner. Her öneri kısa tutulsun. JSON formatı:",
      '{"suggestions":[{"title":"","description":"","why":"","time":"","difficulty":"Kolay","evaNote":""}]}',
    ].filter(Boolean).join("\n");

    const { parsed, error } = await callDeepSeek(SYSTEM, user);

    if (error) {
      return Response.json({ error }, { status: 502 });
    }

    const suggestions = (parsed as { suggestions?: unknown[] })?.suggestions;
    if (!Array.isArray(suggestions)) {
      return Response.json(
        { error: "Beklenmedik yanıt formatı. Lütfen tekrar dene." },
        { status: 502 },
      );
    }

    return Response.json({ suggestions });

  } catch {
    return Response.json(
      { error: "Bir şey ters gitti. Lütfen tekrar dene." },
      { status: 500 },
    );
  }
}
