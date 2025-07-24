'use client'

import { DarkSection } from '@/components/ui/DarkSection'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { TrendingUp, TrendingDown, Users, Eye, DollarSign, Star } from 'lucide-react'

const metrics = [
  {
    icon: Eye,
    label: 'Pageviews',
    value: '50.8K',
    change: '+28.4%',
    trend: 'up',
  },
  {
    icon: Users,
    label: 'Monthly users',
    value: '23.6K',
    change: '+12.6%',
    trend: 'down',
  },
  {
    icon: Star,
    label: 'New sign ups',
    value: '756',
    change: '+18.7%',
    trend: 'up',
  },
  {
    icon: DollarSign,
    label: 'Subscriptions',
    value: '2.3K',
    change: '+14.3%',
    trend: 'up',
  },
]

export function Features() {
  return (
    <DarkSection className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      {/* Background dashboard image effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1118px] h-[600px]">
          <div className="absolute bottom-0 h-[580px] left-0 overflow-hidden right-0">
            <div className="absolute h-[1797.92px] left-0 rounded-[53px] top-0 w-[1118px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black/50 rounded-[53px]" />
            </div>
          </div>
          {/* Light bar effect */}
          <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-[250px] h-[5px]">
            <div className="w-full h-full bg-[#d3d3d3] rounded-[10px] shadow-[0px_0px_8px_0px_#d4d4d4,0px_0px_32px_8px_#d4d4d4,0px_0px_128px_32px_#d4d4d4]" />
          </div>
          {/* Bottom gradient fade */}
          <div className="absolute bg-gradient-to-t bottom-0 from-[#0a0a0a] h-[331px] left-0 right-0 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <ScrollReveal key={metric.label} delay={index * 0.1}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-[rgba(18,18,18,0.6)] backdrop-blur-md border border-[rgba(66,66,66,0.42)] rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-gray-400" />
                        <p className="text-gray-400 text-sm">{metric.label}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {metric.trend === 'up' ? (
                          <>
                            <span className="text-green-400 text-sm font-medium">{metric.change}</span>
                            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-green-400" />
                          </>
                        ) : (
                          <>
                            <span className="text-red-400 text-sm font-medium">{metric.change}</span>
                            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-red-400" />
                          </>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-3xl font-bold text-white">{metric.value}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Revenue Chart Section */}
        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Total Revenue Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[rgba(18,18,18,0.6)] backdrop-blur-md border border-[rgba(66,66,66,0.42)] rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                <p className="text-gray-400 text-sm mb-2">Total revenue</p>
                <div className="flex items-baseline gap-3 mb-6">
                  <p className="text-4xl font-bold text-white">$240.8K</p>
                  <span className="text-green-400 text-sm font-medium">+24.6%</span>
                </div>
                
                {/* Mini Chart */}
                <div className="h-32 flex items-end justify-between gap-1">
                  {[250, 200, 150, 100, 50, 100, 150, 125, 100, 75, 125, 150].map((height, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-purple-500/50 to-purple-400/50 rounded-t-sm transition-all duration-300 hover:from-purple-500 hover:to-purple-400" style={{ height: `${height}px` }} />
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full" />
                    <span className="text-sm text-gray-400">Revenue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className="text-sm text-gray-400">Expenses</span>
                  </div>
                </div>

                <p className="text-gray-500 text-xs mt-4">Jan 2024 - Dec 2024</p>
              </div>
            </div>

            {/* Total Profit Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[rgba(18,18,18,0.6)] backdrop-blur-md border border-[rgba(66,66,66,0.42)] rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                <p className="text-gray-400 text-sm mb-2">Total profit</p>
                <div className="flex items-baseline gap-3 mb-6">
                  <p className="text-4xl font-bold text-white">$144.6K</p>
                  <span className="text-green-400 text-sm font-medium">+28.5%</span>
                </div>
                
                {/* Bar Chart */}
                <div className="h-32 flex items-end justify-around gap-2">
                  {[
                    { height: 40, color: 'from-purple-500 to-purple-400' },
                    { height: 65, color: 'from-blue-500 to-blue-400' },
                    { height: 45, color: 'from-green-500 to-green-400' },
                    { height: 80, color: 'from-pink-500 to-pink-400' },
                    { height: 60, color: 'from-purple-500 to-purple-400' },
                    { height: 75, color: 'from-blue-500 to-blue-400' },
                    { height: 85, color: 'from-green-500 to-green-400' },
                    { height: 90, color: 'from-pink-500 to-pink-400' },
                    { height: 70, color: 'from-purple-500 to-purple-400' },
                    { height: 95, color: 'from-blue-500 to-blue-400' },
                    { height: 85, color: 'from-green-500 to-green-400' },
                    { height: 100, color: 'from-pink-500 to-pink-400' },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1">
                      <div 
                        className={`bg-gradient-to-t ${bar.color} rounded-t transition-all duration-300 hover:opacity-80`}
                        style={{ height: `${bar.height}%` }}
                      />
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
                  <span>12 AM</span>
                  <span>6 AM</span>
                  <span>4 PM</span>
                  <span>11 PM</span>
                </div>

                <button className="text-gray-400 text-sm mt-4 hover:text-white transition-colors">
                  View report →
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Stats */}
        <ScrollReveal delay={0.6}>
          <div className="mt-8 flex flex-col items-center">
            <p className="text-gray-500 text-sm mb-2">Last 12 months</p>
            <p className="text-gray-600 text-xs">Total sessions: 400</p>
          </div>
        </ScrollReveal>
      </div>
    </DarkSection>
  )
}