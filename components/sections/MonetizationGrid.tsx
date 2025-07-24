'use client'

import React from 'react'
import Image from 'next/image'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

interface MonetizationCardProps {
  title: string
  description: string
  image: string
  gradient: string
}

function MonetizationCard({ title, description, image, gradient }: MonetizationCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" style={{ background: gradient }} />
      <div className="relative bg-[rgba(28,28,28,0.58)] backdrop-blur-[10px] rounded-2xl p-6 md:p-8 border border-[#2e2e2e] hover:border-[#4e4e4e] transition-all duration-300 h-full min-h-[400px] flex flex-col">
        {/* Image */}
        <div className="relative w-full h-[200px] mb-6 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-['Satoshi:Bold',_sans-serif] text-[#ebebeb] text-xl mb-3">
            {title}
          </h3>
          <p className="font-['Inter:Regular',_sans-serif] text-[#b3b3b3] text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

const monetizationStrategies = [
  {
    title: "Brand Partnerships",
    description: "Learn how AI Directors secure $10K+ monthly brand deals by creating viral content that converts viewers into customers.",
    image: "/images/ai-1.gif",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Course Creation",
    description: "Discover the blueprint for packaging your AI expertise into high-ticket courses that sell for $997-$4,997.",
    image: "/images/ai-3.gif",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Affiliate Mastery",
    description: "Master the art of promoting AI tools and earning 40% recurring commissions that compound monthly.",
    image: "/images/dashboard-preview.jpg",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Content Licensing",
    description: "Turn your AI videos into recurring revenue by licensing content to media companies and streaming platforms.",
    image: "/images/spotlight-bg.png",
    gradient: "from-orange-500 to-red-500"
  }
]

export function MonetizationGrid() {
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
                      Monetize Your Masterpieces
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
                <span className="block">Discover How AI Directors Are Earning Over Six-Figures From Their Channels</span>
              </h2>
            </div>
          </div>
        </div>
        
        <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 w-full max-w-[600px] px-4 md:px-0">
          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col items-center justify-start px-4 md:pl-[31.91px] md:pr-[31.92px] py-0 relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[21.6px] not-italic relative shrink-0 text-[#b3b3b3] text-[18px] text-center tracking-[-0.36px]">
                <p className="block">
                  Get real case studies, proven frameworks, and insider secrets from AI Directors who started where you are now... and built empires from their AI videos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Monetization Grid - 2x2 */}
      <div className="box-border content-stretch flex flex-col gap-[80px] items-center justify-center pb-0 pt-[50px] px-4 md:px-8 relative w-full max-w-[1000px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {monetizationStrategies.map((strategy, index) => (
            <ScrollReveal key={strategy.title} delay={index * 0.1}>
              <MonetizationCard {...strategy} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}