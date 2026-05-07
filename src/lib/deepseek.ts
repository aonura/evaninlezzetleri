/**
 * deepseek.ts — SERVER-SIDE ONLY
 * Do not import this from any "use client" component.
 * DEEPSEEK_API_KEY is read exclusively here.
 */

interface DeepSeekResult {
  parsed: Record<string, unknown> | null;
  error:  string | null;
}

export async function callDeepSeek(
  system: string,
  user:   string,
): Promise<DeepSeekResult> {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    console.error("[deepseek] DEEPSEEK_API_KEY is not set");
    return { parsed: null, error: "Tarif servisi şu an yapılandırılmamış." };
  }

  let res: Response;
  try {
    res = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        Authorization:  `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model:           "deepseek-chat",
        messages:        [
          { role: "system", content: system },
          { role: "user",   content: user   },
        ],
        temperature:     0.7,
        max_tokens:      900,
        response_format: { type: "json_object" },
      }),
    });
  } catch {
    return { parsed: null, error: "Tarif servisine ulaşılamıyor." };
  }

  if (!res.ok) {
    console.error("[deepseek] API error", res.status);
    return { parsed: null, error: "Tarif servisi yanıt vermiyor." };
  }

  const raw: string =
    (await res.json())?.choices?.[0]?.message?.content ?? "";

  if (!raw) return { parsed: null, error: "Boş yanıt alındı." };

  try {
    return { parsed: JSON.parse(raw), error: null };
  } catch {
    console.error("[deepseek] JSON parse failed, raw:", raw.slice(0, 200));
    return { parsed: null, error: "Yanıt işlenemedi. Lütfen tekrar dene." };
  }
}
