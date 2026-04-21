'use client'

import { motion } from 'framer-motion'
import { Camera, Coffee, GraduationCap, MapPin, Code2, Trophy, Zap, Heart } from 'lucide-react'
import { personalInfo, projects, certificates } from '@/lib/data'
import Link from 'next/link'

const highlights = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'BSc Computer Science',
    sub: 'University of Westminster via IIT',
    accent: '#0f172a',
    accentBg: '#f1f5f9',
  },
  {
    icon: Code2,
    label: 'Projects Shipped',
    value: `${projects.length} Projects`,
    sub: 'Full-stack, AI, desktop & web',
    accent: '#0f172a',
    accentBg: '#f1f5f9',
  },
  {
    icon: Trophy,
    label: 'Competitions',
    value: 'IEEEXtreme 19.0',
    sub: 'Team LogicForge — 19,000+ participants',
    accent: '#0f172a',
    accentBg: '#f1f5f9',
  },
  {
    icon: Zap,
    label: 'Certifications',
    value: `${certificates.length} Earned`,
    sub: 'LinkedIn, Google, University of Moratuwa',
    accent: '#0f172a',
    accentBg: '#f1f5f9',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sri Lanka',
    sub: 'Open to remote & on-site work',
    accent: '#0f172a',
    accentBg: '#f1f5f9',
  },
  {
    icon: Coffee,
    label: 'Beyond Code',
    value: 'Certified Barista',
    sub: 'Professional training completed',
    accent: '#0f172a',
    accentBg: '#f1f5f9',
  },
  {
    icon: Camera,
    label: 'Creative Side',
    value: 'Photography',
    sub: 'Visual storytelling & composition',
    accent: '#0f172a',
    accentBg: '#f1f5f9',
  },
  {
    icon: Heart,
    label: 'Mission',
    value: 'Product-minded',
    sub: 'Building software that solves real problems',
    accent: '#0f172a',
    accentBg: '#f1f5f9',
  },
]

export default function AboutHighlights() {
  return (
    <section className="border-t border-stone-200 bg-stone-50/60">
      <div className="container-shell py-20">
        {/* Section header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-2">About Me</p>
            <h2 className="text-2xl font-display font-bold text-stone-950">
              A bit more about Dilum
            </h2>
          </div>
          <Link
            href="/journey"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 transition hover:text-stone-950"
          >
            Full journey →
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="group h-full rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5 duration-200">
                  <div
                    className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{ backgroundColor: '#f5f5f4' }}
                  >
                    <Icon size={16} style={{ color: '#44403c' }} />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-stone-400 mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-display font-semibold text-stone-900 leading-snug">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-stone-500 leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Quote / personal note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-6 rounded-2xl border border-stone-200 bg-white px-8 py-7 shadow-sm flex flex-col sm:flex-row items-center gap-5"
        >
          <div className="flex-1">
            <p className="text-sm leading-[1.9] text-stone-600 italic">
              "I made a deliberate shift from medicine to computer science — not because it was easy,
              but because building software is where I feel most alive. Every project is a chance to
              turn a messy real-world problem into something clean, useful, and lasting."
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.24em] text-stone-400">
              — Dilum Samarathunga
            </p>
          </div>
          <Link
            href="/journey"
            className="shrink-0 inline-flex items-center gap-2 rounded-2xl bg-stone-950 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 whitespace-nowrap"
          >
            My journey →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
