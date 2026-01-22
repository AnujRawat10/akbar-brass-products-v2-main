"use client"

import { Sparkles, Award, Users, CheckCircle2 } from "lucide-react"

export default function WhyChooseUs() {
  const items = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Integrated Manufacturing",
      desc: "Complete in-house production across metal, marble, wood and mixed materials.",
      bg: "#FFFFFF",
      iconColor: "#BF8B45",
      hoverTitle: "#AE7250",
      text: "#63403A",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Consistent Quality",
      desc: "Repeatable processes built for export-grade quality and long-term reliability.",
      bg: "#EFE8D6",
      iconColor: "#63403A",
      hoverTitle: "#AE7250",
      text: "#63403A",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Global Compliance",
      desc: "Manufacturing aligned with international testing and certification standards.",
      bg: "#9A9D85",
      iconColor: "#F0EFE2",
      hoverTitle: "#FFFFFFF",
      text: "#F0EFE2",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Three Generations of Expertise",
      desc: "50+ years of craftsmanship evolving with modern engineering practices.",
      bg: "#63403A",
      iconColor: "#BF8B45",
      hoverTitle: "#EFE8D6",
      text: "#F0EFE2",
    },
  ]

  return (
    <section className="min-h-screen md:min-h-screen flex items-center bg-[#DCD5C9] px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-[#63403A]">
            Why Choose Us?
          </h2>
          <div className="w-24 h-[1px] bg-[#BF8B45] mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {items.map((item, idx) => (
            <div
              key={idx}
              className="
                group relative p-12
                border border-black/5
                overflow-hidden
                transition-all duration-700
                hover:-translate-y-2
                hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)]
              "
              style={{ backgroundColor: item.bg }}
            >
              {/* soft accent glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#BF8B45]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* icon */}
              <div
                className="relative z-10 mb-6 transition-transform duration-700 group-hover:scale-110"
                style={{ color: item.iconColor }}
              >
                {item.icon}
              </div>

              {/* title */}
              <h3
                className="relative z-10 font-serif text-2xl mb-4 transition-colors duration-500"
                style={{ color: item.text }}
              >
                <span className="group-hover:text-[var(--hover)]" style={{ ["--hover" as any]: item.hoverTitle }}>
                  {item.title}
                </span>
              </h3>

              {/* description */}
              <p
                className="relative z-10 leading-relaxed"
                style={{ color: item.text, opacity: 0.85 }}
              >
                {item.desc}
              </p>

              {/* underline */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#BF8B45] group-hover:w-full transition-all duration-700" />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
