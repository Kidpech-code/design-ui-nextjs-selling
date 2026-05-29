"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Heart, Tag, Info } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";

export interface Item {
  id: string;
  title: string;
  category: string;
  tag: string;
  price: number;
  meta1: string;
  meta2: string;
  location: string;
  imageUrl: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isVerified?: boolean;
  monthlyRate?: number;
}

interface ItemCardProps {
  item: Item;
  className?: string;
}

export default function ItemCard({ item, className }: ItemCardProps) {
  return (
    <Link
      href={`/blueprint-detail`}
      className={cn(
        "group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm",
        "hover:-translate-y-0.5 hover:shadow-md transition-all duration-200",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Badges top-left */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {item.isFeatured && (
            <span className="bg-[#008fa6] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
              Featured
            </span>
          )}
          {item.isNew && (
            <span className="bg-[#0a1820] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
              New
            </span>
          )}
          {item.isVerified && (
            <span className="bg-[#2b55cc] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
              Verified
            </span>
          )}
        </div>

        {/* Save button */}
        <button
          className="absolute top-2 right-2 w-11 h-11 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors shadow-sm"
          aria-label="Save item"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <Heart size={16} className="text-gray-500 hover:text-[#008fa6] transition-colors" />
        </button>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 leading-snug">
          {item.title}
        </h3>

        <p className="text-lg font-bold text-[#008fa6] mt-2">
          ฿{formatPrice(item.price)}
        </p>
        {item.monthlyRate && (
          <p className="text-xs text-gray-500">≈ ฿{formatPrice(item.monthlyRate)}/mo</p>
        )}

        {/* Meta row */}
        <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Tag size={11} />
            {item.meta1}
          </span>
          <span className="flex items-center gap-1">
            <Info size={11} />
            {item.meta2}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
          <MapPin size={11} />
          {item.location}
        </div>
      </div>
    </Link>
  );
}
