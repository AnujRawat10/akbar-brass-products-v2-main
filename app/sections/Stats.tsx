"use client"

import { useEffect, useRef, useState } from "react"

export default function Stats() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [started, setStarted] = useState(false)

  const [count, setCount] = useState({
    y: 0,
    p: 0,
    c: 0,
    g: 0,
  })

  const targets = {
    y: 50,
    p: 10000,
    c: 25,
    g: 500,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          animate()
        }
      },
      { threshold: 0.4 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  const animate = () => {
    const duration = 3800 // 👈 slower = visible after loader
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)

      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)

      setCount({
        y: Math.floor(targets.y * eased),
        p: Math.floor(targets.p * eased),
        c: Math.floor(targets.c * eased),
        g: Math.floor(targets.g * eased),
      })

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }

  return (
    <section ref={ref} className="py-24 bg-[#111] text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {[
          [count.y, "Years"],
          [count.p, "Products"],
          [count.c, "Countries"],
          [count.g, "Clients"],
        ].map(([value, label], i) => (
          <div key={i}>
            <div className="text-4xl md:text-5xl text-[#BF8B45] font-serif">
              {value}+
            </div>
            <div className="text-xs tracking-widest uppercase text-white/60 mt-2">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
