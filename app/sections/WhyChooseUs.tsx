"use client"

import { Sparkles, Award, Users, CheckCircle2 } from "lucide-react"

export default function WhyChooseUs() {
  const items = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Integrated Manufacturing",
      desc: "Complete in-house production across metal, marble, wood and mixed materials."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Consistent Quality",
      desc: "Repeatable processes built for export-grade quality and long-term reliability."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Global Compliance",
      desc: "Manufacturing aligned with international testing and certification standards."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Three Generations of Expertise",
      desc: "50+ years of craftsmanship evolving with modern engineering practices."
    }
  ]

  return (
    <section className="py-28 bg-[#AE997D] px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
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
                group relative bg-white p-12
                border border-black/5
                overflow-hidden
                transition-all duration-700
                hover:-translate-y-2
                hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)]
              "
            >
              {/* gold glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#BF8B45]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* icon */}
              <div className="relative z-10 text-[#BF8B45] mb-6 transition-transform duration-700 group-hover:scale-110">
                {item.icon}
              </div>

              {/* title */}
              <h3 className="relative z-10 font-serif text-2xl mb-4 group-hover:text-[#AE7250] transition-colors duration-500">
                {item.title}
              </h3>

              {/* description */}
              <p className="relative z-10 text-black/65 leading-relaxed">
                {item.desc}
              </p>

              {/* gold underline animation */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#BF8B45] group-hover:w-full transition-all duration-700" />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
