/**
 * POST /api/haftalik-menu
 * Server-side only. DEEPSEEK_API_KEY never reaches the client.
 */

import { callDeepSeek } from "@/lib/deepseek";

export const runtime = "nodejs";

const SYSTEM =
  "Sen Eva'nın Lezzetleri sitesindeki ev tipi Türk mutfağı odaklı haftalık menü asistanısın. " +
  "Cevapların Türkçe, sade, uygulanabilir ve aile mutfağına uygun olmalı. " +
  "7 günlük pratik bir menü oluştur. " +
  "Pahalı, egzotik veya zor bulunan malzemeler önermeden ev mutfağına uygun kal. " +
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
      peopleCount    = "",
      budget         = "",
      style          = "",
      includeDessert = "",
    } = body;

    const user = [
      peopleCount    ? `Kişi sayısı: ${peopleCount}`    : "",
      budget         ? `Bütçe: ${budget}`               : "",
      style          ? `Tarz: ${style}`                 : "",
      includeDessert ? `Tatlı: ${includeDessert}`       : "",
      "",
      "Pazartesi'den Pazar'a 7 günlük menü oluştur. Her gün için öğle ve akşam yemeği öner. Kısa tut. JSON formatı:",
      '{"week":[{"day":"Pazartesi","lunch":"","dinner":"","note":""},{"day":"Salı","lunch":"","dinner":"","note":""},{"day":"Çarşamba","lunch":"","dinner":"","note":""},{"day":"Perşembe","lunch":"","dinner":"","note":""},{"day":"Cuma","lunch":"","dinner":"","note":""},{"day":"Cumartesi","lunch":"","dinner":"","note":""},{"day":"Pazar","lunch":"","dinner":"","note":""}],"evaNote":""}',
    ].filter(Boolean).join("\n");

    const { parsed, error } = await callDeepSeek(SYSTEM, user);

    if (error) {
      return Response.json({ error }, { status: 502 });
    }

    const week = (parsed as { week?: unknown[]; evaNote?: string })?.week;
    if (!Array.isArray(week)) {
      return Response.json(
        { error: "Beklenmedik yanıt formatı. Lütfen tekrar dene." },
        { status: 502 },
      );
    }

    return Response.json({
      week,
      evaNote: (parsed as { evaNote?: string }).evaNote ?? "",
    });

  } catch {
    return Response.json(
      { error: "Bir şey ters gitti. Lütfen tekrar dene." },
      { status: 500 },
    );
  }
}
