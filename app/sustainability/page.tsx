import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Droplets, Wind, Recycle, Users, GraduationCap, Heart } from 'lucide-react'

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-[#f0efe2]">
      <Header />
      
   <main >
        {/* Hero Section */}
        <section className="bg-[#f0efe1] text-[#63403A] pt-28 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sustainability</h1>
            <p className="text-xl text-[#63403A] opacity-90 ">
              At Akbar Brass Products, sustainability is built into our manufacturing systems, resource management, and workplace practices. Our approach focuses on three key pillars: Environment, Community, and Wellbeing—ensuring responsible production and long-term operational reliability.
            </p>
          </div>
        </section>

        {/* Environment */}
        <section className="py-16 border-b border-[#63403A] border-opacity-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#63403A] mb-8">1. ENVIRONMENT</h2>

            {/* Responsible Resource Management */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Droplets className="w-8 h-8 text-[#63403A]" />
                <h3 className="text-2xl font-semibold text-[#63403A]">Responsible Resource Management</h3>
              </div>
              <p className="text-[#63403A] opacity-80 mb-4">
                Our integrated manufacturing campus is equipped with:
              </p>
              <ul className="list-disc list-inside text-[#63403A] opacity-80 space-y-2 ml-4">
                <li>Effluent Treatment Plant (ETP)</li>
                <li>Sewage Treatment Plant (STP)</li>
                <li>Reverse Osmosis (RO) system</li>
                <li>Rainwater harvesting infrastructure</li>
              </ul>
              <p className="text-[#63403A] opacity-80 mt-4">
                These systems enable water recycling, reduce groundwater usage, and ensure safe, compliant discharge of treated water.
              </p>
            </div>

            {/* Cleaner Production */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Wind className="w-8 h-8 text-[#63403A]" />
                <h3 className="text-2xl font-semibold text-[#63403A]">Cleaner Production</h3>
              </div>
              <p className="text-[#63403A] opacity-80 mb-4">
                We maintain clean and controlled production environments through:
              </p>
              <ul className="list-disc list-inside text-[#63403A] opacity-80 space-y-2 ml-4">
                <li>Dust collectors in metal polishing, marble processing, and woodworking</li>
                <li>Controlled finishing areas for plating, powder coating, and lacquer</li>
                <li>Energy-efficient machinery and monitored power usage</li>
              </ul>
              <p className="text-[#63403A] opacity-80 mt-4">
                These practices help reduce emissions, improve air quality, and lower our environmental impact.
              </p>
            </div>

            {/* Recycling & Material Efficiency */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Recycle className="w-8 h-8 text-[#63403A]" />
                <h3 className="text-2xl font-semibold text-[#63403A]">Recycling & Material Efficiency</h3>
              </div>
              <p className="text-[#63403A] opacity-80 mb-4">
                Material management is structured around responsible use and circular processes:
              </p>
              <ul className="list-disc list-inside text-[#63403A] opacity-80 space-y-2 ml-4">
                <li>Metal scrap is segregated and recycled back into controlled supply chains</li>
                <li>Wood, stone, and packaging materials are reused or recycled wherever possible</li>
                <li>Cutting patterns for metal, marble, and wood are optimized to reduce wastage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="py-16 bg-white border-b border-[#63403A] border-opacity-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#63403A] mb-8">2. COMMUNITY</h2>

            {/* Local Employment */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-[#63403A]" />
                <h3 className="text-2xl font-semibold text-[#63403A]">Local Employment & Skill Development</h3>
              </div>
              <p className="text-[#63403A] opacity-80 mb-4">
                We actively support the local workforce by providing:
              </p>
              <ul className="list-disc list-inside text-[#63403A] opacity-80 space-y-2 ml-4">
                <li>Employment across metal, marble, wood, finishing, and assembly departments</li>
                <li>Skill-building through on-the-job training and structured process exposure</li>
                <li>Opportunities for artisans and technicians to grow within specialized trades</li>
              </ul>
              <p className="text-[#63403A] opacity-80 mt-4">
                Our operations contribute to the livelihood of numerous families in the region.
              </p>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-[#63403A]" />
                <h3 className="text-2xl font-semibold text-[#63403A]">Education & Capability Building</h3>
              </div>
              <p className="text-[#63403A] opacity-80">
                Training initiatives help new workers gain the confidence and skills needed for long-term employability. We focus on developing practical manufacturing skills and process understanding across departments.
              </p>
            </div>
          </div>
        </section>

        {/* Wellbeing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#63403A] mb-8">3. WELLBEING</h2>

            {/* Safe & Ethical Workplace */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-[#63403A]" />
                <h3 className="text-2xl font-semibold text-[#63403A]">Safe & Ethical Workplace</h3>
              </div>
              <p className="text-[#63403A] opacity-80 mb-4">
                Our practices are aligned with SEDEX/SMETA principles, emphasising:
              </p>
              <ul className="list-disc list-inside text-[#63403A] opacity-80 space-y-2 ml-4">
                <li>Worker safety</li>
                <li>Hygienic facilities</li>
                <li>Ethical manufacturing standards</li>
                <li>Transparent HR and labour practices</li>
              </ul>
            </div>

            {/* Health & Awareness */}
            <div>
              <h3 className="text-2xl font-semibold text-[#63403A] mb-4">Health & Awareness</h3>
              <p className="text-[#63403A] opacity-80">
                Periodic awareness sessions promote safe working procedures, cleanliness, and responsible work habits, contributing to a healthy and empowered workforce.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-16 bg-[#63403A] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="text-xl max-w-4xl mx-auto">
              Sustainability for us is a continuous effort—built into our daily processes, resource planning, and workplace culture. Through cleaner production, community support, and ethical operations, we aim to maintain a responsible, future-ready manufacturing ecosystem.
            </p>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  )
}