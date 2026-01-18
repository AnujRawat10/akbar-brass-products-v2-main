"use client"

import { useEffect, useRef, useState } from "react"

export default function Stats() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState({ y: 0, p: 0, c: 0, g: 0 })

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !visible) {
        setVisible(true)
        animate()
      }
    })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [visible])

  const animate = () => {
    let i = 0
    const t = setInterval(() => {
      i++
      setCount({
        y: Math.floor(50 * i / 60),
        p: Math.floor(10000 * i / 60),
        c: Math.floor(25 * i / 60),
        g: Math.floor(500 * i / 60)
      })
      if (i === 60) clearInterval(t)
    }, 30)
  }

  return (
    <section ref={ref} className="py-24 bg-[#111] text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {[
          [count.y, "Years"],
          [count.p, "Products"],
          [count.c, "Countries"],
          [count.g, "Clients"]
        ].map(([v, l], i) => (
          <div key={i}>
            <div className="text-4xl md:text-5xl text-[#BF8B45] font-serif">
              {v}+
            </div>
            <div className="text-xs tracking-widest uppercase text-white/60 mt-2">
              {l}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
