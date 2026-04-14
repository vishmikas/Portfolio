'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  title: string
  subtitle?: string
  className?: string
}

export default function Section({ children, title, subtitle, className = '' }: SectionProps) {
  return (
    <section className={`px-6 py-20 max-w-6xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <h2
          className="text-3xl font-display font-bold mb-2 tracking-tight"
          style={{ color: '#1c1917' }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm font-body" style={{ color: '#78716c' }}>
            {subtitle}
          </p>
        )}
        <div
          className="w-8 h-0.5 mt-4 rounded-full"
          style={{ backgroundColor: '#0f172a' }}
        />
      </motion.div>
      {children}
    </section>
  )
}
