import { cn } from '@/lib/utils'
import { Feature } from '@/lib/types'

interface FeatureCardProps {
  feature: Feature
  className?: string
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "relative p-[2px] bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl group hover:from-purple-600 hover:to-pink-600 transition-all duration-500",
      className
    )}>
      <div className="bg-gray-950 p-8 rounded-xl h-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        
        <span className="relative text-7xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {feature.number}
        </span>
        
        <h3 className="relative text-2xl font-bold mt-4 mb-2 text-gray-100">
          {feature.title}
        </h3>
        
        <p className="relative text-gray-400 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  )
}