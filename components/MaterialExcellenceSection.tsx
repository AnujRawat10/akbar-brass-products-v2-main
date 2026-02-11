"use client"

import React, { useState } from 'react';
import { Award, CheckCircle2, Sparkles, Shield } from 'lucide-react';

interface Feature {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

function MaterialExcellenceSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [clickedCard, setClickedCard] = useState<number | null>(null);

  const features: Feature[] = [
    {
      id: 1,
      number: '01',
      title: 'Multi-Material Mastery',
      description: 'Expert handling of metal, marble, wood, and composite materials under one roof.',
      icon: <Award className="w-8 h-8" />,
      image: '/materialexcellence/WhatsApp Image 2026-02-11 at 18.18.41.jpeg'
    },
    {
      id: 2,
      number: '02',
      title: 'Finish Consistency',
      description: 'Standardized finishing processes ensuring uniform quality across production batches.',
      icon: <CheckCircle2 className="w-8 h-8" />,
      image: '/materialexcellence/WhatsApp Image 2026-02-11 at 18.21.02.jpeg'
    },
    {
      id: 3,
      number: '03',
      title: 'Custom Development',
      description: 'In-house capability to develop and test new material combinations and finish techniques.',
      icon: <Sparkles className="w-8 h-8" />,
      image: '/materialexcellence/WhatsApp Image 2026-02-11 at 18.21.27.jpeg'
    },
    {
      id: 4,
      number: '04',
      title: 'Durability Testing',
      description: 'Every finish undergoes rigorous testing for adhesion, corrosion resistance, and longevity.',
      icon: <Shield className="w-8 h-8" />,
      image: '/materialexcellence/WhatsApp Image 2026-02-11 at 18.21.31.jpeg'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#485023] text-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Image */}
        <div className="mb-16 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 text-white">
              Material Excellence
            </h2>
            <div className="w-24 h-[2px] bg-[#BF8B45] mb-8" />
            <div>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">
                Our integrated manufacturing approach combines traditional craftsmanship with modern finishing technology, enabling us to deliver consistent, export-grade quality across all material categories.
              </p>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                From raw material selection to final finish application, every stage is monitored through our quality management system to ensure products meet international standards for durability, safety, and aesthetic excellence.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
            <img
              src="/excellence.jpeg"
              alt="Material Excellence"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col md:flex-row gap-0">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`
                bg-white/10 backdrop-blur-sm border border-white/20
                cursor-pointer
                relative
                transition-all duration-500 ease-in-out
                ${(expandedCard === feature.id || clickedCard === feature.id)
                  ? 'flex-[2] md:flex-[2] p-6 sm:p-8 lg:p-10'
                  : 'flex-1 p-5 sm:p-6 lg:p-8'
                }
                ${expandedCard === null && clickedCard === null ? 'hover:bg-white/15' : ''}
                overflow-hidden
              `}
              onClick={() => {
                // Close the currently open card if clicking on the same card, otherwise open the new one
                setClickedCard(clickedCard === feature.id ? null : feature.id);
                // Reset hover state when clicking
                setExpandedCard(null);
              }}
              onMouseEnter={() => {
                // Only allow hover if no card is clicked/locked
                if (clickedCard === null) {
                  setExpandedCard(feature.id);
                }
              }}
              onMouseLeave={() => {
                // Only clear hover if no card is clicked/locked
                if (clickedCard === null) {
                  setExpandedCard(null);
                }
              }}
            >
              <div className="flex flex-col h-full justify-between">
                {/* Header */}
                <div>
                  <span className={`
                    block text-sm sm:text-base font-semibold transition-colors duration-400
                    ${(expandedCard === feature.id || clickedCard === feature.id) ? 'text-[#BF8B45] mb-3' : 'text-white/60 mb-2'}
                  `}>
                    {feature.number}
                  </span>

                  {/* Icon */}
                  <div className={`
                    transition-all duration-500
                    ${(expandedCard === feature.id || clickedCard === feature.id)
                      ? 'text-[#BF8B45] scale-110 mb-4'
                      : 'text-white/80 mb-3'
                    }
                  `}>
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`
                    font-serif font-semibold leading-tight transition-all duration-400
                    ${(expandedCard === feature.id || clickedCard === feature.id)
                      ? 'text-2xl sm:text-3xl lg:text-4xl text-white mb-4'
                      : 'text-lg sm:text-xl text-white mb-2'
                    }
                  `}>
                    {feature.title}
                  </h3>

                  {/* Description & Image */}
                  {(expandedCard === feature.id || clickedCard === feature.id) && (
                    <>
                      <p
                        className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 animate-fadeInUp"
                        style={{
                          animation: 'fadeInUp 0.5s ease forwards 0.2s',
                          opacity: 0,
                          transform: 'translateY(20px)'
                        }}
                      >
                        {feature.description}
                      </p>
                      <div
                        className="rounded-lg overflow-hidden mb-4 h-32 sm:h-40 lg:h-48"
                        style={{
                          animation: 'fadeInUp 0.5s ease forwards 0.35s',
                          opacity: 0,
                          transform: 'translateY(20px)'
                        }}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </>
                  )}

                  {/* Animated underline */}
                  <div
                    className={`
                      h-[2px] bg-[#BF8B45] transition-all duration-500
                      ${(expandedCard === feature.id || clickedCard === feature.id) ? 'w-full' : 'w-0'}
                    `}
                  />
                </div>

                {/* Toggle Button */}
                <button
                  className={`
                    w-10 h-10 mt-4
                    flex items-center justify-center
                    text-2xl font-light
                    transition-all duration-300
                    self-start
                    ${(expandedCard === feature.id || clickedCard === feature.id)
                      ? 'text-white rotate-180'
                      : 'text-white/80'
                    }
                    hover:scale-110
                  `}
                  aria-label={(expandedCard === feature.id || clickedCard === feature.id) ? 'Collapse' : 'Expand'}
                >
                  {(expandedCard === feature.id || clickedCard === feature.id) ? '−' : '+'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default MaterialExcellenceSection;