// Blueprint Grid Sidebar — roddonjai homepage pattern:
// 1. Search input
// 2. "Browse Categories" section heading (orange)
// 3. 3×2 grid of category icon buttons
// 4. Accordion filter sections below (Brand/Model, Price Range, Year, Condition)
"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Category icons (6 categories in 3×2 grid) ─────────
const CATEGORY_ICONS = [
  { label: "Alpha",   icon: "🔷" },
  { label: "Beta",    icon: "🔶" },
  { label: "Gamma",   icon: "🟢" },
  { label: "Delta",   icon: "🔵" },
  { label: "Epsilon", icon: "🟡" },
  { label: "Zeta",    icon: "🔴" },
];

// ── Brand / Model data ─────────────────────────────────
const BRANDS = ["Brand A", "Brand B", "Brand C", "Brand D", "Brand E", "Brand F"];

// ── Accordion section ──────────────────────────────────
function AccordionSection({
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
          size={15}
          className={cn("text-gray-400 transition-transform", open && "rotate-180")}
        />
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  );
}

export default function GridSidebar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  return (
    <aside className="hidden lg:block w-[300px] flex-shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden sticky top-[calc(var(--navbar-height,60px)+16px)] self-start">

      {/* ── Search Input ────────────────────────────────── */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 focus-within:ring-2 focus-within:ring-[#e85d04]/30 focus-within:border-[#e85d04] transition-all">
          <Search size={15} className="text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search items…"
            className="flex-1 text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* ── Category Icon Grid ──────────────────────────── */}
      <div className="px-4 pt-4 pb-3">
        <p className="text-xs font-bold text-[#e85d04] uppercase tracking-wider mb-3">
          Browse Categories
        </p>
        <div className="grid grid-cols-3 gap-2">
          {CATEGORY_ICONS.map(({ label, icon }) => (
            <button
              key={label}
              onClick={() =>
                setActiveCategory(activeCategory === label ? null : label)
              }
              className={cn(
                "flex flex-col items-center gap-1.5 py-3 rounded-xl border text-center transition-all",
                activeCategory === label
                  ? "border-[#e85d04] bg-[#fff5f0] text-[#e85d04]"
                  : "border-gray-100 bg-gray-50 text-gray-600 hover:border-[#e85d04]/40 hover:bg-[#fff5f0]/50"
              )}
            >
              <span className="text-xl leading-none">{icon}</span>
              <span className="text-[11px] font-medium leading-none">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Accordion Filters ───────────────────────────── */}
      <div className="px-4 pb-4">
        {/* Brand / Model */}
        <AccordionSection title="Brand / Model" defaultOpen>
          <div className="space-y-2">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#e85d04]/30 focus:border-[#e85d04] appearance-none cursor-pointer"
            >
              <option value="">All Brands</option>
              {BRANDS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
            <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#e85d04]/30 focus:border-[#e85d04] appearance-none cursor-pointer">
              <option value="">All Models</option>
            </select>
            <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#e85d04]/30 focus:border-[#e85d04] appearance-none cursor-pointer">
              <option value="">All Sub-models</option>
            </select>
          </div>
        </AccordionSection>

        {/* Price Range */}
        <AccordionSection title="Price Range">
          <div className="space-y-2.5">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Min</label>
                <input
                  type="number"
                  value={priceMin}
                  onChange={(e) => setPriceMin(e.target.value)}
                  placeholder="0"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e85d04]/30 focus:border-[#e85d04]"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Max</label>
                <input
                  type="number"
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                  placeholder="Any"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e85d04]/30 focus:border-[#e85d04]"
                />
              </div>
            </div>
            <button className="w-full bg-[#e85d04] hover:bg-[#cf4f02] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">
              Apply Price
            </button>
          </div>
        </AccordionSection>

        {/* Year */}
        <AccordionSection title="Year">
          <div className="grid grid-cols-2 gap-2">
            <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#e85d04]/30 appearance-none cursor-pointer">
              <option>From</option>
              {Array.from({ length: 10 }, (_, i) => 2015 + i).map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
            <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#e85d04]/30 appearance-none cursor-pointer">
              <option>To</option>
              {Array.from({ length: 10 }, (_, i) => 2015 + i)
                .reverse()
                .map((y) => (
                  <option key={y}>{y}</option>
                ))}
            </select>
          </div>
        </AccordionSection>

        {/* Condition */}
        <AccordionSection title="Condition">
          <div className="space-y-2">
            {["New", "Like New", "Good", "Fair"].map((c) => (
              <label key={c} className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 cursor-pointer accent-[#e85d04]"
                />
                <span className="text-sm text-gray-600 group-hover:text-gray-900">{c}</span>
              </label>
            ))}
          </div>
        </AccordionSection>

        {/* Reset button */}
        <button className="w-full mt-3 text-sm text-gray-400 hover:text-[#e85d04] underline-offset-2 hover:underline transition-colors">
          Reset all filters
        </button>
      </div>
    </aside>
  );
}
