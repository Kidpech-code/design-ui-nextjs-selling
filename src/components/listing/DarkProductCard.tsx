'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Eye, Phone, MessageCircle, ArrowRight, Gauge, Star } from 'lucide-react'
import { cn, formatPrice, formatMileage } from '@/lib/utils'
import { Car } from './ProductCard'

interface DarkProductCardProps {
  car: Car
  className?: string
}

export default function DarkProductCard({ car, className }: DarkProductCardProps) {
  return (
    <div
      className={cn(
        'group rounded-2xl overflow-hidden',
        'bg-navy-800',
        'shadow-md hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200',
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-navy-900">
        <Image
          src={car.imageUrl}
          alt={car.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Seller badge */}
        {car.isFeatured && (
          <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full text-2xs font-medium bg-black/50 text-white backdrop-blur-sm">
            แนะนำ
          </span>
        )}

        {/* Warranty badge */}
        {car.hasWarranty && (
          <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-2xs font-medium bg-indigo-500 text-white">
            มีประกัน
          </span>
        )}
      </div>

      {/* Body */}
      <div className="px-3.5 pt-3 pb-0">
        {/* Title */}
        <h3 className="text-base font-bold text-white leading-tight truncate">
          {car.title}
        </h3>
        <p className="text-xs text-white/60 mt-0.5 truncate">
          {car.model} • {car.fuel}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-3 mt-2 text-xs text-white/50">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {car.province}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            คนสนใจ
          </span>
        </div>

        {/* Orange interest tag */}
        <span className="inline-flex items-center gap-1 mt-2.5 px-2.5 py-1 rounded-full text-2xs font-medium bg-primary-500/20 border border-primary-500 text-primary-300">
          ⭐ ราคาดีเยี่ยม
        </span>

        {/* Divider */}
        <div className="h-px bg-white/10 my-2.5" />

        {/* Price */}
        <div className="flex items-baseline justify-between">
          <span className="text-2xs text-white/50">ราคาขาย</span>
          <span className="text-lg font-bold text-primary-300">
            {formatPrice(car.price)}
          </span>
        </div>

        {/* Monthly payment */}
        {car.monthlyPayment && (
          <div className="flex items-center gap-2 mt-1 text-xs text-white/60">
            <span>ผ่อนเริ่มต้น</span>
            <span className="text-white/80 font-medium">
              ฿{car.monthlyPayment.toLocaleString('th-TH')}/เดือน
            </span>
          </div>
        )}

        {/* Divider */}
        <div className="h-px bg-white/10 my-2.5" />

        {/* Specs row */}
        <div className="flex items-center justify-between text-xs text-white/60">
          <span className="flex items-center gap-1">
            <Gauge className="w-3 h-3" />
            {formatMileage(car.mileage)}
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-primary-400 text-primary-400" />
            <Star className="w-3 h-3 fill-primary-400 text-primary-400" />
            <Star className="w-3 h-3 fill-primary-400 text-primary-400" />
            <Star className="w-3 h-3 fill-primary-400 text-primary-400" />
            <Star className="w-3 h-3 text-white/30" />
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-3 gap-2 px-3.5 py-3 mt-2 border-t border-white/10">
        <button
          type="button"
          aria-label="โทรหาผู้ขาย"
          onClick={(e) => e.preventDefault()}
          className="flex items-center justify-center gap-1 py-2 rounded-lg border border-white/25 text-white text-xs hover:bg-white/10 transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          โทร
        </button>
        <button
          type="button"
          aria-label="แชทกับผู้ขาย"
          onClick={(e) => e.preventDefault()}
          className="flex items-center justify-center gap-1 py-2 rounded-lg border border-white/25 text-white text-xs hover:bg-white/10 transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          แชท
        </button>
        <Link
          href={`/service/car-detail?id=${car.id}`}
          className="flex items-center justify-center gap-1 py-2 rounded-lg bg-primary-500 text-white text-sm font-semibold hover:bg-primary-400 transition-colors"
        >
          ดูรถ
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  )
}
