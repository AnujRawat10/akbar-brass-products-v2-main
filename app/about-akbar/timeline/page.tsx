import { CheckCircle } from 'lucide-react'

export default function TimelinePage() {
  const milestones = [
    {
      year: "1974",
      title: "Establishment of Akbar Brass Products",
      description: "Akbar Brass Products was established in 1974, when Haji Abdul Qayyum entrusted the responsibility of leading the company to his son Akbar Qayyum, marking the beginning of organised, export-focused manufacturing for the family."
    },
    {
      year: "1980s",
      title: "Expansion into Global Markets",
      description: "The company began supplying to the USA, Europe, the UK, and Australia, establishing long-term relationships built on consistent quality and dependable delivery."
    },
    {
      year: "1990s",
      title: "Strengthening Metal Manufacturing",
      description: "In-house capabilities in fabrication, polishing, plating, welding, and hand-finishing were enhanced to increase stability, finish consistency, and production control."
    },
    {
      year: "2000",
      title: "Wood Unit Established",
      description: "A dedicated wood unit was set up to manufacture wooden furniture and decorative articles, expanding the company's material capability into multi-material production."
    },
    {
      year: "2012",
      title: "Introduction of Metal Furniture Manufacturing",
      description: "Metal furniture production was introduced, enabling stronger mixed-material construction and broadening the product offering to meet evolving global demand."
    },
    {
      year: "2018",
      title: "New Metal Furniture Unit Developed",
      description: "A specialised metal furniture production block was set up to support larger capacity, improved workflows, and better coordination across divisions."
    },
    {
      year: "2021",
      title: "Marble Furniture & Décor Unit Constructed",
      description: "A dedicated marble-processing facility was established, enabling complete in-house capabilities for marble furniture, stone tabletops, and decorative stoneware."
    },
    {
      year: "2023–2024",
      title: "Integrated Factory & System Upgrades",
      description: "A unified, horizontally integrated manufacturing campus was developed, bringing fabrication, marble processing, woodworking, finishing, assembly, testing, and export packing into one coordinated workflow. ERP-driven processes, structured inspections, and compliance systems were strengthened to align with global retail expectations."
    },
    {
      year: "Present",
      title: "Third-Generation Leadership",
      description: "The third generation continues to modernise the organisation through engineering-led operations, advanced machinery, enhanced QC practices, and sustainable, global-standard manufacturing."
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16" style={{ backgroundColor: '#EDE8D0' }}>
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Hero */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl" style={{ color: '#521C0D' }}>
            Timeline
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed" style={{ color: '#521C0D' }}>
            Built over three generations, our journey reflects a steady evolution from traditional craftsmanship to modern, system-driven manufacturing. Each decade shows how we expanded our material expertise, upgraded our processes, and consolidated our infrastructure to meet the expectations of global markets.
          </p>
        </div>
        {/* Video Hero Section */}
<div className="mb-20">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    
    {/* Left Tall Video */}
    <div className="md:col-span-1 h-[500px]  overflow-hidden">
      <video
        src="/videos/1.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right Two Stacked Videos */}
    <div className="md:col-span-2 grid grid-rows-2 gap-4 h-[500px]">
      
      <div className=" overflow-hidden">
        <video
          src="/videos/2.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className=" overflow-hidden">
        <video
          src="/videos/3.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</div>


        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 md:left-1/2" style={{ backgroundColor: '#521C0D', opacity: 0.3 }}></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start md:justify-between">
                {/* Icon */}
                <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full text-white md:left-1/2 md:-translate-x-1/2 z-10" style={{ backgroundColor: '#521C0D' }}>
                  <CheckCircle className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'white' }}>
                    <div className="text-2xl font-bold mb-2" style={{ color: '#521C0D' }}>{milestone.year}</div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: '#521C0D' }}>{milestone.title}</h3>
                    <p className="leading-relaxed" style={{ color: '#521C0D' }}>{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}