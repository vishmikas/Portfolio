'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { personalInfo, projects } from '@/lib/data'

const metrics = [
  { label: 'Projects', value: `${projects.length}+` },
  { label: 'Focus', value: 'Full-stack + AI' },
  { label: 'Style', value: 'Product-minded' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-[radial-gradient(circle_at_top,rgba(245,245,244,0.95),white_42%,white_100%)]">
      <div className="container-shell grid min-h-[88vh] items-center gap-16 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.24em] text-stone-500 shadow-sm"
          >
            <Sparkles size={14} />
            Available for internships and impactful product work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="max-w-4xl text-5xl font-display font-bold leading-[1.02] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl"
          >
            I build software that feels
            <span className="block text-stone-500">useful, modern, and real.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.6 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-stone-600"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-stone-950 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
            >
              View projects
              <ArrowRight size={16} />
            </Link>
            <a
              href={personalInfo.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-50"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.22, duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-[32px] border border-stone-200 bg-white p-6 shadow-[0_20px_70px_rgba(28,25,23,0.08)]">
            <div className="rounded-[28px] bg-stone-950 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.26em] text-stone-400">Dilum Samarathunga</p>
              <h2 className="mt-3 text-2xl font-display font-semibold">Full-Stack Developer</h2>
              <p className="mt-3 text-sm leading-7 text-stone-300">Building full-stack systems, AI-assisted workflows, dashboards, and desktop applications with a practical product mindset.</p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-stone-400">{item.label}</p>
                  <p className="mt-2 text-sm font-medium text-stone-900">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              Open to building meaningful products across web, AI-backed systems, and software that solves practical problems.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
