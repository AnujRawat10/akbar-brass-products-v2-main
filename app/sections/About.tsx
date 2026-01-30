import { Sparkles, Award, Users, CheckCircle2 } from "lucide-react"
import Link from "next/link"

// ============================================
// About.tsx - WITH IMAGE GRID LAYOUT
// ============================================
export default function About() {

  return (
    <section className="h-screen bg-[#B8764F] py-8 md:py-10 flex flex-col justify-center overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-6 md:mb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 md:mb-6 tracking-wide">
About Akbar Brass Products</h2>
          <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed max-w-5xl mx-auto">
            Akbar Brass Products is a multi-material manufacturing company specialising in metal, marble, wood, and mixed-material home products. Operating from a horizontally integrated production campus, we combine modern systems with disciplined processes,
          </p>
        </div>
      </div>

      {/* Video Grid - Full Width */}
      <div className="grid grid-cols-12 gap-0 mb-6 md:mb-8 w-full flex-1 max-h-[50vh]">
          {/* Top Row */}
          {/* Video 1 - Building (tall, left side, spans 2 rows) */}
          <div className="col-span-4 row-span-2 overflow-hidden">
            <video 
              src="/videos/1.mp4" 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          
          {/* Video 2 - Brass work (top middle) */}
          <div className="col-span-4 row-span-1 overflow-hidden">
            <video 
              src="/videos/C1126.webm" 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          
          {/* Video 3 - Craftsman yellow (top right) */}
          <div className="col-span-4 row-span-1 overflow-hidden">
            <video 
              src="/videos/3.mp4" 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Bottom Row */}
          {/* Video 4 - Warehouse/products (bottom middle-right, wide) */}
          <div className="col-span-8 row-span-1 overflow-hidden">
            <video 
              src="/videos/4.mp4" 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Third Row */}
          {/* Video 5 - Factory floor (left, spans 2 columns) */}
          <div className="col-span-3 row-span-1 overflow-hidden">
            <video 
              src="/videos/C0958.webm" 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          
          {/* Video 6 - Building exterior large (right, spans remaining space) */}
          <div className="col-span-9 row-span-1 overflow-hidden">
            <video 
              src="/videos/C1001.webm" 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

      {/* Bottom Text Section */}
      <div className="text-center px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed max-w-5xl mx-auto mb-4 md:mb-6">
in-house testing, and globally aligned compliance to deliver stable, export-ready quality.
          </p>

          <Link href="/about-akbar/timeline">
            <button className="group relative px-8 md:px-12 py-3 md:py-4 bg-white text-black overflow-hidden transition-all duration-500 uppercase tracking-wider font-medium text-xs md:text-sm lg:text-base shadow-2xl hover:shadow-[#BF8B45]/50 transform hover:scale-105">
              {/* Button hover effect */}
              <span className="absolute inset-0 bg-[#BF8B45] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Explore Our Heritage
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
