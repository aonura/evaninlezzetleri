import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { signOut } from "@/lib/auth";
import { ChefHat, LayoutList, PlusCircle, LogOut } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/admin/giris");
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col">
      {/* Admin header */}
      <header className="bg-[#2C2218] text-white px-4 h-14 flex items-center justify-between sticky top-0 z-50">
        <Link
          href="/admin"
          className="flex items-center gap-2 font-serif text-lg font-semibold text-[#FAF7F2]"
        >
          <ChefHat size={22} />
          Admin Paneli
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/admin/tarifler/yeni"
            className="flex items-center gap-1.5 px-3 h-8 rounded-lg bg-[#C4603A] text-white text-sm font-medium hover:bg-[#9E4A2B] transition-all"
          >
            <PlusCircle size={15} />
            Yeni Tarif
          </Link>

          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/admin/giris" });
            }}
          >
            <button
              type="submit"
              className="flex items-center gap-1 text-sm text-[#A89A8A] hover:text-white transition-colors"
            >
              <LogOut size={16} />
              Çıkış
            </button>
          </form>
        </div>
      </header>

      {/* Sidebar + Content */}
      <div className="flex flex-1">
        <aside className="hidden md:flex flex-col w-52 bg-[#FFFEF9] border-r border-[#E8DDD0] p-4 gap-1">
          <Link
            href="/admin"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-[#7A6A5A] hover:bg-[#FAF7F2] hover:text-[#2C2218] transition-all"
          >
            <LayoutList size={16} />
            Tarifler
          </Link>
          <Link
            href="/admin/tarifler/yeni"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-[#7A6A5A] hover:bg-[#FAF7F2] hover:text-[#2C2218] transition-all"
          >
            <PlusCircle size={16} />
            Yeni Tarif Ekle
          </Link>
          <hr className="border-[#E8DDD0] my-2" />
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-[#7A6A5A] hover:bg-[#FAF7F2] hover:text-[#2C2218] transition-all"
          >
            Siteyi Görüntüle ↗
          </Link>
        </aside>

        <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
