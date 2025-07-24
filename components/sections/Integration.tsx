'use client'

import React from 'react'
import Image from 'next/image'
import { FadeIn } from '@/components/animations/FadeIn'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const imgKNko2DRLqFeJj5O8QEgsrPtGrc4Png = "/images/ai-1.gif"
const imgGavNcs3XZtVjOlXcCKz9DnAfR8Png = "/images/ai-3.gif"
const imgSs103556502891 = "/images/logo-1.svg"
const imgSs86530361421 = "/images/logo-2.svg"
const imgSs106019743151 = "/images/logo-3.svg"
const imgSs114740527271 = "/images/logo-4.svg"
const imgSs116947674721 = "/images/logo-5.svg"

interface ButtonPrimaryProps {
  text?: string
  property1?: "Default" | "Large"
}

function ButtonPrimary({
  text = "Join AI Directors Academy",
  property1 = "Default",
}: ButtonPrimaryProps) {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative size-full">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
        <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative shrink-0">
          <div className="bg-[#d9d9d9] box-border content-stretch flex flex-row items-center justify-center pb-2.5 pt-[9.4px] px-5 relative rounded-[30px] shrink-0">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start pb-[0.58px] pt-0 px-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
                  <p className="block leading-[19.2px] whitespace-pre">
                    {text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CardIntegrate() {
  const [isClient, setIsClient] = React.useState(false)
  
  React.useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="[flex-flow:wrap] box-border content-center flex gap-0 items-center justify-center p-0 relative size-full">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full md:w-[446px]">
        <div className="h-[300px] md:h-[400px] relative rounded-[20px] shrink-0 w-full">
          <div className="absolute backdrop-blur-[8.5px] backdrop-filter bg-[rgba(28,28,28,0.58)] inset-0 overflow-clip rounded-[20px]">
            {isClient && (
              <video 
                className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
                autoPlay
                muted
                loop
                playsInline
                src="/videos/ai-1.mp4"
              />
            )}
            <div className="absolute bg-gradient-to-b bottom-[-11px] from-[#33333300] h-[152px] left-0 to-[#0a0a0a] w-full" />
          </div>
          <div className="absolute box-border content-stretch flex-col h-[411px] items-start justify-center left-[-42.152%] p-0 right-[-42.152%] top-[-201px] hidden md:flex">
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
              <div className="absolute bottom-0 box-border content-stretch flex flex-col items-center justify-center left-[-20px] px-[306px] py-[203px] top-0 w-[862px]">
                <div className="bg-[#d3d3d3] h-[5px] rounded-[10px] shadow-[0px_0px_8px_0px_#d4d4d4,0px_0px_32px_8px_#d4d4d4,0px_0px_128px_32px_#d4d4d4] shrink-0 w-[250px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CardIntegrate2() {
  const [isClient, setIsClient] = React.useState(false)
  
  React.useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="[flex-flow:wrap] box-border content-center flex gap-0 items-center justify-center p-0 relative size-full">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full md:w-[446px]">
        <div className="h-[300px] md:h-[400px] relative rounded-[20px] shrink-0 w-full">
          <div className="absolute backdrop-blur-[8.5px] backdrop-filter bg-[rgba(28,28,28,0.58)] inset-0 overflow-clip rounded-[20px]">
            {isClient && (
              <video 
                className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
                autoPlay
                muted
                loop
                playsInline
                src="/videos/ai-2.mp4"
              />
            )}
            <div className="absolute bg-gradient-to-b bottom-[-11px] from-[#33333300] h-[152px] left-0 to-[#0a0a0a] w-full" />
          </div>
          <div className="absolute box-border content-stretch flex-col h-[411px] items-start justify-center left-[-42.152%] p-0 right-[-42.152%] top-[-201px] hidden md:flex">
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
              <div className="absolute box-border content-stretch flex flex-col items-center justify-center left-[-20px] px-[306px] py-[203px] top-1/2 translate-y-[-50%] w-[862px]">
                <div className="bg-[#d3d3d3] h-[5px] rounded-[10px] shadow-[0px_0px_8px_0px_#d4d4d4,0px_0px_32px_8px_#d4d4d4,0px_0px_128px_32px_#d4d4d4] shrink-0 w-[250px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CardIntegrate3() {
  const [isClient, setIsClient] = React.useState(false)
  
  React.useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="[flex-flow:wrap] box-border content-center flex gap-0 items-center justify-center p-0 relative size-full">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full md:w-[446px]">
        <div className="h-[300px] md:h-[400px] relative rounded-[20px] shrink-0 w-full">
          <div className="absolute backdrop-blur-[8.5px] backdrop-filter bg-[rgba(28,28,28,0.58)] inset-0 overflow-clip rounded-[20px]">
            {isClient && (
              <video 
                className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
                autoPlay
                muted
                loop
                playsInline
                src="/videos/ai-3.mp4"
              />
            )}
            <div className="absolute bg-gradient-to-b bottom-[-11px] from-[#33333300] h-[152px] left-0 to-[#0a0a0a] w-full" />
          </div>
          <div className="absolute box-border content-stretch flex-col h-[411px] items-start justify-center left-[-42.152%] p-0 right-[-42.152%] top-[-201px] hidden md:flex">
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
              <div className="absolute bottom-0 box-border content-stretch flex flex-col items-center justify-center left-[-20px] px-[306px] py-[203px] top-0 w-[862px]">
                <div className="bg-[#d3d3d3] h-[5px] rounded-[10px] shadow-[0px_0px_8px_0px_#d4d4d4,0px_0px_32px_8px_#d4d4d4,0px_0px_128px_32px_#d4d4d4] shrink-0 w-[250px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Integration() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-center px-4 md:px-8 lg:px-[174.5px] py-[50px] relative w-full bg-[#0A0A0A]">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
        <div className="[flex-flow:wrap] box-border content-center flex gap-0 items-center justify-center overflow-clip p-0 relative rounded-lg shrink-0">
          <div className="box-border content-stretch flex flex-row items-center justify-center px-5 py-[5px] relative rounded-[10px] shrink-0">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d1d1d1] text-[18px] text-left text-nowrap">
                  <p className="block leading-[28px] whitespace-pre">
                    Inside The AI Directors Academy
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
      
      <div className="box-border content-stretch flex flex-col gap-5 items-center justify-center overflow-clip p-0 relative shrink-0 w-full max-w-[654.92px]">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 px-4 md:px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <h2 className="font-['Satoshi:Regular',_sans-serif] leading-[35px] md:leading-[50px] not-italic relative text-[#ebebeb] text-[30px] sm:text-[36px] md:text-[50px] text-center tracking-[-1px] md:tracking-[-2px]">
                  Learn How To Direct Millions of Views Directly From Your Pocket
                </h2>
              </div>
            </div>
          </div>
        </div>
        
        <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 px-4 md:px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col items-center justify-start px-4 md:pl-[31.91px] md:pr-[31.92px] py-0 relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[21.6px] not-italic relative shrink-0 text-[#b3b3b3] text-[18px] text-center tracking-[-0.36px]">
                <p className="block mb-2">
                  Transform your phone into a production studio, where your AI becomes your team, and your content becomes your empire.
                </p>
                <p className="block">
                  Become an AI Director: Learn how to create viral AI videos that break the internet. Design AI models to star in viral content. Monetize your work without leaving the living room.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="box-border content-stretch flex flex-col gap-[80px] items-center justify-center pb-0 pt-[50px] px-4 md:px-8 relative w-full max-w-[1200px]">
        <ScrollReveal>
          <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
            <div className="box-border content-stretch flex flex-col md:flex-row gap-10 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col gap-5 items-start justify-center p-0 relative md:flex-1 w-full md:max-w-[500px] order-1 md:order-1">
                <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full md:w-[497px]">
                    <div className="box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative shrink-0 w-full">
                      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                          <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] justify-center leading-[28px] md:leading-[36px] not-italic relative shrink-0 text-[#ebebeb] text-[24px] md:text-[35px] text-left tracking-[-0.8px] md:tracking-[-1.4px]">
                            <p className="block">
                              1. Create Your First Viral AI Video
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-full">
                  <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                      <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#d1d1d1] text-[16px] text-left">
                        <p className="block mb-0">Become an AI Director by creating your first viral AI video. Unlock the power to command millions of views at your fingertips. Discover how to wield cutting-edge AI tools that turn your phone into a viral video production studio.</p>
                        <p className="block mb-2"></p>
                        <p className="block mb-0">Learn the secrets of creating thumb-stopping AI video content that captures global attention. By the end of this module, you&apos;ll carry the confidence and capability of an official AI Director.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="box-border content-stretch flex flex-row h-[39px] items-center justify-center p-0 relative shrink-0">
                  <ButtonPrimary text="Join AI Directors Academy" />
                </div>
              </div>
              
              <div className="[flex-flow:wrap] md:basis-0 box-border content-center flex gap-0 md:grow items-center justify-center md:min-h-px md:min-w-px p-0 relative md:shrink-0 w-full order-2 md:order-2">
                <CardIntegrate />
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
            <div className="box-border content-stretch flex flex-col md:flex-row gap-10 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="[flex-flow:wrap] md:basis-0 box-border content-center flex gap-0 md:grow items-center justify-center md:min-h-px md:min-w-px p-0 relative md:shrink-0 w-full order-3 md:order-1">
                <CardIntegrate2 />
              </div>
              
              <div className="box-border content-stretch flex flex-col gap-5 items-start justify-center p-0 relative md:flex-1 w-full md:max-w-[500px] order-1 md:order-2">
                <div className="box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0 w-full md:w-[497px]">
                    <div className="box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative shrink-0 w-full">
                      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                          <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] justify-center leading-[28px] md:leading-[36px] not-italic relative shrink-0 text-[#ebebeb] text-[24px] md:text-[35px] text-left tracking-[-0.8px] md:tracking-[-1.4px]">
                            <p className="block">
                              2. Build Your First AI Model + Influencer
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="box-border content-stretch flex flex-row items-center justify-center pb-[0.635px] pt-0 px-0 relative shrink-0 w-full">
                  <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[0.545px] pt-0 px-0 relative shrink-0 w-full">
                      <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#d1d1d1] text-[16px] text-left">
                        <p className="block mb-0">Create your own AI-powered virtual personality that works 24/7 to grow your digital brands (or your clients). Learn how to design and deploy an AI influencer that embodies your vision — from crafting their unique persona and visual identity to programming their voice and content style.</p>
                        <p className="block mb-2"></p>
                        <p className="block mb-0">Master the tools that let you generate endless content, engage audiences, and scale your influence beyond human limitations. By the end of this module, you&apos;ll have birthed a digital ambassador that never sleeps, never burns out, and consistently delivers your message to audiences worldwide.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="box-border content-stretch flex flex-row h-[39px] items-center justify-center p-0 relative shrink-0">
                  <ButtonPrimary text="Join AI Directors Academy" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
          <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
            <div className="box-border content-stretch flex flex-col md:flex-row gap-10 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col gap-5 items-start justify-center p-0 relative md:flex-1 w-full md:max-w-[500px] order-1 md:order-1">
                <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full md:w-[497px]">
                    <div className="box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative shrink-0 w-full">
                      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                          <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] justify-center leading-[28px] md:leading-[36px] not-italic relative shrink-0 text-[#ebebeb] text-[24px] md:text-[35px] text-left tracking-[-0.8px] md:tracking-[-1.4px]">
                            <p className="block">
                              3. Unlock The Blueprint To Monetizing Your Creations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-full">
                  <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                      <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#d1d1d1] text-[16px] text-left">
                        <p className="block mb-0">Transform your AI-powered content into multiple revenue streams with proven monetization strategies used by seven-figure creators. Discover how to architect income ecosystems around your viral videos and AI influencers — from platform monetization and brand partnerships to digital products and subscription models.</p>
                        <p className="block mb-2"></p>
                        <p className="block mb-0">Learn the exact frameworks that convert views into revenue while you sleep. By mastering this blueprint, you&apos;ll turn your creative vision into a sustainable business empire where every piece of content becomes a potential profit center.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="box-border content-stretch flex flex-row h-[39px] items-center justify-center p-0 relative shrink-0">
                  <ButtonPrimary text="Join AI Directors Academy" />
                </div>
              </div>
              
              <div className="[flex-flow:wrap] md:basis-0 box-border content-center flex gap-0 md:grow items-center justify-center md:min-h-px md:min-w-px p-0 relative md:shrink-0 w-full order-2 md:order-2">
                <CardIntegrate3 />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      
      <div className="box-border content-stretch flex flex-wrap flex-row gap-6 md:gap-10 items-center justify-center max-w-[1000px] pb-0 pt-[50px] px-4 md:px-[63px] relative shrink-0 w-full">
        <div className="h-8 relative shrink-0 w-[133px]">
          <Image
            alt="Partner logo"
            className="object-contain"
            src={imgSs103556502891}
            width={133}
            height={32}
            priority={false}
          />
        </div>
        
        <div className="h-[33px] relative shrink-0 w-[142px]">
          <Image
            alt="Partner logo"
            className="object-contain"
            src={imgSs86530361421}
            width={142}
            height={33}
            priority={false}
          />
        </div>
        
        <div className="h-[39px] relative shrink-0 w-[99px]">
          <Image
            alt="Partner logo"
            className="object-contain"
            src={imgSs106019743151}
            width={99}
            height={39}
            priority={false}
          />
        </div>
        
        <div className="h-[42px] relative shrink-0 w-[169px]">
          <Image
            alt="Partner logo"
            className="object-contain"
            src={imgSs114740527271}
            width={169}
            height={42}
            priority={false}
          />
        </div>
        
        <div className="h-[42px] relative shrink-0 w-[171px]">
          <Image
            alt="Partner logo"
            className="object-contain"
            src={imgSs116947674721}
            width={171}
            height={42}
            priority={false}
          />
        </div>
      </div>
    </div>
  )
}