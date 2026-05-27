// Blueprint Grid Hero Banner — roddonjai homepage pattern:
// Single static wide promotional banner (no carousel, no dots)
// Full-width, rounded-3xl, dark gradient overlay, left-aligned text + orange CTA pill
import Image from "next/image";
import Link from "next/link";
import { Tag } from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="relative w-full aspect-[16/5] min-h-[180px] rounded-3xl overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1400&q=80"
        alt="Promotional banner"
        fill
        className="object-cover"
        priority
      />

      {/* Dark gradient overlay — left side stronger */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Text content (left-aligned) */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
        {/* Small tag */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-1 bg-[#e85d04] text-white text-xs font-semibold px-3 py-1 rounded-full">
            <Tag size={10} />
            <span>Featured Deal</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-white font-extrabold text-2xl md:text-4xl leading-tight mb-2 max-w-md drop-shadow-md">
          Find Your Perfect&nbsp;
          <span className="text-[#ffa04d]">Item</span>
        </h2>

        {/* Sub-headline */}
        <p className="text-white/80 text-sm md:text-base mb-5 max-w-xs leading-relaxed">
          Browse thousands of verified listings. Best prices, trusted sellers.
        </p>

        {/* CTA button */}
        <Link
          href="/blueprint-search"
          className="inline-flex self-start items-center gap-2 bg-[#e85d04] hover:bg-[#cf4f02] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-lg shadow-[#e85d04]/30"
        >
          Browse Now
        </Link>
      </div>
    </div>
  );
}
