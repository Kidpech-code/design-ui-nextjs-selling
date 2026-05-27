import Link from 'next/link'
import { Home } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        'flex items-center gap-2 px-4 py-2.5 bg-white border-b border-gray-100 text-sm',
        className
      )}
    >
      <Link
        href="/"
        className="flex items-center text-primary-500 hover:text-primary-400 transition-colors"
        aria-label="หน้าหลัก"
      >
        <Home className="w-4 h-4" />
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={index} className="flex items-center gap-2">
            <span className="text-gray-400 text-xs">•</span>
            {isLast || !item.href ? (
              <span
                className={cn(
                  'font-medium',
                  isLast ? 'text-primary-500' : 'text-gray-600'
                )}
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-gray-600 hover:text-primary-500 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}
