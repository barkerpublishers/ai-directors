'use client'

import Image from 'next/image'
import { FadeIn } from '@/components/animations/FadeIn'

export function Hero() {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section')
    ctaSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] overflow-hidden pt-[76px]">
      {/* Spotlight from Figma */}
      <div className="absolute bottom-0 box-border content-stretch flex flex-col items-start justify-center left-0 p-0 top-0 w-[1091px]">
        <div
          className="[background-size:100%_100%] basis-0 bg-[0%_49.95%] bg-no-repeat grow min-h-px min-w-px shrink-0 w-full"
          style={{
            backgroundImage: `url('/images/spotlight-bg.png')`,
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
                  backgroundImage: `url('http://localhost:3845/assets/c50c77c07cda4d97ebc3c23a21d4f00908a365a4.png')`,
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
            <div className="box-border content-stretch flex flex-row h-[91px] items-center justify-center overflow-clip px-[167px] py-[18px] relative shrink-0 w-[1349px]">
              <div className="box-border content-stretch flex flex-col items-center justify-center max-w-[1200px] overflow-clip p-0 relative shrink-0 w-[1015px]">
                <div className="box-border content-stretch flex flex-col h-[55px] items-start justify-center p-0 relative shrink-0 w-[1015px]">
                  <div className="h-[55px] max-h-[843px] max-w-[1349px] relative shrink-0 w-full">
                    <div 
                      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%] mask-size-[100%_100%] overflow-clip"
                      style={{ maskImage: `url('/images/section-mask.svg')` }}
                    >
                      <div className="absolute box-border content-stretch flex flex-row gap-16 h-[55px] items-center justify-start left-[-2394px] max-h-[55px] max-w-[1015px] pl-[2394px] pr-0 py-[6.5px] right-[2394px] top-1/2 translate-y-[-50%]">
                        {/* Logo 1 */}
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                          <div className="h-[42px] relative shrink-0 w-[171px]">
                            <div className="absolute h-[42px] left-0 overflow-clip top-0 w-[171px]">
                              <div className="absolute h-[42px] left-0 overflow-clip top-0 w-[171px]">
                                <div className="absolute bottom-[1.19%] left-[0.292%] right-[0.292%] top-[1.19%]">
                                  <img alt="" className="block max-w-none size-full" src="/images/logo-1.svg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Logo 2 */}
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                          <div className="h-[33px] relative shrink-0 w-[142px]">
                            <div className="absolute h-[33px] left-0 overflow-clip top-0 w-[142px]">
                              <div className="absolute h-[33px] left-0 overflow-clip top-0 w-[142px]">
                                <div className="absolute bottom-[1.221%] left-[0.282%] right-[0.282%] top-[1.218%]">
                                  <img alt="" className="block max-w-none size-full" src="/images/logo-2.svg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Logo 3 */}
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                          <div className="h-[42px] relative shrink-0 w-[169px]">
                            <div className="absolute h-[42px] left-0 overflow-clip top-0 w-[169px]">
                              <div className="absolute h-[42px] left-0 overflow-clip top-0 w-[169px]">
                                <div className="absolute bottom-[1.19%] left-[0.296%] right-[0.296%] top-[1.19%]">
                                  <img alt="" className="block max-w-none size-full" src="/images/logo-3.svg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Logo 4 */}
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                          <div className="h-8 relative shrink-0 w-[133px]">
                            <div className="absolute h-8 left-0 overflow-clip top-0 w-[133px]">
                              <div className="absolute h-8 left-0 overflow-clip top-0 w-[133px]">
                                <div className="absolute bottom-[1.219%] left-[0.294%] right-[0.294%] top-[1.219%]">
                                  <img alt="" className="block max-w-none size-full" src="/images/logo-4.svg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Logo 5 */}
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                          <div className="h-[39px] relative shrink-0 w-[99px]">
                            <div className="absolute h-[39px] left-0 overflow-clip top-0 w-[99px]">
                              <div className="absolute h-[39px] left-0 overflow-clip top-0 w-[99px]">
                                <div className="absolute bottom-[1.613%] left-[0.633%] right-[0.632%] top-[1.613%]">
                                  <img alt="" className="block max-w-none size-full" src="/images/logo-5.svg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right blur overlay */}
                <div className="absolute bottom-0 box-border content-stretch flex flex-col h-[55px] items-start justify-center p-0 right-[-13px] w-[283px]">
                  <div className="basis-0 grow min-h-px min-w-px relative rounded-xl shrink-0 w-full">
                    <div className="absolute inset-0">
                      <div 
                        className="absolute backdrop-blur-[0.047px] backdrop-filter inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[283px_100%] rounded-xl"
                        style={{ maskImage: `url('/images/blur-overlay-1.svg')` }}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div 
                        className="absolute backdrop-blur-[0.094px] backdrop-filter inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[283px_100%] rounded-xl"
                        style={{ maskImage: `url('/images/blur-overlay-2.svg')` }}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div 
                        className="absolute backdrop-blur-[0.188px] backdrop-filter inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[283px_100%] rounded-xl"
                        style={{ maskImage: `url('/images/blur-overlay-3.svg')` }}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div 
                        className="absolute backdrop-blur-[0.375px] backdrop-filter inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[283px_100%] rounded-xl"
                        style={{ maskImage: `url('/images/blur-overlay-4.svg')` }}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div 
                        className="absolute backdrop-blur-[0.75px] backdrop-filter inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[283px_100%] rounded-xl"
                        style={{ maskImage: `url('/images/blur-overlay-5.svg')` }}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div 
                        className="absolute backdrop-blur-[1.5px] backdrop-filter inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[283px_100%] rounded-xl"
                        style={{ maskImage: `url('/images/blur-overlay-6.svg')` }}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div 
                        className="absolute backdrop-blur-[3px] backdrop-filter inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[283px_100%] rounded-xl"
                        style={{ maskImage: `url('/images/blur-overlay-7.svg')` }}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div 
                        className="absolute backdrop-blur-[6px] backdrop-filter inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[283px_100%] rounded-xl"
                        style={{ maskImage: `url('/images/blur-overlay-8.svg')` }}
                      />
                    </div>
                  </div>
                </div>
                {/* Left blur overlay */}
                <div className="absolute bottom-0 box-border content-stretch flex flex-col h-[55px] items-start justify-center left-[-14px] p-0 w-[283px]">
                  <div className="basis-0 grow min-h-px min-w-px relative rounded-xl shrink-0 w-full">
                    <div className="absolute inset-0">
                      <div 
                        className="absolute backdrop-blur-[0.047px] backdrop-filter inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[283px_100%] rounded-xl"
                        style={{ maskImage: `url('/images/blur-overlay-9.svg')` }}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div 
                        className="absolute backdrop-blur-[0.094px] backdrop-filter inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[283px_100%] rounded-xl"
                        style={{ maskImage: `url('/images/blur-overlay-1.svg')` }}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div 
                        className="absolute backdrop-blur-[0.188px] backdrop-filter inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[283px_100%] rounded-xl"
                        style={{ maskImage: `url('/images/blur-overlay-10.svg')` }}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div 
                        className="absolute backdrop-blur-[0.375px] backdrop-filter inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[283px_100%] rounded-xl"
                        style={{ maskImage: `url('/images/blur-overlay-11.svg')` }}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div 
                        className="absolute backdrop-blur-[0.75px] backdrop-filter inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[283px_100%] rounded-xl"
                        style={{ maskImage: `url('/images/blur-overlay-12.svg')` }}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div 
                        className="absolute backdrop-blur-[1.5px] backdrop-filter inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[283px_100%] rounded-xl"
                        style={{ maskImage: `url('/images/blur-overlay-13.svg')` }}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div 
                        className="absolute backdrop-blur-[3px] backdrop-filter inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[283px_100%] rounded-xl"
                        style={{ maskImage: `url('/images/blur-overlay-14.svg')` }}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div 
                        className="absolute backdrop-blur-[6px] backdrop-filter inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[283px_100%] rounded-xl"
                        style={{ maskImage: `url('/images/blur-overlay-15.svg')` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}