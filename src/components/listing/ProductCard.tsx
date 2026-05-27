"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Heart, Gauge, Fuel, Calendar } from "lucide-react";
import { cn, formatPrice, formatMileage } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

export interface Car {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  province: string;
  imageUrl: string;
  isFeatured?: boolean;
  isNew?: boolean;
  hasWarranty?: boolean;
  monthlyPayment?: number;
}

interface ProductCardProps {
  car: Car;
  className?: string;
}

export default function ProductCard({ car, className }: ProductCardProps) {
  return (
    <Link
      href={`/service/car-detail?id=${car.id}`}
      className={cn(
        "group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm",
        "hover:-translate-y-0.5 hover:shadow-md transition-all duration-200",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={car.imageUrl}
          alt={car.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Badges top-left */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {car.isFeatured && (
            <Badge variant="primary" size="sm">
              แนะนำ
            </Badge>
          )}
          {car.isNew && (
            <Badge variant="navy" size="sm">
              ป้ายแดง
            </Badge>
          )}
          {car.hasWarranty && (
            <Badge variant="indigo" size="sm">
              มีประกัน
            </Badge>
          )}
        </div>

        {/* Wishlist button */}
        <button
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors shadow-sm"
          aria-label="บันทึกรถ"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <Heart size={16} className="text-gray-500 hover:text-primary-500 transition-colors" />
        </button>
      </div>

      {/* Content */}
      <div className="p-3.5">
        {/* Title */}
        <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-1 mb-1">
          {car.title}
        </h3>

        {/* Specs row */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2.5">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {car.year}
          </span>
          <span className="flex items-center gap-1">
            <Gauge size={12} />
            {formatMileage(car.mileage)}
          </span>
          <span className="flex items-center gap-1">
            <Fuel size={12} />
            {car.fuel}
          </span>
        </div>

        {/* Price */}
        <p className="text-primary-500 font-bold text-base">
          ฿{formatPrice(car.price)}
        </p>
        {car.monthlyPayment && (
          <p className="text-xs text-gray-400 mt-0.5">
            ผ่อนเริ่มต้น ฿{formatPrice(car.monthlyPayment)}/เดือน
          </p>
        )}

        {/* Location */}
        <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
          <MapPin size={11} />
          {car.province}
        </p>
      </div>
    </Link>
  );
}
