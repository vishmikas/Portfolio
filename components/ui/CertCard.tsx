'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Award, Code2, Palette, FileText } from 'lucide-react'
import { Certificate } from '@/lib/data'

// We added the 'other' category here to satisfy TypeScript
const categoryConfig = {
  technical: { icon: Code2, color: '#3b82f6', bg: '#eff6ff', label: 'Technical' },
  management: { icon: Award, color: '#d97706', bg: '#fffbeb', label: 'Management' },
  design: { icon: Palette, color: '#8b5cf6', bg: '#f5f3ff', label: 'Design' },
  other: { icon: FileText, color: '#64748b', bg: '#f1f5f9', label: 'Other' },
}

interface CertCardProps {
  cert: Certificate
  index?: number
}

export default function CertCard({ cert, index = 0 }: CertCardProps) {
  // Now TypeScript knows that cert.category will always find a match in categoryConfig
  const config = categoryConfig[cert.category]
  const Icon = config.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="group h-full rounded-xl border p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
        style={{
          backgroundColor: 'white',
          borderColor: '#e7e5e4',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: config.bg }}
          >
            <Icon size={18} style={{ color: config.color }} />
          </div>

          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <ExternalLink size={15} style={{ color: '#a8a29e' }} />
            </a>
          )}
        </div>

        {/* Content */}
        <h3
          className="text-sm font-display font-semibold mb-1 leading-snug"
          style={{ color: '#1c1917' }}
        >
          {cert.title}
        </h3>

        <p className="text-xs font-body mb-3" style={{ color: '#78716c' }}>
          {cert.issuer}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span
            className="text-xs font-body px-2 py-0.5 rounded-full"
            style={{ backgroundColor: config.bg, color: config.color }}
          >
            {config.label}
          </span>
          <span className="text-xs font-body" style={{ color: '#a8a29e' }}>
            {cert.date}
          </span>
        </div>
      </div>
    </motion.div>
  )
}