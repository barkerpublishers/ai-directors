'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { ReactNode, useRef } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
}

const defaultVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={defaultVariants}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export function ScrollRevealContainer({
  children,
  className,
  staggerChildren = 0.1,
  delayChildren = 0,
}: {
  children: ReactNode
  className?: string
  staggerChildren?: number
  delayChildren?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}