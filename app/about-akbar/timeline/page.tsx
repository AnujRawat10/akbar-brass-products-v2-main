"use client"

import { useEffect, useRef } from "react"
import { CheckCircle } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function TimelinePage() {
  const heroRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const cardColors = [
    "#f0efe2",
    "#C4AE9F",
    "#C19A6B",
    "#AE7250",
    "#63403A",
    "#9A9D85",
    "#485023",
    "#BF8B45",
  ]

  useEffect(() => {
    /* ================= HERO ================= */
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
        }
      )
    }

    /* ================= TIMELINE ITEMS ================= */
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll(".timeline-item")

      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              once: true, // 🔒 prevents fade-back
            },
          }
        )
      })
    }
  }, [])

  const milestones = [
    {
      year: "1974",
      title: "Establishment of Akbar Brass Products",
      description:
        "Akbar Brass Products was established in 1974, when Haji Abdul Qayyum entrusted the responsibility of leading the company to his son Akbar Qayyum.",
      image: "/akbar-board.png",
    },
    {
      year: "1980s",
      title: "Expansion into Global Markets",
      description:
        "The company began supplying to the USA, Europe, the UK, and Australia, establishing long-term relationships.",
    },
    {
      year: "1990s",
      title: "Strengthening Metal Manufacturing",
      description:
        "In-house capabilities in fabrication, polishing, plating, welding, and hand-finishing were enhanced.",
      image: "/metal.png",
    },
    {
      year: "2000",
      title: "Wood Unit Established",
      description:
        "A dedicated wood unit was set up to manufacture wooden furniture and decorative articles.",
      image: "/wood.png",
    },
    {
      year: "2012",
      title: "Introduction of Metal Furniture Manufacturing",
      description:
        "Metal furniture production was introduced, enabling stronger mixed-material construction.",
    },
    {
      year: "2018",
      title: "New Metal Furniture Unit Developed",
      description:
        "A specialised metal furniture production block was set up to support larger capacity.",
    },
    {
      year: "2021",
      title: "Marble Furniture & Décor Unit Constructed",
      description:
        "A dedicated marble-processing facility was established for stone furniture and décor.",
      image: "/marble.png",
    },
    {
      year: "2023–2024",
      title: "Integrated Factory & System Upgrades",
      description:
        "A unified manufacturing campus was developed with ERP-driven processes and structured inspections.",
    },
    {
      year: "Present",
      title: "Third-Generation Leadership",
      description:
        "The third generation continues to modernise the organisation through engineering-led operations.",
      image: "/placeholder-hero.png",
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16" style={{ backgroundColor: "#f0efe2" }}>
      <div className="container mx-auto px-6 max-w-5xl">
        {/* ================= HERO ================= */}
        <section ref={heroRef} className="mb-16 text-center">
          <h1
            className="mb-6 font-serif text-4xl font-bold md:text-5xl xl:text-7xl"
            style={{ color: "#63403A" }}
          >
            Timeline
          </h1>
          <p
            className="mx-auto max-w-3xl text-lg md:text-xl xl:text-2xl leading-relaxed"
            style={{ color: "#63403A" }}
          >
            Built over three generations, our journey reflects a steady evolution
            from craftsmanship to system-driven manufacturing.
          </p>
        </section>

        {/* ================= TIMELINE ================= */}
        <div ref={timelineRef} className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-0.5 md:left-1/2"
            style={{ backgroundColor: "#63403A", opacity: 0.3 }}
          />

          <div className="space-y-16 xl:space-y-24">
            {milestones.map((milestone, index) => {
              const bgColor = cardColors[index % cardColors.length]
              const isLight = ["#f0efe2", "#C4AE9F", "#C19A6B", "#9A9D85", "#BF8B45"].includes(bgColor)
              const textColor = isLight ? "#63403A" : "#f0efe2"

              return (
                <div
                  key={index}
                  className="timeline-item relative flex items-start md:justify-between opacity-100"
                >
                  {/* ICON */}
                  <div
                    className="absolute left-0 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full text-white md:left-1/2 md:-translate-x-1/2 z-10 shadow-lg"
                    style={{ backgroundColor: "#63403A" }}
                  >
                    <CheckCircle className="h-8 w-8 md:h-10 md:w-10" />
                  </div>

                  {/* TEXT CARD */}
                  <div
                    className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${
                      index % 2 === 0 ? "md:text-right md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div
                      className="p-6 xl:p-10 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: bgColor }}
                    >
                      <div className="text-2xl xl:text-5xl font-bold mb-4" style={{ color: textColor }}>
                        {milestone.year}
                      </div>
                      <h3 className="text-xl xl:text-4xl font-semibold mb-4" style={{ color: textColor }}>
                        {milestone.title}
                      </h3>
                      <p className="xl:text-2xl leading-relaxed" style={{ color: textColor }}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* FLOATING IMAGE */}
                  {milestone.image && (
                    <div
                      className={`
                        hidden md:block absolute top-1/2 -translate-y-1/2
                        w-[320px] h-[220px] lg:w-[400px] lg:h-[280px] xl:w-[480px] xl:h-[320px]
                        rounded-lg overflow-hidden shadow-xl border border-[#63403A]/20
                        hover:scale-105 transition-transform duration-300
                        ${index % 2 === 0 ? "right-0 mr-16" : "left-0 ml-16"}
                      `}
                    >
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
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
