'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle2, Clock } from 'lucide-react'
import { Project } from '@/lib/data'

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const completed = project.status === 'completed'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block h-full">
        <article className="flex h-full flex-col rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${completed ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
              {completed ? <CheckCircle2 size={12} /> : <Clock size={12} />}
              {completed ? 'Completed' : 'Ongoing'}
            </span>
            <ArrowUpRight size={18} className="text-stone-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>

          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.22em] text-stone-400">{project.year} · {project.team === 'group' ? 'Group project' : 'Solo project'}</p>
            <h3 className="mt-3 text-xl font-display font-semibold text-stone-950">{project.title}</h3>
            <p className="mt-2 text-sm text-stone-500">{project.tagline}</p>
          </div>

          <p className="mb-5 text-sm leading-7 text-stone-600">{project.summary}</p>

          <div className="mb-5 flex flex-wrap gap-2">
            {project.techStack.slice(0, 5).map((tech) => (
              <span key={tech} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-600">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto rounded-2xl bg-stone-50 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Role</p>
            <p className="mt-2 text-sm font-medium text-stone-900">{project.role}</p>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}
