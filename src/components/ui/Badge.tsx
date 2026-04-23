import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "difficulty" | "category" | "tag";
  difficulty?: string;
  className?: string;
}

const difficultyColors: Record<string, string> = {
  Kolay: "bg-green-100 text-green-700 border-green-200",
  Orta: "bg-orange-100 text-orange-700 border-orange-200",
  Zor: "bg-red-100 text-red-700 border-red-200",
};

export default function Badge({
  children,
  variant = "default",
  difficulty,
  className,
}: BadgeProps) {
  const base =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border";

  if (variant === "difficulty" && difficulty) {
    return (
      <span
        className={cn(base, difficultyColors[difficulty] ?? "bg-gray-100 text-gray-700 border-gray-200", className)}
      >
        {children}
      </span>
    );
  }

  if (variant === "category") {
    return (
      <span
        className={cn(
          base,
          "bg-[#E8DDD0] text-[#7A6A5A] border-[#E8DDD0]",
          className
        )}
      >
        {children}
      </span>
    );
  }

  if (variant === "tag") {
    return (
      <span
        className={cn(
          base,
          "bg-[#FAF7F2] text-[#A89A8A] border-[#E8DDD0]",
          className
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        base,
        "bg-[#C4603A]/10 text-[#C4603A] border-[#C4603A]/20",
        className
      )}
    >
      {children}
    </span>
  );
}
