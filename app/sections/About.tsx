export default function About() {
  return (
    <section className="py-28 bg-[#FAF6F2] px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            About Akbar Brass Products
          </h2>
          <div className="w-20 h-px bg-[#AE7250] mb-6" />
          <p className="text-black/70 text-lg leading-relaxed">
            Third-generation export manufacturer specializing in integrated
            multi-material production for global brands.
          </p>
        </div>
        <img src="/droneshot.png" className="w-full max-h-[500px] object-cover" />
      </div>
    </section>
  )
}
