"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Brand chips ────────────────────────────────────── */
const BRANDS = [
  "Toyota", "Honda", "Isuzu", "Mitsubishi", "Ford",
  "Mazda", "Nissan", "Chevrolet", "BMW", "Mercedes-Benz",
  "Volkswagen", "Subaru",
];

/* ─── Filter accordion section ──────────────────────── */
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
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-sm font-semibold text-gray-700 hover:text-primary-500 transition-colors"
      >
        {title}
        <ChevronDown
          size={16}
          className={cn("text-gray-400 transition-transform", open && "rotate-180")}
        />
      </button>
      {open && <div className="pb-3 space-y-1">{children}</div>}
    </div>
  );
}

/* ─── Checkbox row ───────────────────────────────────── */
function CheckboxOption({
  label,
  count,
}: {
  label: string;
  count?: number;
}) {
  return (
    <label className="flex items-center gap-2 py-1.5 cursor-pointer group">
      <input
        type="checkbox"
        className="w-4 h-4 rounded border-gray-300 accent-primary-500 cursor-pointer"
      />
      <span className="text-sm text-gray-600 group-hover:text-gray-900 flex-1">
        {label}
      </span>
      {count !== undefined && (
        <span className="text-xs text-gray-400">{count.toLocaleString()}</span>
      )}
    </label>
  );
}

/* ─── Price range slider placeholder ────────────────── */
function PriceRange() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5000000);
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <div className="flex-1">
          <label className="text-xs text-gray-400 mb-1 block">ต่ำสุด (บาท)</label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
        </div>
        <div className="flex-1">
          <label className="text-xs text-gray-400 mb-1 block">สูงสุด (บาท)</label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Main Sidebar ───────────────────────────────────── */
export default function Sidebar() {
  return (
    <aside
      className="hidden lg:block flex-shrink-0 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      style={{ width: "var(--sidebar-width)", alignSelf: "flex-start", position: "sticky", top: "calc(var(--navbar-height) + 1rem)" }}
    >
      {/* Search inside sidebar */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5">
          <Search size={15} className="text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="ค้นหายี่ห้อ รุ่น ..."
            className="text-sm bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Brand grid */}
      <div className="p-4 border-b border-gray-100">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
          ยี่ห้อรถยนต์
        </p>
        <div className="grid grid-cols-3 gap-1.5">
          {BRANDS.map((brand) => (
            <button
              key={brand}
              className="py-1.5 px-2 text-xs text-gray-600 bg-gray-50 hover:bg-primary-50 hover:text-primary-600 border border-gray-200 hover:border-primary-300 rounded-lg transition-colors text-center truncate"
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Filter sections */}
      <div className="p-4 space-y-0">
        <FilterSection title="ประเภทรถ" defaultOpen>
          <CheckboxOption label="รถเก๋ง" count={1240} />
          <CheckboxOption label="รถ SUV" count={890} />
          <CheckboxOption label="กระบะ" count={654} />
          <CheckboxOption label="รถตู้ / MPV" count={312} />
          <CheckboxOption label="รถสปอร์ต" count={87} />
        </FilterSection>

        <FilterSection title="ราคา">
          <PriceRange />
        </FilterSection>

        <FilterSection title="ปีรถ">
          <CheckboxOption label="2020 - ปัจจุบัน" count={1050} />
          <CheckboxOption label="2017 - 2019" count={987} />
          <CheckboxOption label="2014 - 2016" count={654} />
          <CheckboxOption label="2010 - 2013" count={321} />
          <CheckboxOption label="ก่อน 2010" count={145} />
        </FilterSection>

        <FilterSection title="ระยะทาง">
          <CheckboxOption label="น้อยกว่า 50,000 กม." count={432} />
          <CheckboxOption label="50,000 - 100,000 กม." count={678} />
          <CheckboxOption label="100,000 - 150,000 กม." count={431} />
          <CheckboxOption label="มากกว่า 150,000 กม." count={234} />
        </FilterSection>

        <FilterSection title="เชื้อเพลิง">
          <CheckboxOption label="เบนซิน" count={2104} />
          <CheckboxOption label="ดีเซล" count={1540} />
          <CheckboxOption label="ไฮบริด" count={420} />
          <CheckboxOption label="ไฟฟ้า (EV)" count={180} />
          <CheckboxOption label="ก๊าซ (NGV/LPG)" count={96} />
        </FilterSection>

        <FilterSection title="เกียร์">
          <CheckboxOption label="เกียร์อัตโนมัติ" count={3140} />
          <CheckboxOption label="เกียร์ธรรมดา" count={640} />
          <CheckboxOption label="CVT" count={210} />
        </FilterSection>
      </div>

      {/* CTA */}
      <div className="p-4 border-t border-gray-100">
        <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm py-3 rounded-full transition-colors">
          ค้นหารถ
        </button>
        <button className="w-full text-gray-500 hover:text-gray-700 text-sm py-2 mt-1 transition-colors">
          ล้างตัวกรอง
        </button>
      </div>
    </aside>
  );
}
