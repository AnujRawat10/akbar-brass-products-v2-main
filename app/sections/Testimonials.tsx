"use client"

import { useState, useEffect } from "react"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const data = [
    "Akbar Brass is our long-term manufacturing partner.",
    "Their consistency changed our supply chain.",
    "From prototype to scale — flawless execution."
  ]

  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % data.length), 1500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="py-28 bg-[#111] text-white text-center px-6">
      <Quote className="mx-auto mb-6 text-[#BF8B45]" />
      <p className="italic text-xl max-w-3xl mx-auto">
        "{data[i]}"
      </p>
    </section>
  )
}
