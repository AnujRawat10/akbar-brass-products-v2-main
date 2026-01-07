import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Briefcase, Mail } from 'lucide-react'
import Link from "next/link"

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "FINISHING ENGINEER- WOOD FURNITURE",
      department: "Production",
      description: [
        "Develop accurate recipes for color required as per in client's requirement.",
        "Maintain recipe continuity.",
        "Train line operator to achieve finish requirement.",
        "Color lab management.",
        "Development of new finisher.",
        "Maintain recipe consistency on lines."
      ],
      experience: "5 years experience in similar role in wood finishing",
      education: "B.Tech/ MSC or equivalent in chemical (pigment  color)",
      technical: "Knowledge of  TQM/6 Sigma",
      skills: [
        "Various Wood surface treatment",
        "Maintenance of color kitchen/lab"
      ]
    },
    {
      title: "PRODUCTION MANAGER - METAL FURNITURE",
      department: "Production",
      description: [
        "Oversee daily production operations across metal fabrication units",
        "Manage production schedules and ensure timely delivery",
        "Implement quality control measures and continuous improvement",
        "Lead and develop production team members",
        "Coordinate with design and quality teams"
      ],
      experience: "8+ years in metal furniture manufacturing",
      education: "B.E./B.Tech in Mechanical Engineering or equivalent",
      technical: "Knowledge of Lean Manufacturing, 5S, and Production Planning",
      skills: [
        "Metal fabrication processes",
        "Team leadership and management",
        "Production planning and control"
      ]
    },
    {
      title: "QUALITY CONTROL INSPECTOR",
      department: "Quality Assurance",
      description: [
        "Conduct inline and final product inspections",
        "Document quality issues and maintain inspection records",
        "Ensure compliance with international quality standards",
        "Work with production team to resolve quality issues",
        "Support audits and customer inspections"
      ],
      experience: "3-5 years in quality control for furniture/home products",
      education: "Diploma/Degree in Quality Management or related field",
      technical: "Knowledge of AQL standards and inspection procedures",
      skills: [
        "Attention to detail",
        "Knowledge of measurement tools",
        "Documentation skills"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#f0efe2]">
      <Header />
      
        <main >
        {/* Hero Section */}
        <section className="bg-[#63403A] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers</h1>
            <p className="text-xl text-white opacity-90 max-w-4xl">
              At Akbar Brass Products, we offer opportunities for skilled and motivated individuals to join our manufacturing, engineering, QC, and administrative teams. We look for people who are disciplined, reliable, and committed to long-term growth.
            </p>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="w-8 h-8 text-[#63403A]" />
              <h2 className="text-3xl font-bold text-[#63403A]">Current Openings</h2>
            </div>

            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-white border border-[#63403A] border-opacity-20 rounded-lg overflow-hidden">
                  {/* Job Title Header */}
                  <div className="bg-[#63403A] text-white px-6 py-4">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                  </div>

                  {/* Job Details */}
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-[#63403A] mb-2">Job Role</h4>
                          <p className="text-[#63403A] opacity-80">{job.title.split('-')[0].trim()}</p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-[#63403A] mb-2">Job Description</h4>
                          <ul className="list-disc list-inside text-[#63403A] opacity-80 space-y-1">
                            {job.description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#63403A] mb-2">Experience</h4>
                          <p className="text-[#63403A] opacity-80">{job.experience}</p>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-[#63403A] mb-2">Education Qualification</h4>
                          <p className="text-[#63403A] opacity-80">{job.education}</p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-[#63403A] mb-2">Tech/Prof. Qualification</h4>
                          <p className="text-[#63403A] opacity-80">{job.technical}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#63403A] mb-2">Skills</h4>
                          <ul className="list-disc list-inside text-[#63403A] opacity-80 space-y-1">
                            {job.skills.map((skill, i) => (
                              <li key={i}>{skill}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="mt-8 flex justify-center">
                      <a
                        href={`mailto:resume@akbarbrass.com?subject=Application for ${job.title}`}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#63403A] text-white hover:bg-[#63403A] hover:opacity-90 transition-all rounded"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Apply Directly */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-[#63403A]" />
              <h2 className="text-3xl font-bold text-[#63403A]">Apply Directly</h2>
            </div>
            <p className="text-[#63403A] opacity-80 mb-8 max-w-2xl mx-auto">
              If you don't see a suitable role, share your resume for future openings.
            </p>
            <a
              href="mailto:resume@akbarbrass.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#63403A] text-white hover:bg-[#63403A] hover:opacity-90 transition-all rounded"
            >
              Submit Resume
            </a>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-16 bg-[#63403A] text-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xl max-w-4xl mx-auto">
              We welcome individuals who want to grow with a structured, process-driven manufacturing organisation.
            </p>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  )
}