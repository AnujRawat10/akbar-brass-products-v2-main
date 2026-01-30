"use client"

export default function DelhiFair() {
  return (
    <section className="bg-[#FAF6F2] h-screen flex items-center justify-center text-black text-left py-16 md:py-20 overflow-hidden">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* TEXT */}
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.32em] text-sm text-[#AE7250] font-medium">
              Exhibition Highlight
            </span>

            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-6 mb-8 leading-tight">
              Delhi Fair Showcase
            </h2>

            <div className="w-24 h-[2px] bg-[#AE7250] mb-8" />

            <p className="text-black/70 text-xl md:text-2xl leading-relaxed mb-8">
              Each year, we present our latest collections at the Delhi Fair —
              showcasing craftsmanship, refined finishes, and export-ready
              innovations developed exclusively for global buyers.
            </p>

            <p className="text-black/50 text-base md:text-lg leading-relaxed">
              From concept sampling to final display, every piece reflects our
              commitment to precision manufacturing, scalability, and long-term
              partnerships with global brands.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative group">

            {/* IMAGE BOX */}
            <div className="h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-lg shadow-2xl">
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
