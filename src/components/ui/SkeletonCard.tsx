// Loading skeleton for recipe cards
export default function SkeletonCard() {
  return (
    <div className="bg-[#FFFEF9] rounded-2xl overflow-hidden shadow-sm animate-pulse">
      <div className="aspect-[4/3] bg-[#E8DDD0]" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-[#E8DDD0] rounded-full w-3/4" />
        <div className="h-3 bg-[#E8DDD0] rounded-full w-full" />
        <div className="h-3 bg-[#E8DDD0] rounded-full w-2/3" />
        <div className="flex gap-2 pt-1">
          <div className="h-5 bg-[#E8DDD0] rounded-full w-16" />
          <div className="h-5 bg-[#E8DDD0] rounded-full w-12" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
