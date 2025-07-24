'use client'

import React from 'react'
import { FadeIn } from '@/components/animations/FadeIn'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const imgKNko2DRLqFeJj5O8QEgsrPtGrc4Png = "/images/ai-1.gif"
const imgGavNcs3XZtVjOlXcCKz9DnAfR8Png = "http://localhost:3845/assets/bfe00b38b7e0203d1cfba79a91009210b5f14615.png"
const imgSs103556502891 = "http://localhost:3845/assets/0f11ac2a90ba5235ccceb96e21bd4bcace1f00c7.svg"
const imgSs86530361421 = "http://localhost:3845/assets/9a21133d3ab2583f5f32655ab4684e89b4ee99de.svg"
const imgSs106019743151 = "http://localhost:3845/assets/f3678a7541ccc64f7d2744db5b71af3ddf286071.svg"
const imgSs114740527271 = "http://localhost:3845/assets/6332deace7c8c2a57d428705f9f3b42475707b02.svg"
const imgSs116947674721 = "http://localhost:3845/assets/2ea09517863800b0ff86b291bb5c0d2b1d30800f.svg"

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
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[446px]">
        <div className="h-[400px] relative rounded-[20px] shrink-0 w-full">
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
            <div className="absolute bg-gradient-to-b bottom-[-11px] from-[#33333300] h-[152px] left-0 to-[#0a0a0a] w-[446px]" />
          </div>
          <div className="absolute box-border content-stretch flex flex-col h-[411px] items-start justify-center left-[-42.152%] p-0 right-[-42.152%] top-[-201px]">
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
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[446px]">
        <div className="h-[400px] relative rounded-[20px] shrink-0 w-full">
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
            <div className="absolute bg-gradient-to-b bottom-[-11px] from-[#33333300] h-[152px] left-0 to-[#0a0a0a] w-[446px]" />
          </div>
          <div className="absolute box-border content-stretch flex flex-col h-[411px] items-start justify-center left-[-42.152%] p-0 right-[-42.152%] top-[-201px]">
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
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[446px]">
        <div className="h-[400px] relative rounded-[20px] shrink-0 w-full">
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
            <div className="absolute bg-gradient-to-b bottom-[-11px] from-[#33333300] h-[152px] left-0 to-[#0a0a0a] w-[446px]" />
          </div>
          <div className="absolute box-border content-stretch flex flex-col h-[411px] items-start justify-center left-[-42.152%] p-0 right-[-42.152%] top-[-201px]">
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
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-center px-[174.5px] py-[50px] relative w-full bg-[#0A0A0A]">
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
      
      <div className="box-border content-stretch flex flex-col gap-5 items-center justify-center overflow-clip p-0 relative shrink-0 w-[654.92px]">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[514px]">
          <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
              <div className="h-[100px] relative shrink-0 w-[514px]">
                <h2 className="flex flex-col font-['Satoshi:Regular',_sans-serif] justify-center leading-[50px] not-italic relative shrink-0 text-[#ebebeb] text-[50px] text-center tracking-[-2px]">
                  <span className="block">Learn How To Direct Millions of Views</span>
                  <span className="block">Directly From Your Pocket</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        
        <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col items-center justify-start pl-[31.91px] pr-[31.92px] py-0 relative shrink-0 w-full">
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
            <div className="box-border content-stretch flex flex-row gap-10 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col gap-5 items-start justify-center p-0 relative flex-1 max-w-[500px]">
                <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[497px]">
                    <div className="box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative shrink-0 w-full">
                      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                          <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] justify-center leading-[36px] not-italic relative shrink-0 text-[#ebebeb] text-[35px] text-left tracking-[-1.4px]">
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
                        <p className="block mb-0">Learn the secrets of creating thumb-stopping AI video content that captures global attention. By the end of this module, you'll carry the confidence and capability of an official AI Director.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="box-border content-stretch flex flex-row h-[39px] items-center justify-center p-0 relative shrink-0">
                  <ButtonPrimary text="Join AI Directors Academy" />
                </div>
              </div>
              
              <div className="[flex-flow:wrap] basis-0 box-border content-center flex gap-0 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
                <CardIntegrate />
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
            <div className="box-border content-stretch flex flex-row gap-10 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="[flex-flow:wrap] basis-0 box-border content-center flex gap-0 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
                <CardIntegrate2 />
              </div>
              
              <div className="box-border content-stretch flex flex-col gap-5 items-start justify-center p-0 relative flex-1 max-w-[500px]">
                <div className="box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0 w-[497px]">
                    <div className="box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative shrink-0 w-full">
                      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                          <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] justify-center leading-[36px] not-italic relative shrink-0 text-[#ebebeb] text-[35px] text-left tracking-[-1.4px]">
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
                        <p className="block mb-0">Master the tools that let you generate endless content, engage audiences, and scale your influence beyond human limitations. By the end of this module, you'll have birthed a digital ambassador that never sleeps, never burns out, and consistently delivers your message to audiences worldwide.</p>
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
            <div className="box-border content-stretch flex flex-row gap-10 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col gap-5 items-start justify-center p-0 relative flex-1 max-w-[500px]">
                <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[497px]">
                    <div className="box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative shrink-0 w-full">
                      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                          <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] justify-center leading-[36px] not-italic relative shrink-0 text-[#ebebeb] text-[35px] text-left tracking-[-1.4px]">
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
                        <p className="block mb-0">Learn the exact frameworks that convert views into revenue while you sleep. By mastering this blueprint, you'll turn your creative vision into a sustainable business empire where every piece of content becomes a potential profit center.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="box-border content-stretch flex flex-row h-[39px] items-center justify-center p-0 relative shrink-0">
                  <ButtonPrimary text="Join AI Directors Academy" />
                </div>
              </div>
              
              <div className="[flex-flow:wrap] basis-0 box-border content-center flex gap-0 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
                <CardIntegrate3 />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      
      <div className="box-border content-stretch flex flex-wrap flex-row gap-6 md:gap-10 items-center justify-center max-w-[1000px] pb-0 pt-[50px] px-4 md:px-[63px] relative shrink-0 w-full">
        <div className="h-8 relative shrink-0 w-[133px]">
          <div className="absolute h-8 left-0 overflow-clip top-0 w-[133px]">
            <div className="absolute h-8 left-0 overflow-clip top-0 w-[133px]">
              <div className="absolute bottom-[1.219%] left-[0.294%] right-[0.294%] top-[1.219%]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  loading="lazy"
                  src={imgSs103556502891}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-[33px] relative shrink-0 w-[142px]">
          <div className="absolute h-[33px] left-0 overflow-clip top-0 w-[142px]">
            <div className="absolute h-[33px] left-0 overflow-clip top-0 w-[142px]">
              <div className="absolute bottom-[1.221%] left-[0.282%] right-[0.282%] top-[1.218%]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  loading="lazy"
                  src={imgSs86530361421}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-[39px] relative shrink-0 w-[99px]">
          <div className="absolute h-[39px] left-0 overflow-clip top-0 w-[99px]">
            <div className="absolute h-[39px] left-0 overflow-clip top-0 w-[99px]">
              <div className="absolute bottom-[1.613%] left-[0.633%] right-[0.632%] top-[1.613%]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  loading="lazy"
                  src={imgSs106019743151}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-[42px] relative shrink-0 w-[169px]">
          <div className="absolute h-[42px] left-0 overflow-clip top-0 w-[169px]">
            <div className="absolute h-[42px] left-0 overflow-clip top-0 w-[169px]">
              <div className="absolute bottom-[1.19%] left-[0.296%] right-[0.296%] top-[1.19%]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  loading="lazy"
                  src={imgSs114740527271}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-[42px] relative shrink-0 w-[171px]">
          <div className="absolute h-[42px] left-0 overflow-clip top-0 w-[171px]">
            <div className="absolute h-[42px] left-0 overflow-clip top-0 w-[171px]">
              <div className="absolute bottom-[1.19%] left-[0.292%] right-[0.292%] top-[1.19%]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  loading="lazy"
                  src={imgSs116947674721}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}