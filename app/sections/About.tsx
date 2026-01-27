import { Sparkles, Award, Users, CheckCircle2 } from "lucide-react"
import Link from "next/link"

// ============================================
// About.tsx - WITH IMAGE GRID LAYOUT
// ============================================
export default function About() {
  return (
    <section className="min-h-screen bg-[#B8764F] py-20">
      <div className="w-full">
        {/* Header Section */}
        <div className="text-center mb-16 px-6">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 uppercase tracking-wide">
ABOUT AKBAR          </h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-5xl mx-auto">
            Akbar Brass Products is a multi-material manufacturing company specialising in metal, marble, wood, and mixed-material home products. Operating from a horizontally integrated production campus, we combine modern systems with disciplined processes, 
          </p>
        </div>

        {/* Video Grid - Exact reference layout */}
        <div className="grid grid-cols-12 gap-0 mb-16 w-full h-[55vh] min-h-[500px]">
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
              src="/videos/2.mp4" 
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
              src="/videos/1.mp4" 
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
              src="/videos/2.mp4" 
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
          <p className="text-white text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed max-w-5xl mx-auto mb-12">
in-house testing, and globally aligned compliance to deliver stable, export-ready quality.
          </p>
          
          <Link href="/about-akbar/timeline">
            <button className="px-10 py-4 bg-[#63403A] text-white hover:bg-[#BF8B45] transition-all duration-300 uppercase tracking-wider font-semibold text-sm">
              Explore Our Heritage
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
