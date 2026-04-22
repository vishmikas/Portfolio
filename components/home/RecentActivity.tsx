'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code2, Lightbulb, RefreshCw, Trophy, Wrench } from 'lucide-react'
import { recentDevLogs } from '@/lib/data'

const statusConfig = {
  feature:   { icon: Code2,      label: 'Feature',     color: '#3b82f6', bg: '#eff6ff', dot: '#3b82f6' },
  fix:       { icon: Wrench,     label: 'Fix',         color: '#ef4444', bg: '#fef2f2', dot: '#ef4444' },
  refactor:  { icon: RefreshCw,  label: 'Refactor',    color: '#8b5cf6', bg: '#f5f3ff', dot: '#8b5cf6' },
  milestone: { icon: Trophy,     label: 'Milestone',   color: '#16a34a', bg: '#f0fdf4', dot: '#16a34a' },
  planning:  { icon: Lightbulb,  label: 'Planning',    color: '#d97706', bg: '#fffbeb', dot: '#d97706' },
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const days = Math.floor(diff / 86400000)
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  return `${Math.floor(months / 12)}y ago`
}

export default function RecentActivity() {
  return (
    <section className="border-t border-stone-200 bg-stone-50/50">
      <div className="container-shell py-16">
        <div className="max-w-5xl mx-auto">

          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-2">Dev Log</p>
              <h2 className="text-2xl font-display font-bold text-stone-950">Recent Activity</h2>
            </div>
          </div>

          {/* Timeline list */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-stone-200" />

            <div className="space-y-1">
              {recentDevLogs.map((log, i) => {
                const config = statusConfig[log.status]
                const Icon = config.icon

                return (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex gap-5 items-start py-4 pl-1"
                  >
                    {/* Dot */}
                    <div
                      className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border-2 border-white shadow-sm"
                      style={{ backgroundColor: config.bg }}
                    >
                      <Icon size={13} style={{ color: config.color }} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pt-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: config.bg, color: config.color }}
                        >
                          {config.label}
                        </span>
                        {log.project && (
                          <span className="text-[10px] text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
                            {log.project}
                          </span>
                        )}
                        <span className="text-[10px] text-stone-400 ml-auto">{timeAgo(log.date)}</span>
                      </div>

                      <h3 className="text-sm font-display font-semibold text-stone-900 leading-snug">
                        {log.title}
                      </h3>
                      <p className="mt-1 text-xs text-stone-500 leading-relaxed">
                        {log.description}
                      </p>

                      {log.projectSlug && (
                        <Link
                          href={`/projects/${log.projectSlug}`}
                          className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-stone-500 hover:text-stone-900 transition-colors"
                        >
                          View project <ArrowRight size={10} />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
