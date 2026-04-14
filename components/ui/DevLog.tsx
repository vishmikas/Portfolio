'use client'

import { motion } from 'framer-motion'
import { Code2, GitCommit, Lightbulb, Wrench, RefreshCw, Trophy } from 'lucide-react'
import { DevLogEntry } from '@/lib/data'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

const statusConfig = {
  feature: { icon: Code2, label: 'Feature', color: '#3b82f6', bg: '#eff6ff' },
  fix: { icon: Wrench, label: 'Bug Fix', color: '#ef4444', bg: '#fef2f2' },
  refactor: { icon: RefreshCw, label: 'Refactor', color: '#8b5cf6', bg: '#f5f3ff' },
  milestone: { icon: Trophy, label: 'Milestone', color: '#16a34a', bg: '#f0fdf4' },
  planning: { icon: Lightbulb, label: 'Planning', color: '#d97706', bg: '#fffbeb' },
}

interface DevLogProps {
  logs: DevLogEntry[]
}

export default function DevLog({ logs }: DevLogProps) {
  if (logs.length === 0) {
    return (
      <div
        className="rounded-xl border p-10 text-center"
        style={{ borderColor: '#e7e5e4', backgroundColor: '#fafaf9' }}
      >
        <GitCommit size={24} className="mx-auto mb-3" style={{ color: '#d6d3d1' }} />
        <p className="text-sm font-body" style={{ color: '#a8a29e' }}>
          No development logs yet for this project.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {logs.map((log, i) => {
        const config = statusConfig[log.status]
        const Icon = config.icon

        return (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-xl border overflow-hidden"
              style={{
                backgroundColor: 'white',
                borderColor: '#e7e5e4',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              }}
            >
              {/* Header */}
              <div className="px-5 py-4 flex items-start gap-3">
                {/* Status icon */}
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: config.bg }}
                >
                  <Icon size={13} style={{ color: config.color }} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span
                      className="text-xs font-body px-2 py-0.5 rounded-full font-medium"
                      style={{ backgroundColor: config.bg, color: config.color }}
                    >
                      {config.label}
                    </span>
                    <time className="text-xs font-body" style={{ color: '#a8a29e' }}>
                      {new Date(log.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>

                  <h4
                    className="text-sm font-display font-semibold mb-1"
                    style={{ color: '#1c1917' }}
                  >
                    {log.title}
                  </h4>

                  <p className="text-sm font-body leading-relaxed" style={{ color: '#57534e' }}>
                    {log.description}
                  </p>
                </div>
              </div>

              {/* Code snippet */}
              {log.codeSnippet && (
                <div>
                  <div
                    className="px-5 py-2 flex items-center gap-2 border-t"
                    style={{
                      borderColor: '#f5f5f4',
                      backgroundColor: '#fafaf9',
                    }}
                  >
                    <Code2 size={12} style={{ color: '#a8a29e' }} />
                    <span className="text-xs font-code" style={{ color: '#78716c' }}>
                      {log.codeSnippet.filename || log.codeSnippet.language}
                    </span>
                  </div>
                  <div className="text-sm overflow-auto" style={{ maxHeight: '320px' }}>
                    <SyntaxHighlighter
                      language={log.codeSnippet.language}
                      style={oneLight}
                      customStyle={{
                        margin: 0,
                        borderRadius: 0,
                        fontSize: '12px',
                        lineHeight: '1.7',
                        backgroundColor: '#fafaf9',
                        padding: '16px 20px',
                      }}
                      showLineNumbers
                      lineNumberStyle={{ color: '#d6d3d1', fontSize: '11px' }}
                    >
                      {log.codeSnippet.code}
                    </SyntaxHighlighter>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
