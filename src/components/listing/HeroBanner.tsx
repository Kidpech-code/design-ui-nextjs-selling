"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface BannerSlide {
  id: number;
  imageUrl: string;
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
}

const SLIDES: BannerSlide[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
    headline: "รถมือสองคุณภาพดี",
    subtext: "เลือกได้กว่า 10,000 คัน หลากหลายยี่ห้อ ราคาโปร่งใส",
    ctaLabel: "ค้นหารถเดี๋ยวนี้",
    ctaHref: "/search",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80",
    headline: "สินเชื่อรถง่าย อนุมัติไว",
    subtext: "ผ่อนได้สูงสุด 84 เดือน ดอกเบี้ยพิเศษสำหรับสมาชิก",
    ctaLabel: "คำนวณสินเชื่อ",
    ctaHref: "/service/loan",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80",
    headline: "ลงขายรถฟรี ทันที",
    subtext: "ไม่มีค่าใช้จ่าย เข้าถึงผู้ซื้อกว่า 100,000 คนต่อเดือน",
    ctaLabel: "เริ่มลงขาย",
    ctaHref: "/seller/sellercenter",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? SLIDES.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === SLIDES.length - 1 ? 0 : c + 1));

  const slide = SLIDES[current];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/7] md:aspect-[16/6] bg-gray-200">
      {/* Image */}
      <Image
        src={slide.imageUrl}
        alt={slide.headline}
        fill
        className="object-cover transition-opacity duration-500"
        priority={current === 0}
        sizes="(max-width: 768px) 100vw, 900px"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      {/* Text content */}
      <div className="absolute inset-0 flex items-center px-6 md:px-10">
        <div className="text-white max-w-md">
          <h2 className="text-xl md:text-3xl font-extrabold leading-tight mb-2">
            {slide.headline}
          </h2>
          <p className="text-sm md:text-base text-white/85 mb-4">{slide.subtext}</p>
          <Button variant="primary" size="md" pill>
            {slide.ctaLabel}
          </Button>
        </div>
      </div>

      {/* Arrow controls */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
        aria-label="สไลด์ก่อนหน้า"
      >
        <ChevronLeft size={20} className="text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
        aria-label="สไลด์ถัดไป"
      >
        <ChevronRight size={20} className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "transition-all rounded-full",
              i === current
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            )}
            aria-label={`สไลด์ ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
