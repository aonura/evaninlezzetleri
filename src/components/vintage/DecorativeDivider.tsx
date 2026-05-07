interface DecorativeDividerProps {
  className?: string;
  color?: string;
  ornament?: string;
}

export default function DecorativeDivider({
  className = "",
  color = "var(--color-muted)",
  ornament = "❧",
}: DecorativeDividerProps) {
  return (
    <div
      className={`flex items-center gap-3 my-3 ${className}`}
      style={{ color }}
      aria-hidden
    >
      <div className="flex-1 border-t border-current opacity-30" />
      <span
        className="text-sm opacity-60 select-none"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {ornament}
      </span>
      <div className="flex-1 border-t border-current opacity-30" />
    </div>
  );
}
