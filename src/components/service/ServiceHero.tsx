import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ServiceHeroProps {
  title: string
  subtitle?: string
  description?: string
  imageUrl?: string
  badge?: React.ReactNode
  cta?: React.ReactNode
  variant?: 'orange' | 'navy' | 'indigo'
  className?: string
}

export function ServiceHero({
  title,
  subtitle,
  description,
  imageUrl,
  badge,
  cta,
  variant = 'orange',
  className,
}: ServiceHeroProps) {
  const gradients: Record<string, string> = {
    orange: 'from-primary-500 to-primary-400',
    navy: 'from-navy-800 to-navy-700',
    indigo: 'from-indigo-600 to-indigo-500',
  }

  const overlayGradients: Record<string, string> = {
    orange: 'from-primary-500/95 via-primary-500/80 to-transparent',
    navy: 'from-navy-800/95 via-navy-800/80 to-transparent',
    indigo: 'from-indigo-600/95 via-indigo-600/80 to-transparent',
  }

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden rounded-2xl',
        !imageUrl && `bg-gradient-to-br ${gradients[variant]}`,
        className
      )}
      style={{ minHeight: '280px' }}
    >
      {/* Background image */}
      {imageUrl && (
        <>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-r',
              overlayGradients[variant]
            )}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full min-h-[280px] p-8 md:p-12 max-w-xl">
        {badge && <div className="mb-4">{badge}</div>}

        {subtitle && (
          <p className="text-white/80 text-sm font-medium mb-2 uppercase tracking-wider">
            {subtitle}
          </p>
        )}

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
          {title}
        </h1>

        {description && (
          <p className="text-white/80 text-base leading-relaxed mb-6">
            {description}
          </p>
        )}

        {cta && <div>{cta}</div>}
      </div>
    </section>
  )
}
