"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Sustainability() {
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-in")
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-28 bg-[#485023] text-white text-center px-6 overflow-hidden">
      
      {/* ✅ animate inner wrapper only */}
      <div
        ref={contentRef}
        className="opacity-0 translate-y-10 transition-all duration-1000"
      >
        <h2 className="font-serif text-4xl md:text-5xl mb-6">
          Sustainability
        </h2>

        <p className="max-w-3xl mx-auto mb-10 text-white/80 text-lg">
          Environment-first manufacturing supported by modern treatment systems,
          responsible sourcing, and long-term ecological commitment.
        </p>

        <Link href="/sustainability">
          <button className="px-10 py-4 bg-white text-black hover:bg-[#BF8B45] transition uppercase tracking-wider">
            Learn More
          </button>
        </Link>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
