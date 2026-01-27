import Link from "next/link"
import Image from "next/image"

export default function FinalCTA() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white text-center px-6 py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Complete Campus.png" // Replace with your actual image path
          alt="Background"
          fill
          className="object-cover scale-105" // Slight scale for parallax effect
          quality={100}
          priority
        />
      </div>

      {/* Dark Gradient Overlays - Professional Cinema Style */}
      {/* Bottom to top - Strong fade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/80 to-transparent" />
      
      {/* Top to bottom - Subtle fade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
      
      {/* Side vignette */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      
      {/* Radial gradient for center focus */}
      <div className="absolute inset-0 z-10" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 80%)'
      }} />
      
      {/* Additional dark overlay for better text contrast */}
      <div className="absolute inset-0 z-10 bg-black/10" />

      {/* Subtle noise texture overlay (optional - for premium feel) */}
      <div className="absolute inset-0 z-10 opacity-20 mix-blend-overlay" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto">
        {/* Decorative line above heading */}
        <div className="w-20 h-[2px] bg-[#BF8B45] mx-auto mb-8 opacity-90" />
        
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-tight">
          Connect With Us
        </h2>
        
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Let's build something exceptional together.
        </p>
        
        <Link href="/contact">
          <button className="group relative px-12 py-4 bg-white text-black overflow-hidden transition-all duration-500 uppercase tracking-wider font-medium text-sm md:text-base shadow-2xl hover:shadow-[#BF8B45]/50 transform hover:scale-105">
            {/* Button hover effect */}
            <span className="absolute inset-0 bg-[#BF8B45] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              Get In Touch
            </span>
          </button>
        </Link>
        
        {/* Decorative line below button */}
        <div className="w-20 h-[2px] bg-[#BF8B45] mx-auto mt-8 opacity-80" />
      </div>
    </section>
  )
}