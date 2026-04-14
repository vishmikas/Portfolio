'use client'

import { useEffect, useState } from 'react'
import SplashScreen from '@/components/SplashScreen'

export default function SplashGate() {
  const [ready, setReady] = useState(false)
  const [done, setDone] = useState(true)

  useEffect(() => {
    setReady(true)
    const shown = sessionStorage.getItem('splash-shown')
    setDone(Boolean(shown))
  }, [])

  const handleComplete = () => {
    sessionStorage.setItem('splash-shown', 'true')
    setDone(true)
  }

  if (!ready || done) return null

  return <SplashScreen onComplete={handleComplete} />
}
