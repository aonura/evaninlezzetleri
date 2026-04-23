"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

interface Props {
  id: number;
  title: string;
}

export default function DeleteRecipeButton({ id, title }: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleDelete() {
    if (!confirm(`"${title}" tarifini silmek istediğinizden emin misiniz?`)) {
      return;
    }
    startTransition(async () => {
      await fetch(`/api/admin/tarifler/${id}`, { method: "DELETE" });
      router.refresh();
    });
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="flex items-center gap-1 px-3 h-8 rounded-lg border border-[#E8DDD0] text-[#7A6A5A] hover:border-red-300 hover:text-red-600 disabled:opacity-50 transition-all text-xs"
    >
      <Trash2 size={14} />
      {isPending ? "…" : "Sil"}
    </button>
  );
}
