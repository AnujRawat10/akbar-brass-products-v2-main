import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Sofa,
  Home,
  Coffee,
  Lightbulb,
  TreesIcon,
  Gift,
} from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#F0EFE2]">
      <Header />

      <main>

        {/* HERO */}
        <section className="bg-[#EFE8D6] text-[#63403A] pt-28 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Product Portfolio
            </h1>
            <p className="text-xl text-[#63403A]/85">
              At Akbar Brass Products, our portfolio is built on multi-material manufacturing and engineered product development. We design and produce collections across Furniture, Home Décor, Serveware & Barware, Lighting, Outdoor, Seasonal, and Pet Accessories—combining metal, marble, wood, glass, and mixed materials with stable, export-ready constructions.
            </p>
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
                Furniture constructions are engineered for stability, weight performance, smooth integration of materials, and global durability standards.
              </p>
            </div>

            <div className="h-96 rounded-lg overflow-hidden border border-white/10">
              <img src="/home-page/metal1.jpg" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* HOME DECOR — WARM */}
        <section className="py-16 bg-[#C4AE9F] text-[#63403A] border-b border-[#63403A]/20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg overflow-hidden order-2 md:order-1 border border-[#63403A]/20">
              <img src="/home-page/metal.jpg" className="w-full h-full object-cover" />
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-10 h-10 text-[#AE7250]" />
                <h2 className="text-3xl font-bold">Home Décor</h2>
              </div>

              <p className="opacity-80 mb-6">
                Our décor collection includes metal, marble, wood, and mixed-material accessories developed with precision machining and clean finishing.
              </p>

              <ul className="list-disc list-inside opacity-80 space-y-2">
                <li>Candle holders & lanterns</li>
                <li>Vases & planters</li>
                <li>Sculptures & décor objects</li>
                <li>Wall décor & accessories</li>
              </ul>
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
                We produce metal, stone, and mixed-material serveware for global markets.
              </p>

              <ul className="list-disc list-inside opacity-85 space-y-2">
                <li>Trays, bowls & platters</li>
                <li>Bar tools & bar sets</li>
                <li>Cake stands</li>
                <li>Tabletop accessories</li>
              </ul>
            </div>

            <div className="h-96 rounded-lg overflow-hidden border border-[#63403A]/20">
              <img src="/home-page/marble.jpg" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* LIGHTING — BRASS */}
        <section className="py-16 bg-[#BF8B45] text-[#63403A] border-b border-[#63403A]/20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg overflow-hidden order-2 md:order-1 border border-[#63403A]/20">
              <img src="/home-page/metal2.jpg" className="w-full h-full object-cover" />
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-10 h-10" />
                <h2 className="text-3xl font-bold">Lighting</h2>
              </div>

              <p className="opacity-90">
                Lighting products engineered with export-grade electrical compliance.
              </p>
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
