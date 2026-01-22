"use client"

export default function WhatWeDo() {
  const materials = [
    {
      title: "Metal",
      image: "/home-page/metal1.jpeg"
    },
    {
      title: "Marble",
      image: "/home-page/marble.jpeg"
    },
    {
      title: "Wood",
      image: "/home-page/wood.jpeg"
    },
    {
      title: "Mixed Materials",
      image: "/home-page/metal2.jpeg"
    }
  ]

  return (
    <section className="min-h-screen md:min-h-screen flex items-center bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">
          What We Do?
        </h2>
        <p className="text-center text-white/80 mb-12 max-w-3xl mx-auto">
We manufacture multi-material home products across furniture, décor, lighting, kitchen/serveware, outdoor, and seasonal categories — engineered for global markets.        </p>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {materials.map((item) => (
            <div
              key={item.title}
              className="group relative h-[420px] overflow-hidden"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-700" />

              {/* Text */}
              <div className="relative z-10 h-full flex items-end p-8">
                <h3 className="font-serif text-2xl tracking-wide">
                  {item.title}
                </h3>
              </div>

              {/* Gold hover line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#BF8B45] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
