'use client'

import React from 'react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full bg-[#0A0A0A] mt-20">
      {/* Glassmorphic container */}
      <div className="relative">
        {/* Background blur layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent" />
        
        {/* Glass effect container */}
        <div className="relative backdrop-blur-[10px] bg-[rgba(20,20,20,0.4)] border-t border-[#2e2e2e]/50">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
            {/* Footer content grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
              {/* Brand column */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="font-['Satoshi:Bold',_sans-serif] text-[#ebebeb] text-2xl mb-4">
                  AI Directors Academy
                </h3>
                <p className="font-['Satoshi:Regular',_sans-serif] text-[#b3b3b3] text-sm leading-relaxed mb-6 max-w-md">
                  Master the art of AI-powered content creation and become a visionary director in the age of artificial intelligence.
                </p>
                {/* Social links */}
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] flex items-center justify-center transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5 text-[#ebebeb]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] flex items-center justify-center transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5 text-[#ebebeb]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] flex items-center justify-center transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-[#ebebeb]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-['Satoshi:Bold',_sans-serif] text-[#ebebeb] text-lg mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="font-['Satoshi:Regular',_sans-serif] text-[#b3b3b3] text-sm hover:text-[#ebebeb] transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="font-['Satoshi:Regular',_sans-serif] text-[#b3b3b3] text-sm hover:text-[#ebebeb] transition-colors">
                      Curriculum
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="font-['Satoshi:Regular',_sans-serif] text-[#b3b3b3] text-sm hover:text-[#ebebeb] transition-colors">
                      Success Stories
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="font-['Satoshi:Regular',_sans-serif] text-[#b3b3b3] text-sm hover:text-[#ebebeb] transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-['Satoshi:Bold',_sans-serif] text-[#ebebeb] text-lg mb-4">
                  Legal
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="font-['Satoshi:Regular',_sans-serif] text-[#b3b3b3] text-sm hover:text-[#ebebeb] transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="font-['Satoshi:Regular',_sans-serif] text-[#b3b3b3] text-sm hover:text-[#ebebeb] transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="font-['Satoshi:Regular',_sans-serif] text-[#b3b3b3] text-sm hover:text-[#ebebeb] transition-colors">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="font-['Satoshi:Regular',_sans-serif] text-[#b3b3b3] text-sm hover:text-[#ebebeb] transition-colors">
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-12 pt-8 border-t border-[#2e2e2e]/50">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-['Satoshi:Regular',_sans-serif] text-[#b3b3b3] text-sm text-center md:text-left">
                  © {currentYear} AI Directors Academy. All rights reserved.
                </p>
                <p className="font-['Satoshi:Regular',_sans-serif] text-[#b3b3b3] text-sm">
                  Made with ❤️ by AI Directors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}