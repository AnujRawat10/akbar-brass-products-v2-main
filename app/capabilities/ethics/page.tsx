import { Shield, Award, CheckCircle, FileCheck } from "lucide-react"

export default function EthicsPage() {
  return (
    <div className="min-h-screen bg-[#F0EFE2]">

      {/* ===== TOP SPACER (HEADER BREATHING ZONE) ===== */}
      <div className="h-24 md:h-32 lg:h-40" />

      {/* ================= CERTIFICATIONS ================= */}
      {/* ================= CERTIFICATIONS ================= */}
<section className="px-6 py-28 bg-[#EFE8D6]">
  <div className="mx-auto max-w-7xl">

    {/* HEADING */}
    <div className="mb-20 text-center">
      <h2 className="mb-5 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#63403A]">
        Certifications
      </h2>

      <p className="text-base md:text-lg text-[#63403A]/75 max-w-3xl mx-auto leading-relaxed">
        Maintaining globally recognised standards for ethical manufacturing,
        quality systems, and export compliance.
      </p>
    </div>

    {/* LOGOS */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 items-center justify-items-center">

      <img
        src="/partners/1.png"
        alt="SEDEX Certification"
        className="h-14 md:h-18 lg:h-20 object-contain mix-blend-multiply"
      />

      <img
        src="/partners/2.png"
        alt="UL Certification"
        className="h-14 md:h-18 lg:h-20 object-contain mix-blend-multiply"
      />

      <img
        src="/partners/3.png"
        alt="CE Certification"
        className="h-14 md:h-18 lg:h-20 object-contain mix-blend-multiply"
      />

      <img
        src="/partners/4.jpeg"
        alt="ISO Certification"
        className="h-14 md:h-18 lg:h-20 object-contain mix-blend-multiply"
      />

    </div>
  </div>
</section>


      {/* ================= COMMITMENTS ================= */}
      <section className="px-6 py-24 md:py-28 bg-[#F0EFE2]">
        <div className="mx-auto max-w-7xl">

          <div className="mb-20 text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#63403A]">
              Our Commitments
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">

            {[
              {
                title: "Ethical Manufacturing",
                points: [
                  "Fair wages and working conditions",
                  "Safe and healthy work environment",
                  "No child or forced labor",
                  "Regular audits and compliance checks",
                  "Employee training and development",
                ],
              },
              {
                title: "Environmental Responsibility",
                points: [
                  "Water treatment and recycling systems",
                  "Dust collection and air quality control",
                  "Recycled metal usage in production",
                  "Energy-efficient manufacturing processes",
                  "Waste reduction initiatives",
                ],
              },
              {
                title: "Quality Assurance",
                points: [
                  "8 quality check points during production",
                  "2.5 AQL inspection standards",
                  "In-house quality assurance team",
                  "Third-party inspection available",
                  "Full traceability of materials",
                ],
              },
              {
                title: "Customer Excellence",
                points: [
                  "80% repeat customer rate",
                  "Spotless delivery record",
                  "Transparent communication",
                  "Custom development capabilities",
                  "Long-term partnership focus",
                ],
              },
            ].map((box, i) => (
              <div
                key={i}
                className="p-8 md:p-10 bg-white rounded-xl border border-[#9A9D85]/40"
              >
                <h3 className="mb-6 font-serif text-2xl font-bold text-[#63403A]">
                  {box.title}
                </h3>

                <ul className="space-y-3 text-[#63403A]/80 leading-relaxed">
                  {box.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GLOBAL COMPLIANCE ================= */}
      <section className="px-6 py-28 bg-[#485023] text-[#F0EFE2]">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="mb-8 font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
            Global Compliance
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-8 text-[#F0EFE2]/90">
            Our factory is audited and approved for production for major American
            retailers and international markets. We maintain compliance with all
            applicable regulations across USA, Europe, and global regions.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-[#F0EFE2]/90">
            Regular audits ensure we continue to meet and exceed industry standards
            for safety, quality, and ethical manufacturing practices.
          </p>
        </div>
      </section>

    </div>
  )
}
