import  Link  from "next/link"

export default function Compliance() {
  const logos = [
    "/partners/1.png", 
    "/partners/2.png", 
    "/partners/3.png", 
    "/partners/4.jpeg"
  ]

  return (
    <section className="min-h-screen md:min-h-screen flex items-center bg-[#9A9D85] px-6 py-16">
      <div className="max-w-6xl mx-auto text-center w-full">
        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">
          Our Compliances
        </h2>
        <p className="text-white/80 text-lg mb-12 max-w-3xl mx-auto">
          Certified and audited to meet global manufacturing standards
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {logos.map((l, i) => (
            <div key={i} className="bg-white p-10 hover:shadow-xl transition-shadow duration-300">
              <img src={l} className="mx-auto max-h-24" alt={`Certification ${i+1}`} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/capabilities/ethics">
            <button className="px-10 py-4 bg-white text-[#485023] hover:bg-[#BF8B45] hover:text-white transition-all duration-300 uppercase tracking-wider font-semibold text-sm">
              View Ethics & Compliance
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}