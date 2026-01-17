"use client"
import { useEffect, useRef } from "react"
import { Droplets, Wind, Recycle, Users, GraduationCap, Heart } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function SustainabilityPage() {
  const heroRef = useRef<HTMLElement>(null)
  const environmentRef = useRef<HTMLElement>(null)
  const communityRef = useRef<HTMLElement>(null)
  const wellbeingRef = useRef<HTMLElement>(null)

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

    /* ================= ENVIRONMENT ================= */
    if (environmentRef.current) {
      gsap.fromTo(
        environmentRef.current.querySelectorAll(".card-item"),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: environmentRef.current,
            start: "top center+=100",
            end: "bottom center",
            once: true, // 🔒 FIX
          },
        }
      )
    }

    /* ================= COMMUNITY ================= */
    if (communityRef.current) {
      gsap.fromTo(
        communityRef.current.querySelectorAll(".card-item"),
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: communityRef.current,
            start: "top center+=100",
            once: true, // 🔒 FIX
          },
        }
      )
    }

    /* ================= WELLBEING ================= */
    if (wellbeingRef.current) {
      gsap.fromTo(
        wellbeingRef.current.querySelectorAll(".card-item"),
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: wellbeingRef.current,
            start: "top center+=100",
            once: true, // 🔒 FIX
          },
        }
      )
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#f0efe2]">
      <main>
        <section
          ref={heroRef}
          className="bg-gradient-to-br from-[#9A9D85] to-[#485023] text-white pt-32 pb-20 lg:pt-40 xl:pt-48 2xl:pt-56 lg:pb-28 xl:pb-36 2xl:pb-44"
        >
          <div className="container mx-auto px-6 lg:px-12 xl:px-16 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-8 lg:mb-12 text-balance">
              Sustainability
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl max-w-5xl mx-auto leading-relaxed text-white/90">
              At Akbar Brass Products, sustainability is built into our manufacturing systems, resource management, and
              workplace practices. Our approach focuses on three key pillars: Environment, Community, and
              Wellbeing—ensuring responsible production and long-term operational reliability.
            </p>
          </div>
        </section>

        <section ref={environmentRef} className="py-20 lg:py-28 xl:py-36 2xl:py-44 bg-[#9A9D85]">
          <div className="container mx-auto px-6 lg:px-12 xl:px-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-12 lg:mb-16 xl:mb-20">
              1. ENVIRONMENT
            </h2>

            <div className="card-item mb-12 lg:mb-16 xl:mb-20 bg-white border-2 border-[#9A9D85] rounded-2xl p-8 lg:p-12 xl:p-16 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-4 lg:gap-6 mb-6">
                <div className="bg-[#9A9D85] p-4 lg:p-5 xl:p-6 rounded-xl shadow-lg">
                  <Droplets className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-[#63403A]">
                  Responsible Resource Management
                </h3>
              </div>
              <p className="text-[#63403A]/90 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-6">
                Our integrated manufacturing campus is equipped with:
              </p>
              <ul className="list-disc list-inside text-[#63403A]/90 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl space-y-3 ml-4">
                <li>Effluent Treatment Plant (ETP)</li>
                <li>Sewage Treatment Plant (STP)</li>
                <li>Reverse Osmosis (RO) system</li>
                <li>Rainwater harvesting infrastructure</li>
              </ul>
              <p className="text-[#63403A]/90 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-6">
                These systems enable water recycling, reduce groundwater usage, and ensure safe, compliant discharge of
                treated water.
              </p>
            </div>

            <div className="card-item mb-12 lg:mb-16 xl:mb-20 bg-[#485023] border-2 border-white rounded-2xl p-8 lg:p-12 xl:p-16 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-4 lg:gap-6 mb-6">
                <div className="bg-white/20 p-4 lg:p-5 xl:p-6 rounded-xl shadow-lg">
                  <Wind className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-white">
                  Cleaner Production
                </h3>
              </div>
              <p className="text-white/90 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-6">
                We maintain clean and controlled production environments through:
              </p>
              <ul className="list-disc list-inside text-white/90 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl space-y-3 ml-4">
                <li>Dust collectors in metal polishing, marble processing, and woodworking</li>
                <li>Controlled finishing areas for plating, powder coating, and lacquer</li>
                <li>Energy-efficient machinery and monitored power usage</li>
              </ul>
              <p className="text-white/90 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-6">
                These practices help reduce emissions, improve air quality, and lower our environmental impact.
              </p>
            </div>

            <div className="card-item bg-white border-2 border-[#9A9D85] rounded-2xl p-8 lg:p-12 xl:p-16 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-4 lg:gap-6 mb-6">
                <div className="bg-[#9A9D85] p-4 lg:p-5 xl:p-6 rounded-xl shadow-lg">
                  <Recycle className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-[#63403A]">
                  Recycling & Material Efficiency
                </h3>
              </div>
              <p className="text-[#63403A]/90 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-6">
                Material management is structured around responsible use and circular processes:
              </p>
              <ul className="list-disc list-inside text-[#63403A]/90 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl space-y-3 ml-4">
                <li>Metal scrap is segregated and recycled back into controlled supply chains</li>
                <li>Wood, stone, and packaging materials are reused or recycled wherever possible</li>
                <li>Cutting patterns for metal, marble, and wood are optimized to reduce wastage</li>
              </ul>
            </div>
          </div>
        </section>

        <section ref={communityRef} className="py-20 lg:py-28 xl:py-36 2xl:py-44 bg-[#485023]">
          <div className="container mx-auto px-6 lg:px-12 xl:px-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-12 lg:mb-16 xl:mb-20">
              2. COMMUNITY
            </h2>

            <div className="card-item mb-12 lg:mb-16 xl:mb-20 bg-white border-2 border-[#485023] rounded-2xl p-8 lg:p-12 xl:p-16 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-4 lg:gap-6 mb-6">
                <div className="bg-[#485023] p-4 lg:p-5 xl:p-6 rounded-xl shadow-lg">
                  <Users className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-[#63403A]">
                  Local Employment & Skill Development
                </h3>
              </div>
              <p className="text-[#63403A]/90 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-6">
                We actively support the local workforce by providing:
              </p>
              <ul className="list-disc list-inside text-[#63403A]/90 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl space-y-3 ml-4">
                <li>Employment across metal, marble, wood, finishing, and assembly departments</li>
                <li>Skill-building through on-the-job training and structured process exposure</li>
                <li>Opportunities for artisans and technicians to grow within specialized trades</li>
              </ul>
              <p className="text-[#63403A]/90 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-6">
                Our operations contribute to the livelihood of numerous families in the region.
              </p>
            </div>

            <div className="card-item bg-[#AE7250] border-2 border-white rounded-2xl p-8 lg:p-12 xl:p-16 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-4 lg:gap-6 mb-6">
                <div className="bg-white/20 p-4 lg:p-5 xl:p-6 rounded-xl shadow-lg">
                  <GraduationCap className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-white">
                  Education & Capability Building
                </h3>
              </div>
              <p className="text-white/90 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                Training initiatives help new workers gain the confidence and skills needed for long-term employability.
                We focus on developing practical manufacturing skills and process understanding across departments.
              </p>
            </div>
          </div>
        </section>

        <section ref={wellbeingRef} className="py-20 lg:py-28 xl:py-36 2xl:py-44 bg-[#BF8B45]">
          <div className="container mx-auto px-6 lg:px-12 xl:px-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-12 lg:mb-16 xl:mb-20">
              3. WELLBEING
            </h2>

            <div className="card-item mb-12 lg:mb-16 xl:mb-20 bg-white border-2 border-[#BF8B45] rounded-2xl p-8 lg:p-12 xl:p-16 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-4 lg:gap-6 mb-6">
                <div className="bg-[#BF8B45] p-4 lg:p-5 xl:p-6 rounded-xl shadow-lg">
                  <Heart className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-[#63403A]">
                  Safe & Ethical Workplace
                </h3>
              </div>
              <p className="text-[#63403A]/90 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-6">
                Our practices are aligned with SEDEX/SMETA principles, emphasising:
              </p>
              <ul className="list-disc list-inside text-[#63403A]/90 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl space-y-3 ml-4">
                <li>Worker safety</li>
                <li>Hygienic facilities</li>
                <li>Ethical manufacturing standards</li>
                <li>Transparent HR and labour practices</li>
              </ul>
            </div>

            <div className="card-item bg-[#63403A] border-2 border-white rounded-2xl p-8 lg:p-12 xl:p-16 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-white mb-6">
                Health & Awareness
              </h3>
              <p className="text-white/90 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                Periodic awareness sessions promote safe working procedures, cleanliness, and responsible work habits,
                contributing to a healthy and empowered workforce.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 xl:py-36 2xl:py-44 bg-[#63403A] text-white">
          <div className="container mx-auto px-6 lg:px-12 xl:px-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-8 lg:mb-12">
              Our Commitment
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl max-w-5xl mx-auto leading-relaxed">
              Sustainability for us is a continuous effort—built into our daily processes, resource planning, and
              workplace culture. Through cleaner production, community support, and ethical operations, we aim to
              maintain a responsible, future-ready manufacturing ecosystem.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
