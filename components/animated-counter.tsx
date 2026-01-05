"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, motion } from "framer-motion"

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(from)

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(from + (to - from) * easeOutQuart))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(to)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, from, to, duration])

  return (
    <motion.span ref={ref} className={className} initial={{ opacity: 0 }} animate={{ opacity: isInView ? 1 : 0 }}>
      {prefix}
      {count}
      {suffix}
    </motion.span>
  )
}
