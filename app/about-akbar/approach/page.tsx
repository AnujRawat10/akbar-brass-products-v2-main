import { Wrench, Target, Lightbulb, Users, Layers, Handshake } from 'lucide-react'

export default function ApproachPage() {
  const principles = [
    {
      icon: Target,
      title: "Precision as a Discipline",
      description: "Accuracy guides every stage of production. Each product is built around defined specifications, controlled parameters, and engineered constructions that ensure stability, consistency, and repeatability at scale."
    },
    {
      icon: Wrench,
      title: "Systems That Build Consistency",
      description: "Our horizontally integrated workflow — spanning metal fabrication, marble processing, woodworking, finishing, assembly, testing, and export packing — ensures uniform quality across all batches. Structured SOPs, documented checkpoints, and clear responsibility frameworks support every step."
    },
    {
      icon: Lightbulb,
      title: "Purpose-Driven Innovation",
      description: "Innovation at Akbar is practical and measurable. We adopt new machinery, refine processes, and enhance finishes only when it improves efficiency, durability, or production accuracy. Every upgrade must deliver real value to manufacturing outcomes."
    },
    {
      icon: Users,
      title: "Skilled People, Strong Manufacturing",
      description: "Our teams include trained artisans, technicians, engineers, and specialists working within defined systems. Continuous skill development, safe working conditions, and methodical supervision support reliable, steady production."
    },
    {
      icon: Layers,
      title: "Multi-Material Expertise",
      description: "We work across metal, marble, wood, glass, stone, and mixed materials. Controlled fabrication, precise machining, and disciplined finishing allow us to integrate materials seamlessly and produce globally compliant, structurally reliable products."
    },
    {
      icon: Handshake,
      title: "Partnership-Oriented Working Style",
      description: "Our working philosophy is structured, transparent, and solution-focused. Reliable communication, realistic timelines, and consistent execution form the foundation of long-term relationships with international buyers."
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16" style={{ backgroundColor: '#EDE8D0' }}>
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl" style={{ color: '#521C0D' }}>
            The Akbar Approach
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#521C0D' }}>
            The Akbar Approach represents our commitment to disciplined manufacturing, engineering-led systems, and long-term reliability. We combine deep material expertise with integrated production to deliver stable, export-ready quality for global markets.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-16">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <div key={index} className="p-8 rounded-lg hover:shadow-md transition-shadow" style={{ backgroundColor: 'white' }}>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full text-white" style={{ backgroundColor: '#521C0D' }}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#521C0D' }}>{principle.title}</h3>
                <p className="leading-relaxed" style={{ color: '#521C0D' }}>{principle.description}</p>
              </div>
            )
          })}
        </div>

        {/* Essence Section */}
        <div className="text-white py-16 px-8 rounded-lg text-center max-w-4xl mx-auto" style={{ backgroundColor: '#521C0D' }}>
          <h2 className="font-serif text-3xl font-bold mb-8">The Essence of Our Approach</h2>
          <div className="space-y-3 text-lg">
            <p>Engineering-led systems.</p>
            <p>Defined processes.</p>
            <p>Material mastery.</p>
            <p>Consistent quality.</p>
            <p>Reliable partnerships.</p>
          </div>
          <p className="mt-8 text-xl font-semibold">This is how we work.<br/>This is The Akbar Approach.</p>
        </div>
      </div>
    </div>
  )
}