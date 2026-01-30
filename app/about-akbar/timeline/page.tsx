"use client"

import { useEffect, useRef, useState } from "react"
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
  const [activePeriod, setActivePeriod] = useState(0)

  const periods = [
    { label: "1974-1980s", startIdx: 0, endIdx: 1 },
    { label: "1990s-2000", startIdx: 2, endIdx: 3 },
    { label: "2012-2018", startIdx: 4, endIdx: 5 },
    { label: "2021-2024", startIdx: 6, endIdx: 7 },
    { label: "Present", startIdx: 8, endIdx: 8 },
  ]

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
      title: "Establishment of Akbar Brass Products",
      description:
        "Akbar Brass Products was established in 1974, when Haji Abdul Qayyum entrusted the responsibility of leading the company to his son Akbar Qayyum, marking the beginning of organised, export-focused manufacturing for the family.",
      image: "/akbar-campus.png",
    },
    {
      year: "1980s",
      title: "Expansion into Global Markets",
      description:
        "The company began supplying to the USA, Europe, the UK, and Australia, establishing long-term relationships built on consistent quality and dependable delivery.",
      image: "/global.jpeg",
    },
    {
      year: "1990s",
      title: "Strengthening Metal Manufacturing",
      description:
        "In-house capabilities in fabrication, polishing, plating, welding, and hand-finishing were enhanced to increase stability, finish consistency, and production control.",
      image: "/1990.jpeg",
    },
    {
      year: "2000",
      title: "Wood Unit Established",
      description:
        "A dedicated wood unit was set up to manufacture wooden furniture and decorative articles, expanding the company's material capability into multi-material production.",
      image: "/legacy-unit.png",
    },
    {
      year: "2012",
      title: "Introduction of Metal Furniture Manufacturing",
      description:
        "Metal furniture production was introduced, enabling stronger mixed-material construction and broadening the product offering to meet evolving global demand.",
      image: "/metal.png",
    },
    {
      year: "2018",
      title: "New Metal Furniture Unit Developed",
      description:
        "A specialised metal furniture production block was set up to support larger capacity, improved workflows, and better coordination across divisions.",
      image: "/metalfacility.jpeg",
    },
    {
      year: "2021",
      title: "Marble Furniture & Décor Unit Constructed",
      description:
        "A dedicated marble-processing facility was established, enabling complete in-house capabilities for marble furniture, stone tabletops, and decorative stoneware.",
      image: "/marble.png",
    },
    {
      year: "2023–2024",
      title: "Integrated Factory & System Upgrades",
      description:
        "A unified, horizontally integrated manufacturing campus was developed, bringing fabrication, marble processing, woodworking, finishing, assembly, testing, and export packing into one coordinated workflow. ERP-driven processes, structured inspections, and compliance systems were strengthened to align with global retail expectations.",
      image: "/newblock.jpeg",
    },
    {
      year: "Present",
      title: "Third Generation Leadership",
      description:
        "The third generation continues to modernise the organisation through engineering-led operations, advanced machinery, enhanced QC practices, and sustainable, global-standard manufacturing.",
      image: "/team.jpeg",
    },
  ]

  return (
    <div className="transition-colors duration-700">
      {/* HERO SECTION */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Complete Campus.png"
            alt="Our Journey"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div ref={heroRef} className="relative z-10 text-center px-6">
          <h1 className="font-serif text-4xl md:text-5xl xl:text-6xl text-white mb-0 tracking-[0.2em] uppercase">
            Our Timeline
          </h1>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className="py-16 px-6" style={{ backgroundColor: "#C87550" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg md:text-xl text-white leading-relaxed">
            Built over three generations, our journey reflects a steady evolution from traditional
            craftsmanship to modern, system-driven manufacturing. Each decade shows how we expanded
            our material expertise, upgraded our processes, and consolidated our infrastructure to
            meet the expectations of global markets—crafted with passion, preserved with care, and
            destined for timeless excellence.
          </p>
        </div>
      </section>

      {/* MOBILE HORIZONTAL TIMELINE - Only visible on mobile */}
      <section className="md:hidden py-12 px-6 bg-[#F0EFE2]">
        <div className="max-w-6xl mx-auto">
          {/* Current Period Display */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <h2 className="font-serif text-5xl sm:text-6xl font-bold text-[#63403A]">
                {periods[activePeriod].label}
              </h2>
              <div className="flex-1 max-w-md">
                <h3 className="font-serif text-2xl font-bold text-[#63403A] mb-3">
                  Built on trust.
                </h3>
                <p className="text-[#63403A]/80 leading-relaxed">
                  Built over three generations, our journey reflects a steady evolution from traditional
                  craftsmanship to modern, system-driven manufacturing. Each decade shows how we expanded
                  our material expertise, upgraded our processes, and consolidated our infrastructure to
                  meet the expectations of global markets.
                </p>
              </div>
            </div>
          </div>

          {/* Horizontal Timeline Navigation */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              {periods.map((period, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePeriod(idx)}
                  className={`text-sm sm:text-base font-medium transition-colors ${
                    activePeriod === idx ? "text-[#63403A]" : "text-[#63403A]/50"
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="relative h-1 bg-[#63403A]/20 rounded-full overflow-hidden">
              <div
                className="absolute h-full bg-[#BF8B45] transition-all duration-500 rounded-full"
                style={{ width: `${((activePeriod + 1) / periods.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Milestone Cards for Selected Period */}
          <div className="mt-12 space-y-6">
            {milestones
              .filter((_, idx) => idx >= periods[activePeriod].startIdx && idx <= periods[activePeriod].endIdx)
              .map((milestone, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 shadow-md border border-[#63403A]/10"
                >
                  <div className="text-xl font-bold text-[#BF8B45] mb-2">{milestone.year}</div>
                  <h4 className="font-serif text-lg font-semibold text-[#63403A] mb-3">
                    {milestone.title}
                  </h4>
                  <p className="text-[#63403A]/80 leading-relaxed mb-4">{milestone.description}</p>
                  {milestone.image && (
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION - Hidden on mobile, visible on desktop */}
      <div
        className="hidden md:block py-24 transition-colors duration-700"
        style={{ backgroundColor: moodColors[0].bg }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div ref={timelineRef} className="relative">
            {/* Timeline Line */}
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
                          className="w-full h-full object-cover "
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
    </div>
  )
}