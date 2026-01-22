import { Wrench, Target, Lightbulb, Users, Layers, Handshake } from "lucide-react"

export default function ApproachPage() {
  const principles = [
    {
      icon: Target,
      title: "Precision as a Discipline",
      description:
        "Accuracy guides every stage of production. Each product is built around defined specifications, controlled parameters, and engineered constructions that ensure stability, consistency, and repeatability at scale.",
    },
    {
      icon: Wrench,
      title: "Systems That Build Consistency",
      description:
        "Our horizontally integrated workflow — spanning metal fabrication, marble processing, woodworking, finishing, assembly, testing, and export packing — ensures uniform quality across all batches. Structured SOPs, documented checkpoints, and clear responsibility frameworks support every step.",
    },
    {
      icon: Lightbulb,
      title: "Purpose-Driven Innovation",
      description:
        "Innovation at Akbar is practical and measurable. We adopt new machinery, refine processes, and enhance finishes only when it improves efficiency, durability, or production accuracy. Every upgrade must deliver real value to manufacturing outcomes.",
    },
    {
      icon: Users,
      title: "Skilled People, Strong Manufacturing",
      description:
        "Our teams include trained artisans, technicians, engineers, and specialists working within defined systems. Continuous skill development, safe working conditions, and methodical supervision support reliable, steady production.",
    },
    {
      icon: Layers,
      title: "Multi-Material Expertise",
      description:
        "We work across metal, marble, wood, glass, stone, and mixed materials. Controlled fabrication, precise machining, and disciplined finishing allow us to integrate materials seamlessly and produce globally compliant, structurally reliable products.",
    },
    {
      icon: Handshake,
      title: "Partnership-Oriented Working Style",
      description:
        "Our working philosophy is structured, transparent, and solution-focused. Reliable communication, realistic timelines, and consistent execution form the foundation of long-term relationships with international buyers.",
    },
  ]

  const colors = [
    "#B07A57", // clay
    "#64423C", // deep brown
    "#FFFFFF", // light contrast
    "#C4924F", // brass gold
    "#A2A38D", // stone grey
    "#4B5320", // olive
  ]

  return (
    <div className="min-h-screen bg-[#f0efe2] pb-24">

      {/* HERO */}
      <section className="relative w-full h-[75vh] min-h-[520px] overflow-hidden">
        <video
          src="/videos/5.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
              The Akbar Approach
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              Disciplined manufacturing, engineering-led systems, and long-term
              reliability. We combine material expertise with integrated production
              to deliver export-ready quality for global markets.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="container mx-auto px-6 pt-28">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

          {principles.map((principle, index) => {
            const Icon = principle.icon
            const bg = colors[index % colors.length]
            const isLight = bg === "#FFFFFF"

            return (
              <div
                key={index}
                className="
                  rounded-2xl
                  p-10
                  transition-all
                  duration-300
                  hover:-translate-y-2
                "
                style={{
                  backgroundColor: bg,
                  boxShadow: "0 25px 60px rgba(0,0,0,0.08)",
                }}
              >
                {/* ICON */}
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: isLight
                      ? "#63403A"
                      : "rgba(255,255,255,0.18)",
                  }}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* TITLE */}
                <h3
                  className="text-xl font-semibold mb-4 leading-snug"
                  style={{ color: isLight ? "#63403A" : "#ffffff" }}
                >
                  {principle.title}
                </h3>

                {/* TEXT */}
                <p
                  className="text-[15.5px] leading-relaxed"
                  style={{
                    color: isLight
                      ? "#63403A"
                      : "rgba(255,255,255,0.92)",
                  }}
                >
                  {principle.description}
                </p>
              </div>
            )
          })}

        </div>
      </section>

      {/* SPLIT SECTION */}
      <section className="max-w-7xl mx-auto mt-32 px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/legacy-unit.png"
              alt="Structured manufacturing environment"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-[#63403A]">
              Built on Structure, Not Chance
            </h3>

            <p className="text-lg leading-relaxed mb-4 text-[#63403A]/90">
              Our manufacturing environments are designed around flow, discipline,
              and clarity. Every workstation and movement is intentional — reducing
              variability and ensuring consistency.
            </p>

            <p className="text-lg leading-relaxed text-[#63403A]/90">
              This structured approach enables dependable timelines, scalable
              output, and globally compliant quality standards.
            </p>
          </div>

        </div>
      </section>

      {/* ESSENCE */}
      <section className="container mx-auto px-6 mt-32">
        <div
          className="rounded-2xl text-center py-20 px-10 max-w-4xl mx-auto text-white"
          style={{ backgroundColor: "#63403A" }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10">
            The Essence of Our Approach
          </h2>

          <div className="space-y-3 text-lg text-white/90">
            <p>Engineering-led systems.</p>
            <p>Defined processes.</p>
            <p>Material mastery.</p>
            <p>Consistent quality.</p>
            <p>Reliable partnerships.</p>
          </div>

          <p className="mt-10 text-xl font-semibold">
            This is how we work.
            <br />
            This is The Akbar Approach.
          </p>
        </div>
      </section>

    </div>
  )
}
