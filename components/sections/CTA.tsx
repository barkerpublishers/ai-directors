'use client'

import { FadeIn } from '@/components/animations/FadeIn'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const imgImage = "/images/blur-overlay-2.svg"

export function CTA() {
  return (
    <div 
      className="box-border content-stretch flex flex-col items-center justify-center pb-[50px] pt-5 px-4 md:px-8 lg:px-12 relative w-full bg-[#0A0A0A]"
      id="cta-section"
    >
      <ScrollReveal>
        <div className="box-border content-stretch flex flex-col items-center justify-center relative w-full">
          <div className="box-border content-stretch flex flex-col items-center justify-center px-[22px] py-2.5 relative rounded-3xl w-full">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-[rgba(28,28,28,0.28)] backdrop-blur-[10px] box-border content-stretch flex flex-col items-center justify-center overflow-clip px-8 md:px-16 lg:px-24 py-[80px] relative rounded-3xl w-full">
                <div className="box-border content-stretch flex flex-col gap-[15px] items-center justify-center p-0 relative z-10">
                  {/* Heading */}
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full max-w-[600px]">
                    <div className="font-['Satoshi:Regular',_sans-serif] leading-[1.1] not-italic relative text-[#f2f2f2] text-[28px] md:text-[36px] lg:text-[42px] text-center w-full">
                      <p className="block font-bold">
                        Join The AI Directors Academy
                      </p>
                    </div>
                  </div>
                  
                  {/* Subheading */}
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full max-w-[700px] mt-2">
                    <div className="box-border content-stretch flex flex-col items-center justify-start px-4 md:px-[40px] py-0 relative w-full">
                      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[24px] not-italic relative text-[#f2f2f2] text-[16px] md:text-[18px] text-center w-full">
                        <p className="block">
                          Join thousands of creators who are already using AI to direct viral content and build their empires.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative mt-4">
                    <button className="box-border content-stretch flex flex-row h-[63px] items-center justify-center overflow-clip px-1 py-[4.5px] relative rounded-[9999px] w-[180px] group">
                      {/* Animated gradient glow effect */}
                      <div className="absolute -inset-1 opacity-75 group-hover:opacity-100 transition-opacity">
                        <div className="absolute inset-0 blur-[2.5px] rounded-full">
                          <div className="h-full w-full bg-gradient-to-r from-blue-500 via-blue-400 to-white rounded-full animate-pulse" />
                        </div>
                      </div>
                      
                      {/* Button content */}
                      <div className="bg-[rgba(18,18,18,0.92)] box-border content-stretch flex flex-col items-center justify-center px-8 py-4 relative rounded-[999px] z-10">
                        <div className="flex flex-col font-['Satoshi:Bold',_sans-serif] justify-center leading-[0] not-italic relative text-[#eeebdd] text-[17px] text-center text-nowrap">
                          <p className="block leading-[24px] whitespace-pre">
                            Join The Academy
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div 
                    className="[background-size:400px_300px] absolute bg-repeat bg-top-left inset-0 rounded-[10px]"
                    style={{ backgroundImage: `url('${imgImage}')` }}
                  />
                </div>
                
                {/* Top light bar */}
                <div className="absolute -top-[200px] left-1/2 transform -translate-x-1/2">
                  <div className="relative w-[862px] h-[411px]">
                    <div className="absolute inset-0 flex items-center justify-center px-[306px] py-[203px]">
                      <div className="bg-[#d3d3d3] h-[5px] w-[250px] rounded-[10px] shadow-[0px_0px_8px_0px_#d4d4d4,0px_0px_32px_8px_#d4d4d4,0px_0px_128px_32px_#d4d4d4]" />
                    </div>
                  </div>
                </div>
                
                {/* Bottom light bar */}
                <div className="absolute -bottom-[200px] left-1/2 transform -translate-x-1/2">
                  <div className="relative w-[862px] h-[411px]">
                    <div className="absolute inset-0 flex items-center justify-center px-[306px] py-[203px]">
                      <div className="bg-[#d3d3d3] h-[5px] w-[250px] rounded-[10px] shadow-[0px_0px_8px_0px_#d4d4d4,0px_0px_32px_8px_#d4d4d4,0px_0px_128px_32px_#d4d4d4]" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}