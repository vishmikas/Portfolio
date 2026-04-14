'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/ui/Section'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib/data'

const filters = ['All', 'Completed', 'Ongoing'] as const
type Filter = typeof filters[number]

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>('All')

  const filtered = projects.filter(p => {
    if (active === 'All') return true
    return p.status === active.toLowerCase()
  })

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Section
          title="Projects"
          subtitle={`${projects.length} projects across full-stack web and AI/ML.`}
        >
          {/* Filter pills */}
          <div className="flex gap-2 mb-8">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="relative px-4 py-1.5 rounded-full text-sm font-body transition-colors duration-150"
                style={{
                  color: active === f ? '#fafaf9' : '#78716c',
                  backgroundColor: active === f ? '#0f172a' : 'transparent',
                  border: `1px solid ${active === f ? '#0f172a' : '#e7e5e4'}`,
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-sm font-body" style={{ color: '#a8a29e' }}>
                No projects match this filter.
              </p>
            </div>
          )}
        </Section>
      </main>
      <Footer />
    </>
  )
}
