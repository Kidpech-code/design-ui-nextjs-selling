import { cn } from '@/lib/utils'

interface FeatureItem {
  icon: React.ReactNode
  title: string
  description?: string
}

interface FeatureIconGridProps {
  items: FeatureItem[]
  columns?: 2 | 3 | 4
  variant?: 'lavender' | 'white' | 'navy'
  className?: string
}

export function FeatureIconGrid({
  items,
  columns = 3,
  variant = 'lavender',
  className,
}: FeatureIconGridProps) {
  const containerStyles: Record<string, string> = {
    lavender: 'bg-purple-100',
    white: 'bg-white',
    navy: 'bg-navy-800',
  }

  const titleStyles: Record<string, string> = {
    lavender: 'text-navy-800',
    white: 'text-navy-800',
    navy: 'text-white',
  }

  const descStyles: Record<string, string> = {
    lavender: 'text-gray-600',
    white: 'text-gray-600',
    navy: 'text-white/70',
  }

  const gridCols: Record<number, string> = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4',
  }

  return (
    <section
      className={cn(
        'rounded-2xl p-8',
        containerStyles[variant],
        className
      )}
    >
      <div className={cn('grid gap-6', gridCols[columns])}>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-3"
          >
            {/* Icon circle */}
            <div className="w-14 h-14 rounded-full bg-primary-500 flex items-center justify-center text-white flex-shrink-0 shadow-md">
              {item.icon}
            </div>

            <div>
              <h3
                className={cn(
                  'text-base font-bold mb-1',
                  titleStyles[variant]
                )}
              >
                {item.title}
              </h3>
              {item.description && (
                <p
                  className={cn(
                    'text-sm leading-relaxed',
                    descStyles[variant]
                  )}
                >
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
