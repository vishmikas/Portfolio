'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit' | 'done'>('enter')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 1600)
    const t2 = setTimeout(() => setPhase('exit'), 2500)
    const t3 = setTimeout(() => {
      setPhase('done')
      onComplete()
    }, 3200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#fafaf9' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Concentric rings */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            {[280, 420, 580].map((size, i) => (
              <motion.div
                key={size}
                className="absolute rounded-full border"
                style={{ width: size, height: size, borderColor: 'rgba(0,0,0,0.055)' }}
                initial={{ scale: 0.82, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15 * i, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </motion.div>

          <div className="relative flex flex-col items-center gap-9">
            {/* Photo */}
            <motion.div
              className="relative"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Rotating gradient ring */}
              <motion.div
                className="absolute -inset-[14px] rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #e7e5e4 0%, #a8a29e 30%, #e7e5e4 60%, #f5f5f4 80%, #e7e5e4 100%)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              {/* White gap */}
              <div className="absolute -inset-[10px] rounded-full" style={{ backgroundColor: '#fafaf9' }} />
              {/* Photo */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/dilum.jpg"
                  alt="Dilum Samarathunga"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Online dot */}
              <motion.div
                className="absolute bottom-0.5 right-0.5 w-[18px] h-[18px] rounded-full border-[3px]"
                style={{ backgroundColor: '#22c55e', borderColor: '#fafaf9' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.65, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>

            {/* Name */}
            <div className="flex flex-col items-center gap-2.5">
              <motion.h1
                className="text-[2rem] font-display font-bold tracking-tight"
                style={{ color: '#1c1917' }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                Dilum Samarathunga
              </motion.h1>

              <motion.div
                className="flex items-center gap-2.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.48, duration: 0.45 }}
              >
                <span className="text-[10px] uppercase tracking-[0.3em] font-body" style={{ color: '#78716c' }}>
                  Full-Stack Developer
                </span>
                <span style={{ color: '#d6d3d1' }}>·</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-body" style={{ color: '#78716c' }}>
                  AI &amp; Product
                </span>
              </motion.div>
            </div>

            {/* Progress line */}
            <motion.div
              className="w-20 h-px overflow-hidden rounded-full"
              style={{ backgroundColor: '#e7e5e4' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: '#1c1917' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.65, duration: 1.6, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>

          {/* Corner marks */}
          {[
            'top-7 left-7 border-l border-t',
            'top-7 right-7 border-r border-t',
            'bottom-7 left-7 border-l border-b',
            'bottom-7 right-7 border-r border-b',
          ].map((pos, i) => (
            <motion.div
              key={i}
              className={`absolute w-5 h-5 ${pos}`}
              style={{ borderColor: '#d6d3d1' }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
