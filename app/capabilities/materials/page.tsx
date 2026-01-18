import { Header } from "@/components/header"
import { Factory, Trees, Layers } from "lucide-react"

export default function MaterialsPage() {
  return (
    <div className="min-h-screen bg-[#F0EFE2]">
      <Header />

      <main>

        {/* ================= HERO ================= */}
        <section className="bg-[#EFE8D6] text-[#63403A] pt-24 sm:pt-28 pb-16 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-5">
              Materials & Finishes
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#63403A]/80 max-w-4xl mx-auto leading-relaxed">
              Our manufacturing strength comes from our ability to work seamlessly
              across multiple materials — engineered for global markets.
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
                With over five decades of metalworking expertise, our metal
                division blends traditional skill with advanced industrial systems.
              </p>

              <ul className="list-disc list-inside opacity-80 space-y-2 text-sm sm:text-base">
                <li>Sheet, wire and tube fabrication</li>
                <li>MIG / TIG welding</li>
                <li>Sand casting and spinning</li>
                <li>Machining, polishing and plating</li>
                <li>Powder coating and custom patinas</li>
              </ul>

              <p className="mt-5 opacity-80 text-sm sm:text-base">
                Materials: Iron, aluminium, stainless steel, brass.
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
                Our stone unit processes natural marble and stone for premium
                furniture and décor applications.
              </p>

              <ul className="list-disc list-inside opacity-80 space-y-2 text-sm sm:text-base">
                <li>Block and slab cutting</li>
                <li>Shaping and profiling</li>
                <li>Edge finishing</li>
                <li>Polished, honed and textured surfaces</li>
              </ul>
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
                We work with seasoned hardwoods and veneers, engineered to
                integrate seamlessly with metal and stone structures.
              </p>

              <ul className="list-disc list-inside opacity-85 space-y-2 text-sm sm:text-base">
                <li>Moisture-controlled seasoning</li>
                <li>Precision cutting and profiling</li>
                <li>Joinery and structural preparation</li>
                <li>Multi-material compatibility</li>
              </ul>
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

        {/* ================= CLOSING ================= */}
        <section className="py-16 sm:py-20 bg-[#485023] text-[#F0EFE2]">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-6xl">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mx-auto">
              Our multi-material manufacturing capabilities allow us to deliver
              structurally sound, aesthetically refined products engineered for
              global export markets.
            </p>
          </div>
        </section>

      </main>
    </div>
  )
}
