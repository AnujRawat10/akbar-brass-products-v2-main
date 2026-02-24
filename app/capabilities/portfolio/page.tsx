import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Sofa,
  Home,
  Coffee,
  Lightbulb,
  TreesIcon,
  Gift,
  Recycle,
  Droplet
} from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#F0EFE2]">
      

      <main>

         {/* HERO SECTION */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/WhatsApp Image 2026-02-11 at 18.30.59.jpeg"
            alt="Our Capabilities"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-4xl md:text-5xl xl:text-6xl text-white mb-0 tracking-[0.2em] uppercase">
            PRODUCT PORTFOLIO
          </h1>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className="py-16 px-6" style={{ backgroundColor: "#C87550" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg md:text-xl text-white leading-relaxed">
At Akbar Brass Products, our portfolio is built on multi-material manufacturing and engineered product development. We design and produce collections across Furniture, Home Décor, Serveware & Barware, Lighting, Outdoor, Seasonal and Pet Accessories—combining metal, marble, wood glass and mixed materials with stable, export-ready constructions.          </p>
        </div>
      </section>

        {/* FURNITURE — METAL MOOD */}
        <section className="py-16 bg-[#111] text-[#F0EFE2] border-b border-white/10">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sofa className="w-10 h-10 text-[#BF8B45]" />
                <h2 className="text-3xl font-bold">Furniture</h2>
              </div>

              <p className="opacity-80 mb-6">
                We manufacture a wide range of furniture in metal, marble, wood and mixed materials.
              </p>

              <ul className="list-disc list-inside opacity-80 space-y-2">
                <li>Tables (dining, coffee, side, nesting, drink, accent)</li>
                <li>Storage (consoles, shelves)</li>
                <li>Seating (chairs, stools, benches)</li>
                <li>Bar furniture</li>
              </ul>

              <p className="mt-6 opacity-80">
                Furniture constructions are engineered for stability, weight performance, smooth integration of materials and global durability standards.
              </p>
            </div>

            <div className="h-96 rounded-lg overflow-hidden border border-white/10">
              <img src="/home-page/metal1.jpeg" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* HOME DECOR — WARM */}
        <section className="py-16 bg-[#C4AE9F] text-[#63403A] border-b border-[#63403A]/20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg overflow-hidden order-2 md:order-1 border border-[#63403A]/20">
              <img src="/WhatsApp Image 2026-02-11 at 18.29.45.jpeg" className="w-full h-full object-cover" />
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-10 h-10 text-[#AE7250]" />
                <h2 className="text-3xl font-bold">Home Décor</h2>
              </div>

              <p className="opacity-80 mb-6">
                Our décor collection includes metal, marble, wood and mixed-material accessories developed with precision machining and clean finishing.
              </p>

              <ul className="list-disc list-inside opacity-80 space-y-2">
                <li>Candle holders & lanterns</li>
                <li>Vases & planters</li>
                <li>Sculptures & décor objects</li>
                <li>Frames, clocks & desktop accessories</li>
                <li>Wall décor & accessories</li>
              </ul>
              <p className="mt-6 opacity-80">
Each piece is manufactured with repeatable finishing and controlled workmanship.              </p>
            </div>
          </div>
        </section>

        {/* KITCHEN — STONE */}
        <section className="py-16 bg-[#C19A6B] text-[#63403A] border-b border-[#63403A]/20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Coffee className="w-10 h-10 text-[#63403A]" />
                <h2 className="text-3xl font-bold">
                  Kitchen, Serveware & Barware
                </h2>
              </div>

              <p className="opacity-85 mb-6">
We produce metal, stone and mixed-material serveware for global markets, focusing on finish accuracy, food-safe coatings and stable constructions.</p>

              <ul className="list-disc list-inside opacity-85 space-y-2">
                <li>Trays, bowls & platters</li>
                <li>Bar tools & bar sets</li>
                <li>Cake stands & tiered stands</li>
                <li>Cheese boards, servers & utensils</li>
                <li>Storage products & tabletop accessories</li>
              </ul>
            </div>

            <div className="h-96 rounded-lg overflow-hidden border border-[#63403A]/20">
              <img src="/home-page/marble.jpeg" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* LIGHTING — BRASS */}
        <section className="py-16 bg-[#BF8B45] text-[#63403A] border-b border-[#63403A]/20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg overflow-hidden order-2 md:order-1 border border-[#63403A]/20">
              <img src="/home-page/metal2.jpeg" className="w-full h-full object-cover" />
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-10 h-10" />
                <h2 className="text-3xl font-bold">Lighting</h2>
              </div>

              <p className="opacity-90">
Our lighting products combine metal fabrication, clean finishing and electrical safety requirements.
              </p>
              <ul className="list-disc list-inside opacity-85 space-y-2">
                <li>Table lamps</li>
                <li>Floor lamps</li>
                <li>Pendant lights</li>
                <li>Wall lights</li>
                <li>Task lighting</li>
              </ul>
              <p className="mt-6 opacity-85">
All lighting products can be developed with UL, CUL and CE compliance, based on buyer requirements.</p>            </div>
          </div>
        </section>


        <section className="py-16 bg-[#9A9D85] text-[#63403A]">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Droplet className="w-10 h-10 text-[#BF8B45]" />
                <h2 className="text-3xl font-bold">OUTDOOR & GARDEN</h2>
                </div>
                <p className="opacity-90">
Outdoor products are developed using weather-resistant processes and durable material combinations.              </p>
              <ul className="list-disc list-inside opacity-85 space-y-2">
                <li>Outdoor furniture</li>
                <li>Garden planters</li>
                <li>Fire pits & garden accessories</li>
                <li>Bird feeders, bird baths, hose holders</li>
              </ul>
              <p className="mt-6 opacity-85">
Finishes are engineered for outdoor endurance.
</p>
</div>

            <div className="h-96 rounded-lg overflow-hidden border border-[#63403A]/20">
              <img src="/outdoor.jpeg" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
         <section className="py-16 bg-[#BF8B45] text-[#63403A] border-b border-[#63403A]/20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg overflow-hidden order-2 md:order-1 border border-[#63403A]/20">
              <img src="/festive.jpeg" className="w-full h-full object-cover" />
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="w-10 h-10" />
                <h2 className="text-3xl font-bold">FESTIVE & SEASONAL</h2>
              </div>

              <p className="opacity-90">
We produce multi-material seasonal ranges for international holiday and occasion programs, crafted in metal, wood, stone and mixed materials.              </p>
        
              <p className="mt-6 opacity-85">
Key Programs:
Christmas · Halloween · Easter · St. Patrick’s Day · Mother’s Day / Father’s Day · Valentine’s Day
Designed with precise forming, finishing and hand-detailing capability.</p>          
</div>
          </div>
        </section>
            

        {/* CTA */}
        <section className="py-20 bg-[#485023] text-[#F0EFE2]">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xl max-w-4xl mx-auto mb-8 leading-relaxed">
              Across all categories, our portfolio is supported by disciplined engineering and multi-material integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/login"
                className="px-8 py-3 bg-[#BF8B45] text-[#63403A] rounded hover:opacity-90 transition"
              >
                Login to Product Gallery
              </Link>

              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-[#BF8B45] text-[#F0EFE2] rounded hover:bg-[#BF8B45] hover:text-[#63403A] transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
