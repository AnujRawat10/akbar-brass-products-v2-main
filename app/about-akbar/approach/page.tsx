"use client"

import { useEffect, useRef } from "react"
import { Wrench, Target, Lightbulb, Users, Layers, Handshake } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ApproachPage() {
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const descTextRef = useRef<HTMLParagraphElement>(null)
  const principlesRef = useRef<HTMLDivElement>(null)
  const splitImageRef = useRef<HTMLDivElement>(null)
  const splitTextRef = useRef<HTMLDivElement>(null)
  const essenceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    /* Hero title animation */
    if (heroTitleRef.current) {
      gsap.fromTo(
        heroTitleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      )
    }

    /* Description text animation */
    if (descTextRef.current) {
      gsap.fromTo(
        descTextRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        }
      )
    }

    /* Principles cards stagger animation */
    if (principlesRef.current) {
      const cards = principlesRef.current.children
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: principlesRef.current,
            start: "top center+=100",
            once: true,
          },
        }
      )
    }

    /* Split section - image animation */
    if (splitImageRef.current) {
      gsap.fromTo(
        splitImageRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: splitImageRef.current,
            start: "top center+=100",
            once: true,
          },
        }
      )
    }

    /* Split section - text animation */
    if (splitTextRef.current) {
      gsap.fromTo(
        splitTextRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: splitTextRef.current,
            start: "top center+=100",
            once: true,
          },
        }
      )
    }

    /* Essence section animation */
    if (essenceRef.current) {
      gsap.fromTo(
        essenceRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: essenceRef.current,
            start: "top center+=100",
            once: true,
          },
        }
      )
    }
  }, [])

  const principles = [
    {
      icon: Target,
      title: "Precision as a Discipline",
      description:
        "Accuracy guides every stage of production. Each product is built around defined specifications, controlled parameters, and engineered constructions that ensure stability, consistency, and repeatability at scale.",
      image: "/quality.jpeg"
    },
    {
      icon: Wrench,
      title: "Systems That Build Consistency",
      description:
        "Our horizontally integrated workflow — spanning metal fabrication, marble processing, woodworking, finishing, assembly, testing, and export packing — ensures uniform quality across all batches. Structured SOPs, documented checkpoints, and clear responsibility frameworks support every step.",
      image: "/precision.png"
    },
    {
      icon: Lightbulb,
      title: "Purpose-Driven Innovation",
      description:
        "Innovation at Akbar is practical and measurable. We adopt new machinery, refine processes, and enhance finishes only when it improves efficiency, durability, or production accuracy. Every upgrade must deliver real value to manufacturing outcomes.",
      image: "/qualitymanagement.jpeg"
    },
    {
      icon: Users,
      title: "Skilled People, Strong Manufacturing",
      description:
        "Our teams include trained artisans, technicians, engineers, and specialists working within defined systems. Continuous skill development, safe working conditions, and methodical supervision support reliable, steady production.",
      image: "/team.jpeg"
    },
    {
      icon: Layers,
      title: "Multi-Material Expertise",
      description:
        "We work across metal, marble, wood, glass, stone, and mixed materials. Controlled fabrication, precise machining, and disciplined finishing allow us to integrate materials seamlessly and produce globally compliant, structurally reliable products.",
      image: "/variety.jpeg"
    },
    {
      icon: Handshake,
      title: "Partnership-Oriented Working Style",
      description:
        "Our working philosophy is structured, transparent, and solution-focused. Reliable communication, realistic timelines, and consistent execution form the foundation of long-term relationships with international buyers.",
      image: "/compliance.jpeg"
    },
  ]

  const colors = [
    "#B07A57", // clay
    "#64423C", // deep brown
    "#FFFFFF", // light contrast
    "#C4924F", // brass gold
    "#A2A38D", // stone grey
    "#4B5320", // olive
  ]

  return (
   <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/capabilities.png"
            alt="Our Capabilities"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 ref={heroTitleRef} className="font-serif text-4xl md:text-5xl xl:text-6xl text-white mb-0 tracking-[0.2em]">
            THE AKBAR APPROACH
          </h1>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className="py-16 px-6" style={{ backgroundColor: "#C87550" }}>
        <div className="max-w-4xl mx-auto">
          <p ref={descTextRef} className="text-center text-lg md:text-xl text-white leading-relaxed">
            The Akbar Approach represents our commitment to disciplined manufacturing, engineering-led systems, and long-term reliability. We combine deep material expertise with integrated production to deliver stable, export-ready quality for global markets.
          </p>
        </div>
      </section>


      {/* PRINCIPLES */}
      <section className="container mx-auto px-6 pt-28">
        <div ref={principlesRef} className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

          {principles.map((principle, index) => {
            const Icon = principle.icon
            const bg = colors[index % colors.length]
            const isLight = bg === "#FFFFFF"

            return (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl"
                style={{
                  backgroundColor: bg,
                }}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={principle.image}
                    alt={principle.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-10">
                  {/* ICON */}
                  <div
                    className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: isLight
                        ? "#63403A"
                        : "rgba(255,255,255,0.18)",
                    }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="text-xl font-semibold mb-4 leading-snug"
                    style={{ color: isLight ? "#63403A" : "#ffffff" }}
                  >
                    {principle.title}
                  </h3>

                  {/* TEXT */}
                  <p
                    className="text-[15.5px] leading-relaxed"
                    style={{
                      color: isLight
                        ? "#63403A"
                        : "rgba(255,255,255,0.92)",
                    }}
                  >
                    {principle.description}
                  </p>
                </div>
              </div>
            )
          })}

        </div>
      </section>

      {/* SPLIT SECTION */}
      <section className="max-w-7xl mx-auto mt-32 px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div ref={splitImageRef} className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/Complete Campus.png"
              alt="Complete Manufacturing Campus"
              className="w-full h-full object-cover"
            />
          </div>

          <div ref={splitTextRef}>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-[#63403A]">
              Built on Structure, Not Chance
            </h3>

            <p className="text-lg leading-relaxed mb-4 text-[#63403A]/90">
              Our manufacturing environments are designed around flow, discipline,
              and clarity. Every workstation and movement is intentional — reducing
              variability and ensuring consistency.
            </p>

            <p className="text-lg leading-relaxed text-[#63403A]/90">
              This structured approach enables dependable timelines, scalable
              output, and globally compliant quality standards.
            </p>
          </div>

        </div>
      </section>

      {/* ESSENCE */}
      <section className="container mx-auto px-6 mt-32">
        <div
          ref={essenceRef}
          className="rounded-2xl text-center py-20 px-10 max-w-4xl mx-auto text-white"
          style={{ backgroundColor: "#63403A" }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10">
            The Essence of Our Approach
          </h2>

          <div className="space-y-3 text-lg text-white/90">
            <p>Engineering-led systems.</p>
            <p>Defined processes.</p>
            <p>Material mastery.</p>
            <p>Consistent quality.</p>
            <p>Reliable partnerships.</p>
          </div>

          <p className="mt-10 text-xl font-semibold">
            This is how we work.
            <br />
            This is The Akbar Approach.
          </p>
        </div>
      </section>

    </div>
  )
}
