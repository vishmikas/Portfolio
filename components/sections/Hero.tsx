'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, GraduationCap, Sparkles, Code2, Layers, Brain } from 'lucide-react'
import { personalInfo, projects, skillCategories } from '@/lib/data'

const stats = [
  { label: 'Projects Built', value: `${projects.length}` },
  { label: 'Certifications', value: '9+' },
  { label: 'Year', value: '2nd' },
]

const topSkills = [
  { icon: Code2, label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java'] },
  { icon: Layers, label: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Vite'] },
  { icon: Brain, label: 'Backend & AI', items: ['Node.js', 'Flask', 'MongoDB', 'Gemini AI'] },
]

const socials = [
  { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: personalInfo.github, icon: Github, label: 'GitHub' },
  { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
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
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,245,244,0.95) 0%, #ffffff 60%)' }}
    >
      {/* Faint grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#1c1917 1px, transparent 1px), linear-gradient(90deg, #1c1917 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container-shell relative py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] lg:gap-20 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-10">

            {/* Availability badge */}
            <motion.div {...fadeUp(0)} className="w-fit">
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.24em] text-stone-500 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for internships &amp; product work
              </div>
            </motion.div>

            {/* Headline */}
            <div>
              <motion.h1
                {...fadeUp(0.06)}
                className="text-5xl font-display font-bold leading-[1.03] tracking-tight text-stone-950 sm:text-6xl lg:text-[4rem] xl:text-[4.5rem]"
              >
                I build software
                <br />
                <span className="text-stone-400">that feels real.</span>
              </motion.h1>

              <motion.p
                {...fadeUp(0.14)}
                className="mt-6 max-w-xl text-[1.05rem] leading-[1.8] text-stone-600"
              >
                {personalInfo.bio}
              </motion.p>
            </div>

            {/* CTA row */}
            <motion.div {...fadeUp(0.22)} className="flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-stone-950 px-5 py-3 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                View projects
                <ArrowRight size={15} />
              </Link>
              <a
                href={personalInfo.cvPath}
                download
                className="inline-flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-50 hover:border-stone-300"
              >
                <Download size={15} />
                Download CV
              </a>

              {/* Socials */}
              <div className="flex items-center gap-2 ml-1">
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

            {/* Quick info strip */}
            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 text-sm text-stone-500">
                <MapPin size={14} className="text-stone-400" />
                Sri Lanka
              </div>
              <div className="w-px bg-stone-200 self-stretch" />
              <div className="flex items-center gap-2 text-sm text-stone-500">
                <GraduationCap size={14} className="text-stone-400" />
                BSc Computer Science — Westminster (IIT)
              </div>
              <div className="w-px bg-stone-200 self-stretch" />
              <div className="flex items-center gap-2 text-sm text-stone-500">
                <Sparkles size={14} className="text-stone-400" />
                Full-stack + AI/ML
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.36)} className="grid grid-cols-3 gap-4 max-w-sm">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm text-center"
                >
                  <p className="text-2xl font-display font-bold text-stone-950">{s.value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-stone-400">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Skills grid */}
            <motion.div {...fadeUp(0.42)} className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.28em] text-stone-400">Core Skills</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {topSkills.map(({ icon: Icon, label, items }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-stone-950 text-white">
                        <Icon size={14} />
                      </div>
                      <span className="text-xs font-medium text-stone-700">{label}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-stone-50 border border-stone-200 px-2.5 py-0.5 text-[11px] text-stone-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — Photo card ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.18, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-28 lg:top-32"
          >
            <div className="rounded-[32px] border border-stone-200 bg-white p-5 shadow-[0_24px_80px_rgba(28,25,23,0.1)]">
              {/* Photo */}
              <div className="relative overflow-hidden rounded-[24px] aspect-[3/4] w-full bg-stone-100">
                <Image
                  src="/dilum.jpg"
                  alt="Dilum Samarathunga"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Bottom gradient overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-2/5"
                  style={{
                    background: 'linear-gradient(to top, rgba(15,23,42,0.88) 0%, transparent 100%)',
                  }}
                />
                {/* Name on photo */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-stone-400 mb-1">
                    Full-Stack Developer
                  </p>
                  <h2 className="text-xl font-display font-bold text-white leading-tight">
                    Dilum Samarathunga
                  </h2>
                </div>
              </div>

              {/* Info below photo */}
              <div className="mt-4 space-y-3">
                {/* Status */}
                <div className="flex items-center justify-between rounded-2xl bg-emerald-50 border border-emerald-100 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-sm font-medium text-emerald-800">Open to opportunities</span>
                  </div>
                  <Link
                    href="/projects"
                    className="text-xs font-medium text-emerald-700 hover:text-emerald-900 transition"
                  >
                    See work →
                  </Link>
                </div>

                {/* Location + university */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-2xl border border-stone-200 bg-stone-50 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-1">Based in</p>
                    <p className="text-xs font-medium text-stone-800">Sri Lanka 🇱🇰</p>
                  </div>
                  <div className="rounded-2xl border border-stone-200 bg-stone-50 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-1">Studying at</p>
                    <p className="text-xs font-medium text-stone-800">IIT / Westminster</p>
                  </div>
                </div>

                {/* Contact shortcut */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-between w-full rounded-2xl bg-stone-950 px-4 py-3 text-white transition hover:bg-stone-800 group"
                >
                  <span className="text-sm font-medium">Get in touch</span>
                  <Mail size={15} className="text-stone-400 group-hover:text-white transition" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
