import Link from "next/link"

export default function Compliance() {
  const logos = [
    "/partners/1.png", 
    "/partners/2.png", 
    "/partners/3.png", 
    "/partners/4.jpeg"
  ]

  return (
    <section className="h-screen flex items-center bg-[#9A9D85] py-16 md:py-20 overflow-hidden">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-[1400px] mx-auto text-center w-full">
          
          {/* Header */}
          <div className="mb-20">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 text-white">
              Our Compliances
            </h2>
            <div className="w-32 h-[3px] bg-white/40 mx-auto mb-8" />
            <p className="text-white/90 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
              Certified and audited to meet global manufacturing standards, ensuring quality, safety, and ethical practices across all operations
            </p>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
            {logos.map((l, i) => (
              <div 
                key={i} 
                className="bg-white p-12 md:p-14 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group rounded-lg"
              >
                <img 
                  src={l} 
                  className="mx-auto max-h-28 md:max-h-32 w-auto object-contain group-hover:scale-110 transition-transform duration-500" 
                  alt={`Certification ${i+1}`} 
                />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Link href="/capabilities/ethics">
          <button className="group relative px-12 py-4 bg-white text-black overflow-hidden transition-all duration-500 uppercase tracking-wider font-medium text-sm md:text-base shadow-2xl hover:shadow-[#BF8B45]/50 transform hover:scale-105">
            {/* Button hover effect */}
            <span className="absolute inset-0 bg-[#BF8B45] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              VIEW OUR COMPLIANCE
            </span>
          </button>
        </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
