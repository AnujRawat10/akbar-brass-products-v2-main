"use client"

export default function DelhiFair() {
  return (
    <section className="bg-[#FAF6F2] h-[100svh] flex items-center justify-center text-black text-left pt-20 md:pt-24 pb-6 md:pb-8 overflow-hidden snap-start">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">

          {/* TEXT */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1">
            <span className="uppercase tracking-[0.2em] md:tracking-[0.32em] text-[10px] md:text-sm text-[#AE7250] font-medium">
              Exhibition Highlight
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 md:mt-4 mb-2 md:mb-4 leading-tight">
              Delhi Fair Showcase
            </h2>

            <div className="w-16 md:w-20 h-[2px] bg-[#AE7250] mb-3 md:mb-4 mx-auto lg:mx-0" />

            <p className="text-black/70 text-sm md:text-base lg:text-lg leading-relaxed mb-2 md:mb-4">
              Each year, we present our latest collections at the Delhi Fair —
              showcasing craftsmanship, refined finishes, and export-ready
              innovations developed exclusively for global buyers.
            </p>

            <p className="text-black/50 text-xs md:text-sm lg:text-base leading-relaxed hidden sm:block">
              From concept sampling to final display, every piece reflects our
              commitment to precision manufacturing, scalability, and long-term
              partnerships with global brands.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative group order-1 lg:order-2">

            {/* IMAGE BOX */}
            <div className="h-[200px] sm:h-[280px] md:h-[350px] lg:h-[420px] overflow-hidden rounded-lg shadow-2xl">
              <img
                src="/f2.jpeg"
                alt="Delhi Fair"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            {/* SOFT GOLD GLOW - Hidden on mobile */}
            <div
              className="
                hidden md:block
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
