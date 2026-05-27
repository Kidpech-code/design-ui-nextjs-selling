// Blueprint Grid Filter Tabs — roddonjai homepage pattern:
// Horizontal scrollable pill tabs with item counts
// Active tab: orange filled pill; Inactive: gray border pill
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Grid3X3, List } from "lucide-react";

const TABS = [
  { label: "All",      count: 24 },
  { label: "New",      count: 8  },
  { label: "Featured", count: 5  },
  { label: "Trending", count: 11 },
  { label: "Deals",    count: 6  },
];

export default function FilterTabs({
  onViewChange,
}: {
  onViewChange?: (view: "grid" | "list") => void;
}) {
  const [activeTab, setActiveTab] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");

  const handleView = (v: "grid" | "list") => {
    setView(v);
    onViewChange?.(v);
  };

  return (
    <div className="flex items-center justify-between gap-3 flex-wrap">
      {/* ── Pill tabs ─────────────────────────────────── */}
      <div className="flex items-center gap-2 flex-wrap">
        {TABS.map(({ label, count }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={cn(
              "text-sm font-semibold px-4 py-2 rounded-full border transition-all",
              activeTab === label
                ? "bg-[#e85d04] border-[#e85d04] text-white shadow-sm"
                : "border-gray-200 text-gray-500 hover:border-[#e85d04] hover:text-[#e85d04] bg-white"
            )}
          >
            {label}{" "}
            <span
              className={cn(
                "ml-0.5",
                activeTab === label ? "text-white/80" : "text-gray-400"
              )}
            >
              ({count})
            </span>
          </button>
        ))}
      </div>

      {/* ── View toggle ────────────────────────────────── */}
      <div className="flex items-center gap-1 border border-gray-200 rounded-xl p-1 bg-white">
        <button
          onClick={() => handleView("grid")}
          className={cn(
            "p-2 rounded-lg transition-colors",
            view === "grid" ? "bg-[#e85d04] text-white" : "text-gray-400 hover:text-gray-600"
          )}
        >
          <Grid3X3 size={15} />
        </button>
        <button
          onClick={() => handleView("list")}
          className={cn(
            "p-2 rounded-lg transition-colors",
            view === "list" ? "bg-[#e85d04] text-white" : "text-gray-400 hover:text-gray-600"
          )}
        >
          <List size={15} />
        </button>
      </div>
    </div>
  );
}
