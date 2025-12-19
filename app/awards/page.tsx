import Image from "next/image"

export default function AwardsPage() {
  const awards = [
    {
      year: "1994-95",
      title: "Certificate of Merit for Export Performance",
      awardedBy: "Hon'ble President, Shri Shanker Dayal Sharma",
      description: "Recognized for outstanding export performance in handicrafts for the year 1994-95",
      image: "/Awards/1.png"
    },
    {
      year: "1995",
      title: "Trophy for Export Performance in EPNS Handicrafts",
      awardedBy: "Hon'ble Minister for Textile, Shri Kanshi Ram Rana",
      description: "Awarded trophy for exceptional export performance in EPNS handicrafts category",
      image: "/Awards/2.png"
    },
    {
      year: "1998",
      title: "Certificate of Merit for Outstanding Export Performance",
      awardedBy: "Hon'ble Prime Minister, Shri Atal Behari Vajpayee",
      description: "Honored for outstanding contribution to India's export industry",
      image: "/Awards/3.png"
    }
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#EDE8D0' }}>
      {/* Hero Section */}
      <section className="py-20 text-white" style={{ backgroundColor: '#521C0D' }}>
        <div className="container mx-auto px-6">
          <h1 className="mb-4 font-serif text-5xl font-bold md:text-6xl lg:text-7xl">
            Awards & Recognition
          </h1>
          <p className="max-w-2xl text-lg" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Over 50 years of excellence recognized by India's highest offices
          </p>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-lg" style={{ color: '#521C0D' }}>
              Akbar Brass Products has been honored with multiple national awards for our commitment to 
              quality craftsmanship and export excellence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group bg-white transition-all hover:shadow-lg"
                style={{ border: '1px solid #521C0D' }}
              >
                {/* Award Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ backgroundColor: '#EDE8D0' }}>
                  <Image
                    src={award.image || "/placeholder.svg"}
                    alt={award.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  {/* Year Badge */}
                  <div className="mb-6 inline-block px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: '#521C0D' }}>
                    {award.year}
                  </div>

                  {/* Award Title */}
                  <h3 className="mb-4 font-serif text-2xl font-bold" style={{ color: '#521C0D' }}>
                    {award.title}
                  </h3>

                  {/* Awarded By */}
                  <p className="mb-4 text-sm font-medium" style={{ color: '#521C0D' }}>
                    Awarded by:
                  </p>
                  <p className="mb-6 text-base" style={{ color: '#521C0D' }}>
                    {award.awardedBy}
                  </p>

                  {/* Description */}
                  <p className="text-sm leading-relaxed" style={{ color: '#521C0D', opacity: 0.8 }}>
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Legacy Statement */}
          <div className="mt-20 bg-white p-8 md:p-12" style={{ borderLeft: '4px solid #521C0D' }}>
            <h2 className="mb-4 font-serif text-3xl font-bold" style={{ color: '#521C0D' }}>
              A Legacy of Excellence
            </h2>
            <p className="mb-4 text-lg leading-relaxed" style={{ color: '#521C0D' }}>
              These prestigious awards from India's President and Prime Ministers reflect our unwavering 
              commitment to quality, innovation, and excellence in handicraft manufacturing.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#521C0D' }}>
              With over 50 years of manufacturing legacy, we continue to uphold the standards that earned 
              us recognition from the highest offices in India, serving clients worldwide with the same 
              dedication to craftsmanship and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{ backgroundColor: '#521C0D' }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
            Partner with Award-Winning Craftsmanship
          </h2>
          <p className="mb-8 text-lg" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Experience the quality that has been recognized at the highest levels
          </p>
          <a
            href="/contact"
            className="inline-block bg-white px-8 py-4 font-semibold transition-all hover:bg-gray-200"
            style={{ color: '#521C0D' }}
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
}