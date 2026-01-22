"use client"

export default function DelhiFair() {
  return (
    <section className="bg-[#FAF6F2] min-h-screen md:min-h-screen flex items-center justify-center text-black text-left px-6 py-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* TEXT */}
        <div>
          <span className="uppercase tracking-[0.32em] text-sm text-[#AE7250]">
            Exhibition Highlight
          </span>

          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6 leading-tight">
            Delhi Fair Showcase
          </h2>

          <div className="w-20 h-px bg-[#AE7250] mb-6" />

          <p className="text-black/70 text-lg leading-relaxed max-w-xl">
            Each year, we present our latest collections at the Delhi Fair —
            showcasing craftsmanship, refined finishes, and export-ready
            innovations developed exclusively for global buyers.
          </p>

          <p className="text-black/50 text-sm mt-6 max-w-xl">
            From concept sampling to final display, every piece reflects our
            commitment to precision manufacturing, scalability, and long-term
            partnerships with global brands.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative group">

          {/* IMAGE BOX */}
          <div className="h-[480px] overflow-hidden rounded-sm">
            <img
              src="/f2.jpeg"
              alt="Delhi Fair"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          {/* SOFT GOLD GLOW */}
          <div
            className="
              absolute
              -bottom-10
              -right-10
              w-72
              h-72
              bg-[#AE7250]/10
              rounded-full
              blur-3xl
              pointer-events-none
            "
          />
        </div>

      </div>
    </section>
  )
}
