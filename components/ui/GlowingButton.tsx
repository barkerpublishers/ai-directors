'use client'

import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface GlowingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isLoading?: boolean
  variant?: 'primary' | 'secondary'
}

export function GlowingButton({ 
  children, 
  className,
  isLoading = false,
  variant = 'primary',
  disabled,
  ...props 
}: GlowingButtonProps) {
  const variants = {
    primary: 'from-purple-600 to-pink-600',
    secondary: 'from-gray-700 to-gray-900',
  }

  return (
    <button
      className={cn(
        "relative px-8 py-4 bg-gradient-to-r rounded-lg font-bold text-white overflow-hidden group transition-all duration-300",
        variants[variant],
        "hover:scale-105 active:scale-95",
        (isLoading || disabled) && "opacity-70 cursor-not-allowed",
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center">
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </>
        ) : children}
      </span>
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300",
        variant === 'primary' ? 'from-purple-400 to-pink-400' : 'from-gray-500 to-gray-700'
      )} />
    </button>
  )
}