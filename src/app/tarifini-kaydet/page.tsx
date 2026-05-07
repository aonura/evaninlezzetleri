import type { Metadata } from "next";
import VintageLayout from "@/components/vintage/VintageLayout";
import DecorativeDivider from "@/components/vintage/DecorativeDivider";

export const metadata: Metadata = {
  title: "Tarifini Kaydet",
  description: "Kendi tarifini deftere ekle",
};

export default function TarifiniKaydetPage() {
  return (
    <VintageLayout
      title="Tarifini Kaydet"
      subtitle="Aileden öğrendiğin ya da kendi geliştirdiğin tarifleri buraya yaz."
    >
      <div className="max-w-2xl mx-auto">

        {/* Notebook paper wrapper */}
        <div
          className="relative p-6 md:p-8"
          style={{
            backgroundColor: "var(--color-warm-white)",
            border: "2px solid var(--color-parchment)",
            boxShadow: "3px 4px 0 var(--color-parchment)",
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 27px,rgba(140,100,40,0.08) 27px,rgba(140,100,40,0.08) 28px)",
          }}
        >
          {/* Red margin line */}
          <div
            className="absolute top-0 bottom-0 left-16 w-px"
            style={{ backgroundColor: "rgba(192,57,43,0.3)" }}
            aria-hidden
          />

          <form className="flex flex-col gap-6 pl-10">

            {/* Tarif adı */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="tarifadi"
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-muted)" }}
              >
                Tarif Adı
              </label>
              <input
                id="tarifadi"
                type="text"
                placeholder="örn. Annemin Ezogelin Çorbası"
                className="vintage-field w-full rounded-none border-l-0 border-r-0 border-t-0 bg-transparent px-0"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem" }}
              />
            </div>

            <DecorativeDivider color="var(--color-parchment)" ornament="✦" />

            {/* Malzemeler */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="malzemeler"
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-muted)" }}
              >
                Malzemeler
              </label>
              <textarea
                id="malzemeler"
                rows={5}
                placeholder="Her satıra bir malzeme yaz:&#10;2 su bardağı un&#10;3 yumurta&#10;…"
                className="vintage-field w-full rounded-none resize-none bg-transparent"
                style={{ fontFamily: "var(--font-serif)" }}
              />
            </div>

            {/* Yapılış */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="yapilis"
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-muted)" }}
              >
                Yapılış
              </label>
              <textarea
                id="yapilis"
                rows={7}
                placeholder="Adım adım tarifi buraya yaz…"
                className="vintage-field w-full rounded-none resize-none bg-transparent"
                style={{ fontFamily: "var(--font-serif)" }}
              />
            </div>

            {/* Eva'nın Notu */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="not"
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-olive)" }}
              >
                Eva&apos;nın Notu
                <span
                  className="font-normal ml-1"
                  style={{ color: "var(--color-light-text)" }}
                >
                  (isteğe bağlı — püf nokta, öneri…)
                </span>
              </label>
              <textarea
                id="not"
                rows={3}
                placeholder="örn. Hamuru çok yoğurmamalısın, yumuşak kalması için…"
                className="vintage-field w-full rounded-none resize-none bg-transparent"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              />
            </div>

            {/* Coming soon note */}
            <p
              className="text-xs italic text-center"
              style={{ color: "var(--color-light-text)", fontFamily: "var(--font-serif)" }}
            >
              Bu özellik yakında aktif olacak.
            </p>

            {/* Submit */}
            <button
              type="submit"
              className="py-3 px-8 font-semibold uppercase tracking-widest text-sm transition-all duration-200 hover:opacity-85 active:scale-95 self-center"
              style={{
                backgroundColor: "var(--color-ink)",
                color: "var(--color-aged)",
                fontFamily: "var(--font-serif)",
                letterSpacing: "0.12em",
                border: "2px solid var(--color-ink-light)",
              }}
            >
              Kaydet
            </button>
          </form>
        </div>
      </div>
    </VintageLayout>
  );
}
