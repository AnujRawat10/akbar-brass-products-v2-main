"use client"

import React, { useState } from 'react';
import { Award, CheckCircle2, Sparkles, Shield } from 'lucide-react';

interface Feature {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function MaterialExcellenceSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const features: Feature[] = [
    {
      id: 1,
      number: '01',
      title: 'Multi-Material Mastery',
      description: 'Expert handling of metal, marble, wood, and composite materials under one roof.',
      icon: <Award className="w-8 h-8" />
    },
    {
      id: 2,
      number: '02',
      title: 'Finish Consistency',
      description: 'Standardized finishing processes ensuring uniform quality across production batches.',
      icon: <CheckCircle2 className="w-8 h-8" />
    },
    {
      id: 3,
      number: '03',
      title: 'Custom Development',
      description: 'In-house capability to develop and test new material combinations and finish techniques.',
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      id: 4,
      number: '04',
      title: 'Durability Testing',
      description: 'Every finish undergoes rigorous testing for adhesion, corrosion resistance, and longevity.',
      icon: <Shield className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#485023] text-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 text-white">
            Material Excellence
          </h2>
          <div className="w-24 h-[2px] bg-[#BF8B45] mb-8" />
          <div className="max-w-3xl">
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">
              Our integrated manufacturing approach combines traditional craftsmanship with modern finishing technology, enabling us to deliver consistent, export-grade quality across all material categories.
            </p>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed">
              From raw material selection to final finish application, every stage is monitored through our quality management system to ensure products meet international standards for durability, safety, and aesthetic excellence.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col md:flex-row gap-0 min-h-[500px]">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`
                bg-white/10 backdrop-blur-sm border border-white/20
                p-8 sm:p-10 lg:p-12
                cursor-pointer
                relative
                transition-all duration-500 ease-in-out
                ${expandedCard === feature.id 
                  ? 'flex-[2] md:flex-[2]' 
                  : 'flex-1'
                }
                ${expandedCard === null ? 'hover:bg-white/15' : ''}
                overflow-hidden
              `}
              onMouseEnter={() => setExpandedCard(feature.id)}
              onMouseLeave={() => setExpandedCard(null)}
            >
              <div className="flex flex-col h-full justify-between">
                {/* Header */}
                <div>
                  <span className={`
                    block text-sm sm:text-base font-semibold mb-4
                    transition-colors duration-400
                    ${expandedCard === feature.id ? 'text-[#BF8B45]' : 'text-white/60'}
                  `}>
                    {feature.number}
                  </span>
                  
                  {/* Icon */}
                  <div className={`
                    mb-6 transition-all duration-500
                    ${expandedCard === feature.id 
                      ? 'text-[#BF8B45] scale-110' 
                      : 'text-white/80'
                    }
                  `}>
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`
                    font-serif font-semibold leading-tight mb-4
                    transition-all duration-400
                    ${expandedCard === feature.id 
                      ? 'text-2xl sm:text-3xl lg:text-4xl text-white' 
                      : 'text-xl sm:text-2xl text-white'
                    }
                  `}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  {expandedCard === feature.id && (
                    <p 
                      className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 animate-fadeInUp"
                      style={{
                        animation: 'fadeInUp 0.5s ease forwards 0.2s',
                        opacity: 0,
                        transform: 'translateY(20px)'
                      }}
                    >
                      {feature.description}
                    </p>
                  )}

                  {/* Animated underline */}
                  <div 
                    className={`
                      h-[2px] bg-[#BF8B45] transition-all duration-500
                      ${expandedCard === feature.id ? 'w-full' : 'w-0'}
                    `} 
                  />
                </div>

                {/* Toggle Button */}
                <button 
                  className={`
                    w-12 h-12 mt-8
                    flex items-center justify-center
                    text-3xl font-light
                    transition-all duration-300
                    self-start
                    ${expandedCard === feature.id 
                      ? 'text-white rotate-180' 
                      : 'text-white/80'
                    }
                    hover:scale-110
                  `}
                  aria-label={expandedCard === feature.id ? 'Collapse' : 'Expand'}
                >
                  {expandedCard === feature.id ? '−' : '+'}
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