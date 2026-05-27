// Blueprint Search — roddonjai /search page pattern:
// Breadcrumb → 2-col layout:
//   Left sidebar: search input + "Filter Options" heading + accordion filter sections
//   Main: active filter chips row (× to remove, "Clear all") + sort dropdown (right-aligned) + card grid
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  Home, ChevronRight, Search, X, ChevronDown,
  SlidersHorizontal, Heart, MapPin, Eye,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { cn, formatPrice } from "@/lib/utils";

// ── Active filter chips ────────────────────────────────
const INITIAL_CHIPS = [
  { id: "price",     label: "Price: 0–20,000" },
  { id: "category",  label: "Category: Alpha"  },
  { id: "condition", label: "New"               },
];

// ── Sort options ───────────────────────────────────────
const SORT_OPTIONS = [
  "Recommended",
  "Price: Low → High",
  "Price: High → Low",
  "Newest First",
  "Most Viewed",
];

// ── Sample result cards ────────────────────────────────
const ITEMS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Item ${String.fromCharCode(65 + (i % 6))}${Math.floor(i / 6) + 1} — Standard Edition`,
  category: ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta"][i % 6],
  price: 3000 + i * 1750,
  meta: `Spec ${["X1", "X2", "Y1", "Y2", "Z1", "Z2"][i % 6]} · ${2019 + (i % 6)}`,
  location: ["Zone A", "Zone B", "Zone C"][i % 3],
  views: 120 + i * 47,
  image: `https://images.unsplash.com/photo-${["1494976388531-d1058494cdd8","1502877338535-766e1452684a","1542362567-b07e54358753","1494976388531-d1058494cdd8","1502877338535-766e1452684a","1542362567-b07e54358753"][i % 6]}?w=400&q=80`,
  isNew: i % 5 === 0,
  isFeatured: i % 7 === 0,
}));

// ── Accordion filter section ───────────────────────────
function FilterSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-sm font-semibold text-gray-800 hover:text-[#e85d04] transition-colors"
      >
        <span>{title}</span>
        <ChevronDown
          size={14}
          className={cn("text-gray-400 transition-transform", open && "rotate-180")}
        />
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  );
}

// ── Result card ────────────────────────────────────────
function ResultCard({ item }: { item: (typeof ITEMS)[0] }) {
  const [liked, setLiked] = useState(false);
  return (
    <Link
      href="/blueprint-detail"
      className="group block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80";
          }}
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-1">
          {item.isNew && (
            <span className="bg-[#0d1b2a] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              NEW
            </span>
          )}
          {item.isFeatured && (
            <span className="bg-[#e85d04] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              FEATURED
            </span>
          )}
        </div>
        {/* Heart */}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLiked(!liked); }}
          aria-label={liked ? "Remove from saved" : "Save item"}
          className="absolute top-2 right-2 w-11 h-11 flex items-center justify-center rounded-full bg-white/90 shadow-sm hover:bg-white transition-colors"
        >
          <Heart size={13} className={liked ? "fill-[#e85d04] text-[#e85d04]" : "text-gray-400"} />
        </button>
      </div>
      {/* Info */}
      <div className="p-3">
        <p className="text-[10px] text-gray-400 font-medium mb-0.5">{item.category}</p>
        <h3 className="font-bold text-[#0d1b2a] text-sm leading-snug line-clamp-2 mb-2">
          {item.title}
        </h3>
        <p className="text-[11px] text-gray-500 mb-2">{item.meta}</p>
        <p className="text-lg font-extrabold text-[#e85d04] mb-2">
          {formatPrice(item.price)}
        </p>
        <div className="flex items-center justify-between text-[10px] text-gray-400">
          <span className="flex items-center gap-1">
            <MapPin size={10} /> {item.location}
          </span>
          <span className="flex items-center gap-1">
            <Eye size={10} /> {item.views.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
}

