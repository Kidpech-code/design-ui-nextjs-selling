import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GridSidebar from "@/components/blueprint-grid/Sidebar";
import HeroBanner from "@/components/blueprint-grid/HeroBanner";
import FilterTabs from "@/components/blueprint-grid/FilterTabs";
import ItemCard, { Item } from "@/components/blueprint-grid/ItemCard";
import Link from "next/link";

/* ─── Mock data ────────────────────────────────────── */
const ITEMS: Item[] = [
  {
    id: "i001",
    title: "Item Alpha A001 — Edition Plus",
    category: "Alpha",
    tag: "Tag-X",
    price: 1_290_000,
    meta1: "38,500 units",
    meta2: "Spec A",
    location: "Zone A",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80",
    isFeatured: true,
    monthlyRate: 18_500,
  },
  {
    id: "i002",
    title: "Item Beta B002 — Sport Trim",
    category: "Beta",
    tag: "Tag-Y",
    price: 1_050_000,
    meta1: "12,000 units",
    meta2: "Spec B",
    location: "Zone B",
    imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80",
    isVerified: true,
    monthlyRate: 14_900,
  },
  {
    id: "i003",
    title: "Item Gamma G003 — Standard",
    category: "Gamma",
    tag: "Tag-X",
    price: 870_000,
    meta1: "55,200 units",
    meta2: "Spec C",
    location: "Zone C",
    imageUrl: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80",
    monthlyRate: 12_400,
  },
  {
    id: "i004",
    title: "Item Delta D004 — Pro Max",
    category: "Delta",
    tag: "Tag-Z",
    price: 1_680_000,
    meta1: "8,000 units",
    meta2: "Spec A",
    location: "Zone D",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    isFeatured: true,
    isNew: true,
    monthlyRate: 24_000,
  },
  {
    id: "i005",
    title: "Item Epsilon E005 — Hybrid Series",
    category: "Epsilon",
    tag: "Tag-Y",
    price: 1_180_000,
    meta1: "28,900 units",
    meta2: "Spec B",
    location: "Zone A",
    imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",
    isVerified: true,
    monthlyRate: 16_700,
  },
  {
    id: "i006",
    title: "Item Zeta Z006 — Basic",
    category: "Zeta",
    tag: "Tag-X",
    price: 620_000,
    meta1: "72,000 units",
    meta2: "Spec C",
    location: "Zone B",
    imageUrl: "https://images.unsplash.com/photo-1600706432502-77a0e2e32790?w=600&q=80",
    monthlyRate: 8_900,
  },
];

const QUICK_LINKS = [
  { label: "Service 1", emoji: "💳", bg: "bg-[#2b55cc]", href: "/blueprint-hero" },
  { label: "Service 2", emoji: "📊", bg: "bg-[#0a1820]", href: "/blueprint-feed"  },
  { label: "Service 3", emoji: "🔍", bg: "bg-green-600",  href: "/blueprint-search"},
  { label: "Service 4", emoji: "🛡️", bg: "bg-amber-500",  href: "/blueprint-hero" },
];

export default function BlueprintGridPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Pattern back bar */}
      <div className="fixed top-0 left-0 right-0 z-[110] bg-gray-900 text-white text-xs flex items-center justify-between px-4 py-1.5">
        <span className="font-medium opacity-70">blueprint-grid</span>
        <Link href="/" className="opacity-70 hover:opacity-100 transition-opacity">
          ← All Patterns
        </Link>
      </div>

      <div className="pt-[26px]">
        <Navbar />
      </div>

      <div className="pt-[65px] flex-1">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-5 flex gap-6 items-start">
          <GridSidebar />

          <main className="flex-1 min-w-0">
            <HeroBanner />

            {/* Quick links */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {QUICK_LINKS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${s.bg}`}
                  >
                    {s.emoji}
                  </div>
                  <span className="text-xs font-medium text-gray-700 text-center">
                    {s.label}
                  </span>
                </Link>
              ))}
            </div>

            <FilterTabs />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ITEMS.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
