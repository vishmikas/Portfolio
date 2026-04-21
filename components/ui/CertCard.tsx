'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Award, Code2, Palette, FileText, X } from 'lucide-react'
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
  const hasImage = Boolean(cert.imageUrl)

  return (
    <>
      {/* ── Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="h-full"
      >
        <div
          onClick={() => hasImage && setShowPreview(true)}
          className={`group flex flex-col h-full rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${hasImage ? 'cursor-pointer' : ''}`}
        >
          {/* Certificate image thumbnail */}
          {hasImage ? (
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-stone-100 shrink-0">
              <Image
                src={cert.imageUrl!}
                alt={cert.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/10 transition-colors duration-200 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-xs font-medium bg-stone-950/70 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  View certificate
                </span>
              </div>
            </div>
          ) : (
            /* Fallback colour block for cards without images */
            <div
              className="w-full h-16 shrink-0 flex items-center justify-center"
              style={{ backgroundColor: config.bg }}
            >
              <Icon size={22} style={{ color: config.color }} />
            </div>
          )}

          {/* Card body */}
          <div className="flex flex-col flex-1 p-4 gap-3">
            <div>
              <h3 className="text-sm font-display font-semibold text-stone-900 leading-snug">
                {cert.title}
              </h3>
              <p className="mt-0.5 text-xs text-stone-500">{cert.issuer}</p>
            </div>

            <div className="mt-auto flex items-center justify-between">
              <span
                className="text-[10px] font-body px-2 py-0.5 rounded-full"
                style={{ backgroundColor: config.bg, color: config.color }}
              >
                {config.label}
              </span>

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-stone-400">{cert.date}</span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-stone-400 hover:text-stone-700 transition-colors"
                    title="Verify credential"
                  >
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {showPreview && cert.imageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
            style={{ backgroundColor: 'rgba(0,0,0,0.82)' }}
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setShowPreview(false)}
                className="absolute -top-4 -right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg text-stone-600 hover:text-stone-900 transition-colors"
              >
                <X size={16} />
              </button>

              {/* Image */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-white">
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  width={1200}
                  height={850}
                  className="w-full h-auto"
                  style={{ display: 'block' }}
                />
              </div>

              {/* Caption bar */}
              <div className="mt-3 flex items-center justify-between px-1">
                <div>
                  <p className="text-sm font-medium text-white">{cert.title}</p>
                  <p className="text-xs text-stone-400">{cert.issuer} · {cert.date}</p>
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink size={11} />
                    Verify
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
