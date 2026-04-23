import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4603A] disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-[#C4603A] text-white hover:bg-[#9E4A2B] active:scale-95 shadow-sm",
    secondary:
      "bg-[#E8DDD0] text-[#2C2218] hover:bg-[#DDD0C0] active:scale-95",
    ghost:
      "text-[#7A6A5A] hover:bg-[#E8DDD0] hover:text-[#2C2218] active:scale-95",
    outline:
      "border border-[#C4603A] text-[#C4603A] hover:bg-[#C4603A]/10 active:scale-95",
  };

  const sizes = {
    sm: "px-3 h-9 text-sm gap-1.5",
    md: "px-4 h-11 text-sm gap-2",
    lg: "px-6 h-12 text-base gap-2",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
