"use client"
import { useEffect, useRef } from "react"
import { Droplets, Wind, Recycle, Users, GraduationCap, Heart, ClipboardCheck } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function SustainabilityPage() {
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const descTextRef = useRef<HTMLParagraphElement>(null)
  const environmentRef = useRef<HTMLElement>(null)
  const communityRef = useRef<HTMLElement>(null)
  const wellbeingRef = useRef<HTMLElement>(null)

  useEffect(() => {
    /* ================= HERO TITLE ================= */
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

    /* ================= DESCRIPTION ================= */
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
       <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/sus.png"
            alt="Our Capabilities"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 ref={heroTitleRef} className="font-serif text-4xl md:text-5xl xl:text-6xl text-white mb-0 tracking-[0.2em] uppercase">
            SUSTAINABILITY
          </h1>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className="py-16 px-6" style={{ backgroundColor: "#485023" }}>
        <div className="max-w-4xl mx-auto">
          <p ref={descTextRef} className="text-center text-lg md:text-xl text-white leading-relaxed">
At Akbar Brass Products, sustainability is built into our manufacturing systems, resource management, and workplace practices.Our approach focuses on three key pillars: Environment, Community, and Wellbeing—ensuring responsible production and long-term operational reliability.
</p>
        </div>
      </section>

        <section ref={environmentRef} className="py-20 bg-[#9A9D85]">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              1. ENVIRONMENT
            </h2>

            <div className="card-item mb-12 bg-white border-2 border-[#9A9D85] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="h-[250px] md:h-full overflow-hidden">
                  <img
                    src="/WhatsApp Image 2026-02-11 at 18.41.51.jpeg"
                    alt="Water Resource Management"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#9A9D85] p-5 rounded-xl shadow-lg">
                      <Droplets className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#63403A]">
                      Responsible Resource Management
                    </h3>
                  </div>
                  <p className="text-[#63403A]/90 text-sm md:text-base lg:text-lg leading-relaxed mb-6">
                    Our integrated manufacturing campus is equipped with:
                  </p>
                  <ul className="list-disc list-inside text-[#63403A]/90 text-sm md:text-base lg:text-lg leading-relaxed space-y-2 ml-4">
                    <li>Effluent Treatment Plant (ETP)</li>
                    <li>Sewage Treatment Plant (STP)</li>
                    <li>Reverse Osmosis (RO) system</li>
                    <li>Rainwater harvesting infrastructure</li>
                  </ul>
                  <p className="text-[#63403A]/90 text-sm md:text-base lg:text-lg leading-relaxed mt-6">
                    These systems enable water recycling, reduce groundwater usage, and ensure safe, compliant discharge of
                    treated water.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-item mb-12 bg-[#485023] border-2 border-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-5 rounded-xl shadow-lg">
                  <Wind className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  Cleaner Production
                </h3>
              </div>
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                We maintain clean and controlled production environments through:
              </p>
              <ul className="list-disc list-inside text-white/90 text-base md:text-lg leading-relaxed space-y-2 ml-4">
                <li>Dust collectors in metal polishing, marble processing, and woodworking</li>
                <li>Controlled finishing areas for plating, powder coating, and lacquer</li>
                <li>Energy-efficient machinery and monitored power usage</li>
              </ul>
              <p className="text-white/90 text-base md:text-lg leading-relaxed mt-6">
                These practices help reduce emissions, improve air quality, and lower our environmental impact.
              </p>
            </div>

            <div className="card-item mb-12 bg-white border-2 border-[#9A9D85] rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#9A9D85] p-5 rounded-xl shadow-lg">
                  <Recycle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#63403A]">
                  Recycling & Material Efficiency
                </h3>
              </div>
              <p className="text-[#63403A]/90 text-base md:text-lg leading-relaxed mb-6">
                Material management is structured around responsible use and circular processes:
              </p>
              <ul className="list-disc list-inside text-[#63403A]/90 text-base md:text-lg leading-relaxed space-y-2 ml-4">
                <li>Metal scrap is segregated and recycled back into controlled supply chains</li>
                <li>Wood, stone, and packaging materials are reused or recycled wherever possible</li>
                <li>Cutting patterns for metal, marble, and wood are optimized to reduce wastage</li>
              </ul>
            </div>

            <div className="card-item bg-[#485023] border-2 border-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-5 rounded-xl shadow-lg">
                  <ClipboardCheck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  Environmental Audits & Continuous Improvement
                </h3>
              </div>
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                Our manufacturing facility undergoes independent third-party environmental audits against internationally recognised compliance frameworks.
              </p>
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                These assessments review environmental management systems, energy and water use, wastewater treatment, emissions, waste handling, chemical management, and emergency preparedness.
              </p>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Insights from audit processes are used internally to strengthen operational controls and support ongoing improvements across our environmental practices.
              </p>
            </div>
          </div>
        </section>

        <section ref={communityRef} className="py-20 bg-[#485023]">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              2. COMMUNITY
            </h2>

            <div className="card-item mb-12 bg-white border-2 border-[#485023] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="h-[250px] md:h-full overflow-hidden">
                  <img
                    src="/WhatsApp Image 2026-02-11 at 18.44.13.jpeg"
                    alt="Local Employment & Skill Development"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#485023] p-5 rounded-xl shadow-lg">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#63403A]">
                      Local Employment & Skill Development
                    </h3>
                  </div>
                  <p className="text-[#63403A]/90 text-sm md:text-base lg:text-lg leading-relaxed mb-6">
                    We actively support the local workforce by providing:
                  </p>
                  <ul className="list-disc list-inside text-[#63403A]/90 text-sm md:text-base lg:text-lg leading-relaxed space-y-2 ml-4">
                    <li>Employment across metal, marble, wood, finishing, and assembly departments</li>
                    <li>Skill-building through on-the-job training and structured process exposure</li>
                    <li>Opportunities for artisans and technicians to grow within specialized trades</li>
                  </ul>
                  <p className="text-[#63403A]/90 text-sm md:text-base lg:text-lg leading-relaxed mt-6">
                    Our operations contribute to the livelihood of numerous families in the region.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-item bg-[#AE7250] border-2 border-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-5 rounded-xl shadow-lg">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  Education & Capability Building
                </h3>
              </div>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Training initiatives help new workers gain the confidence and skills needed for long-term employability.
                We focus on developing practical manufacturing skills and process understanding across departments.
              </p>
            </div>
          </div>
        </section>

        <section ref={wellbeingRef} className="py-20 bg-[#BF8B45]">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              3. WELLBEING
            </h2>

            <div className="card-item mb-12 bg-white border-2 border-[#BF8B45] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="h-[250px] md:h-full overflow-hidden">
                  <img
                    src="/WhatsApp Image 2026-02-11 at 18.41.57.jpeg"
                    alt="Safe & Ethical Workplace"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#BF8B45] p-5 rounded-xl shadow-lg">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#63403A]">
                      Safe & Ethical Workplace
                    </h3>
                  </div>
                  <p className="text-[#63403A]/90 text-sm md:text-base lg:text-lg leading-relaxed mb-6">
                    Our practices are aligned with SEDEX/SMETA principles, emphasising:
                  </p>
                  <ul className="list-disc list-inside text-[#63403A]/90 text-sm md:text-base lg:text-lg leading-relaxed space-y-2 ml-4">
                    <li>Worker safety</li>
                    <li>Hygienic facilities</li>
                    <li>Ethical manufacturing standards</li>
                    <li>Transparent HR and labour practices</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-item bg-[#63403A] border-2 border-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Health & Awareness
              </h3>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Periodic awareness sessions promote safe working procedures, cleanliness, and responsible work habits,
                contributing to a healthy and empowered workforce.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#63403A] text-white">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-10">
              Our Commitment
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
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
