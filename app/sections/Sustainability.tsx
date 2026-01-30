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

  const scrollImages = [
    "/droneshot.png",
    "/sus.png",
    "/legacy-unit.png",
    "/compliance.jpeg",
    "/quality.jpeg",
  ]

  return (
    <section className="h-screen flex items-center justify-center bg-[#485023] text-white px-6 py-8 pb-64 md:pb-72 relative overflow-hidden">

      {/* Background Image with Blend */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/home-page/earth-day-7903523_1920.png"
          alt="Sustainability background"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#485023]/60 via-[#485023]/70 to-[#485023]/85" />

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#9A9D85]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#BF8B45]/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div
          ref={contentRef}
          className="opacity-0 translate-y-10 transition-all duration-1000"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#9A9D85]/30 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              <Leaf className="w-10 h-10 text-[#BF8B45]" />
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 font-bold">
              Sustainability
            </h2>

            <div className="w-24 h-[2px] bg-[#BF8B45] mx-auto mb-6" />

            <p className="max-w-3xl mx-auto mb-8 text-white/90 text-lg md:text-xl leading-relaxed">
              Sustainable manufacturing supported by ETP, STP, RO systems and dust collectors for clean, compliant production across metal and marble units.
            </p>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
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
          <div className="text-center mb-12">
            <Link href="/sustainability">
          <button className="group relative px-12 py-4 bg-white text-black overflow-hidden transition-all duration-500 uppercase tracking-wider font-medium text-sm md:text-base shadow-2xl hover:shadow-[#BF8B45]/50 transform hover:scale-105">
            {/* Button hover effect */}
            <span className="absolute inset-0 bg-[#BF8B45] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              OUR SUSTAINABILITY
            </span>
          </button>
        </Link>
          </div>

        </div>
      </div>

      {/* Horizontal Scrolling Images - Desktop Only */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 w-full overflow-hidden py-8 z-20">
        <div className="flex gap-6 animate-scroll-left">
          {[...scrollImages, ...scrollImages, ...scrollImages].map((img, idx) => (
            <div key={idx} className="flex-shrink-0 w-72 h-48 relative group">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 transition-transform duration-500 group-hover:scale-105">
                <img
                  src={img}
                  alt="Sustainability"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .animate-scroll-left {
          animation: scrollLeft 20s linear infinite;
        }

        .animate-scroll-right {
          animation: scrollRight 20s linear infinite;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .animate-scroll-left {
            animation: scrollLeft 12s linear infinite;
          }
        }
      `}</style>
    </section>
  )
}