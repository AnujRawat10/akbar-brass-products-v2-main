import {
  Wrench,
  Target,
  Lightbulb,
  Users,
  Layers,
  Handshake
} from 'lucide-react'

export default function ApproachPage() {
  const principles = [
    {
      icon: Target,
      title: "Precision as a Discipline",
      description:
        "Accuracy guides every stage of production. Each product is built around defined specifications, controlled parameters, and engineered constructions that ensure stability, consistency, and repeatability at scale."
    },
    {
      icon: Wrench,
      title: "Systems That Build Consistency",
      description:
        "Our horizontally integrated workflow — spanning metal fabrication, marble processing, woodworking, finishing, assembly, testing, and export packing — ensures uniform quality across all batches."
    },
    {
      icon: Lightbulb,
      title: "Purpose-Driven Innovation",
      description:
        "Innovation at Akbar is practical and measurable. We adopt new machinery, refine processes, and enhance finishes only when it improves efficiency, durability, or production accuracy."
    },
    {
      icon: Users,
      title: "Skilled People, Strong Manufacturing",
      description:
        "Our teams include trained artisans, technicians, engineers, and specialists working within defined systems. Continuous skill development and structured supervision support reliable production."
    },
    {
      icon: Layers,
      title: "Multi-Material Expertise",
      description:
        "We work across metal, marble, wood, glass, stone, and mixed materials. Disciplined fabrication and precise finishing allow seamless material integration."
    },
    {
      icon: Handshake,
      title: "Partnership-Oriented Working Style",
      description:
        "Our philosophy is structured, transparent, and solution-focused — enabling long-term partnerships built on reliability and trust."
    }
  ]

  return (
    <div className="min-h-screen  pb-16" style={{ backgroundColor: '#EDE8D0' }}>

      {/* ================= HERO ================= */}
      {/* HERO BANNER */}
<section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">

  {/* Background Image */}
 <video
  src="/videos/5.mp4"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover"
/>


  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Content */}
  <div className="relative z-10 h-full flex items-center">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
        The Akbar Approach
      </h1>
      <p className="text-lg md:text-xl leading-relaxed text-white">
        Disciplined manufacturing, engineering-led systems, and long-term reliability.
        We combine material expertise with integrated production to deliver
        export-ready quality for global markets.
      </p>
    </div>
  </div>

</section>



      {/* ================= PRINCIPLES GRID ================= */}
      <div className="container pt-24 mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-24">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <div
                key={index}
                className="p-8 rounded-lg transition-shadow hover:shadow-md"
                style={{ backgroundColor: 'white' }}
              >
                <div
                  className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: '#521C0D' }}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#521C0D' }}
                >
                  {principle.title}
                </h3>

                <p
                  className="leading-relaxed"
                  style={{ color: '#521C0D' }}
                >
                  {principle.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* ============ SPLIT IMAGE + TEXT ============ */}
      <section className="max-w-7xl mx-auto mb-24 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="rounded-lg overflow-hidden">
            <img
              src="/legacy-unit.png"
              alt="Structured manufacturing environment"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3
              className="font-serif text-3xl font-bold mb-6"
              style={{ color: '#521C0D' }}
            >
              Built on Structure, Not Chance
            </h3>

            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: '#521C0D' }}
            >
              Our manufacturing environments are designed around flow, discipline,
              and clarity. Every workstation and movement is intentional — reducing
              variability and ensuring consistency.
            </p>

            <p
              className="text-lg leading-relaxed"
              style={{ color: '#521C0D' }}
            >
              This structured approach enables dependable timelines, scalable output,
              and globally compliant quality standards.
            </p>
          </div>

        </div>
      </section>

      
      {/* ================= ESSENCE ================= */}
      <div className="container mx-auto px-6">
        <div
          className="text-white py-16 px-8 rounded-lg text-center max-w-4xl mx-auto"
          style={{ backgroundColor: '#521C0D' }}
        >
          <h2 className="font-serif text-3xl font-bold mb-8">
            The Essence of Our Approach
          </h2>

          <div className="space-y-3 text-lg">
            <p>Engineering-led systems.</p>
            <p>Defined processes.</p>
            <p>Material mastery.</p>
            <p>Consistent quality.</p>
            <p>Reliable partnerships.</p>
          </div>

          <p className="mt-8 text-xl font-semibold">
            This is how we work.
            <br />
            This is The Akbar Approach.
          </p>
        </div>
      </div>

    </div>
  )
}
