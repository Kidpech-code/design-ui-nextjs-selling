'use client'

import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FilterChipProps {
  label: string
  onRemove?: () => void
  className?: string
}

export function FilterChip({ label, onRemove, className }: FilterChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5',
        'bg-gray-100 border border-gray-200 rounded-full',
        'text-xs text-gray-700',
        className
      )}
    >
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={`ลบตัวกรอง ${label}`}
          className="w-4 h-4 rounded-full bg-gray-400 text-white flex items-center justify-center hover:bg-gray-500 transition-colors flex-shrink-0"
        >
          <X className="w-2.5 h-2.5" />
        </button>
      )}
      {label}
    </span>
  )
}

interface FilterChip2Props {
  value: string
  onRemove: () => void
}

interface FilterChipBarProps {
  chips: FilterChip2Props[]
  onClearAll?: () => void
  className?: string
}

export function FilterChipBar({ chips, onClearAll, className }: FilterChipBarProps) {
  if (chips.length === 0) return null

  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-2 py-2',
        className
      )}
    >
      {chips.map((chip, index) => (
        <FilterChip
          key={index}
          label={chip.value}
          onRemove={chip.onRemove}
        />
      ))}
      {onClearAll && (
        <button
          type="button"
          onClick={onClearAll}
          className="text-xs text-primary-500 hover:text-primary-400 underline transition-colors ml-1"
        >
          ลบทั้งหมด
        </button>
      )}
    </div>
  )
}
