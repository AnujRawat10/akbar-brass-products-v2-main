import { Layers, Hammer, Gem } from 'lucide-react'

export default function MaterialPage() {
  return (
    <div className="min-h-screen bg-[#eeeeee]">
      <section className="px-6 py-24 md:py-32 bg-black">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 font-serif text-4xl font-normal leading-tight text-white md:text-5xl lg:text-6xl text-balance">
            Material Excellence
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 md:text-lg text-pretty">
            Premium materials sourced and processed with care for exceptional quality
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="mb-4 font-serif text-3xl font-bold text-black md:text-4xl text-center">Material Breakdown</h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3 mb-16">
            <div className="text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-black">
                <Layers className="h-10 w-10 text-white" />
              </div>
              <h3 className="mb-3 font-serif text-4xl font-bold text-black">52%</h3>
              <h4 className="mb-2 font-serif text-xl font-bold text-black">Metal</h4>
              <p className="text-gray-700 leading-relaxed">
                Aluminum, stainless steel, iron, brass, and copper expertly crafted for durability and beauty
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-black">
                <Gem className="h-10 w-10 text-white" />
              </div>
              <h3 className="mb-3 font-serif text-4xl font-bold text-black">40%</h3>
              <h4 className="mb-2 font-serif text-xl font-bold text-black">Stone</h4>
              <p className="text-gray-700 leading-relaxed">
                Premium marble and natural stone with advanced processing and polishing capabilities
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-black">
                <Hammer className="h-10 w-10 text-white" />
              </div>
              <h3 className="mb-3 font-serif text-4xl font-bold text-black">8%</h3>
              <h4 className="mb-2 font-serif text-xl font-bold text-black">Wood & Other</h4>
              <p className="text-gray-700 leading-relaxed">
                Sustainable wood species and complementary materials for unique combinations
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-8 bg-[#f5f5f5] rounded-lg">
              <h3 className="mb-4 font-serif text-2xl font-bold text-black">Metal Unit Capabilities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• CNC Laser Cutting & Hydraulic Presses</li>
                <li>• Laser Welding, MIG Welding, Argon Welding</li>
                <li>• In-house Plating Plant</li>
                <li>• Lacquering & Powder Coating</li>
                <li>• 100+ Polishing Machines</li>
              </ul>
            </div>

            <div className="p-8 bg-[#f5f5f5] rounded-lg">
              <h3 className="mb-4 font-serif text-2xl font-bold text-black">Marble Unit Capabilities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Automatic Marble Polishing Plant</li>
                <li>• CNC Cutting & Turning Equipment</li>
                <li>• Calibration & Auto Polish Line</li>
                <li>• Marble Engraving Capabilities</li>
                <li>• Column Polishing & Side Polishing</li>
              </ul>
            </div>

            <div className="p-8 bg-[#f5f5f5] rounded-lg">
              <h3 className="mb-4 font-serif text-2xl font-bold text-black">Wood Processing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Dedicated Wood Zone since 2000</li>
                <li>• Shaping, Banding & Finishing</li>
                <li>• Sustainable Wood Sourcing</li>
                <li>• Wood + Metal Combination Expertise</li>
              </ul>
            </div>

            <div className="p-8 bg-[#f5f5f5] rounded-lg">
              <h3 className="mb-4 font-serif text-2xl font-bold text-black">Quality Standards</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 8 Quality Check Points</li>
                <li>• 2.5 AQL Inspection Standards</li>
                <li>• In-house Final Inspection</li>
                <li>• Third-party Verification Available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24 bg-[#eeeeee]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold text-black md:text-4xl">Sustainability Commitment</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Our manufacturing processes incorporate environmental responsibility at every stage:
          </p>
          <div className="grid gap-6 md:grid-cols-2 text-left">
            <div className="p-6 bg-white rounded-lg">
              <h4 className="font-bold text-black mb-2">Water Treatment</h4>
              <p className="text-gray-700">ETP, STP, RO & DM Water Plants for responsible water management</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h4 className="font-bold text-black mb-2">Air Quality</h4>
              <p className="text-gray-700">Dust Collectors in polishing zones for cleaner air</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h4 className="font-bold text-black mb-2">Recycling</h4>
              <p className="text-gray-700">Recycled Metal Usage across production processes</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h4 className="font-bold text-black mb-2">Compliance</h4>
              <p className="text-gray-700">Audited and approved for global export standards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
