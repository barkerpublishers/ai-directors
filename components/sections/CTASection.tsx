'use client'

import { useState, FormEvent } from 'react'
import { DarkSection } from '@/components/ui/DarkSection'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!email) return

    setIsLoading(true)
    setStatus('idle')
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source: 'landing-page' }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Welcome to AI Directors Academy! Check your email for next steps.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <DarkSection id="cta-section" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Content Creation Process?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join the waitlist and be the first to experience the future of AI-powered content creation.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all"
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span>Joining...</span>
                    ) : (
                      <>
                        <span>Join Waitlist</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {message && (
                <p className={`text-sm mt-4 ${
                  status === 'success' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {message}
                </p>
              )}
            </form>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Free tier available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </DarkSection>
  )
}