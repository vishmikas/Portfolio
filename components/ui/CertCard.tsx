'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Award, Code2, Palette, FileText, X, Eye } from 'lucide-react'
import { Certificate } from '@/lib/data'

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
  const [showPreview, setShowPreview] = useState(false)
  const config = categoryConfig[cert.category]
  const Icon = config.icon

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="group h-full rounded-xl border p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          style={{
            backgroundColor: 'white',
            borderColor: '#e7e5e4',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}
          onClick={() => cert.imageUrl && setShowPreview(true)}
        >
          {/* Top row */}
          <div className="flex items-start justify-between mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: config.bg }}
            >
              <Icon size={18} style={{ color: config.color }} />
            </div>

            <div className="flex items-center gap-2">
              {cert.imageUrl && (
                <button
                  onClick={(e) => { e.stopPropagation(); setShowPreview(true) }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  title="View certificate"
                >
                  <Eye size={15} style={{ color: '#a8a29e' }} />
                </button>
              )}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={15} style={{ color: '#a8a29e' }} />
                </a>
              )}
            </div>
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

      {/* PDF Preview Modal */}
      <AnimatePresence>
        {showPreview && cert.imageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: 'white', maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className="flex items-center justify-between px-5 py-4 border-b"
                style={{ borderColor: '#e7e5e4' }}
              >
                <div>
                  <h3 className="text-sm font-display font-semibold" style={{ color: '#1c1917' }}>
                    {cert.title}
                  </h3>
                  <p className="text-xs font-body" style={{ color: '#78716c' }}>
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-body px-3 py-1.5 rounded-lg transition-colors"
                      style={{ backgroundColor: config.bg, color: config.color }}
                    >
                      <ExternalLink size={12} />
                      Verify
                    </a>
                  )}
                  <button
                    onClick={() => setShowPreview(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors hover:bg-stone-100"
                  >
                    <X size={16} style={{ color: '#78716c' }} />
                  </button>
                </div>
              </div>

              {/* PDF Embed */}
              <div style={{ height: '75vh' }}>
                <iframe
                  src={cert.imageUrl}
                  className="w-full h-full"
                  title={cert.title}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
