import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sofa, Home, Coffee, Lightbulb, TreesIcon, Gift, PawPrint } from 'lucide-react'
import Link from "next/link"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#EDE8D0]">
      <Header />
      
     <main >
        {/* Hero Section */}
        <section className="bg-[#521C0D] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Product Portfolio</h1>
            <p className="text-xl text-white opacity-90 max-w-4xl">
              At Akbar Brass Products, our portfolio is built on multi-material manufacturing and engineered product development. We design and produce collections across Furniture, Home Décor, Serveware & Barware, Lighting, Outdoor, Seasonal, and Pet Accessories—combining metal, marble, wood, glass, and mixed materials with stable, export-ready constructions.
            </p>
          </div>
        </section>

        {/* Furniture */}
        <section className="py-16 border-b border-[#521C0D] border-opacity-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Sofa className="w-10 h-10 text-[#521C0D]" />
                  <h2 className="text-3xl font-bold text-[#521C0D]">Furniture</h2>
                </div>
                <p className="text-[#521C0D] opacity-80 mb-6">
                  We manufacture a wide range of furniture in metal, marble, wood and mixed materials.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-[#521C0D] mb-3">Capabilities include:</h3>
                  <ul className="list-disc list-inside text-[#521C0D] opacity-80 space-y-2">
                    <li>Tables (dining, coffee, side, nesting, drink, accent)</li>
                    <li>Storage (consoles, shelves)</li>
                    <li>Seating (chairs, stools, benches)</li>
                    <li>Bar furniture</li>
                  </ul>
                </div>
                <p className="text-[#521C0D] opacity-80">
                  Furniture constructions are engineered for stability, weight performance, smooth integration of materials, and global durability standards.
                </p>
              </div>
              <div className="h-96 bg-gray-200 rounded-lg">
                <img 
                  src="/home-page/metal1.jpg"
                  alt="Furniture" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Home Décor */}
        <section className="py-16 bg-white border-b border-[#521C0D] border-opacity-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-96 bg-gray-200 rounded-lg order-2 md:order-1">
                <img 
                  src="/home-page/metal.jpg"
                  alt="Home Décor" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <Home className="w-10 h-10 text-[#521C0D]" />
                  <h2 className="text-3xl font-bold text-[#521C0D]">Home Décor</h2>
                </div>
                <p className="text-[#521C0D] opacity-80 mb-6">
                  Our décor collection includes metal, marble, wood, and mixed-material accessories developed with precision machining and clean finishing.
                </p>
                <div>
                  <h3 className="font-semibold text-[#521C0D] mb-3">Categories include:</h3>
                  <ul className="list-disc list-inside text-[#521C0D] opacity-80 space-y-2">
                    <li>Candle holders & lanterns</li>
                    <li>Vases & planters</li>
                    <li>Sculptures, figurines & décor objects</li>
                    <li>Frames, clocks & desktop accessories</li>
                    <li>Wall décor (mirrors, hooks, coat racks, magazine holders)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kitchen, Serveware & Barware */}
        <section className="py-16 border-b border-[#521C0D] border-opacity-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Coffee className="w-10 h-10 text-[#521C0D]" />
                  <h2 className="text-3xl font-bold text-[#521C0D]">Kitchen, Serveware & Barware</h2>
                </div>
                <p className="text-[#521C0D] opacity-80 mb-6">
                  We produce metal, stone, and mixed-material serveware for global markets, focusing on finish accuracy, food-safe coatings, and stable constructions.
                </p>
                <div>
                  <h3 className="font-semibold text-[#521C0D] mb-3">Capabilities include:</h3>
                  <ul className="list-disc list-inside text-[#521C0D] opacity-80 space-y-2">
                    <li>Trays, bowls & platters</li>
                    <li>Bar tools & bar sets</li>
                    <li>Cake stands & tiered stands</li>
                    <li>Cheese boards, servers & utensils</li>
                    <li>Storage products & tabletop accessories</li>
                  </ul>
                </div>
              </div>
              <div className="h-96 bg-gray-200 rounded-lg">
                <img 
                  src="/home-page/marble.jpg"
                  alt="Serveware" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Lighting */}
        <section className="py-16 bg-white border-b border-[#521C0D] border-opacity-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-96 bg-gray-200 rounded-lg order-2 md:order-1">
                <img 
                  src="/home-page/metal2.jpg"
                  alt="Lighting" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-10 h-10 text-[#521C0D]" />
                  <h2 className="text-3xl font-bold text-[#521C0D]">Lighting</h2>
                </div>
                <p className="text-[#521C0D] opacity-80 mb-6">
                  Our lighting products combine metal fabrication, clean finishing, and electrical safety requirements.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-[#521C0D] mb-3">We manufacture:</h3>
                  <ul className="list-disc list-inside text-[#521C0D] opacity-80 space-y-2">
                    <li>Table lamps</li>
                    <li>Floor lamps</li>
                    <li>Pendant lights</li>
                    <li>Wall lights</li>
                    <li>Task lighting</li>
                  </ul>
                </div>
                <p className="text-[#521C0D] opacity-80">
                  All lighting products can be developed with UL, CUL, and CE compliance, based on buyer requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outdoor & Garden */}
        <section className="py-16 border-b border-[#521C0D] border-opacity-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <TreesIcon className="w-10 h-10 text-[#521C0D]" />
                  <h2 className="text-3xl font-bold text-[#521C0D]">Outdoor & Garden</h2>
                </div>
                <p className="text-[#521C0D] opacity-80 mb-6">
                  Outdoor products are developed using weather-resistant processes and durable material combinations.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-[#521C0D] mb-3">Portfolio includes:</h3>
                  <ul className="list-disc list-inside text-[#521C0D] opacity-80 space-y-2">
                    <li>Outdoor furniture</li>
                    <li>Garden planters</li>
                    <li>Fire pits & garden accessories</li>
                    <li>Bird feeders, bird baths, hose holders</li>
                  </ul>
                </div>
                <p className="text-[#521C0D] opacity-80">
                  Finishes are engineered for outdoor endurance.
                </p>
              </div>
              <div className="h-96 bg-gray-200 rounded-lg">
                <img 
                  src="/home-page/marble2.jpg"
                  alt="Outdoor" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Festive & Seasonal */}
        <section className="py-16 bg-white border-b border-[#521C0D] border-opacity-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-96 bg-gray-200 rounded-lg order-2 md:order-1">
                <img 
                  src="/home-page/wood.jpg"
                  alt="Seasonal" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <Gift className="w-10 h-10 text-[#521C0D]" />
                  <h2 className="text-3xl font-bold text-[#521C0D]">Festive & Seasonal</h2>
                </div>
                <p className="text-[#521C0D] opacity-80 mb-6">
                  We produce multi-material seasonal ranges for international holiday and occasion programs, crafted in metal, wood, stone, and mixed materials.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-[#521C0D] mb-3">Key Programs:</h3>
                  <p className="text-[#521C0D] opacity-80">
                    Christmas · Halloween · Easter · St. Patrick's Day · Mother's Day / Father's Day · Valentine's Day
                  </p>
                </div>
                <p className="text-[#521C0D] opacity-80">
                  Designed with precise forming, finishing, and hand-detailing capability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-16 bg-[#521C0D] text-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xl max-w-4xl mx-auto mb-8">
              Across all categories, our portfolio is supported by disciplined engineering, multi-material integration, and stable production systems — enabling us to deliver consistent quality across high-mix, high-volume manufacturing.
            </p>
          </div>
        </section>

        {/* Product Gallery Access */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#521C0D] mb-4">Explore Our Product Gallery</h2>
            <p className="text-[#521C0D] opacity-80 mb-8 max-w-2xl mx-auto">
              Registered buyers can log in to access our product photo library and create an enquiry list.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#521C0D] text-white hover:bg-[#521C0D] hover:opacity-90 transition-all rounded"
              >
                Login to Product Gallery
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#521C0D] border-2 border-[#521C0D]  transition-all rounded"
              >
                Don't have access? Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  )
}