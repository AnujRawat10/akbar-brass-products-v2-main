"use client"

import { useEffect, useRef } from "react"
import { Trophy } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function RecognitionPage() {
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const descTextRef = useRef<HTMLParagraphElement>(null)
  const awardsGridRef = useRef<HTMLDivElement>(null)

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

    /* Awards grid stagger animation */
    if (awardsGridRef.current) {
      const cards = awardsGridRef.current.children
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: awardsGridRef.current,
            start: "top center+=100",
            once: true,
          },
        }
      )
    }
  }, [])
  const awards = [
    {
      title: "National Export Award — Outstanding Export Performance",
      presentedBy: "Hon'ble Prime Minister of India, Shri Atal Bihari Vajpayee",
      issuedBy: "Ministry of Commerce, Government of India",
      description:
        "A prestigious national honour awarded in recognition of exceptional export performance, manufacturing excellence, and contribution to India's global trade.",
      image: "/Awards/1.png",
    },
    {
      title: "Certificate of Merit for Export Performance (1994–95)",
      presentedBy: "Hon'ble President of India, Shri Shankar Dayal Sharma",
      issuedBy: "Government of India",
      description:
        "A distinguished certificate acknowledging Akbar Brass Products' contribution to India's international export growth and consistent quality across global markets.",
      image: "/Awards/2.png",
    },
    {
      title: "Trophy for Export Performance in EPNS & Handicrafts",
      presentedBy: "Hon'ble Union Minister for Textiles, Shri Kanshi Ram Rana",
      issuedBy: "Ministry of Textiles, Government of India",
      description:
        "A sector-specific national award recognising excellence in EPNS and metal handicraft exports, acknowledging product quality, craftsmanship, and reliable delivery.",
      image: "/Awards/3.png",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/recognition.png"
            alt="Our Capabilities"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 ref={heroTitleRef} className="font-serif text-4xl md:text-5xl xl:text-6xl text-white mb-0 tracking-[0.2em] uppercase">
            Our Recognition
          </h1>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className="py-16 px-6" style={{ backgroundColor: "#C87550" }}>
        <div className="max-w-4xl mx-auto">
          <p ref={descTextRef} className="text-center text-lg md:text-xl text-white leading-relaxed">
           Akbar Brass Products has been recognised with seven national awards for outstanding export performance — including honours presented by the Prime Minister of India, the President of India, and the Union Minister for Textiles. These recognitions reflect the manufacturing excellence, craftsmanship, and reliability that continue to define our evolution into a multi-material furniture and home products manufacturer across global markets.
          </p>
        </div>
      </section>
      <div className="py-24" style={{ backgroundColor: "#F5F1E6" }}>

        {/* Awards Grid */}
        <div ref={awardsGridRef} className="grid gap-12 max-w-5xl mx-auto mb-16">
          {awards.map((award, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              style={{ backgroundColor: "white" }}
            >
              <div
                className="aspect-[4/3] overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: "#f0efe2" }}
              >
                <img
                  src={award.image || "/placeholder.svg"}
                  alt={award.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#63403A" }}>
                  {award.title}
                </h3>

                <p className="text-sm mb-2" style={{ color: "#63403A", opacity: 0.8 }}>
                  <strong>Presented By:</strong> {award.presentedBy}
                </p>

                <p className="text-sm mb-4" style={{ color: "#63403A", opacity: 0.8 }}>
                  <strong>Issued By:</strong> {award.issuedBy}
                </p>

                <p className="leading-relaxed" style={{ color: "#63403A" }}>
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Awards Note */}
        <div className="p-8 rounded-lg text-center max-w-4xl mx-auto mb-12" style={{ backgroundColor: "white" }}>
          <p className="leading-relaxed" style={{ color: "#63403A" }}>
            Akbar Brass Products has received four additional national recognitions from the Government of India for
            sustained performance in the export sector over the years.
          </p>
        </div>

        {/* INSERTED IMAGE STRIP (4 IMAGES) */}
        <div className="max-w-7xl mx-auto mb-16 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {["/Awards/4.png", "/Awards/5.png", "/Awards/6.png", "/Awards/7.png"].map((img, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-3"
              >
                <div className="aspect-[4/3] flex items-center justify-center p-8 md:p-12 bg-gradient-to-br from-[#F0EFE2] via-white to-[#F5F1E6]">
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Additional Award ${index + 1}`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#BF8B45]/20 rounded-3xl transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#BF8B45] via-[#C87550] to-[#BF8B45] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed" style={{ color: "#63403A" }}>
            These national recognitions reflect the trust placed in us by global customers and the dedication of our
            teams across all manufacturing divisions. They continue to inspire our commitment to engineering-led
            processes, consistent quality, and responsible, reliable manufacturing for global markets.
          </p>
        </div>
      </div>
    </div>
  )
}
