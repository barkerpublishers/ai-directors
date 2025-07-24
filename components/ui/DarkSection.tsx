import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface DarkSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function DarkSection({ children, className, id }: DarkSectionProps) {
  return (
    <section id={id} className={cn("relative min-h-screen bg-black overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="relative z-10 container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}