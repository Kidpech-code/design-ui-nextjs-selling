// Blueprint Detail — roddonjai /service/car-detail pattern:
// Breadcrumb → 2-column layout:
//   Left col (~55%): image gallery (counter badge "1/5", prev/next arrows, photo type tabs)
//   Right col (~45%): title, subtitle | spec | view count, date listed,
//                     promo badge ("Best Value"), price (orange large), specs row, rating, CTA buttons
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Home, ChevronRight, ChevronLeft,
  Eye, Calendar, Tag, Star, Heart,
  Phone, MessageCircle, Share2, CheckCircle2,
  MapPin, Gauge, Layers,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

// ── Gallery images ─────────────────────────────────────
const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=80",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900&q=80",
  "https://images.unsplash.com/photo-1542362567-b07e54358753?w=900&q=80",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=80",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900&q=80",
];

// ── Photo tabs ─────────────────────────────────────────
const PHOTO_TABS = ["Exterior", "Interior", "Engine", "Documents"];

// ── Spec badges row ────────────────────────────────────
const SPECS = [
  { icon: Layers, label: "Type X2",    note: "Variant"   },
  { icon: Gauge,  label: "26,144 km",  note: "Mileage"   },
  { icon: MapPin, label: "Zone B",     note: "Location"  },
];

export default function BlueprintDetailPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("Exterior");
  const [liked, setLiked] = useState(false);

  const prev = () => setActiveImage((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  const next = () => setActiveImage((i) => (i + 1) % GALLERY_IMAGES.length);

  return (
    <div
      className="min-h-screen bg-[#f7f8fa]"
      style={{ paddingTop: "var(--navbar-height, 60px)" }}
    >
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-6">
        {/* ── Breadcrumb ────────────────────────────── */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
          <Link href="/blueprint-grid" className="flex items-center gap-1 hover:text-[#e85d04] transition-colors">
            <Home size={14} /> Home
          </Link>
          <ChevronRight size={13} className="text-gray-300" />
          <Link href="/blueprint-search" className="hover:text-[#e85d04] transition-colors">
            Search Results
          </Link>
          <ChevronRight size={13} className="text-gray-300" />
          <span className="text-[#e85d04] font-medium">Item Detail</span>
        </nav>

        {/* ── 2-column layout ────────────────────────── */}
        <div className="flex gap-6 items-start flex-col lg:flex-row">

          {/* ─── Left: Image Gallery ─────────────────── */}
          <div className="w-full lg:w-[55%] flex-shrink-0 space-y-3">
            {/* Main image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={GALLERY_IMAGES[activeImage]}
                alt={`Photo ${activeImage + 1}`}
                fill
                className="object-cover transition-opacity duration-300"
                priority
              />

              {/* Counter badge */}
              <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                {activeImage + 1} / {GALLERY_IMAGES.length}
              </div>

              {/* Heart button */}
              <button
                onClick={() => setLiked(!liked)}
                className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 shadow-md transition-colors hover:bg-white"
              >
                <Heart
                  size={16}
                  className={liked ? "fill-[#e85d04] text-[#e85d04]" : "text-gray-400"}
                />
              </button>

              {/* Prev button */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white transition-colors"
              >
                <ChevronLeft size={18} className="text-gray-700" />
              </button>

              {/* Next button */}
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white transition-colors"
              >
                <ChevronRight size={18} className="text-gray-700" />
              </button>
            </div>

            {/* Thumbnail row */}
            <div className="flex gap-2 overflow-x-auto">
              {GALLERY_IMAGES.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "relative w-16 h-12 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all",
                    activeImage === i
                      ? "border-[#e85d04] shadow-sm"
                      : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <Image src={src} alt={`Thumb ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Photo type tabs */}
            <div className="flex items-center gap-2 overflow-x-auto">
              {PHOTO_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "flex-shrink-0 text-xs font-semibold px-4 py-2 rounded-full border transition-all",
                    activeTab === tab
                      ? "bg-[#0d1b2a] border-[#0d1b2a] text-white"
                      : "border-gray-200 text-gray-500 hover:border-gray-400"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* ─── Right: Info Panel ───────────────────── */}
          <div className="flex-1 min-w-0 space-y-5">
            {/* Title block */}
            <div>
              {/* Sub-title / meta row */}
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-2 flex-wrap">
                <span className="font-semibold text-gray-600">Alpha Series</span>
                <span>•</span>
                <span>Sub-cat X2</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Eye size={11} /> 7,891 views
                </span>
              </div>

              {/* Main title */}
              <h1 className="text-xl md:text-2xl font-extrabold text-[#0d1b2a] leading-tight mb-2">
                Item Alpha X2 — Premium Standard Edition 2023
              </h1>

              {/* Listed date */}
              <p className="text-xs text-gray-400 flex items-center gap-1">
                <Calendar size={11} /> Listed on 10 April 2025
              </p>
            </div>

            {/* Promo badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#fff5f0] border border-[#e85d04]/30 text-[#e85d04] text-xs font-bold px-3 py-1.5 rounded-full">
              <Tag size={11} />
              Best Value Deal
            </div>

            {/* Price */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-[#e85d04]">
                  699,000
                </span>
                <span className="text-sm text-gray-400">units</span>
              </div>

              {/* Specs grid */}
              <div className="grid grid-cols-3 gap-3 pt-2 border-t border-gray-50">
                {SPECS.map(({ icon: Icon, label, note }) => (
                  <div key={note} className="flex flex-col items-center gap-1 text-center">
                    <Icon size={18} className="text-gray-400" />
                    <p className="text-xs font-bold text-[#0d1b2a]">{label}</p>
                    <p className="text-[10px] text-gray-400">{note}</p>
                  </div>
                ))}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 pt-1 border-t border-gray-50">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < 4 ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200"}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">4.0 · 38 reviews</span>
              </div>
            </div>

            {/* Seller info */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-lg font-bold text-gray-500">
                S
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-[#0d1b2a]">Seller Omega</p>
                <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                  <CheckCircle2 size={11} className="text-green-500" /> Verified seller · 42 listings
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 bg-[#e85d04] hover:bg-[#cf4f02] text-white font-bold py-3.5 rounded-xl text-sm transition-colors">
                <Phone size={15} />
                Contact Seller
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 border border-[#e85d04] text-[#e85d04] hover:bg-[#fff5f0] font-bold py-3.5 rounded-xl text-sm transition-colors">
                <MessageCircle size={15} />
                Send Message
              </button>
            </div>

            {/* Share */}
            <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#e85d04] transition-colors">
              <Share2 size={13} /> Share this listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
