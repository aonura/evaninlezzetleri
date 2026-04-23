"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, LayoutGrid, Heart } from "lucide-react";

const navItems = [
  { href: "/", label: "Ana Sayfa", icon: Home },
  { href: "/ara", label: "Ara", icon: Search },
  { href: "/tarifler", label: "Tarifler", icon: LayoutGrid },
  { href: "/favoriler", label: "Favoriler", icon: Heart },
];

// Mobile-only bottom navigation bar
export default function BottomNav() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) return null;

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#FFFEF9] border-t border-[#E8DDD0] shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
      <div className="flex items-stretch h-16">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname?.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors ${
                isActive
                  ? "text-[#C4603A]"
                  : "text-[#A89A8A] hover:text-[#7A6A5A]"
              }`}
            >
              <Icon
                size={22}
                strokeWidth={isActive ? 2.5 : 2}
                aria-hidden
              />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
