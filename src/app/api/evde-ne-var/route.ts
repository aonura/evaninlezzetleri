/**
 * POST /api/evde-ne-var
 * Calls DeepSeek server-side and returns 3 recipe suggestions.
 * DEEPSEEK_API_KEY is only accessed here — never in the client bundle.
 */

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    /* ── 1. Parse body ── */
    let body: Record<string, string>;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Geçersiz istek." }, { status: 400 });
    }

    const {
      ingredients    = "",
      avoidIngredients = "",
      cookingTime    = "",
      equipment      = "",
      servings       = "",
    } = body;

    /* ── 2. Validate ── */
    if (!ingredients.trim()) {
      return Response.json(
        { error: "Lütfen en az bir malzeme gir." },
        { status: 400 },
      );
    }

    /* ── 3. API key guard ── */
    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      console.error("[evde-ne-var] DEEPSEEK_API_KEY is not set");
      return Response.json(
        { error: "Tarif servisi şu an yapılandırılmamış. Lütfen daha sonra tekrar dene." },
        { status: 500 },
      );
    }

    /* ── 4. Build prompt ── */
    const userMessage = [
      `Evdeki malzemeler: ${ingredients}`,
      `Kullanmak istemedikleri: ${avoidIngredients || "yok"}`,
      `Süre: ${cookingTime || "belirtilmedi"}`,
      `Pişirme ekipmanı: ${equipment || "belirtilmedi"}`,
      `Kişi sayısı: ${servings || "belirtilmedi"}`,
      "",
      "Bu bilgilere göre 3 pratik ev yemeği tarifi öner.",
      "Her tarif için sadece evdeki malzemeleri kullan, ekstra alışveriş gerektirme.",
      "Yanıtı tam olarak şu JSON formatında döndür:",
      `{
  "recipes": [
    {
      "title": "Tarif adı",
      "description": "1-2 cümle açıklama",
      "time": "Yaklaşık süre",
      "difficulty": "Kolay",
      "ingredients": ["malzeme 1", "malzeme 2"],
      "steps": ["Adım 1: ...", "Adım 2: ..."],
      "evaNote": "Kısa ve pratik bir ipucu"
    }
  ]
}`,
    ].join("\n");

    /* ── 5. Call DeepSeek ── */
    let dsResponse: Response;
    try {
      dsResponse = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            {
              role: "system",
              content:
                "Sen Eva'nın Lezzetleri sitesindeki sıcak, pratik ve ev tipi Türk mutfağı odaklı tarif asistanısın. " +
                "Cevapların Türkçe, sade, uygulanabilir ve ev mutfağına uygun olmalı. " +
                "Kullanıcının verdiği malzemelere mümkün olduğunca sadık kal. " +
                "Uydurma pahalı veya egzotik malzemeler önerme. " +
                "Gereksiz uzun konuşma. Sadece geçerli JSON döndür.",
            },
            { role: "user", content: userMessage },
          ],
          temperature: 0.7,
          max_tokens: 1400,
          response_format: { type: "json_object" },
        }),
      });
    } catch (fetchErr) {
      console.error("[evde-ne-var] Network error calling DeepSeek:", fetchErr);
      return Response.json(
        { error: "Tarif servisine ulaşılamıyor. İnternet bağlantını kontrol et ve tekrar dene." },
        { status: 502 },
      );
    }

    if (!dsResponse.ok) {
      const errBody = await dsResponse.text().catch(() => "");
      console.error("[evde-ne-var] DeepSeek error", dsResponse.status, errBody);
      return Response.json(
        { error: "Tarif servisi şu an yanıt vermiyor. Lütfen tekrar dene." },
        { status: 502 },
      );
    }

    /* ── 6. Parse DeepSeek response ── */
    const dsData = await dsResponse.json();
    const rawContent: string | undefined = dsData?.choices?.[0]?.message?.content;

    if (!rawContent) {
      console.error("[evde-ne-var] Empty content from DeepSeek", dsData);
      return Response.json(
        { error: "Beklenmedik bir yanıt alındı. Lütfen tekrar dene." },
        { status: 502 },
      );
    }

    let parsed: { recipes?: unknown[] };
    try {
      parsed = JSON.parse(rawContent);
    } catch {
      console.error("[evde-ne-var] JSON parse failed. Raw:", rawContent.slice(0, 300));
      return Response.json(
        { error: "Tarif verisi işlenemedi. Lütfen tekrar dene." },
        { status: 502 },
      );
    }

    if (!Array.isArray(parsed?.recipes) || parsed.recipes.length === 0) {
      console.error("[evde-ne-var] Unexpected structure:", parsed);
      return Response.json(
        { error: "Beklenmedik bir yanıt formatı. Lütfen tekrar dene." },
        { status: 502 },
      );
    }

    return Response.json({ recipes: parsed.recipes });

  } catch (err) {
    console.error("[evde-ne-var] Unhandled error:", err);
    return Response.json(
      { error: "Bir şey ters gitti. Lütfen tekrar dene." },
      { status: 500 },
    );
  }
}
