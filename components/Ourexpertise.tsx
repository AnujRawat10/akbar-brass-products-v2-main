"use client";

import React from 'react';

interface ExpertiseItem {
  name: string;
  description: string;
  services: string[];
  url: string;
}

const OurExpertise: React.FC = () => {
  const handleVisitSite = (e: React.MouseEvent<HTMLButtonElement>, url: string): void => {
    e.stopPropagation();
    window.open(url, "_blank");
  };

  const expertiseData: ExpertiseItem[] = [
    {
      name: "Heritage Brass Collection",
      description:
        "A showcase of precision-engineered brass products that blend traditional craftsmanship with modern design. Our Heritage Collection represents three generations of manufacturing excellence, featuring hand-finished pieces that meet global compliance standards.",
      services: [
        "Brass Fabrication",
        "Hand Finishing",
        "Quality Certification",
        "Custom Design",
        "Export Ready",
      ],
      url: "https://www.akbarbrass.com/",
    },
    {
      name: "Marble & Stone Processing",
      description:
        "From quarry to finished product, our marble processing facility delivers precision-cut natural stone with exceptional finish quality. Equipped with advanced CNC machinery and traditional stone-working techniques, we create marble products that meet international standards.",
      services: [
        "Natural Stone Selection",
        "CNC Processing",
        "Surface Finishing",
        "Custom Cutting",
        "Quality Control",
      ],
      url: "https://www.akbarbrass.com/",
    },
    {
      name: "Multi-Material Integration",
      description:
        "Our horizontally integrated campus enables seamless multi-material production. From brass and marble to wood and glass, we combine diverse materials into cohesive products. This integrated approach ensures consistent quality and reduced lead times.",
      services: ["Material Sourcing", "Integrated Manufacturing", "Assembly", "Testing"],
      url: "",
    },
    {
      name: "Wood & Mixed Materials",
      description:
        "Combining hardwoods and engineered wood with metal and stone components, our mixed-material products showcase versatility in design and manufacturing. Each product undergoes rigorous quality checks to ensure structural integrity and aesthetic excellence.",
      services: [
        "Hardwood Processing",
        "Engineered Wood",
        "Mixed Assembly",
        "Finishing",
      ],
      url: "https://www.akbarbrass.com/",
    },
    {
      name: "Export & Compliance",
      description:
        "With globally aligned compliance systems and in-house testing facilities, we ensure every product meets international standards. Our export-ready manufacturing process includes documentation, packaging, and logistics support for seamless delivery worldwide.",
      services: ["Compliance Testing", "Export Documentation", "Quality Assurance"],
      url: "https://www.akbarbrass.com",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.titleWrapper}>
        <h2 style={styles.title}>Why Choose Us?</h2>
        <p style={styles.subtitle}>
          Decades of experience, modern facilities, and commitment to excellence
        </p>
      </div>

      <div style={styles.sections}>
        {expertiseData.map((section) => (
          <div 
            key={section.name} 
            className="expertise-section"
            style={styles.section}
          >
            <div style={styles.sectionHeader}>
              <h3 style={styles.sectionTitle}>{section.name}</h3>
            </div>

            <div 
              className="section-expanded-content"
              style={styles.expandedContent}
            >
              <div style={styles.contentLeft}>
                <p style={styles.description}>{section.description}</p>
              </div>
              <div style={styles.contentRight}>
                <div style={styles.serviceTags}>
                  {section.services.map((service, index) => (
                    <span key={index} style={styles.serviceTag}>
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .expertise-section {
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
        }
        
        .expertise-section:hover {
          background-color: #ffffff !important;
          color: #000000;
          border: 2px solid #521C0D;
          box-shadow: 0 4px 20px rgba(82, 28, 13, 0.15);
        }
        
        .section-expanded-content {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .expertise-section:hover .section-expanded-content {
          max-height: 1000px;
          opacity: 1;
          padding: 0 24px 24px;
          transition: all 0.5s ease;
        }

        @media (max-width: 992px) {
          .section-expanded-content {
            flex-direction: column !important;
          }
          .expertise-section:hover .section-expanded-content {
            max-height: 2000px;
          }
        }

        @media (max-width: 768px) {
          .expertise-section:hover .section-expanded-content {
            max-height: 2500px;
          }
        }
      `}</style>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#EDE8D0',
    color: '#521C0D',
    width: '100%',
    padding: '64px 24px',
    fontFamily: 'serif',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  titleWrapper: {
    textAlign: 'center',
    marginBottom: '48px',
    maxWidth: '900px',
    margin: '0 auto 48px',
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: 700,
    margin: '0 0 16px 0',
    color: '#521C0D',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: 'rgba(82, 28, 13, 0.7)',
    margin: 0,
    fontFamily: 'sans-serif',
  },
  sections: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  section: {
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: 'rgba(82, 28, 13, 0.08)',
    border: '1px solid rgba(82, 28, 13, 0.1)',
  },
  sectionHeader: {
    padding: '20px 24px',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    margin: 0,
    color: '#521C0D',
  },
  expandedContent: {
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '32px',
  },
  contentLeft: {
    flex: 1,
    maxWidth: '60%',
  },
  description: {
    fontSize: '0.9375rem',
    lineHeight: 1.6,
    marginBottom: '0',
    color: 'rgba(82, 28, 13, 0.8)',
    fontFamily: 'sans-serif',
  },
  contentRight: {
    flex: 1,
    maxWidth: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  serviceTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    justifyContent: 'flex-end',
  },
  serviceTag: {
    backgroundColor: '#ffffff',
    color: '#521C0D',
    padding: '6px 12px',
    borderRadius: '40px',
    fontSize: '0.75rem',
    fontWeight: 500,
    border: '1px solid rgba(82, 28, 13, 0.2)',
    fontFamily: 'sans-serif',
  },
};

export default OurExpertise;