"use client"
import Link from "next/link"
export default function WhatWeDo() {
  const materials = [
    {
      title: "Metal",
      image: "/home-page/metal1.jpeg"
    },
    {
      title: "Marble",
      image: "/home-page/marble.jpeg"
    },
    {
      title: "Wood",
      image: "/home-page/wood.jpeg"
    },
    {
      title: "Mixed Materials",
      image: "/home-page/metal2.jpeg"
    }
  ]

  return (
    <section className="h-[100svh] flex items-center bg-black text-white px-4 sm:px-6 pt-20 md:pt-24 pb-6 md:pb-8 overflow-hidden snap-start">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="font-serif mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-2 md:mb-4">
          What We Do?
        </h2>
        <p className="text-center text-white/80 text-[11px] sm:text-xs md:text-base mb-4 md:mb-8 max-w-3xl mx-auto px-2">
          We manufacture multi-material home products across furniture, décor, lighting, kitchen/serveware, outdoor, and seasonal categories — engineered for global markets.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-6 mb-4 md:mb-8">
          {materials.map((item) => (
            <div
              key={item.title}
              className="group relative h-[120px] sm:h-[160px] md:h-[280px] lg:h-[320px] overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-700" />
              <div className="relative z-10 h-full flex items-end p-3 sm:p-4 md:p-6">
                <h3 className="font-serif text-sm sm:text-base md:text-xl lg:text-2xl tracking-wide">
                  {item.title}
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#BF8B45] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/capabilities/materials">
            <button className="group relative px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 bg-white text-black overflow-hidden transition-all duration-500 uppercase tracking-wider font-medium text-[10px] sm:text-xs md:text-sm shadow-2xl hover:shadow-[#BF8B45]/50 transform hover:scale-105">
              {/* Button hover effect */}
              <span className="absolute inset-0 bg-[#BF8B45] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Our Capabilities
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
