export default function Compliance() {
  const logos = ["/partners/1.png", "/partners/2.png", "/partners/3.png", "/partners/4.jpeg"]

  return (
    <section className="py-28 bg-[#9A9D85] px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-12">
          Our Compliances
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {logos.map((l, i) => (
            <div key={i} className="bg-white p-10">
              <img src={l} className="mx-auto max-h-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
