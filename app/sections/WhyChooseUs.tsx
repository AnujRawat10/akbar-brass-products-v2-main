"use client"
import Link from "next/link"
import { Sparkles, Award, CheckCircle2, Users } from "lucide-react"

export default function WhyChooseUs() {
  const items = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Integrated multi-material production",
      desc: "Complete in-house production across metal, marble, wood and mixed materials.",
      bg: "#FFFFFF",
      iconColor: "#BF8B45",
      hoverTitle: "#AE7250",
      text: "#63403A",
      image: "/variety.jpeg",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Stable quality and repeatability",
      desc: "Repeatable processes built for export-grade quality and long-term reliability.",
      bg: "#EFE8D6",
      iconColor: "#63403A",
      hoverTitle: "#AE7250",
      text: "#63403A",
      image: "/precision.png",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Compliance-ready systems",
      desc: "Manufacturing aligned with international testing and certification standards.",
      bg: "#9A9D85",
      iconColor: "#F0EFE2",
      hoverTitle: "#FFFFFF",
      text: "#F0EFE2",
      image: "/compliance.jpeg",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Generations of manufacturing expertise",
      desc: "50+ years of craftsmanship evolving with modern engineering practices.",
      bg: "#63403A",
      iconColor: "#BF8B45",
      hoverTitle: "#EFE8D6",
      text: "#F0EFE2",
      image: "/quality.jpeg",
    },
  ]

  return (
    <section className="h-screen flex items-center bg-[#DCD5C9] px-6 py-8 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-3 text-[#63403A]">
            Why Choose Us?
          </h2>
          <div className="w-24 h-[1px] bg-[#BF8B45] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-6 md:p-8 border border-black/5 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)]"
              style={{ backgroundColor: item.bg }}
            >
              {/* Background Image on Hover - More Visible */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Lighter gradient for better image visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
              </div>

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#BF8B45]/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />

              <div
                className="relative z-10 mb-4 transition-all duration-700 group-hover:scale-110 group-hover:text-white"
                style={{ color: item.iconColor }}
              >
                {item.icon}
              </div>
              <h3
                className="relative z-10 font-serif text-xl md:text-2xl mb-3 transition-colors duration-500 group-hover:text-white"
                style={{ color: item.text }}
              >
                <span className="group-hover:text-white" style={{ "--hover": item.hoverTitle } as React.CSSProperties}>
                  {item.title}
                </span>
              </h3>
              <p
                className="relative z-10 text-sm md:text-base leading-relaxed transition-colors duration-500 group-hover:text-white/95"
                style={{ color: item.text, opacity: 0.85 }}
              >
                {item.desc}
              </p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#BF8B45] group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/about-akbar/approach">
          <button className="group relative px-8 md:px-12 py-3 md:py-4 bg-white text-black overflow-hidden transition-all duration-500 uppercase tracking-wider font-medium text-xs md:text-sm shadow-2xl hover:shadow-[#BF8B45]/50 transform hover:scale-105">
            {/* Button hover effect */}
            <span className="absolute inset-0 bg-[#BF8B45] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              OUR APPROACH
            </span>
          </button>
        </Link>
        </div>
      </div>
    </section>
  )
}