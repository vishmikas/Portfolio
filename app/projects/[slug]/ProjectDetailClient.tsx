'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, CheckCircle2, Clock, Check } from 'lucide-react'
import { Project } from '@/lib/data'

export default function ProjectDetailClient({ project }: { project: Project }) {
  const isCompleted = project.status === 'completed'

  return (
    <>
      {/* Hero block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        {/* Status */}
        <span
          className="inline-flex items-center gap-1.5 text-xs font-body px-2.5 py-1 rounded-full mb-4"
          style={{
            backgroundColor: isCompleted ? '#f0fdf4' : '#fffbeb',
            color: isCompleted ? '#16a34a' : '#d97706',
          }}
        >
          {isCompleted ? <CheckCircle2 size={11} /> : <Clock size={11} />}
          {isCompleted ? 'Completed' : 'Ongoing'}
        </span>

        <h1
          className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-3"
          style={{ color: '#1c1917' }}
        >
          {project.title}
        </h1>

        <p
          className="text-lg font-body mb-5"
          style={{ color: '#78716c' }}
        >
          {project.tagline}
        </p>

        <p
          className="text-base font-body leading-relaxed max-w-2xl mb-8"
          style={{ color: '#57534e' }}
        >
          {project.description}
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-body font-medium transition-all duration-150 hover:opacity-80"
              style={{ backgroundColor: '#0f172a', color: '#fafaf9' }}
            >
              <Github size={15} />
              View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-body font-medium border transition-all duration-150 hover:bg-stone-50"
              style={{
                color: '#1c1917',
                borderColor: '#d6d3d1',
                backgroundColor: 'white',
              }}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>

      {/* Details grid */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="grid sm:grid-cols-2 gap-6 mb-10"
      >
        {/* Tech stack */}
        <div
          className="rounded-xl border p-5"
          style={{ backgroundColor: 'white', borderColor: '#e7e5e4', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        >
          <h3
            className="text-xs font-body font-medium tracking-wide uppercase mb-3"
            style={{ color: '#a8a29e' }}
          >
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <span
                key={tech}
                className="text-xs font-body px-2.5 py-1 rounded-lg border"
                style={{
                  color: '#44403c',
                  borderColor: '#e7e5e4',
                  backgroundColor: '#fafaf9',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key highlights */}
        <div
          className="rounded-xl border p-5"
          style={{ backgroundColor: 'white', borderColor: '#e7e5e4', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        >
          <h3
            className="text-xs font-body font-medium tracking-wide uppercase mb-3"
            style={{ color: '#a8a29e' }}
          >
            Key Highlights
          </h3>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check
                  size={13}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: '#16a34a' }}
                />
                <span className="text-sm font-body" style={{ color: '#57534e' }}>
                  {h}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  )
}
