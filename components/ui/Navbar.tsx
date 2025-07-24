'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="backdrop-blur-[15px] backdrop-filter w-full">
        <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(5,5,5,0.39)] border-b border-[rgba(66,66,66,0.42)]">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-8 lg:px-[60px] py-5">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 px-[5px] py-[3px] group"
            >
              <Image 
                src="/images/logo.png"
                alt="AI Directors Association Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <div className="flex flex-col items-start">
                <span className="text-white text-[24px] md:text-[30px] font-bold tracking-[2px] leading-[1] group-hover:opacity-80 transition-opacity">
                  AI DIRECTORS
                </span>
                <span className="text-white text-[14px] md:text-[16px] font-normal tracking-[3px] leading-[1] mt-1 group-hover:opacity-80 transition-opacity">
                  ASSOCIATION
                </span>
              </div>
            </Link>

            {/* Desktop Navigation and CTA */}
            <div className="hidden md:flex items-center gap-[23.5px]">
              {/* CTA Button */}
              <a
                href="#cta-section"
                className="bg-[#d9d9d9] text-black px-5 py-[9.4px] rounded-[30px] text-[16px] font-normal leading-[19.2px] hover:bg-white transition-colors cursor-pointer"
              >
                Join AI Directors Academy
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-[rgba(5,5,5,0.95)] backdrop-blur-[10px] border-t border-[rgba(66,66,66,0.42)]">
              <nav className="flex flex-col items-center py-6 gap-4">
                <a
                  href="#cta-section"
                  className="bg-[#d9d9d9] text-black px-5 py-[9.4px] rounded-[30px] text-[16px] font-normal leading-[19.2px] hover:bg-white transition-colors cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join AI Directors Academy
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}