'use client'

import { motion } from 'framer-motion'
import {
  Code2, Monitor, Server, Database, Cpu, Shield, Wrench, Brain,
  Download, FileText
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/ui/Section'
import { skillCategories, personalInfo } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  Code2, Monitor, Server, Database, Cpu, Shield, Wrench, Brain,
}

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Skills section */}
        <Section
          title="Skills"
          subtitle="Technologies and tools I use to build full-stack applications and intelligent systems."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skillCategories.map((cat, i) => {
              const Icon = iconMap[cat.icon] ?? Code2
              return (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="h-full rounded-xl border p-5 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      backgroundColor: 'white',
                      borderColor: '#e7e5e4',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                    }}
                  >
                    {/* Category header */}
                    <div className="flex items-center gap-2.5 mb-4">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: '#f5f5f4' }}
                      >
                        <Icon size={15} style={{ color: '#44403c' }} />
                      </div>
                      <span
                        className="text-sm font-display font-semibold"
                        style={{ color: '#1c1917' }}
                      >
                        {cat.label}
                      </span>
                    </div>

                    {/* Skills list */}
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map(skill => (
                        <span
                          key={skill}
                          className="text-xs font-body px-2 py-1 rounded-md"
                          style={{ backgroundColor: '#fafaf9', color: '#57534e', border: '1px solid #e7e5e4' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Section>

        {/* CV / Resume section */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <h2
              className="text-3xl font-display font-bold mb-2 tracking-tight"
              style={{ color: '#1c1917' }}
            >
              Résumé
            </h2>
            <p className="text-sm font-body" style={{ color: '#78716c' }}>
              A snapshot of my experience, skills, and education.
            </p>
            <div className="w-8 h-0.5 mt-4 rounded-full" style={{ backgroundColor: '#0f172a' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-2xl border overflow-hidden"
              style={{
                borderColor: '#e7e5e4',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)',
              }}
            >
              {/* Toolbar */}
              <div
                className="flex items-center justify-between px-5 py-3 border-b"
                style={{ borderColor: '#e7e5e4', backgroundColor: '#fafaf9' }}
              >
                <div className="flex items-center gap-2">
                  <FileText size={14} style={{ color: '#78716c' }} />
                  <span className="text-xs font-body" style={{ color: '#78716c' }}>
                    Dilum_Vishmika_CV.pdf
                  </span>
                </div>
                <a
                  href={personalInfo.cvPath}
                  download
                  className="inline-flex items-center gap-1.5 text-xs font-body font-medium px-3 py-1.5 rounded-lg transition-all duration-150 hover:opacity-80"
                  style={{ backgroundColor: '#0f172a', color: '#fafaf9' }}
                >
                  <Download size={12} />
                  Download
                </a>
              </div>

              {/* CV content — polished HTML representation */}
              <div
                className="p-8 sm:p-12"
                style={{ backgroundColor: 'white' }}
              >
                <CVContent />
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function CVContent() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 font-body" style={{ color: '#1c1917' }}>
      {/* Header */}
      <div className="text-center pb-6 border-b" style={{ borderColor: '#e7e5e4' }}>
        <h1 className="text-2xl font-display font-bold mb-1">Dilum Samarathunga</h1>
        <p className="text-sm mb-3" style={{ color: '#78716c' }}>
          Full-Stack Developer | AI Enthusiast · Sri Lanka
        </p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs" style={{ color: '#78716c' }}>
          <span>(+94) 71 359 8786</span>
          <span>vishmikas9@gmail.com</span>
          <span>linkedin.com/in/dilum-samarathunga</span>
          <span>github.com/vishmikas</span>
        </div>
      </div>

      {/* Summary */}
      <CVSection title="Summary">
        <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
          Computer Science undergraduate with hands-on experience in building full-stack web applications,
          secure backend systems, and responsive user interfaces. Strong interest in developing scalable
          applications using modern frontend and backend technologies, with additional exposure to AI and
          machine learning through academic and project work.
        </p>
      </CVSection>

      {/* Experience / Projects */}
      <CVSection title="Projects">
        {[
          {
            title: 'Bambinoo – AI-Powered Child Health Record System',
            stack: 'React, Flask, Python, SQLite, JWT, Plotly.js',
            points: [
              'Built a digital Child Health Development Record (CHDR) system replacing manual healthcare tracking.',
              'Developed LSTM-based growth prediction models with WHO-standard SD visualizations.',
              'Integrated Gemini AI for clinical decision support (diagnosis suggestions, medication insights).',
              'Implemented real-time health alerts using WebSockets for risk detection.',
            ],
          },
          {
            title: 'Petty Cash & Expense Management System',
            stack: 'React, Node.js, Express, MongoDB, JWT, Tailwind CSS',
            points: [
              'Developed a multi-user financial tracking system with role-based access.',
              'Designed secure REST APIs with JWT authentication and structured database schemas.',
              'Implemented approval workflows and real-time balance tracking.',
            ],
          },
          {
            title: 'POS Ticketing System (Real-Time Distributed System)',
            stack: 'Node.js, React, MongoDB, Socket.io',
            points: [
              'Engineered a multi-terminal POS system for high-traffic events with real-time synchronization.',
              'Enabled concurrent ticket issuing across multiple devices via LAN-based architecture.',
              'Implemented offline-first functionality with automatic sync on reconnection.',
            ],
          },
        ].map(p => (
          <div key={p.title} className="mb-5 last:mb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
              <h4 className="text-sm font-semibold font-display">{p.title}</h4>
            </div>
            <p className="text-xs mb-2" style={{ color: '#a8a29e' }}>{p.stack}</p>
            <ul className="space-y-1">
              {p.points.map((pt, i) => (
                <li key={i} className="text-xs flex gap-2" style={{ color: '#57534e' }}>
                  <span style={{ color: '#d6d3d1' }}>—</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CVSection>

      {/* Skills */}
      <CVSection title="Technical Skills">
        {[
          ['Languages', 'Python, JavaScript, Java'],
          ['Frontend', 'React.js, Tailwind CSS, HTML, CSS, Plotly.js'],
          ['Backend', 'Node.js, Express.js, Flask, REST APIs, JWT Authentication'],
          ['Databases', 'MongoDB, MySQL, SQLite'],
          ['Systems', 'WebSockets, Real-Time Systems, Distributed Systems'],
          ['Security', 'bcrypt, Helmet, Rate Limiting, Input Validation'],
          ['Tools', 'Git, GitHub, VS Code'],
        ].map(([label, value]) => (
          <div key={label} className="flex gap-3 text-sm mb-1">
            <span className="w-24 flex-shrink-0 font-medium text-xs" style={{ color: '#78716c' }}>
              {label}
            </span>
            <span className="text-xs" style={{ color: '#57534e' }}>{value}</span>
          </div>
        ))}
      </CVSection>

      {/* Education */}
      <CVSection title="Education">
        <div className="mb-3">
          <div className="flex justify-between items-baseline mb-0.5">
            <h4 className="text-sm font-semibold font-display">BSc (Hons) Computer Science</h4>
            <span className="text-xs" style={{ color: '#a8a29e' }}>Jan 2025 – Present</span>
          </div>
          <p className="text-xs" style={{ color: '#78716c' }}>University of Westminster</p>
        </div>
        <div>
          <div className="flex justify-between items-baseline mb-0.5">
            <h4 className="text-sm font-semibold font-display">G.C.E. Advanced Level</h4>
            <span className="text-xs" style={{ color: '#a8a29e' }}>May 2016 – Aug 2020</span>
          </div>
          <p className="text-xs" style={{ color: '#78716c' }}>Kegalu Vidyalaya, Kegalle</p>
        </div>
      </CVSection>

      {/* Certifications */}
      <CVSection title="Certifications">
        <ul className="space-y-1">
          {[
            'Google Project Management Foundations – Coursera',
            'Python Programming – University of Moratuwa',
            'Web Design – University of Moratuwa',
            'Python Learning Paths – LinkedIn Learning',
          ].map((c, i) => (
            <li key={i} className="text-xs flex gap-2" style={{ color: '#57534e' }}>
              <span style={{ color: '#d6d3d1' }}>—</span>
              {c}
            </li>
          ))}
        </ul>
      </CVSection>
    </div>
  )
}

function CVSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3
        className="text-xs font-display font-bold tracking-widest uppercase mb-3 pb-1.5 border-b"
        style={{ color: '#a8a29e', borderColor: '#f5f5f4' }}
      >
        {title}
      </h3>
      {children}
    </div>
  )
}
