'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Github, Linkedin, Mail, MessageCircleMore, X } from 'lucide-react'
import { useState } from 'react'
import { personalInfo } from '@/lib/data'

export default function ContactPopup() {
  const [open, setOpen] = useState(false)

  const items = [
    {
      href: personalInfo.linkedin,
      label: 'LinkedIn',
      value: 'dilum-samarathunga',
      icon: Linkedin,
    },
    {
      href: personalInfo.github,
      label: 'GitHub',
      value: 'vishmikas',
      icon: Github,
    },
    {
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
      value: personalInfo.email,
      icon: Mail,
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="mb-3 w-[320px] overflow-hidden rounded-3xl border border-white/60 bg-white/85 p-3 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-3 flex items-start justify-between gap-3 rounded-2xl bg-stone-950 px-4 py-4 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-stone-400">Let&apos;s connect</p>
                <h3 className="mt-1 text-lg font-display font-semibold">Contact Dilum</h3>
                <p className="mt-1 text-sm text-stone-300">Pick the channel that works best for you.</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/15 p-2 text-stone-300 transition hover:text-white"
                aria-label="Close contact popup"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-2">
              {items.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === 'Email' ? undefined : '_blank'}
                    rel={item.label === 'Email' ? undefined : 'noopener noreferrer'}
                    className="flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 transition hover:border-stone-300 hover:bg-white"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-white p-2 text-stone-700 shadow-sm">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-stone-900">{item.label}</p>
                        <p className="text-xs text-stone-500">{item.value}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">Open</span>
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 rounded-full border border-stone-200 bg-stone-950 px-4 py-3 text-sm font-medium text-white shadow-xl transition hover:-translate-y-0.5"
      >
        <MessageCircleMore size={16} />
        {open ? 'Close' : 'Contact'}
      </button>
    </div>
  )
}
