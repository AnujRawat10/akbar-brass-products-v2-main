import { Shield, Award, CheckCircle, FileCheck } from 'lucide-react'

export default function EthicsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0efe2' }}>
      <section className="px-6 py-24 md:py-32 text-white" style={{ backgroundColor: '#63403A' }}>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 font-serif text-4xl font-normal leading-tight md:text-5xl lg:text-6xl text-balance">
            Ethics & Compliances
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed md:text-lg text-pretty" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Committed to ethical practices and global compliance standards
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="mb-4 font-serif text-3xl font-bold text-center md:text-4xl" style={{ color: '#63403A' }}>Certifications</h2>
            <p className="text-lg text-center max-w-3xl mx-auto" style={{ color: '#63403A', opacity: 0.8 }}>
              Maintaining the highest standards of quality and compliance
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-8 bg-white rounded-lg text-center" style={{ border: '1px solid #63403A' }}>
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: '#63403A' }}>
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 font-bold text-xl" style={{ color: '#63403A' }}>SEDEX</h3>
              <p className="text-sm" style={{ color: '#63403A', opacity: 0.8 }}>Ethical trade certification</p>
            </div>

            <div className="p-8 bg-white rounded-lg text-center" style={{ border: '1px solid #63403A' }}>
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: '#63403A' }}>
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 font-bold text-xl" style={{ color: '#63403A' }}>UL</h3>
              <p className="text-sm" style={{ color: '#63403A', opacity: 0.8 }}>Safety certification for electrical products</p>
            </div>

            <div className="p-8 bg-white rounded-lg text-center" style={{ border: '1px solid #63403A' }}>
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: '#63403A' }}>
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 font-bold text-xl" style={{ color: '#63403A' }}>CE</h3>
              <p className="text-sm" style={{ color: '#63403A', opacity: 0.8 }}>European conformity standards</p>
            </div>

            <div className="p-8 bg-white rounded-lg text-center" style={{ border: '1px solid #63403A' }}>
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: '#63403A' }}>
                <FileCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 font-bold text-xl" style={{ color: '#63403A' }}>ISO</h3>
              <p className="text-sm" style={{ color: '#63403A', opacity: 0.8 }}>International quality management</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="mb-4 font-serif text-3xl font-bold text-center md:text-4xl" style={{ color: '#63403A' }}>Our Commitments</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-8 bg-white rounded-lg">
              <h3 className="mb-4 font-serif text-2xl font-bold" style={{ color: '#63403A' }}>Ethical Manufacturing</h3>
              <p className="leading-relaxed mb-4" style={{ color: '#63403A', opacity: 0.8 }}>
                We maintain the highest standards of workplace ethics and employee welfare:
              </p>
              <ul className="space-y-2" style={{ color: '#63403A', opacity: 0.8 }}>
                <li>• Fair wages and working conditions</li>
                <li>• Safe and healthy work environment</li>
                <li>• No child or forced labor</li>
                <li>• Regular audits and compliance checks</li>
                <li>• Employee training and development</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-lg">
              <h3 className="mb-4 font-serif text-2xl font-bold" style={{ color: '#63403A' }}>Environmental Responsibility</h3>
              <p className="leading-relaxed mb-4" style={{ color: '#63403A', opacity: 0.8 }}>
                Sustainable practices integrated throughout our operations:
              </p>
              <ul className="space-y-2" style={{ color: '#63403A', opacity: 0.8 }}>
                <li>• Water treatment and recycling systems</li>
                <li>• Dust collection and air quality control</li>
                <li>• Recycled metal usage in production</li>
                <li>• Energy-efficient manufacturing processes</li>
                <li>• Waste reduction initiatives</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-lg">
              <h3 className="mb-4 font-serif text-2xl font-bold" style={{ color: '#63403A' }}>Quality Assurance</h3>
              <p className="leading-relaxed mb-4" style={{ color: '#63403A', opacity: 0.8 }}>
                Rigorous quality control at every stage:
              </p>
              <ul className="space-y-2" style={{ color: '#63403A', opacity: 0.8 }}>
                <li>• 8 quality check points during production</li>
                <li>• 2.5 AQL inspection standards</li>
                <li>• In-house quality assurance team</li>
                <li>• Third-party inspection available</li>
                <li>• Full traceability of materials</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-lg">
              <h3 className="mb-4 font-serif text-2xl font-bold" style={{ color: '#63403A' }}>Customer Excellence</h3>
              <p className="leading-relaxed mb-4" style={{ color: '#63403A', opacity: 0.8 }}>
                Dedicated to exceeding customer expectations:
              </p>
              <ul className="space-y-2" style={{ color: '#63403A', opacity: 0.8 }}>
                <li>• 80% repeat customer rate</li>
                <li>• Spotless delivery record</li>
                <li>• Transparent communication</li>
                <li>• Custom development capabilities</li>
                <li>• Long-term partnership focus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl" style={{ color: '#63403A' }}>Global Compliance</h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: '#63403A', opacity: 0.8 }}>
            Our factory is audited and approved for production for major American retailers and international markets. We maintain compliance with all applicable regulations in our target markets including USA, Europe, and rest of world.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: '#63403A', opacity: 0.8 }}>
            Regular audits ensure we continue to meet and exceed industry standards for safety, quality, and ethical manufacturing practices.
          </p>
        </div>
      </section>
    </div>
  )
}