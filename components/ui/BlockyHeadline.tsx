import { cn } from '@/lib/utils'

interface BlockyHeadlineProps {
  line1?: string
  line2?: string
  className?: string
}

export function BlockyHeadline({ 
  line1 = 'AI DIRECTORS', 
  line2 = 'ACADEMY',
  className 
}: BlockyHeadlineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Glow effect layer */}
      <h1 className="font-bebas uppercase leading-[0.85] -tracking-[0.05em] select-none absolute inset-0" aria-hidden="true">
        <span className="block text-hero font-black text-white/30 blur-2xl">
          {line1}
        </span>
        <span className="block text-hero-sub font-black -mt-4 md:-mt-8 text-white/30 blur-2xl">
          {line2}
        </span>
      </h1>
      
      {/* Main text */}
      <h1 className="font-bebas uppercase leading-[0.85] -tracking-[0.05em] relative">
        <span className="block text-hero font-black text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
          {line1}
        </span>
        <span className="block text-hero-sub font-black -mt-4 md:-mt-8 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
          {line2}
        </span>
      </h1>
    </div>
  )
}