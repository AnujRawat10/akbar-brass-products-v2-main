import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Factory, Hammer, Trees, Layers } from 'lucide-react'

export default function MaterialsPage() {
  return (
    <div className="min-h-screen bg-[#EDE8D0]">
      <Header />
      
      <main >
        {/* Hero Section */}
        <section className="bg-[#521C0D] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Materials & Finishes</h1>
            <p className="text-xl text-white opacity-90 max-w-4xl">
              Our manufacturing strength comes from our ability to work seamlessly across multiple materials. With dedicated units for metal, marble, wood, and mixed-material integration, we deliver precision-engineered products built for global markets.
            </p>
          </div>
        </section>

        {/* Metal Section */}
        <section className="py-16 border-b border-[#521C0D] border-opacity-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Factory className="w-10 h-10 text-[#521C0D]" />
                  <h2 className="text-3xl font-bold text-[#521C0D]">Metal</h2>
                </div>
                <p className="text-[#521C0D] opacity-80 mb-6">
                  With more than five decades of metalworking experience, our metal division combines traditional craftsmanship with advanced fabrication techniques.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-[#521C0D] mb-3">Capabilities include:</h3>
                  <ul className="list-disc list-inside text-[#521C0D] opacity-80 space-y-2">
                    <li>Sheet, wire, and tube fabrication</li>
                    <li>Metal cutting, bending, forming</li>
                    <li>MIG / TIG welding</li>
                    <li>Sand casting</li>
                    <li>Sheet spinning</li>
                    <li>Machining and grinding</li>
                    <li>Polishing and buffing</li>
                    <li>Plating and powder coating</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#521C0D] mb-3">Materials processed:</h3>
                  <p className="text-[#521C0D] opacity-80">Iron, aluminium, stainless steel, and brass.</p>
                </div>
              </div>
              <div className="h-96 bg-gray-200 rounded-lg">
                <img 
                  src="/materials/metal.png"
                  alt="Metal fabrication" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Marble & Stone Section */}
        <section className="py-16 bg-white border-b border-[#521C0D] border-opacity-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-96 bg-gray-200 rounded-lg order-2 md:order-1">
                <img 
                  src="/materials/marble.png"
                  alt="Marble processing" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="w-10 h-10 text-[#521C0D]" />
                  <h2 className="text-3xl font-bold text-[#521C0D]">Marble & Stone</h2>
                </div>
                <p className="text-[#521C0D] opacity-80 mb-6">
                  Our in-house stone unit processes a wide range of marbles and natural stones for tabletops, furniture components, and decorative accessories.
                </p>
                <div>
                  <h3 className="font-semibold text-[#521C0D] mb-3">Capabilities include:</h3>
                  <ul className="list-disc list-inside text-[#521C0D] opacity-80 space-y-2">
                    <li>Block cutting and slab cutting</li>
                    <li>Shaping and profiling</li>
                    <li>Edge finishing</li>
                    <li>Engraving and drilling</li>
                    <li>Polished, honed, and textured surface options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wood Section */}
        <section className="py-16 border-b border-[#521C0D] border-opacity-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Trees className="w-10 h-10 text-[#521C0D]" />
                  <h2 className="text-3xl font-bold text-[#521C0D]">Wood</h2>
                </div>
                <p className="text-[#521C0D] opacity-80 mb-6">
                  We work with both indigenous and imported hardwoods and veneers to support multi-material product development.
                </p>
                <div>
                  <h3 className="font-semibold text-[#521C0D] mb-3">Capabilities include:</h3>
                  <ul className="list-disc list-inside text-[#521C0D] opacity-80 space-y-2">
                    <li>Seasoning and moisture control</li>
                    <li>Cutting, shaping, sanding, and profiling</li>
                    <li>Joinery and structural preparation</li>
                    <li>Wood components engineered for compatibility with metal and stone products</li>
                  </ul>
                </div>
              </div>
              <div className="h-96 bg-gray-200 rounded-lg">
                <img 
                  src="/materials/wood.png"
                  alt="Wood processing" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Finishes Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#521C0D] mb-8">Finishes</h2>
            <p className="text-[#521C0D] opacity-80 mb-12 max-w-3xl">
              Our in-house finishing systems allow us to achieve consistent colours, textures, and tones across multiple materials.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Metal Finishes */}
              <div className="bg-white p-6 rounded-lg border border-[#521C0D] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#521C0D] mb-4">Metal Finishes</h3>
                <ul className="text-[#521C0D] opacity-80 space-y-2">
                  <li>• Electroplated (brass, nickel, copper, zinc, antique tones)</li>
                  <li>• Hand-applied finishes (brushed, hammered, polished)</li>
                  <li>• Powder coating (matte, gloss, textured, outdoor-grade)</li>
                  <li>• Custom patinas and applied colour finishes</li>
                  <li>• Enamel finishes</li>
                </ul>
              </div>

              {/* Stone Finishes */}
              <div className="bg-white p-6 rounded-lg border border-[#521C0D] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#521C0D] mb-4">Stone Finishes</h3>
                <ul className="text-[#521C0D] opacity-80 space-y-2">
                  <li>• Polished</li>
                  <li>• Honed</li>
                  <li>• Leathered</li>
                  <li>• Textured surfaces for premium designs</li>
                </ul>
              </div>

              {/* Wood Finishes */}
              <div className="bg-white p-6 rounded-lg border border-[#521C0D] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#521C0D] mb-4">Wood Finishes</h3>
                <ul className="text-[#521C0D] opacity-80 space-y-2">
                  <li>• Natural stains</li>
                  <li>• PU coatings</li>
                  <li>• Matt and semi-gloss finishes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-16 bg-[#521C0D] text-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xl max-w-4xl mx-auto">
              Our multi-material expertise enables us to create engineered, globally competitive products that combine precision, structure, and refined aesthetics — forming the foundation of everything we manufacture at Akbar Brass Products.
            </p>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  )
}