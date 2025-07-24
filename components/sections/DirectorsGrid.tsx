'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

interface DirectorCardProps {
  name: string
  channel: string
  views: string
  avatar?: string
  gradient: string
  video?: string
}

function DirectorCard({ name, channel, views, avatar, gradient, video }: DirectorCardProps) {
  if (video) {
    return (
      <div className="relative group">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" style={{ background: gradient }} />
        <div className="relative bg-[rgba(28,28,28,0.58)] backdrop-blur-[10px] rounded-2xl overflow-hidden border border-[#2e2e2e] hover:border-[#4e4e4e] transition-all duration-300 h-full">
          {/* Full Video Background - Vertical/Portrait */}
          <div className="relative w-full h-[500px] md:h-[500px]">
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src={video}
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          
          {/* Content overlaid on video */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-center">
            <h3 className="font-['Satoshi:Bold',_sans-serif] text-[#ebebeb] text-lg mb-1">
              {name}
            </h3>
            <p className="font-['Satoshi:Regular',_sans-serif] text-[#b3b3b3] text-sm mb-3">
              {channel}
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="font-['Satoshi:Bold',_sans-serif] text-[#d1d1d1] text-base">
                {views}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative group">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" style={{ background: gradient }} />
      <div className="relative bg-[rgba(28,28,28,0.58)] backdrop-blur-[10px] rounded-2xl p-4 md:p-6 border border-[#2e2e2e] hover:border-[#4e4e4e] transition-all duration-300 h-full min-h-[500px] md:min-h-[500px] flex flex-col justify-center">
        {/* Avatar */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br flex items-center justify-center text-3xl font-bold text-white" style={{ background: gradient }}>
            {avatar}
          </div>
        </div>
        
        {/* Content */}
        <div className="text-center">
          <h3 className="font-['Satoshi:Bold',_sans-serif] text-[#ebebeb] text-lg mb-1">
            {name}
          </h3>
          <p className="font-['Satoshi:Regular',_sans-serif] text-[#b3b3b3] text-sm mb-3">
            {channel}
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <p className="font-['Satoshi:Bold',_sans-serif] text-[#d1d1d1] text-base">
              {views}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const directors = [
  {
    name: "Sarah Chen",
    channel: "Tech Reviews AI",
    views: "2.3M views/month",
    avatar: "SC",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Marcus Rodriguez",
    channel: "Gaming Universe",
    views: "5.7M views/month",
    gradient: "from-blue-500 to-cyan-500",
    video: "/videos/ai-videogames.mp4"
  },
  {
    name: "Emma Watson",
    channel: "Beauty AI Studio",
    views: "3.1M views/month",
    gradient: "from-pink-500 to-rose-500",
    video: "/videos/ai-beauty.mp4"
  },
  {
    name: "Alex Kim",
    channel: "Fitness Revolution",
    views: "4.2M views/month",
    gradient: "from-green-500 to-emerald-500",
    video: "/videos/ai-fitness.mp4"
  },
  {
    name: "Jordan Taylor",
    channel: "Comedy Central AI",
    views: "8.9M views/month",
    gradient: "from-yellow-500 to-orange-500",
    video: "/videos/ai-comedy.mp4"
  },
  {
    name: "Priya Patel",
    channel: "Cooking Masters",
    views: "6.4M views/month",
    gradient: "from-red-500 to-orange-500",
    video: "/videos/ai-food.mp4"
  },
  {
    name: "David Liu",
    channel: "Travel Vlogger AI",
    views: "3.8M views/month",
    gradient: "from-indigo-500 to-purple-500",
    video: "/videos/ai-travel.mp4"
  },
  {
    name: "Sofia Martinez",
    channel: "Fashion Forward",
    views: "5.2M views/month",
    gradient: "from-teal-500 to-cyan-500",
    video: "/videos/ai-fashion.mp4"
  },
  {
    name: "Ryan Anderson",
    channel: "Music Production AI",
    views: "7.1M views/month",
    avatar: "RA",
    gradient: "from-violet-500 to-purple-500"
  }
]

export function DirectorsGrid() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-center px-4 md:px-8 lg:px-[174.5px] py-[50px] relative w-full bg-[#0A0A0A]">
      {/* Section Header */}
      <div className="box-border content-stretch flex flex-col items-center justify-center gap-5">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
          <div className="[flex-flow:wrap] box-border content-center flex gap-0 items-center justify-center overflow-clip p-0 relative rounded-lg shrink-0">
            <div className="box-border content-stretch flex flex-row items-center justify-center px-5 py-[5px] relative rounded-[10px] shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d1d1d1] text-[18px] text-left text-nowrap">
                    <p className="block leading-[28px] whitespace-pre">
                      Success Stories
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-[10px]">
                <div className="absolute border border-[#2e2e2e] border-solid inset-0 pointer-events-none rounded-[10px]" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 w-full max-w-[654.92px] px-4 md:px-0">
          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
            <div className="relative shrink-0 w-full">
              <h2 className="flex flex-col font-['Satoshi:Regular',_sans-serif] justify-center leading-[35px] md:leading-[50px] not-italic relative shrink-0 text-[#ebebeb] text-[32px] md:text-[50px] text-center tracking-[-1px] md:tracking-[-2px]">
                <span className="block">AI Directors Are Reaching New Audiences Across Every Genre</span>
              </h2>
            </div>
          </div>
        </div>
        
        <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 w-full max-w-[600px] px-4 md:px-0">
          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col items-center justify-start px-4 md:pl-[31.91px] md:pr-[31.92px] py-0 relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[21.6px] not-italic relative shrink-0 text-[#b3b3b3] text-[18px] text-center tracking-[-0.36px]">
                <p className="block">
                  From gaming to cooking, travel to comedy — these directors are reaching millions of people who share their passions. Learn how to build your own audience around what you love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Directors Grid */}
      <div className="box-border content-stretch flex flex-col gap-[80px] items-center justify-center pb-0 pt-[50px] px-4 md:px-8 relative w-full max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          {directors.map((director, index) => (
            <ScrollReveal key={director.name} delay={index * 0.1}>
              <DirectorCard {...director} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}