"use client";

import { useState } from "react";
import { SlidersHorizontal, ChevronDown, LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  { label: "ทั้งหมด", value: "all" },
  { label: "ราคาน้อย → มาก", value: "price_asc" },
  { label: "ราคามาก → น้อย", value: "price_desc" },
  { label: "ใหม่ที่สุด", value: "newest" },
  { label: "วิ่งน้อย", value: "low_mileage" },
];

interface FilterTabsProps {
  total?: number;
  viewMode?: "grid" | "list";
  onViewModeChange?: (mode: "grid" | "list") => void;
}

export default function FilterTabs({
  total = 0,
  viewMode = "grid",
  onViewModeChange,
}: FilterTabsProps) {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="flex items-center gap-3 py-3">
      {/* Result count */}
      <p className="text-sm text-gray-500 flex-shrink-0">
        <span className="font-semibold text-gray-800">{total.toLocaleString()}</span> คัน
      </p>

      {/* Sort tabs — scrollable on mobile */}
      <div className="flex-1 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 min-w-max">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={cn(
                "text-xs font-medium px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors border",
                activeTab === tab.value
                  ? "bg-primary-500 text-white border-primary-500"
                  : "bg-white text-gray-600 border-gray-200 hover:border-primary-300 hover:text-primary-500"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* View mode toggle */}
      <div className="hidden md:flex items-center gap-1 border border-gray-200 rounded-lg p-0.5">
        <button
          onClick={() => onViewModeChange?.("grid")}
          className={cn(
            "w-8 h-8 flex items-center justify-center rounded-md transition-colors",
            viewMode === "grid" ? "bg-primary-500 text-white" : "text-gray-400 hover:text-gray-600"
          )}
          aria-label="แสดงแบบตาราง"
        >
          <LayoutGrid size={16} />
        </button>
        <button
          onClick={() => onViewModeChange?.("list")}
          className={cn(
            "w-8 h-8 flex items-center justify-center rounded-md transition-colors",
            viewMode === "list" ? "bg-primary-500 text-white" : "text-gray-400 hover:text-gray-600"
          )}
          aria-label="แสดงแบบรายการ"
        >
          <List size={16} />
        </button>
      </div>
    </div>
  );
}
