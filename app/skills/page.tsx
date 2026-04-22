'use client'

import { motion } from 'framer-motion'
import {
  Code2, Monitor, Server, Database, Wrench, Brain, Shield,
  Download, FileText
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/ui/Section'
import { skillCategories, personalInfo } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  Code2, Monitor, Server, Database, Wrench, Brain, Shield,
}

export const metadata = {
  title: 'Skills',
  description: 'Technologies and tools Dilum Samarathunga uses — Python, React, Node.js, Flask, MongoDB, TensorFlow, and more.',
  openGraph: {
    title: 'Skills — Dilum Samarathunga',
    description: 'Technologies and tools Dilum Samarathunga uses — Python, React, Node.js, Flask, MongoDB, TensorFlow, and more.',
  },
}

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        <Section
          title="Skills"
          subtitle="Every technology listed here has been used in an actual project — nothing added for show."
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
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#f5f5f4' }}>
                        <Icon size={15} style={{ color: '#44403c' }} />
                      </div>
                      <span className="text-sm font-display font-semibold" style={{ color: '#1c1917' }}>
                        {cat.label}
                      </span>
                    </div>
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

        {/* Résumé */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <h2 className="text-3xl font-display font-bold mb-2 tracking-tight" style={{ color: '#1c1917' }}>
              Résumé
            </h2>
            <p className="text-sm font-body" style={{ color: '#78716c' }}>
              A complete snapshot of my experience, skills, and education.
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
              style={{ borderColor: '#e7e5e4', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)' }}
            >
              {/* Toolbar */}
              <div
                className="flex items-center justify-between px-5 py-3 border-b"
                style={{ borderColor: '#e7e5e4', backgroundColor: '#fafaf9' }}
              >
                <div className="flex items-center gap-2">
                  <FileText size={14} style={{ color: '#78716c' }} />
                  <span className="text-xs font-body" style={{ color: '#78716c' }}>
                    Dilum_Samarathunga.pdf
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

              <div className="p-8 sm:p-12" style={{ backgroundColor: 'white' }}>
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
        <p className="text-sm mb-3" style={{ color: '#78716c' }}>Full-Stack Developer · Sri Lanka</p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs" style={{ color: '#78716c' }}>
          <span>(+94) 71 359 8786</span>
          <span>vishmikas9@gmail.com</span>
          <span>linkedin.com/in/dilum-samarathunga</span>
          <span>github.com/vishmikas</span>
          <span>portfolio-rosegamma-53.vercel.app</span>
        </div>
      </div>

      {/* About */}
      <CVSection title="About Me">
        <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
          Computer Science undergraduate specializing in full-stack development with exposure to AI/ML systems.
          Experienced in building scalable web applications, real-time platforms, and integrating machine learning
          models into production. Passionate about developing impactful software solutions.
        </p>
      </CVSection>

      {/* Education */}
      <CVSection title="Education">
        {[
          { degree: 'BSc (Hons) Computer Science', org: 'University of Westminster (via IIT)', period: 'Jan 2025 – Present', note: '' },
          { degree: 'Faculty of Medicine', org: 'Sabaragamuwa University of Sri Lanka', period: 'Jan 2022 – Aug 2023', note: 'Selected for a competitive medical program; transitioned to Computer Science to pursue a career in software engineering.' },
          { degree: 'G.C.E. Advanced Level', org: 'Kegalu Vidyalaya, Kegalle', period: 'May 2016 – Aug 2020', note: '' },
        ].map(e => (
          <div key={e.degree} className="mb-4 last:mb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-1 mb-0.5">
              <h4 className="text-sm font-semibold font-display">{e.degree}</h4>
              <span className="text-xs" style={{ color: '#a8a29e' }}>{e.period}</span>
            </div>
            <p className="text-xs" style={{ color: '#78716c' }}>{e.org}</p>
            {e.note && <p className="text-xs mt-1 leading-relaxed" style={{ color: '#a8a29e' }}>{e.note}</p>}
          </div>
        ))}
      </CVSection>

      {/* Academic Projects */}
      <CVSection title="Academic Projects">
        {[
          {
            title: 'Bambinoo – AI-Powered Child Health Record System',
            stack: 'React · Python · Flask · SQLite · JWT · Plotly.js · TensorFlow/Keras · Gemini AI · Pandas · Flask-SocketIO',
            points: [
              'Built data preprocessing pipeline and trained an LSTM model with a custom attention layer for growth trajectory forecasting.',
              'Developed WHO-based growth prediction charts using Plotly.js, combining model outputs with standard median curves.',
              'Integrated Google Gemini AI for clinical decision support — diagnosis, pattern recognition, medication analysis, compliance tracking.',
              'Implemented real-time health alert system using Flask-SocketIO to detect and notify critical conditions (underweight, stunting, rapid weight changes).',
              'Built real-time admin dashboard monitoring DB status, ML model state, API latency, active sessions, and system uptime.',
            ],
          },
        ].map(p => (
          <div key={p.title} className="mb-5 last:mb-0">
            <h4 className="text-sm font-semibold font-display mb-1">{p.title}</h4>
            <p className="text-xs mb-2" style={{ color: '#a8a29e' }}>{p.stack}</p>
            <ul className="space-y-1">
              {p.points.map((pt, i) => (
                <li key={i} className="text-xs flex gap-2" style={{ color: '#57534e' }}>
                  <span style={{ color: '#d6d3d1' }}>—</span>{pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CVSection>

      {/* Personal Projects */}
      <CVSection title="Personal Projects">
        {[
          {
            title: 'Festival POS Ticketing System',
            stack: 'Node.js · React · Vite · MongoDB · Socket.io · IndexedDB · Express',
            points: [
              'Production-grade multi-terminal Point of Sale system for live festivals and shopping events.',
              'Cashier laptops connect over LAN to a master server; auto-detects LAN IP and generates connection URL on startup.',
              'Real-time ticket issuing across multiple terminals simultaneously via Socket.io.',
              'Full offline mode using IndexedDB — terminals generate client-side ticket IDs and continue issuing during network failures.',
              'Shift management with open/close shift, Z-report per terminal, and void or refund functionality.',
              'Admin dashboard with live global revenue metrics, per-terminal performance stats, event management, and receipt template editor.',
            ],
          },
          {
            title: 'Petty Cash & Expense Management App',
            stack: 'React · Node.js · Express · MongoDB · Mongoose · JWT · Tailwind CSS',
            points: [
              'Full-stack multi-user organizational petty cash tracking system with role-based access control.',
              'Four user roles — Admin, Manager, Employee, Accountant — each with scoped permissions and RESTful API endpoints.',
              'Expense approval workflow: employees submit → managers approve/reject → accountants view reports and analytics.',
              'Secured with bcrypt password hashing, JWT authentication, Helmet headers, rate limiting, and input validation middleware.',
            ],
          },
          {
            title: 'Snake Game',
            stack: 'React · Vite · Java · Spring Boot · REST API · Maven',
            points: [
              'Full-stack Snake Game with React frontend and Spring Boot backend managing all game logic and state.',
              'Designed RESTful API endpoints for real-time game state updates, movement handling, and client-server synchronization.',
              'Implemented backend game engine: snake movement, collision detection (wall & self), scoring system, and game status management.',
            ],
          },
          {
            title: 'Student Result Management System',
            stack: 'Java (Swing) · MySQL · JDBC · DAO Pattern',
            points: [
              'Desktop-based CRUD application to manage and process student academic results.',
              'Layered architecture using DAO pattern — StudentDAO and ResultDAO classes handle all DB operations via JDBC.',
              'Integrated MySQL with PreparedStatement queries to prevent SQL injection.',
            ],
          },
          {
            title: 'Tour Booking Website',
            stack: 'HTML · CSS · JavaScript · Node.js · MongoDB · EmailJS',
            points: [
              'Responsive booking-focused website with inquiry capture and automated email confirmations via EmailJS.',
            ],
          },
        ].map(p => (
          <div key={p.title} className="mb-5 last:mb-0">
            <h4 className="text-sm font-semibold font-display mb-1">{p.title}</h4>
            <p className="text-xs mb-2" style={{ color: '#a8a29e' }}>{p.stack}</p>
            <ul className="space-y-1">
              {p.points.map((pt, i) => (
                <li key={i} className="text-xs flex gap-2" style={{ color: '#57534e' }}>
                  <span style={{ color: '#d6d3d1' }}>—</span>{pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CVSection>

      {/* Skills */}
      <CVSection title="Technical Skills">
        {[
          ['Languages',   'Python, Java, JavaScript, HTML, CSS'],
          ['Frontend',    'React, Vite, Tailwind CSS, Plotly.js, Recharts'],
          ['Backend',     'Node.js, Express, Flask, Spring Boot, REST API, JWT, Socket.IO, WebSockets'],
          ['Databases',   'MongoDB, MySQL, SQLite, Mongoose, SQLAlchemy, JDBC, IndexedDB'],
          ['AI / ML',     'TensorFlow / Keras, Gemini AI, Pandas'],
          ['Security',    'bcryptjs, Helmet, Rate Limiting, Mongo Sanitize'],
          ['Tools',       'Git, GitHub, Postman, VS Code, IntelliJ IDEA, ClickUp'],
          ['Creative',    'Adobe Lightroom, Adobe Photoshop, Adobe Illustrator, Photography'],
        ].map(([label, value]) => (
          <div key={label} className="flex gap-3 mb-2">
            <span className="w-24 flex-shrink-0 font-medium text-xs" style={{ color: '#78716c' }}>{label}</span>
            <span className="text-xs" style={{ color: '#57534e' }}>{value}</span>
          </div>
        ))}
      </CVSection>

      {/* Work Experience */}
      <CVSection title="Work Experience & Training">
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-1 mb-0.5">
            <h4 className="text-sm font-semibold font-display">Barista Masterclass</h4>
            <span className="text-xs" style={{ color: '#a8a29e' }}>May 2024 – Jul 2024</span>
          </div>
          <p className="text-xs mb-2" style={{ color: '#78716c' }}>BUONO Coffee Academy</p>
          <ul className="space-y-1">
            {[
              'Completed a 40-hour hands-on Barista Skills program.',
              'Final Grade: A (Distinction) — 92/100.',
              'Covered: Coffee Brewing, Extraction, Milk Techniques, Café Management, Customer Service.',
            ].map((pt, i) => (
              <li key={i} className="text-xs flex gap-2" style={{ color: '#57534e' }}>
                <span style={{ color: '#d6d3d1' }}>—</span>{pt}
              </li>
            ))}
          </ul>
        </div>
      </CVSection>

      {/* Certifications */}
      <CVSection title="Certifications">
        <ul className="space-y-1">
          {[
            'Foundations of Project Management – Google / Coursera (Mar 2026)',
            'Project Initiation: Starting a Successful Project – Google / Coursera (Apr 2026)',
            'Python for Beginners – University of Moratuwa (Feb 2026)',
            'Web Design for Beginners – University of Moratuwa',
            'Python Essential Training – LinkedIn Learning (Apr 2025)',
            'Python for Non-Programmers – LinkedIn Learning (May 2025)',
            'Python Data Structures: Trees – LinkedIn Learning (Apr 2025)',
            'IEEEXtreme 19.0 Programming Competition – IEEE (Oct 2025)',
            'Barista Skills Masterclass – BUONO Coffee Academy (May 2024)',
          ].map((c, i) => (
            <li key={i} className="text-xs flex gap-2" style={{ color: '#57534e' }}>
              <span style={{ color: '#d6d3d1' }}>—</span>{c}
            </li>
          ))}
        </ul>
      </CVSection>

      {/* Extracurricular */}
      <CVSection title="Extracurricular">
        <div>
          <h4 className="text-sm font-semibold font-display mb-0.5">Photography Club — Sabaragamuwa University</h4>
          <p className="text-xs leading-relaxed" style={{ color: '#57534e' }}>
            Served as a Committee Member of the University Photography Club, contributing to event photography
            and documentation while developing strong editing and design skills using Adobe Lightroom,
            Photoshop, and Illustrator.
          </p>
        </div>
      </CVSection>

      {/* Referees */}
      <CVSection title="Referees">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { name: 'Mr. G.A. Pubudu Janith', title: 'Lecturer, IIT', phone: '+94 77 127 4857', email: 'pubudu.a@iit.ac.lk' },
            { name: 'Ms. Akarshani Ramanayake', title: 'Lecturer, IIT', phone: '+94 71 999 3444', email: 'akarshani.r@iit.ac.lk' },
          ].map(r => (
            <div key={r.name}>
              <p className="text-xs font-semibold" style={{ color: '#1c1917' }}>{r.name}</p>
              <p className="text-xs" style={{ color: '#78716c' }}>{r.title}</p>
              <p className="text-xs" style={{ color: '#78716c' }}>{r.phone}</p>
              <p className="text-xs" style={{ color: '#78716c' }}>{r.email}</p>
            </div>
          ))}
        </div>
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
