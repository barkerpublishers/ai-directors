'use client'

import React, { useState } from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { FadeIn } from '@/components/animations/FadeIn'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
  delay?: number
}

function FAQItem({ question, answer, isOpen, onClick, delay = 0 }: FAQItemProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl border border-[#2e2e2e] hover:border-[#4e4e4e] transition-all duration-300 overflow-hidden">
        <button
          onClick={onClick}
          className="w-full p-6 md:p-8 text-left flex items-center justify-between gap-4"
        >
          <h3 className="font-['Satoshi:Bold',_sans-serif] text-[#ebebeb] text-lg md:text-xl">
            {question}
          </h3>
          <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <svg className="w-6 h-6 text-[#d1d1d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
        <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-6 md:px-8 pb-6 md:pb-8">
            <p className="font-['Inter:Regular',_sans-serif] text-[#b3b3b3] text-base leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

const faqs = [
  {
    question: "What exactly is the AI Directors Academy?",
    answer: "The AI Directors Academy is a comprehensive training program that teaches you how to create viral AI-generated content. You'll learn everything from basic AI tools to advanced techniques for creating engaging videos, building audiences, and monetizing your content across multiple platforms."
  },
  {
    question: "Do I need any technical skills or experience?",
    answer: "No technical skills required! Our program is designed for complete beginners. If you can use a smartphone and follow step-by-step instructions, you have everything you need to succeed. We'll teach you everything from the ground up."
  },
  {
    question: "How quickly can I start seeing results?",
    answer: "Many of our students create their first viral video within 7-14 days of joining. With our proven templates and strategies, you can start building an audience immediately. Revenue typically follows within 30-60 days as your audience grows."
  },
  {
    question: "What AI tools will I learn to use?",
    answer: "You'll master all the leading AI tools including ChatGPT, Midjourney, Runway, ElevenLabs, and many more. We provide detailed tutorials, custom prompts, and workflows for each tool. Plus, we continuously update the curriculum as new tools emerge."
  },
  {
    question: "How much time do I need to invest?",
    answer: "You can succeed with as little as 1-2 hours per day. Many of our most successful students started while working full-time jobs. The key is consistency and following our proven systems. The more time you invest, the faster you'll see results."
  },
  {
    question: "Is there ongoing support after I join?",
    answer: "Yes! You get lifetime access to our private community of 10,000+ AI Directors, weekly live workshops, and direct support from our team. You'll never be alone on your journey. We're committed to your long-term success."
  },
  {
    question: "What if I'm not creative or good on camera?",
    answer: "Perfect! AI Directors don't need to be on camera or traditionally creative. The AI does the creative heavy lifting. You just need to learn how to guide it effectively. Many of our most successful students considered themselves 'not creative' before joining."
  },
  {
    question: "How is this different from other AI courses?",
    answer: "Unlike theory-based courses, we focus on real-world results. You get proven templates, exact workflows, and case studies from directors earning 6-7 figures. Plus, our focus on viral content and monetization strategies sets us apart from generic AI courses."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="relative w-full bg-[#0A0A0A] py-[50px] overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-[1000px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-full" />
                <h2 className="relative font-['Satoshi:Bold',_sans-serif] text-[#ebebeb] text-[32px] md:text-[42px] tracking-[-1px] px-8 py-3">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>
            <p className="font-['Inter:Regular',_sans-serif] text-[#b3b3b3] text-lg max-w-[600px] mx-auto">
              Everything you need to know about becoming an AI Director
            </p>
          </div>
        </FadeIn>
        
        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
              delay={index * 0.05}
            />
          ))}
        </div>
        
        {/* Contact Support */}
        <FadeIn direction="up" delay={0.5}>
          <div className="mt-12 md:mt-16 text-center">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl border border-[#2e2e2e] p-8 md:p-10 inline-block">
              <h3 className="font-['Satoshi:Bold',_sans-serif] text-[#ebebeb] text-xl mb-3">
                Still have questions?
              </h3>
              <p className="font-['Inter:Regular',_sans-serif] text-[#b3b3b3] text-base mb-6">
                Our support team is here to help you succeed
              </p>
              <a
                href="mailto:support@aidirectorsacademy.com"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-['Satoshi:Regular',_sans-serif] font-medium">
                  support@aidirectorsacademy.com
                </span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}