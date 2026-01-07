"use client";

import React, { useState } from "react";

interface ExpertiseItem {
  name: string;
  description: string;
  services: string[];
  url: string;
}

const OurExpertise: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const expertiseData: ExpertiseItem[] = [
  {
    name: "Integrated multi-material production",
    description:
      "An integrated manufacturing environment enabling the development and production of products across brass, stone, wood, and mixed materials.",
    services: [],
    url: "",
  },
  {
    name: "Stable quality and repeatability",
    description:
      "Established processes and production controls designed to ensure consistent quality and repeatable outcomes across manufacturing cycles.",
    services: [],
    url: "",
  },
  {
    name: "Compliance-ready systems",
    description:
      "Manufacturing systems aligned with global compliance, documentation, and quality requirements for international markets.",
    services: [],
    url: "",
  },
  {
    name: "In-house testing capabilities",
    description:
      "Internal testing, validation, and inspection workflows supporting quality assurance and production reliability.",
    services: [],
    url: "",
  },
  {
    name: "Three generations of manufacturing expertise",
    description:
      "Decades of accumulated manufacturing knowledge and experience carried forward across three generations of industry involvement.",
    services: [],
    url: "",
  },
];


  return (
    <div className="w-full bg-[#f0efe2] text-[#63403A] font-serif px-4 py-16 md:py-24">
      
      {/* SECTION HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-base md:text-lg text-[rgba(82,28,13,0.7)]">
          Decades of experience, modern facilities, and commitment to excellence
        </p>
      </div>

      {/* COLLAPSIBLE SECTIONS */}
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        {expertiseData.map((section, index) => (
          <div
            key={section.name}
            className="bg-[rgba(82,28,13,0.08)] border border-[rgba(82,28,13,0.15)] rounded-lg overflow-hidden transition-all"
          >
            {/* HEADER */}
            <button
              onClick={() => toggleSection(index)}
              className="w-full p-5 text-left flex justify-between items-center"
            >
              <h3 className="text-xl md:text-2xl font-bold">{section.name}</h3>
              <span className="text-2xl font-light">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* COLLAPSIBLE CONTENT */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                openIndex === index ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-6 mt-2 flex flex-col gap-6">

                {/* DESCRIPTION */}
                <div className="w-full">
                  <p className="text-[rgba(82,28,13,0.85)] text-base leading-relaxed">
                    {section.description}
                  </p>
                </div>

                {/* TAGS — STACKED ALWAYS */}
                <div className="flex flex-wrap gap-3">
                  {section.services.map((service, i) => (
                    <span
                      key={i}
                      className="
                        bg-[#fffdf8]
                        border border-[rgba(82,28,13,0.2)]
                        rounded-full
                        px-3 py-1
                        text-xs md:text-sm
                        font-medium
                        shadow-sm
                        whitespace-nowrap
                      "
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurExpertise;
