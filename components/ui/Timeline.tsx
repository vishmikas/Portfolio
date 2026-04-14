'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Briefcase, BadgeCheck } from 'lucide-react'
import { TimelineMilestone } from '@/lib/data'

const typeConfig = {
  education: { icon: GraduationCap, color: '#3b82f6', bg: '#eff6ff' },
  achievement: { icon: Award, color: '#d97706', bg: '#fffbeb' },
  certification: { icon: BadgeCheck, color: '#16a34a', bg: '#f0fdf4' },
  work: { icon: Briefcase, color: '#8b5cf6', bg: '#f5f3ff' },
}

interface TimelineProps {
  milestones: TimelineMilestone[]
}

export default function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className="absolute left-5 top-5 bottom-5 w-px"
        style={{ backgroundColor: '#e7e5e4' }}
      />

      <div className="space-y-8">
        {milestones.map((milestone, i) => {
          const config = typeConfig[milestone.type]
          const Icon = config.icon

          return (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-6 pl-14"
            >
              {/* Icon node */}
              <div
                className="absolute left-0 w-10 h-10 rounded-xl flex items-center justify-center border-2 z-10"
                style={{
                  backgroundColor: config.bg,
                  borderColor: 'white',
                  boxShadow: '0 0 0 1px #e7e5e4',
                }}
              >
                <Icon size={16} style={{ color: config.color }} />
              </div>

              {/* Content card */}
              <div
                className="flex-1 rounded-xl border p-5 transition-all duration-200 hover:shadow-md"
                style={{
                  backgroundColor: 'white',
                  borderColor: '#e7e5e4',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                {/* Date + org */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <time className="text-xs font-body font-medium" style={{ color: config.color }}>
                    {milestone.date}
                    {milestone.endDate && ` – ${milestone.endDate}`}
                  </time>
                  <span style={{ color: '#e7e5e4' }}>·</span>
                  <span className="text-xs font-body" style={{ color: '#a8a29e' }}>
                    {milestone.organization}
                  </span>
                </div>

                <h3
                  className="text-sm font-display font-semibold mb-2 leading-snug"
                  style={{ color: '#1c1917' }}
                >
                  {milestone.title}
                </h3>

                <p className="text-sm font-body leading-relaxed" style={{ color: '#57534e' }}>
                  {milestone.description}
                </p>

                {/* Tags */}
                {milestone.tags && milestone.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {milestone.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-body px-2 py-0.5 rounded-md"
                        style={{ backgroundColor: '#f5f5f4', color: '#78716c' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
