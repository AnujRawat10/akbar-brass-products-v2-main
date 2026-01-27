import { Header } from "@/components/header"
import { Factory, Trees, Layers, Shield, Sparkles, CheckCircle2, Award } from "lucide-react"
import MaterialExcellenceSection from "@/components/MaterialExcellenceSection"
export default function MaterialsPage() {
  const features = [
    {
      icon: <Award className="w-10 h-10" />,
      title: "Multi-Material Mastery",
      desc: "Expert handling of metal, marble, wood, and composite materials under one roof."
    },
    {
      icon: <CheckCircle2 className="w-10 h-10" />,
      title: "Finish Consistency",
      desc: "Standardized finishing processes ensuring uniform quality across production batches."
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Custom Development",
      desc: "In-house capability to develop and test new material combinations and finish techniques."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Durability Testing",
      desc: "Every finish undergoes rigorous testing for adhesion, corrosion resistance, and longevity."
    }
  ]
  return (
    <div className="min-h-screen bg-[#F0EFE2]">
 
      <main>

        {/* ================= HERO ================= */}
     
      {/* HERO SECTION */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/finishes.JPG"
            alt="Our Capabilities"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-4xl md:text-5xl xl:text-6xl text-white mb-0 tracking-[0.2em] uppercase">
            MATERIALS & FINISHES
          </h1>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className="py-16 px-6" style={{ backgroundColor: "#C87550" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg md:text-xl text-white leading-relaxed">
            Our manufacturing strength comes from our ability to work seamlessly across multiple materials.With dedicated units for metal, marble, wood, and mixed-material integration, we deliver precision-engineered products built for global markets.Each material is processed in-house using controlled methods, modern machinery, and disciplined craftsmanship to ensure accuracy, consistency, and durability.
          </p>
        </div>
      </section>

        {/* ================= METAL ================= */}
        <section className="py-16 sm:py-20 bg-[#111820] text-[#F0EFE2]">
          <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl">

            <div>
              <div className="flex items-center gap-3 mb-5">
                <Factory className="w-8 h-8 sm:w-10 sm:h-10 text-[#BF8B45]" />
                <h2 className="text-2xl sm:text-3xl font-bold">Metal</h2>
              </div>

              <p className="opacity-80 mb-5 text-sm sm:text-base leading-relaxed">
                With more than five decades of metalworking experience, our metal division combines traditional craftsmanship with advanced fabrication techniques.
              </p>

              <ul className="list-disc list-inside opacity-80 space-y-2 text-sm sm:text-base">
                <li>Sheet, wire and tube fabrication</li>
                <li>Metal cutting, bending, forming</li>
                <li>MIG / TIG welding</li>
                <li>Sand casting</li>
                <li>Sheet spinning</li>
                <li>Machining, polishing and plating</li>
                <li>Polishing and buffing</li>
                <li>Plating and powder coating</li>
              </ul>

              <p className="mt-5 opacity-80 text-sm sm:text-base">
                Materials processed:
Iron, aluminium, stainless steel, and brass.
Our controlled processes ensure clean constructions, accurate proportions, and repeatable finish quality across all product categories.

              </p>
            </div>

            <div className="h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden border border-white/10">
              <img
                src="/materials/metal.png"
                className="w-full h-full object-cover"
                alt="Metal"
              />
            </div>
          </div>
        </section>

        {/* ================= MARBLE ================= */}
        <section className="py-16 sm:py-20 bg-[#9A9D85]/40 text-[#63403A]">
          <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl">

            <div className="order-2 md:order-1 h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden border border-[#63403A]/20">
              <img
                src="/materials/marble.png"
                className="w-full h-full object-cover"
                alt="Marble"
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-5">
                <Layers className="w-8 h-8 sm:w-10 sm:h-10 text-[#BF8B45]" />
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Marble & Stone
                </h2>
              </div>

              <p className="opacity-80 mb-5 text-sm sm:text-base leading-relaxed">
                Our in-house stone unit processes a wide range of marbles and natural stones for tabletops, furniture components, and decorative accessories.
              </p>

              <ul className="list-disc list-inside opacity-80 space-y-2 text-sm sm:text-base">
                <li>Block and slab cutting</li>
                <li>Shaping and profiling</li>
                <li>Edge finishing</li>
                <li>Engraving and drilling</li>
                <li>Polished, honed and textured surfaces</li>
              </ul>
              <p className="mt-5 opacity-80 text-sm sm:text-base">
               Each stone component is calibrated precisely for smooth integration with metal and wood structures.</p>
            </div>
          </div>
        </section>

        {/* ================= WOOD ================= */}
        <section className="py-16 sm:py-20 bg-[#63403A] text-[#F0EFE2]">
          <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl">

            <div>
              <div className="flex items-center gap-3 mb-5">
                <Trees className="w-8 h-8 sm:w-10 sm:h-10 text-[#BF8B45]" />
                <h2 className="text-2xl sm:text-3xl font-bold">Wood</h2>
              </div>

              <p className="opacity-85 mb-5 text-sm sm:text-base leading-relaxed">
                We work with both indigenous and imported hardwoods and veneers to support multi-material product development.
              </p>

              <ul className="list-disc list-inside opacity-85 space-y-2 text-sm sm:text-base">
                <li>Seasoning and moisture control</li>
                <li>Cutting, shaping, sanding, and profiling</li>
                <li>Joinery and structural preparation</li>
                <li>Wood components engineered for compatibility with metal and stone products</li>
              </ul>
              <p className="mt-5 opacity-85 text-sm sm:text-base">
                Wood components are processed to meet export-level requirements for stability, finish, and durability
              </p>
              
            </div>

            <div className="h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden border border-white/10">
              <img
                src="/materials/wood.png"
                className="w-full h-full object-cover"
                alt="Wood"
              />
            </div>
          </div>
        </section>

        {/* ================= MATERIAL EXCELLENCE ================= */}
        <MaterialExcellenceSection />
      </main>
    </div>
  )
}