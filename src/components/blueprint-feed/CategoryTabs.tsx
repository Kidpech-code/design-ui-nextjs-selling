"use client";

import { useState } from "react";

const CATEGORIES = ["All", "Category A", "Category B", "Category C", "Category D", "Category E", "Category F"];

interface CategoryTabsProps {
  onSelect?: (category: string) => void;
}

export default function CategoryTabs({ onSelect }: CategoryTabsProps) {
  const [active, setActive] = useState("All");

  const handleSelect = (c: string) => {
    setActive(c);
    onSelect?.(c);
  };

  return (
    <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide pb-px">
      {CATEGORIES.map((c) => (
        <button
          key={c}
          onClick={() => handleSelect(c)}
          className={`whitespace-nowrap px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            active === c
              ? "border-indigo-600 text-indigo-600"
              : "border-transparent text-gray-500 hover:text-gray-800"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
