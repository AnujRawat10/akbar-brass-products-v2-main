import { Trophy } from 'lucide-react'

export default function RecognitionPage() {
  const awards = [
    {
      title: "National Export Award — Outstanding Export Performance",
      presentedBy: "Hon'ble Prime Minister of India, Shri Atal Bihari Vajpayee",
      issuedBy: "Ministry of Commerce, Government of India",
      description: "A prestigious national honour awarded in recognition of exceptional export performance, manufacturing excellence, and contribution to India's global trade.",
      image: "/Awards/1.png"
    },
    {
      title: "Certificate of Merit for Export Performance (1994–95)",
      presentedBy: "Hon'ble President of India, Shri Shankar Dayal Sharma",
      issuedBy: "Government of India",
      description: "A distinguished certificate acknowledging Akbar Brass Products' contribution to India's international export growth and consistent quality across global markets.",
      image: "/Awards/2.png"
    },
    {
      title: "Trophy for Export Performance in EPNS & Handicrafts",
      presentedBy: "Hon'ble Union Minister for Textiles, Shri Kanshi Ram Rana",
      issuedBy: "Ministry of Textiles, Government of India",
      description: "A sector-specific national award recognising excellence in EPNS and metal handicraft exports, acknowledging product quality, craftsmanship, and reliable delivery.",
      image: "/Awards/3.png"
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16" style={{ backgroundColor: '#f0efe2' }}>
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full text-white" style={{ backgroundColor: '#63403A' }}>
              <Trophy className="h-10 w-10" />
            </div>
          </div>
          <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl" style={{ color: '#63403A' }}>
            Our Recognition
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#63403A' }}>
            Celebrating Seven National Awards for Excellence in Export Performance
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: '#63403A', opacity: 0.8 }}>
            Akbar Brass Products has been recognised with seven national awards for outstanding export performance — including honours presented by the Prime Minister of India, the President of India, and the Union Minister for Textiles. These recognitions reflect the manufacturing excellence, craftsmanship, and reliability that continue to define our evolution into a multi-material furniture and home products manufacturer across global markets.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-1 max-w-5xl mx-auto mb-16">
          {awards.map((award, index) => (
            <div key={index} className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow" style={{ backgroundColor: 'white' }}>
              <div className="aspect-[4/3] overflow-hidden" style={{ backgroundColor: '#f0efe2' }}>
                <img src={award.image || "/placeholder.svg"} alt={award.title} className="w-full h-full object-contain" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#63403A' }}>{award.title}</h3>
                <p className="text-sm mb-2" style={{ color: '#63403A', opacity: 0.8 }}><strong>Presented By:</strong> {award.presentedBy}</p>
                <p className="text-sm mb-4" style={{ color: '#63403A', opacity: 0.8 }}><strong>Issued By:</strong> {award.issuedBy}</p>
                <p className="leading-relaxed" style={{ color: '#63403A' }}>{award.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Awards Note */}
        <div className="p-8 rounded-lg text-center max-w-4xl mx-auto mb-16" style={{ backgroundColor: 'white' }}>
          <p className="leading-relaxed" style={{ color: '#63403A' }}>
            Akbar Brass Products has received four additional national recognitions from the Government of India for sustained performance in the export sector over the years. Details and images of these awards are currently being archived and will be added soon.
          </p>
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed" style={{ color: '#63403A' }}>
            These national recognitions reflect the trust placed in us by global customers and the dedication of our teams across all manufacturing divisions. They continue to inspire our commitment to engineering-led processes, consistent quality, and responsible, reliable manufacturing for global markets.
          </p>
        </div>
      </div>
    </div>
  )
}