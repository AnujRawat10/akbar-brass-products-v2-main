import { Package, Lightbulb, Frame, Sparkles, CircleDot, Boxes } from 'lucide-react'

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-[#eeeeee]">
      <section className="px-6 py-24 md:py-32 bg-black">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 font-serif text-4xl font-normal leading-tight text-white md:text-5xl lg:text-6xl text-balance">
            What We Do
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 md:text-lg text-pretty">
            Crafting exceptional brass products and home décor with 50+ years of manufacturing expertise
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="mb-4 font-serif text-3xl font-bold text-black md:text-4xl text-center">Product Categories</h2>
            <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">
              We specialize in comprehensive home décor solutions across multiple categories
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 bg-[#f5f5f5] rounded-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <Package className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-black">Furniture</h3>
              <p className="text-gray-700 leading-relaxed">
                Side tables, coffee tables, console tables, dining tables, floor shelves, drinks trolleys, stools, and sideboards. Furniture made of metal, marble, wood, and leather combination.
              </p>
            </div>

            <div className="p-8 bg-[#f5f5f5] rounded-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-black">Lamps & Lighting</h3>
              <p className="text-gray-700 leading-relaxed">
                Modern and antique lamps made of metal and wood with in-house lamp shade making facility. All certifications required for export including UL, CE standards.
              </p>
            </div>

            <div className="p-8 bg-[#f5f5f5] rounded-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <Frame className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-black">Mirrors</h3>
              <p className="text-gray-700 leading-relaxed">
                Available in metal, wood, and wood + metal combinations. Natural product inlay options for unique, custom designs.
              </p>
            </div>

            <div className="p-8 bg-[#f5f5f5] rounded-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-black">Candle Holders</h3>
              <p className="text-gray-700 leading-relaxed">
                Made of aluminum, stainless steel, iron, wood, marble, and wood + metal or marble + metal combinations.
              </p>
            </div>

            <div className="p-8 bg-[#f5f5f5] rounded-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <CircleDot className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-black">Bowls & Baskets</h3>
              <p className="text-gray-700 leading-relaxed">
                Food serving products made of different metals and woods with expertise in wood + metal combinations.
              </p>
            </div>

            <div className="p-8 bg-[#f5f5f5] rounded-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <Boxes className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-black">Wall Décor & Lanterns</h3>
              <p className="text-gray-700 leading-relaxed">
                Wall art in stainless steel, iron + wood & MDF. Lanterns in metal iron, stainless steel, wooden, and wood & metal combinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24 bg-[#eeeeee]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-black md:text-4xl">Why Work With Us</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Decades of experience, modern facilities, and commitment to excellence
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-8 bg-white rounded-lg">
              <h3 className="mb-4 font-serif text-2xl font-bold text-black">Proven Export Track Record</h3>
              <p className="text-gray-700 leading-relaxed">
                Over 50 years of successful export business with multiple national awards from Government of India for outstanding export performance.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg">
              <h3 className="mb-4 font-serif text-2xl font-bold text-black">Vertically Integrated Production</h3>
              <p className="text-gray-700 leading-relaxed">
                All production and finishing facilities in-house including metal, marble, and wood processing capabilities for seamless production.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg">
              <h3 className="mb-4 font-serif text-2xl font-bold text-black">Bespoke Development</h3>
              <p className="text-gray-700 leading-relaxed">
                Custom product development capabilities with dedicated teams for sampling, prototyping, and production scaling.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg">
              <h3 className="mb-4 font-serif text-2xl font-bold text-black">Ethical & Sustainable</h3>
              <p className="text-gray-700 leading-relaxed">
                ETP, STP, RO & DM water plants, dust collectors in polishing zones, and recycled metal usage across production.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
