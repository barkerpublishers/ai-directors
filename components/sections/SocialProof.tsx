'use client'

import { DarkSection } from '@/components/ui/DarkSection'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { CheckCircle, Award, Zap, Users } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process millions of data points in real-time with our optimized AI engine',
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: 'Trusted by over 10,000 companies worldwide for their AI needs',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'Work seamlessly with your team in a unified AI workspace',
  },
]

const testimonials = [
  {
    content: 'AI Directors transformed our content creation process. We\'re now producing 10x more content with better engagement rates.',
    name: 'Sarah Chen',
    role: 'Head of Marketing',
    company: 'TechFlow',
    image: '/images/avatar1.jpg',
  },
  {
    content: 'The analytics and insights provided are game-changing. We can now make data-driven decisions in real-time.',
    name: 'Michael Rodriguez',
    role: 'Creative Director',
    company: 'Visionary Studios',
    image: '/images/avatar2.jpg',
  },
  {
    content: 'Best investment we\'ve made. The ROI on our video content has increased by 300% in just 3 months.',
    name: 'Emily Thompson',
    role: 'CEO',
    company: 'NextGen Media',
    image: '/images/avatar3.jpg',
  },
]

export function SocialProof() {
  return (
    <DarkSection className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Features Grid */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Why Choose AI Directors
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the power of AI-driven content creation
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Testimonials */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Loved by creators worldwide
            </h3>
            <p className="text-lg text-gray-400">
              See what our community has to say
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.1}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="flex items-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust Indicators */}
        <ScrollReveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-8 md:gap-12 flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">24/7 Support</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </DarkSection>
  )
}