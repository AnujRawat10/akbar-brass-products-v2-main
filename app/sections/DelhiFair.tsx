"use client"

export default function DelhiFair() {
  return (
    <section className="bg-[#FAF6F2] h-screen flex items-center justify-center text-black text-left py-8 overflow-hidden snap-start">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* TEXT */}
          <div className="max-w-xl">
            <span className="uppercase tracking-[0.32em] text-xs md:text-sm text-[#AE7250] font-medium">
              Exhibition Highlight
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 mb-4 leading-tight">
              Delhi Fair Showcase
            </h2>

            <div className="w-20 h-[2px] bg-[#AE7250] mb-4" />

            <p className="text-black/70 text-base md:text-lg leading-relaxed mb-4">
              Each year, we present our latest collections at the Delhi Fair —
              showcasing craftsmanship, refined finishes, and export-ready
              innovations developed exclusively for global buyers.
            </p>

            <p className="text-black/50 text-sm md:text-base leading-relaxed">
              From concept sampling to final display, every piece reflects our
              commitment to precision manufacturing, scalability, and long-term
              partnerships with global brands.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative group">

            {/* IMAGE BOX */}
            <div className="h-[300px] md:h-[400px] lg:h-[480px] overflow-hidden rounded-lg shadow-2xl">
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
                -bottom-16
                -right-16
                w-96
                h-96
                bg-[#AE7250]/10
                rounded-full
                blur-3xl
                pointer-events-none
              "
            />
          </div>

        </div>
      </div>
    </section>
  )
}
