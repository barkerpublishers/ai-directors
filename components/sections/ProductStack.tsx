'use client'

import React from 'react'
import Image from 'next/image'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { FadeIn } from '@/components/animations/FadeIn'

interface ProductItemProps {
  image: string
  title: string
  description: string
  delay?: number
}

function ProductItem({ image, title, description, delay = 0 }: ProductItemProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center p-6 md:p-8 bg-black/20 backdrop-blur-sm rounded-2xl border border-[#2e2e2e] hover:border-[#4e4e4e] transition-all duration-300">
        <div className="relative w-full md:w-[120px] h-[120px] flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 120px"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-['Satoshi:Bold',_sans-serif] text-[#ebebeb] text-xl mb-3">
            {title}
          </h3>
          <p className="font-['Inter:Regular',_sans-serif] text-[#b3b3b3] text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  )
}

const products = [
  {
    image: "/images/ai-1.gif",
    title: "AI Directors Academy Access",
    description: "Lifetime access to our comprehensive curriculum with 50+ hours of step-by-step video tutorials, live workshops, and continuous updates as AI technology evolves."
  },
  {
    image: "/images/ai-3.gif",
    title: "AI Directors Community",
    description: "Join an exclusive network of 10,000+ AI Directors sharing strategies, collaborating on projects, and building the future of content creation together."
  },
  {
    image: "/images/dashboard-preview.jpg",
    title: "AI Directors Toolkit",
    description: "Professional-grade AI tools, plugins, and workflows that streamline your video creation process and deliver Hollywood-quality results in minutes."
  },
  {
    image: "/images/spotlight-bg.png",
    title: "AI Directors Video Template Library",
    description: "1,000+ done-for-you templates across every niche - from viral hooks to complete video frameworks that guarantee engagement and views."
  },
  {
    image: "/images/logo.png",
    title: "AI Directors Video Prompt Library",
    description: "Battle-tested prompts that generate viral-worthy content ideas, scripts, and visuals - updated weekly with trending formats and styles."
  }
]

export function ProductStack() {
  return (
    <div className="relative w-full bg-[#0A0A0A] py-[50px] overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Title */}
        <FadeIn direction="up">
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-full" />
              <h2 className="relative font-['Satoshi:Bold',_sans-serif] text-[#ebebeb] text-[32px] md:text-[48px] text-center tracking-[-1px] md:tracking-[-2px] px-8 md:px-12 py-4 md:py-6">
                JOIN THE AI DIRECTORS ACADEMY
              </h2>
            </div>
          </div>
        </FadeIn>
        
        {/* Glassmorphic container */}
        <div className="bg-[rgba(28,28,28,0.28)] backdrop-blur-[10px] rounded-3xl border border-[#2e2e2e] overflow-hidden">
          {/* Hero Image */}
          <FadeIn direction="up">
            <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
              <Image
                src="/images/dashboard-preview.jpg"
                alt="AI Directors Academy Dashboard"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-center">
                <h2 className="font-['Satoshi:Bold',_sans-serif] text-[#ebebeb] text-[32px] md:text-[42px] leading-tight mb-4">
                  Everything You Need To Become An AI Director
                </h2>
                <p className="font-['Inter:Regular',_sans-serif] text-[#d1d1d1] text-lg md:text-xl max-w-[600px] mx-auto">
                  The complete system for creating viral AI content that captivates audiences and generates income
                </p>
              </div>
            </div>
          </FadeIn>
          
          {/* Product Stack */}
          <div className="p-8 md:p-12 space-y-6">
            {products.map((product, index) => (
              <ProductItem
                key={product.title}
                {...product}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          {/* Money-Back Guarantee */}
          <FadeIn direction="up" delay={0.6}>
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border-t border-[#2e2e2e] p-8 md:p-12">
              <div className="text-center max-w-[800px] mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-['Satoshi:Bold',_sans-serif] text-[#ebebeb] text-2xl md:text-3xl mb-4">
                  30-Day Money-Back Guarantee
                </h3>
                <p className="font-['Inter:Regular',_sans-serif] text-[#b3b3b3] text-base md:text-lg leading-relaxed mb-6">
                  We&apos;re so confident in the AI Directors Academy that we offer a full 30-day money-back guarantee. If you don&apos;t see real results from implementing our strategies, simply reach out to our support team for a complete refund. No questions asked.
                </p>
                <div className="flex flex-wrap gap-4 justify-center text-sm text-[#8a8a8a]">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Risk-Free Investment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Instant Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Lifetime Updates</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          
          {/* CTA Button */}
          <FadeIn direction="up" delay={0.8}>
            <div className="p-8 md:p-12 pt-0">
              <div className="text-center">
                <button className="relative group mx-auto">
                  {/* Animated gradient glow effect */}
                  <div className="absolute -inset-1 opacity-75 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 blur-[2.5px] rounded-full">
                      <div className="h-full w-full bg-gradient-to-r from-purple-500 via-pink-400 to-purple-500 rounded-full animate-pulse" />
                    </div>
                    {/* Rotating gradient for motion effect */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="absolute -inset-4 bg-gradient-conic from-purple-500 via-pink-400 to-purple-500 animate-spin-slow opacity-30" />
                    </div>
                  </div>
                  
                  {/* Button content */}
                  <div className="relative bg-[rgba(18,18,18,0.92)] rounded-full px-[40px] py-[18px] flex items-center justify-center min-w-[280px] h-[64px] overflow-hidden group-hover:bg-[rgba(18,18,18,0.95)] transition-all duration-300">
                    <span className="text-[#eeebdd] text-[19px] font-bold leading-[24px] whitespace-nowrap z-10">
                      Join The AI Directors Academy
                    </span>
                    
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </div>
                </button>
                <p className="mt-4 text-sm text-[#8a8a8a] font-['Inter:Regular',_sans-serif]">
                  Instant access • Lifetime updates • 30-day guarantee
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}