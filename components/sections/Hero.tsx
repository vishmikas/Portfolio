'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Layers, Brain, Coffee, Camera } from 'lucide-react'
import { personalInfo, projects, certificates } from '@/lib/data'

const stats = [
  { label: 'Projects Built', value: `${projects.length}` },
  { label: 'Certifications', value: `${certificates.length}` },
  { label: 'CS Year', value: '2nd' },
]

const topSkills = [
  { icon: Code2,  label: 'Languages',    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'] },
  { icon: Layers, label: 'Frontend',     items: ['React', 'Next.js', 'Tailwind CSS', 'Vite'] },
  { icon: Brain,  label: 'Backend & AI', items: ['Node.js', 'Flask', 'MongoDB', 'Gemini AI'] },
]

const socials = [
  { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: personalInfo.github,   icon: Github,   label: 'GitHub'   },
  { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
]

const beyond = [
  { icon: Coffee, text: 'Certified Barista — BUONO Coffee Academy · Grade A (92/100)' },
  { icon: Camera, text: 'Photography · Adobe Lightroom, Photoshop, Illustrator' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.58, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-stone-200"
      style={{ background: 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(245,245,244,0.95) 0%, #ffffff 55%)' }}
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: `linear-gradient(#1c1917 1px, transparent 1px), linear-gradient(90deg, #1c1917 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container-shell relative py-20 lg:py-28">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">

          {/* Row 1 — Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="w-fit"
          >
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-stone-200 shadow-md">
              <Image
                src="/dilum.jpg"
                alt="Dilum Samarathunga"
                width={80}
                height={80}
                className="object-cover object-top w-full h-full"
                priority
              />
            </div>
          </motion.div>

          {/* Row 2 — Headline + bio */}
          <motion.div {...fadeUp(0.07)}>
            <h1 className="text-5xl font-display font-bold leading-[1.03] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
              I build software<br />
              <span className="text-stone-400">that feels real.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[1.08rem] leading-[1.85] text-stone-600">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Row 3 — CTAs + socials */}
          <motion.div {...fadeUp(0.14)} className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-stone-950 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              View projects <ArrowRight size={15} />
            </Link>
            <a
              href={personalInfo.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-50"
            >
              <Download size={15} /> Download CV
            </a>
            <div className="flex items-center gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-stone-200 bg-white text-stone-500 shadow-sm transition hover:bg-stone-950 hover:text-white hover:border-stone-950"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Row 4 — Stats + Skills */}
          <motion.div {...fadeUp(0.2)} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[auto_1fr] gap-5">
            {/* Stats */}
            <div className="flex gap-3">
              {stats.map((s) => (
                <div key={s.label} className="flex-1 rounded-2xl border border-stone-200 bg-white p-4 text-center shadow-sm">
                  <p className="text-3xl font-display font-bold text-stone-950">{s.value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-stone-400 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="grid sm:grid-cols-3 gap-3">
              {topSkills.map(({ icon: Icon, label, items }) => (
                <div key={label} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-stone-950 text-white">
                      <Icon size={13} />
                    </div>
                    <span className="text-xs font-medium text-stone-700">{label}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} className="rounded-full bg-stone-50 border border-stone-200 px-2.5 py-0.5 text-[11px] text-stone-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Row 5 — Beyond tech */}
          <motion.div {...fadeUp(0.26)} className="flex flex-wrap gap-3">
            {beyond.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5 rounded-2xl border border-stone-200 bg-white px-4 py-2.5 shadow-sm text-sm text-stone-600">
                <Icon size={14} className="text-stone-400 shrink-0" />
                {text}
              </div>
            ))}
            <Link
              href="/journey"
              className="flex items-center gap-2 rounded-2xl border border-dashed border-stone-300 bg-transparent px-4 py-2.5 text-sm text-stone-500 transition hover:border-stone-400 hover:text-stone-800"
            >
              Full journey <ArrowRight size={13} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
