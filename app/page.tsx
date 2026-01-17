"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import OurPartners from "@/components/OurPartners"
import LuxuryShowcase from "@/components/Luxury"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const whatWeDoRef = useRef<HTMLElement>(null)
  const expertiseRef = useRef<HTMLElement>(null)

  useEffect(() => {
    /* ================= HERO ================= */
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
        }
      )
    }

    /* ================= ABOUT ================= */
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top center+=100",
            once: true, // 🔒 FIX
          },
        }
      )
    }

    /* ================= WHAT WE DO ================= */
    if (whatWeDoRef.current) {
      gsap.fromTo(
        whatWeDoRef.current.querySelectorAll(".category-card"),
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: whatWeDoRef.current,
            start: "top center+=100",
            once: true, // 🔒 FIX
          },
        }
      )
    }

    /* ================= EXPERTISE ================= */
    if (expertiseRef.current) {
      gsap.fromTo(
        expertiseRef.current.querySelectorAll(".expertise-item"),
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: expertiseRef.current,
            start: "top center+=100",
            once: true, // 🔒 FIX
          },
        }
      )
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/final_video_hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <div ref={heroRef}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif text-[#f0efe2] mb-8 text-balance leading-tight">
              Integrated Multi-Material Manufacturing for Global Markets
            </h1>
            <Button
              asChild
              size="lg"
              className="bg-[#BF8B45] text-white hover:bg-[#AE7250] text-base md:text-lg px-8 py-6"
            >
              <Link href="/capabilities/materials">
                Explore Capabilities <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section ref={aboutRef} className="px-6 py-20 md:py-28 lg:py-32 xl:py-40 bg-[#f0efe2] text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif text-[#63403A] mb-6 lg:mb-8">
          About Akbar Brass Products
        </h2>
        <p className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto text-[#63403A]/80 text-base md:text-lg lg:text-xl xl:text-2xl mb-8 lg:mb-10 leading-relaxed">
          A third-generation manufacturing company specializing in metal, marble, wood, glass, and mixed-material home
          products for global export markets.
        </p>
        <Button
          variant="outline"
          asChild
          className="border-2 border-[#63403A] text-[#63403A] hover:bg-[#63403A] hover:text-[#f0efe2] bg-transparent text-base md:text-lg px-8 py-6"
        >
          <Link href="/about-akbar/timeline">
            Explore Our Heritage <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </section>

      {/* WHAT WE DO */}
      <section
        ref={whatWeDoRef}
        className="relative px-6 py-20 md:py-28 lg:py-32 xl:py-40 bg-[#111] will-change-transform"
        style={{
          backgroundImage: "url('/factory-interior.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif text-center mb-12 lg:mb-16 xl:mb-20 text-[#f0efe2]">
            What We Do?
          </h2>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Metal", img: "/home-page/metal1.jpg", color: "bg-[#AE7250]" },
              { t: "Marble", img: "/home-page/marble.jpg", color: "bg-[#9A9D85]" },
              { t: "Wood", img: "/home-page/wood.jpg", color: "bg-[#BF8B45]" },
              { t: "Mixed Materials", img: "/home-page/metal2.jpg", color: "bg-[#485023]" },
            ].map((item) => (
              <div
                key={item.t}
                className="category-card bg-white text-[#63403A] rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.img || "/placeholder.svg"}
                  className="h-48 lg:h-56 xl:h-64 w-full object-cover"
                  alt={item.t}
                />
                <div className={`${item.color} p-5 lg:p-6 xl:p-8`}>
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-serif mb-2 text-white">{item.t}</h3>
                  <p className="text-sm lg:text-base xl:text-lg text-white/90">Export-grade processing & finishing</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE / WHY CHOOSE US */}
      <section
        ref={expertiseRef}
        className="relative px-6 py-20 md:py-28 lg:py-32 xl:py-40 bg-[#f0efe2] will-change-transform"
      >
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px]">
          <div className="mb-12 lg:mb-16 xl:mb-20 text-center">
            <h2 className="mb-6 font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#63403A]">
              Why Choose Us?
            </h2>
            <p className="mx-auto max-w-2xl xl:max-w-3xl text-[#63403A]/80 text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
              A manufacturing partner built for consistency, scale, and long-term collaboration.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12 xl:gap-16 md:grid-cols-2">
            {[
              {
                title: "Integrated multi-material production",
                desc: "In-house metal fabrication, marble processing, wood working, finishing, testing, and assembly ensure tighter quality control and predictable lead times.",
                color: "border-[#AE7250]",
              },
              {
                title: "Stable quality and repeatability",
                desc: "Decades of experience combining metal, stone, wood, and glass into structurally sound, production-ready designs.",
                color: "border-[#9A9D85]",
              },
              {
                title: "In-house testing capabilities",
                desc: "Processes aligned with EU and US compliance standards, supported by in-house testing and documentation systems.",
                color: "border-[#BF8B45]",
              },
              {
                title: "Three generations of manufacturing expertise",
                desc: "We work as an extension of our clients' supply chain — focusing on repeatability, cost stability, and scalable growth.",
                color: "border-[#485023]",
              },
            ].map((item, idx) => (
              <div key={idx} className={`expertise-item border-l-4 ${item.color} pl-6 lg:pl-8 xl:pl-10`}>
                <h3 className="font-serif text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#63403A] mb-3 lg:mb-4">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-[#63403A]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 lg:mt-16 xl:mt-20 text-center">
            <Link
              href="/about-akbar/approach"
              className="inline-block px-10 lg:px-12 xl:px-14 py-3 lg:py-4 xl:py-5 border-2 border-[#63403A] text-[#63403A] uppercase text-sm lg:text-base xl:text-lg tracking-wide hover:bg-[#63403A] hover:text-[#f0efe2] transition-all duration-300"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>

      <LuxuryShowcase />

      {/* SUSTAINABILITY */}
      <section
        className="relative px-6 py-24 md:py-32 lg:py-40 xl:py-48 bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder-hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#485023]/90 to-[#9A9D85]/80" />
        <div className="relative z-10 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto text-center text-white">
          <span className="tracking-widest text-xs md:text-sm lg:text-base uppercase block mb-4 lg:mb-6">
            Committed to a Sustainable Future
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif mb-6 lg:mb-8">
            Sustainability
          </h2>
          <p className="mb-8 lg:mb-10 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed">
            Sustainable manufacturing supported by ETP, STP, RO systems and dust collectors across all production units.
          </p>
          <Link
            href="/sustainability"
            className="inline-block border-b-2 border-white pb-1 text-base md:text-lg lg:text-xl hover:border-[#BF8B45] hover:text-[#BF8B45] transition-colors"
          >
            Know more
          </Link>
        </div>
      </section>

      {/* DELHI FAIR */}
      <section className="px-6 py-20 md:py-24 lg:py-28 xl:py-32 bg-[#f0efe2]">
        <div className="max-w-7xl xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif text-[#63403A] mb-6 lg:mb-8">
              A Glimpse of Our Artistry: Delhi Fair 10/25
            </h2>
            <p className="text-[#63403A]/80 text-base md:text-lg lg:text-xl xl:text-2xl mb-4 leading-relaxed">
              Showcasing our latest collections and manufacturing innovations developed for global buyers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <img src="/f1.jpeg" className="object-cover aspect-[3/4] rounded-lg shadow-lg" alt="Fair showcase 1" />
            <img src="/f2.jpeg" className="object-cover aspect-[3/4] mt-8 rounded-lg shadow-lg" alt="Fair showcase 2" />
          </div>
        </div>
      </section>

      <OurPartners />

      {/* CONNECT */}
      <section className="px-6 py-20 md:py-28 lg:py-32 xl:py-40 bg-white text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif text-[#63403A] mb-8 lg:mb-10">
          Connect With Us
        </h2>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-2 border-[#63403A] text-[#63403A] hover:bg-[#63403A] hover:text-white text-base md:text-lg px-8 py-6 bg-transparent"
        >
          <Link href="/contact">
            Get In Touch <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
