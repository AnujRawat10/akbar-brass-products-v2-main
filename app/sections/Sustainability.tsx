"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Droplet, Leaf, Recycle, Wind } from "lucide-react"
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
    <section className="min-h-screen md:min-h-screen flex items-center justify-center bg-[#485023] text-white px-6 py-16 relative overflow-hidden">
      
      {/* Background Image with Blend */}
      <div className="absolute inset-0 opacity-15">
        <img 
          src="/home-page/earth-day-7903523_1920.png" 
          alt="Sustainability background"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#485023]/80 via-[#485023]/90 to-[#485023]" />

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#9A9D85]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#BF8B45]/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div
          ref={contentRef}
          className="opacity-0 translate-y-10 transition-all duration-1000"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#9A9D85]/30 rounded-full mb-6 backdrop-blur-sm border border-white/20">
              <Leaf className="w-10 h-10 text-[#BF8B45]" />
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 font-bold">
              Sustainability
            </h2>

            <div className="w-24 h-[2px] bg-[#BF8B45] mx-auto mb-8" />

            <p className="max-w-3xl mx-auto mb-12 text-white/90 text-lg md:text-xl leading-relaxed">
              Sustainable manufacturing supported by ETP, STP, RO systems and dust collectors for clean, compliant production across metal and marble units.
            </p>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Droplet className="w-8 h-8 text-[#BF8B45] mb-3" />
              <span className="text-sm text-white/80 font-medium">Water Treatment</span>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Recycle className="w-8 h-8 text-[#BF8B45] mb-3" />
              <span className="text-sm text-white/80 font-medium">Recycling Systems</span>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Wind className="w-8 h-8 text-[#BF8B45] mb-3" />
              <span className="text-sm text-white/80 font-medium">Air Quality Control</span>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Leaf className="w-8 h-8 text-[#BF8B45] mb-3" />
              <span className="text-sm text-white/80 font-medium">Clean Production</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link href="/sustainability">
              <button className="px-12 py-4 bg-white text-[#485023] hover:bg-[#BF8B45] hover:text-white transition-all duration-300 uppercase tracking-wider font-semibold text-sm shadow-xl hover:shadow-2xl hover:scale-105">
                Learn More
              </button>
            </Link>
          </div>
        </div>
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