'use client'

import { FadeIn } from '@/components/animations/FadeIn'

export function Hero() {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section')
    ctaSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] overflow-hidden pt-[76px]">
      {/* Spotlight from Figma - responsive positioning */}
      <div className="absolute -top-[40%] right-0 w-[200%] h-[100%] md:-top-[30%] md:-right-[20%] md:w-[120%] md:h-[150%] pointer-events-none transform -rotate-[40deg] translate-x-[30%] md:translate-x-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url('/images/spotlight-bg.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'top right',
            backgroundRepeat: 'no-repeat',
            opacity: 0.7
          }}
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Success badge */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-col items-center gap-2.5 mb-16">
            <p className="text-[#d1d1d1] text-[14px] font-normal leading-[20px] border border-[#d1d1d1]/30 rounded-full px-4 py-2">
              Directing the Future: 1B+ Views and Counting
            </p>
          </div>
        </FadeIn>

        {/* Main headline */}
        <FadeIn direction="up" delay={0.2}>
          <div className="relative mb-8 w-full max-w-[90vw]">
            <h1 className="text-center font-bold leading-[0.9] relative">
              <span className="block text-[60px] md:text-[100px] lg:text-[140px] xl:text-[180px] tracking-[-0.05em] mb-2 md:mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]">
                JOIN THE
              </span>
              <span className="block text-[60px] md:text-[100px] lg:text-[140px] xl:text-[180px] tracking-[-0.05em] mb-2 md:mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]">
                AI DIRECTORS
              </span>
              <span className="block text-[60px] md:text-[100px] lg:text-[140px] xl:text-[180px] tracking-[-0.05em] bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]">
                ACADEMY
              </span>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 blur-2xl opacity-10 pointer-events-none">
                <span className="block text-[60px] md:text-[100px] lg:text-[140px] xl:text-[180px] tracking-[-0.05em] mb-2 md:mb-4 text-white">
                  JOIN THE
                </span>
                <span className="block text-[60px] md:text-[100px] lg:text-[140px] xl:text-[180px] tracking-[-0.05em] mb-2 md:mb-4 text-white">
                  AI DIRECTORS
                </span>
                <span className="block text-[60px] md:text-[100px] lg:text-[140px] xl:text-[180px] tracking-[-0.05em] text-white">
                  ACADEMY
                </span>
              </div>
            </h1>
          </div>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn direction="up" delay={0.3}>
          <p className="text-[#d1d1d1] text-[18px] font-normal leading-[26px] text-center max-w-[529px] mb-12">
            This is the first moment in history where you don&apos;t need a crew, a budget, or permission to move millions...<br />
            <br />
            <span className="font-bold">Just one idea. One AI-powered video.</span>
          </p>
        </FadeIn>

        {/* CTA Button */}
        <FadeIn direction="up" delay={0.4}>
          <button
            onClick={scrollToCTA}
            className="relative group"
          >
            {/* Animated gradient glow effect */}
            <div className="absolute -inset-1 opacity-75 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 blur-[2.5px] rounded-full">
                <div className="h-full w-full bg-gradient-to-r from-blue-500 via-blue-400 to-white rounded-full animate-pulse" />
              </div>
              {/* Rotating gradient for motion effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute -inset-4 bg-gradient-conic from-blue-500 via-white to-blue-500 animate-spin-slow opacity-30" />
              </div>
            </div>
            
            {/* Button content */}
            <div className="relative bg-[rgba(18,18,18,0.92)] rounded-full px-[30px] py-[15px] flex items-center justify-center min-w-[158px] h-[54px] overflow-hidden group-hover:bg-[rgba(18,18,18,0.95)] transition-all duration-300">
              <span className="text-[#eeebdd] text-[17px] font-bold leading-[24px] whitespace-nowrap z-10">
                Get Started
              </span>
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          </button>
        </FadeIn>

        {/* Dashboard Preview */}
        <FadeIn direction="up" delay={0.5}>
          <div className="relative mt-16 w-full max-w-[1118px] mx-auto">
            <div className="relative h-[580px] overflow-hidden rounded-[53px] bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-black/50">
              {/* Dashboard image */}
              <img 
                src="/images/dashboard-preview.jpg" 
                alt="AI Directors Dashboard Preview" 
                className="w-full h-full object-cover rounded-[53px]"
              />
              
              {/* Overlay gradient for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Glowing light bar element from Figma - positioned top right */}
              <div 
                className="absolute top-[10%] right-[10%] w-[282px] h-[282px] z-20"
                style={{
                  backgroundImage: `url('/images/blur-overlay-1.svg')`,
                  backgroundSize: '100.04% 100%',
                  backgroundPosition: 'top',
                  backgroundRepeat: 'no-repeat',
                  opacity: 0.44
                }}
              />
            </div>
          </div>
        </FadeIn>

        {/* Social Icons Section from Figma */}
        <FadeIn direction="up" delay={0.6}>
          <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center pb-0 pt-[50px] px-0 relative w-full">
            <div className="h-6 overflow-clip relative shrink-0 w-[187px]">
              <div className="absolute bottom-0 box-border content-stretch flex flex-col items-start justify-start left-[3.209%] p-0 right-[3.209%] top-0">
                <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#eeebdd] text-[16px] text-center w-full">
                    <p className="block leading-[24px]">You&apos;re in expert hands.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-wrap flex-row gap-6 md:gap-10 items-center justify-center max-w-[1000px] pb-0 pt-[20px] px-4 md:px-[63px] relative shrink-0 w-full mx-auto">
              <img alt="Logo 1" className="h-[32px] md:h-[42px] w-auto max-w-[130px] md:max-w-[171px] object-contain opacity-60" src="/images/logo-1.svg" />
              <img alt="Logo 2" className="h-[26px] md:h-[33px] w-auto max-w-[110px] md:max-w-[142px] object-contain opacity-60" src="/images/logo-2.svg" />
              <img alt="Logo 3" className="h-[32px] md:h-[42px] w-auto max-w-[130px] md:max-w-[169px] object-contain opacity-60" src="/images/logo-3.svg" />
              <img alt="Logo 4" className="h-[26px] md:h-[32px] w-auto max-w-[100px] md:max-w-[133px] object-contain opacity-60" src="/images/logo-4.svg" />
              <img alt="Logo 5" className="h-[30px] md:h-[39px] w-auto max-w-[80px] md:max-w-[99px] object-contain opacity-60" src="/images/logo-5.svg" />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}