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

export default function SkillsPageClient() {
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
      {/* keep the rest of your existing CVContent exactly as it is */}
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