// ── Main Page ──────────────────────────────────────────
export default function BlueprintSearchPage() {
  const [chips, setChips] = useState(INITIAL_CHIPS);
  const [sort, setSort] = useState("Recommended");
  const [showSort, setShowSort] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const removeChip = (id: string) => setChips((prev) => prev.filter((c) => c.id !== id));
  const clearAll = () => setChips([]);

  // Close sort dropdown when clicking outside
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setShowSort(false);
      }
    }
    if (showSort) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [showSort]);

  return (
    <div
      className="min-h-screen bg-[#f7f8fa]"
      style={{ paddingTop: "var(--navbar-height, 60px)" }}
    >
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-6">
        {/* ── Breadcrumb ────────────────────────────── */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
          <Link
            href="/blueprint-grid"
            className="flex items-center gap-1 hover:text-[#e85d04] transition-colors"
          >
            <Home size={14} /> Home
          </Link>
          <ChevronRight size={13} className="text-gray-300" />
          <span className="text-[#e85d04] font-medium">Search Results</span>
        </nav>
        {/* ── 2-column layout ────────────────────────── */}
        <div className="flex gap-6 items-start">

          {/* ─── Left Sidebar ────────────────────────── */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden sticky top-[calc(var(--navbar-height,60px)+16px)] self-start">
            {/* Search input */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 focus-within:ring-2 focus-within:ring-[#e85d04]/30 focus-within:border-[#e85d04] transition-all">
                <Search size={14} className="text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search…"
                  className="flex-1 text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Filter heading */}
            <div className="px-4 pt-3 pb-1">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                <SlidersHorizontal size={12} /> Filter Options
              </p>
            </div>

            {/* Accordion sections */}
            <div className="px-4 pb-4">
              <FilterSection title="Brand / Model" defaultOpen>
                <div className="space-y-2">
                  <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#e85d04]/30 appearance-none cursor-pointer">
                    <option>All Brands</option>
                    {["Brand A","Brand B","Brand C","Brand D"].map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                  <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#e85d04]/30 appearance-none cursor-pointer">
                    <option>All Models</option>
                  </select>
                  <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#e85d04]/30 appearance-none cursor-pointer">
                    <option>All Sub-models</option>
                  </select>
                </div>
              </FilterSection>

              <FilterSection title="Price Range">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e85d04]/30 focus:border-[#e85d04]"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e85d04]/30 focus:border-[#e85d04]"
                  />
                </div>
              </FilterSection>

              <FilterSection title="Condition">
                {["New", "Like New", "Good", "Fair"].map((c) => (
                  <label key={c} className="flex items-center gap-2.5 py-1.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 accent-[#e85d04] cursor-pointer"
                    />
                    <span className="text-sm text-gray-600 group-hover:text-gray-900">{c}</span>
                  </label>
                ))}
              </FilterSection>

              <FilterSection title="Location">
                {["Zone A", "Zone B", "Zone C", "Zone D"].map((z) => (
                  <label key={z} className="flex items-center gap-2.5 py-1.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 accent-[#e85d04] cursor-pointer"
                    />
                    <span className="text-sm text-gray-600 group-hover:text-gray-900">{z}</span>
                  </label>
                ))}
              </FilterSection>

              <button className="w-full mt-2 text-sm text-gray-400 hover:text-[#e85d04] underline-offset-2 hover:underline transition-colors">
                Reset filters
              </button>
            </div>
          </aside>

          {/* ─── Main Content ─────────────────────────── */}
          <div className="flex-1 min-w-0">
            {/* Active chips + sort row */}
            <div className="flex items-start justify-between gap-3 mb-5 flex-wrap">
              {/* Left: chips */}
              <div className="flex items-center gap-2 flex-wrap">
                {chips.map((chip) => (
                  <span
                    key={chip.id}
                    className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded-full"
                  >
                    {chip.label}
                    <button
                      onClick={() => removeChip(chip.id)}                      aria-label={`Remove ${chip.label} filter`}                      className="text-gray-400 hover:text-[#e85d04] transition-colors"
                    >
                      <X size={11} />
                    </button>
                  </span>
                ))}
                {chips.length > 0 && (
                  <button
                    onClick={clearAll}
                    className="text-xs text-[#e85d04] font-semibold hover:underline underline-offset-2"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Right: sort dropdown */}
              <div ref={sortRef} className="relative">
                <button
                  onClick={() => setShowSort(!showSort)}
                  className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 text-sm px-4 py-2 rounded-xl hover:border-[#e85d04] transition-colors"
                >
                  <span>Sort: {sort}</span>
                  <ChevronDown size={14} className={cn("transition-transform", showSort && "rotate-180")} />
                </button>
                {showSort && (
                  <div className="absolute right-0 top-full mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-10">
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { setSort(opt); setShowSort(false); }}
                        className={cn(
                          "w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors",
                          sort === opt ? "text-[#e85d04] font-semibold" : "text-gray-600"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Results count */}
            <p className="text-xs text-gray-400 mb-4">
              Showing <strong className="text-gray-700">{ITEMS.length}</strong> results
            </p>

            {/* Card grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-24 lg:pb-0">
              {ITEMS.map((item) => (
                <ResultCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile filter FAB (hidden on lg+) ──────── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden">
        <button
          onClick={() => setShowMobileFilter(true)}
          className="flex items-center gap-2 bg-[#0d1b2a] text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-2xl"
        >
          <SlidersHorizontal size={16} />
          Filter &amp; Sort
          {chips.length > 0 && (
            <span className="w-5 h-5 rounded-full bg-[#e85d04] text-white text-[10px] font-bold flex items-center justify-center">
              {chips.length}
            </span>
          )}
        </button>
      </div>

      {/* ── Mobile filter drawer ───────────────────── */}
      {showMobileFilter && (
        <div
          className="fixed inset-0 z-[200] bg-black/40 lg:hidden"
          onClick={() => setShowMobileFilter(false)}
        >
          <div
            className="absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
              <span className="font-bold text-[#0d1b2a] flex items-center gap-2 text-base">
                <SlidersHorizontal size={16} className="text-[#e85d04]" /> Filter Options
              </span>
              <button
                onClick={() => setShowMobileFilter(false)}
                aria-label="Close filter panel"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Filter sections */}
            <div className="flex-1 overflow-y-auto px-4 py-3 text-sm">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Brand / Model</p>
              <div className="space-y-2 mb-4">
                <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#e85d04]/30 appearance-none cursor-pointer">
                  <option>All Brands</option>
                  {["Brand A","Brand B","Brand C","Brand D"].map((b) => <option key={b}>{b}</option>)}
                </select>
                <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#e85d04]/30 appearance-none cursor-pointer">
                  <option>All Models</option>
                </select>
              </div>

              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Price Range</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <input type="number" placeholder="Min" className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e85d04]/30 focus:border-[#e85d04]" />
                <input type="number" placeholder="Max" className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e85d04]/30 focus:border-[#e85d04]" />
              </div>

              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Condition</p>
              <div className="space-y-1 mb-4">
                {["New", "Like New", "Good", "Fair"].map((c) => (
                  <label key={c} className="flex items-center gap-2.5 py-1.5 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#e85d04]" />
                    <span className="text-gray-600">{c}</span>
                  </label>
                ))}
              </div>

              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Sort By</p>
              <div className="space-y-1">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSort(opt)}
                    className={cn(
                      "w-full text-left px-3 py-2.5 rounded-xl text-sm transition-colors",
                      sort === opt ? "bg-[#fff5f0] text-[#e85d04] font-semibold" : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Apply button */}
            <div className="p-4 border-t border-gray-100 bg-white">
              <button
                onClick={() => setShowMobileFilter(false)}
                className="w-full bg-[#e85d04] hover:bg-[#cf4f02] text-white font-bold py-3.5 rounded-xl text-sm transition-colors"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
