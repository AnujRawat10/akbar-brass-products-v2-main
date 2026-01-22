import { Sparkles, Award, Users, CheckCircle2 } from "lucide-react"
import Link from "next/link"

// ============================================
// About.tsx - WITH CTA
// ============================================
export default function About() {
  return (
    <section className="min-h-screen md:min-h-screen flex items-center bg-[#FAF6F2] px-6 py-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            About Akbar Brass Products
          </h2>
          <div className="w-20 h-px bg-[#AE7250] mb-6" />
          <p className="text-black/70 text-lg leading-relaxed mb-8">
            Akbar Brass Products is a multi-material manufacturing company specialising in metal, marble, wood, and mixed-material home products. Operating from a horizontally integrated production campus, we combine modern systems with disciplined processes, in-house testing, and globally aligned compliance to deliver stable, export-ready quality.
          </p>
          <Link href="/about-akbar/timeline">
            <button className="px-10 py-4 bg-[#63403A] text-white hover:bg-[#BF8B45] transition-all duration-300 uppercase tracking-wider font-semibold text-sm">
              Learn More About Us
            </button>
          </Link>
        </div>
        <img src="/aboutshot.jpeg" className="w-full max-h-[500px] object-cover rounded-lg shadow-lg" alt="About Akbar Brass Products" />
      </div>
    </section>
  )
}