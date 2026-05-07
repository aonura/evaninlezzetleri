import HomeHero from "@/components/home/HomeHero";
import HomeMenuGrid from "@/components/home/HomeMenuGrid";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "var(--color-cream)" }}>
      <HomeHero />
      <HomeMenuGrid />
    </div>
  );
}
