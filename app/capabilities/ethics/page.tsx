"use client"

import { useEffect, useRef } from "react"
import { Shield, FileCheck, Lock, CheckCircle2, Beaker, Package, Award } from "lucide-react"
import gsap from "gsap"

export default function EthicsPageRedesigned() {
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const descTextRef = useRef<HTMLParagraphElement>(null)
  const qualityTitleRef = useRef<HTMLHeadingElement>(null)
  const qualityCardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    /* Hero title animation */
    if (heroTitleRef.current) {
      gsap.fromTo(
        heroTitleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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
          duration: 0.5,
          delay: 0.2,
          ease: "power3.out",
        }
      )
    }

    /* Quality section title animation */
    if (qualityTitleRef.current) {
      gsap.fromTo(
        qualityTitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.4,
          ease: "power3.out",
        }
      )
    }

    /* Quality cards stagger animation */
    if (qualityCardsRef.current) {
      const cards = qualityCardsRef.current.children
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          delay: 0.6,
          ease: "power2.out",
        }
      )
    }
  }, [])
  return (
    <div className="min-h-screen bg-[#F0EFE2]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/WhatsApp Image 2026-02-11 at 18.36.38 copy.jpeg"
            alt="Our Capabilities"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 ref={heroTitleRef} className="font-serif text-4xl md:text-5xl xl:text-6xl text-white mb-0 tracking-[0.2em] uppercase">
            ETHICS & COMPLIANCE
          </h1>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className="py-16 px-6" style={{ backgroundColor: "#C87550" }}>
        <div className="max-w-4xl mx-auto">
          <p ref={descTextRef} className="text-center text-lg md:text-xl text-white leading-relaxed">
At Akbar Brass Products, quality is a disciplined, system-driven approach that guides every stage of our manufacturing process. Our workflows, inspections, and compliance practices are aligned with global retail requirements to ensure consistency, safety and long-term performance.
</p>
        </div>
      </section>

      {/* ================= QUALITY MANAGEMENT ================= */}
      <section className="py-28 bg-[#F0EFE2] px-6">
        <div className="max-w-7xl mx-auto">
          <div ref={qualityTitleRef} className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-[#63403A] font-bold">
              Quality Management
            </h2>
            <div className="w-24 h-[2px] bg-[#BF8B45] mx-auto" />
          </div>

          <div ref={qualityCardsRef} className="grid md:grid-cols-3 gap-10">
            {/* Multi-Stage QC System */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-[#9A9D85]/20 overflow-hidden">
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src="/qm1.jpeg"
                  alt="Multi-Stage QC System"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-10">
                <div className="w-16 h-16 bg-[#485023] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#BF8B45] transition-all duration-500">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl mb-4 text-[#63403A] font-bold">
                  Multi-Stage QC System
                </h3>
                <p className="text-[#63403A]/75 leading-relaxed mb-4">
                  Each product passes through a structured quality pathway starting with construction checks at the first inline stage, followed by midline assessments for finishing, alignment, and functional accuracy.
                </p>
                <p className="text-[#63403A]/75 leading-relaxed">
                  Every piece then undergoes 100% final inspection before packing, ensuring consistency across all production batches.
                </p>
                <div className="h-[2px] w-0 bg-[#BF8B45] group-hover:w-full transition-all duration-500 mt-6" />
              </div>
            </div>

            {/* Product Testing */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-[#9A9D85]/20 overflow-hidden">
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src="/qm2.jpeg"
                  alt="Product Testing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-10">
                <div className="w-16 h-16 bg-[#485023] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#BF8B45] transition-all duration-500">
                  <Beaker className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl mb-4 text-[#63403A] font-bold">
                  Product Testing
                </h3>
                <p className="text-[#63403A]/75 leading-relaxed mb-4">
                  Our dedicated testing lab enables us to verify materials, finishes, construction, and performance in line with global retail expectations.
                </p>
                <p className="text-[#63403A]/75 leading-relaxed">
                  The lab supports pre-production validation, in-process checks, and final approvals, ensuring export-quality reliability and consistent standards across every shipment.
                </p>
                <div className="h-[2px] w-0 bg-[#BF8B45] group-hover:w-full transition-all duration-500 mt-6" />
              </div>
            </div>

            {/* Packaging Standards */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-[#9A9D85]/20 overflow-hidden">
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src="/Pages/3 Capabilities/3 Ethics & Compliance/Screenshot 2026-01-26 at 4.08.43 PM.png"
                  alt="Packaging Standards"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-10">
                <div className="w-16 h-16 bg-[#485023] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#BF8B45] transition-all duration-500">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl mb-4 text-[#63403A] font-bold">
                  Packaging Standards
                </h3>
                <p className="text-[#63403A]/75 leading-relaxed mb-4">
                  To guarantee secure and damage-free delivery, our packaging undergoes carton bursting strength assessments, controlled drop testing, and packaging evaluations aligned with ISTA standards.
                </p>
                <p className="text-[#63403A]/75 leading-relaxed">
                  These procedures ensure that every shipment is protected, compliant, and ready for international logistics.
                </p>
                <div className="h-[2px] w-0 bg-[#BF8B45] group-hover:w-full transition-all duration-500 mt-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPLIANCE & AUDITS ================= */}
      <section className="py-28 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-[#63403A] font-bold">
              Compliance & Audits
            </h2>
            <div className="w-24 h-[2px] bg-[#BF8B45] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* SEDEX */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#63403A] to-[#485023] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-[#63403A] font-bold">
                SEDEX – Social Compliance
              </h3>
              <p className="text-[#63403A]/70 leading-relaxed">
                We maintain SEDEX-aligned systems covering safe working environments, ethical manufacturing practices, and responsible sourcing.
              </p>
            </div>

            {/* Technical Audits */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#63403A] to-[#485023] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <FileCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-[#63403A] font-bold">
                Technical Audits
              </h3>
              <p className="text-[#63403A]/70 leading-relaxed">
                Our facility is regularly audited by global retailers and accredited testing agencies. These audits verify process controls, material and finish compliance, electrical and mechanical performance, and packing integrity in line with international benchmarks.
              </p>
            </div>

            {/* C-TPAT */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#63403A] to-[#485023] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-[#63403A] font-bold">
                C-TPAT–Aligned Security Practices
              </h3>
              <p className="text-[#63403A]/70 leading-relaxed">
                We follow controlled-access protocols, secure packing procedures, and documented shipment handling processes aligned with C-TPAT expectations, ensuring safe and transparent movement of goods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section className="py-28 bg-[#EFE8D6] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-[#63403A] font-bold">
              Certifications
            </h2>
            <div className="w-24 h-[2px] bg-[#BF8B45] mx-auto mb-8" />
            <p className="text-lg text-[#63403A]/75 max-w-3xl mx-auto leading-relaxed">
              We support international markets with globally recognized product and process certifications, including:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* SEDEX */}
            <div className="group bg-white p-8 rounded-lg border border-[#9A9D85]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/partners/1.png" alt="SEDEX Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 text-[#63403A] font-bold">
                    SEDEX
                  </h3>
                  <p className="text-[#63403A]/70 leading-relaxed">
                    Social Compliance
                  </p>
                </div>
              </div>
            </div>

            {/* C-TPAT */}
            <div className="group bg-white p-8 rounded-lg border border-[#9A9D85]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/partners/2.png" alt="C-TPAT Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 text-[#63403A] font-bold">
                    C-TPAT
                  </h3>
                  <p className="text-[#63403A]/70 leading-relaxed">
                    Supply Chain Security
                  </p>
                </div>
              </div>
            </div>

            {/* UL / CUL */}
            <div className="group bg-white p-8 rounded-lg border border-[#9A9D85]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/partners/3.png" alt="UL Listed Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 text-[#63403A] font-bold">
                    UL / CUL Compliant
                  </h3>
                  <p className="text-[#63403A]/70 leading-relaxed">
                    Lighting assemblies for North America
                  </p>
                </div>
              </div>
            </div>

            {/* BIS */}
            <div className="group bg-white p-8 rounded-lg border border-[#9A9D85]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 flex items-center justify-center flex-shrink-0">
                  <img src="/partners/4.jpeg" alt="Bureau of Indian Standards Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 text-[#63403A] font-bold">
                    BIS Certified
                  </h3>
                  <p className="text-[#63403A]/70 leading-relaxed">
                    Bureau of Indian Standards
                  </p>
                </div>
              </div>
            </div>

            {/* ISO 9001:2015
            <div className="group bg-white p-8 rounded-lg border border-[#9A9D85]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-[#485023] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#BF8B45] transition-colors">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 text-[#63403A] font-bold">
                    ISO 9001:2015
                  </h3>
                  <p className="text-[#63403A]/70 leading-relaxed">
                    Quality Management System
                  </p>
                </div>
              </div>
            </div>


            <div className="group bg-white p-8 rounded-lg border border-[#9A9D85]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-[#003399] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-3xl font-bold">CE</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 text-[#63403A] font-bold">
                    CE Compliant
                  </h3>
                  <p className="text-[#63403A]/70 leading-relaxed">
                    Electrical products for Europe
                  </p>
                </div>
              </div>
            </div>

       
            <div className="group bg-white p-8 rounded-lg border border-[#9A9D85]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 md:col-span-2">
              <div className="flex items-start gap-4 justify-center">
                <div className="w-20 h-20 bg-[#485023] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#BF8B45] transition-colors">
                  <FileCheck className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 text-[#63403A] font-bold">
                    Standardized SOPs
                  </h3>
                  <p className="text-[#63403A]/70 leading-relaxed">
                    Compliance documentation across all departments
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* ================= CLOSING STATEMENT ================= */}
      <section className="py-28 bg-[#485023] text-white px-6 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-80 h-80 border border-white rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="w-20 h-[2px] bg-[#BF8B45] mx-auto mb-10" />
          <p className="text-2xl md:text-3xl font-serif leading-relaxed text-white/95 mb-12">
            Our quality and compliance systems ensure that every product leaving our factory is built with precision, tested for durability, packed for global transit, and backed by internationally aligned safety and ethical standards.
          </p>
        </div>
      </section>

    </div>
  )
}
