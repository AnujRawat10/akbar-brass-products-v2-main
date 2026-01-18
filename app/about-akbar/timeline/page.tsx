"use client"

import { useEffect, useRef } from "react"
import { CheckCircle } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const moodColors = [
  { bg: "#F0EFE2", card: "#FFFFFF", text: "#63403A" },
  { bg: "#EFE6DA", card: "#C4AE9F", text: "#63403A" },
  { bg: "#E8DDCF", card: "#C19A6B", text: "#3E2A1F" },
  { bg: "#E2D1C0", card: "#AE7250", text: "#FFFFFF" },
  { bg: "#D6CEC2", card: "#9A9D85", text: "#1F1F1F" },
  { bg: "#CFD4C2", card: "#485023", text: "#F0EFE2" },
  { bg: "#EADFCC", card: "#BF8B45", text: "#2A1A10" },
  { bg: "#EEE6DA", card: "#63403A", text: "#F0EFE2" },
  { bg: "#F5F2EC", card: "#FFFFFF", text: "#63403A" },
]

export default function TimelinePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            immediateRender: false,
          }
        )
      }

      if (timelineRef.current) {
        const items = timelineRef.current.querySelectorAll(".timeline-item")

        items.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power2.out",
              immediateRender: false,
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                once: true,
              },
            }
          )
        })
      }
    })

    return () => ctx.revert()
  }, [])

const milestones = [
  {
    year: "1974",
    title: "Foundation of Akbar Brass Products",
    description:
      "Established under the leadership of Akbar Qayyum, laying the foundation of craftsmanship-driven manufacturing.",
    image: "/akbar-campus.png",
  },
  {
    year: "1980s",
    title: "Entry into Global Export Markets",
    description:
      "Expanded exports to the USA, Europe, UK and Australia, forming long-standing partnerships.",
    image: "/global.jpeg",
  },
  {
    year: "1990s",
    title: "Strengthening Metal Manufacturing",
    description:
      "Advanced fabrication, polishing, plating, and finishing capabilities were established.",
    image: "/metal.png",
  },
  {
    year: "2000",
    title: "Wood Manufacturing Unit",
    description:
      "A dedicated wood facility was added to support furniture and décor production.",
    image: "/legacy-unit.png",
  },
  {
    year: "2012",
    title: "Metal Furniture Production",
    description:
      "Expanded into structural metal furniture manufacturing for mixed-material products.",
    image: "/metal.png",
  },
  {
    year: "2018",
    title: "Dedicated Metal Furniture Facility",
    description:
      "A specialised unit was built to support increased export volumes.",
    image: "/metalfacility.jpeg",
  },
  {
    year: "2021",
    title: "Marble & Stone Unit",
    description:
      "Introduced stone processing capabilities for marble furniture and décor.",
    image: "/marble.png",
  },
  {
    year: "2023–2024",
    title: "Integrated Manufacturing Campus",
    description:
      "Unified systems, ERP integration, and structured quality inspection processes.",
    image: "/newblock.jpeg",
  },
  {
    year: "Present",
    title: "Third Generation Leadership",
    description:
      "Engineering-led growth with modern manufacturing systems and global outlook.",
    image: "/team.jpeg",
  },
]


  return (
    <div
      className="pt-28 pb-24 transition-colors duration-700"
      style={{ backgroundColor: moodColors[0].bg }}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* HERO */}
        <section ref={heroRef} className="text-center mb-20">
          <h1 className="font-serif text-4xl md:text-5xl xl:text-7xl text-[#63403A] mb-6">
            Our Journey
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#63403A]/80 leading-relaxed">
            A legacy shaped over generations — evolving from traditional
            craftsmanship into structured global manufacturing.
          </p>
        </section>

        {/* TIMELINE */}
        <div ref={timelineRef} className="relative">

          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#63403A]/30" />

          <div className="space-y-20">
            {milestones.map((m, i) => {
              const mood = moodColors[i]

              return (
                <div
                  key={i}
                  className="timeline-item relative flex items-start md:justify-between"
                >
                  {/* DOT */}
                  <div
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: mood.card }}
                  >
                    <CheckCircle style={{ color: mood.text }} />
                  </div>

                  {/* CARD */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[45%] ${
                      i % 2 === 0
                        ? "md:text-right md:pr-10"
                        : "md:ml-auto md:pl-10"
                    }`}
                  >
                    <div
                      className="rounded-lg p-8 shadow-md border border-black/5 transition-colors duration-700"
                      style={{
                        backgroundColor: mood.card,
                        color: mood.text,
                      }}
                    >
                      <div className="text-2xl font-semibold mb-2">
                        {m.year}
                      </div>

                      <h3 className="font-serif text-xl md:text-2xl mb-4">
                        {m.title}
                      </h3>

                      <p className="opacity-80 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>

                  {/* IMAGE */}
                  {m.image && (
                    <div
                      className={`
                        hidden lg:block absolute top-1/2 -translate-y-1/2
                        w-[340px] h-[220px] overflow-hidden rounded-lg shadow-lg
                        border border-black/10
                        ${i % 2 === 0 ? "right-0" : "left-0"}
                      `}
                    >
                      <img
                        src={m.image}
                        alt={m.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
