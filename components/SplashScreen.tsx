'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'done'>('loading')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 20)

    const timer = setTimeout(() => {
      setPhase('reveal')
      setTimeout(() => {
        setPhase('done')
        onComplete()
      }, 800)
    }, 1400)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [onComplete])

  const letters = "DILUM".split('')

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: '#0f172a' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-8">
            {/* Animated name */}
            <div className="flex items-center gap-1">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-5xl font-display font-bold tracking-tight"
                  style={{ color: '#fafaf9' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}

              <motion.span
                className="text-5xl font-display font-bold tracking-tight ml-1"
                style={{ color: '#94a3b8' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                .
              </motion.span>
            </div>

            {/* Subtitle */}
            <motion.p
              className="text-sm tracking-[0.3em] uppercase font-body"
              style={{ color: '#64748b' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              Full-Stack Developer
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="w-48 h-px rounded-full overflow-hidden"
              style={{ backgroundColor: '#1e293b' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  backgroundColor: '#fafaf9',
                  width: `${progress}%`,
                  transition: 'width 0.05s linear',
                }}
              />
            </motion.div>
          </div>

          {/* Corner decorations */}
          <motion.div
            className="absolute top-8 left-8 w-8 h-8 border-l border-t"
            style={{ borderColor: '#1e293b' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          />
          <motion.div
            className="absolute top-8 right-8 w-8 h-8 border-r border-t"
            style={{ borderColor: '#1e293b' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-8 h-8 border-l border-b"
            style={{ borderColor: '#1e293b' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-8 h-8 border-r border-b"
            style={{ borderColor: '#1e293b' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
