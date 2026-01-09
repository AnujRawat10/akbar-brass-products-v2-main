"use client";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "Sedex", logo: "/partners/1.png" },
  { name: "CTPAT", logo: "/partners/2.png" },
  { name: "UL Listed", logo: "/partners/3.png" },
  { name: "BIS", logo: "/partners/4.jpeg" },
];

export default function OurPartners() {
  return (
    <>
      <section className="partners-section">
        <div className="partners-container">

          {/* Heading */}
          <h2 className="partners-title">Our Trusted Partners</h2>

          <p className="partners-subtitle">
            Collaborating with global organisations and certification bodies
            that share our commitment to quality, compliance, and craftsmanship.
          </p>

          {/* Logos */}
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div className="partner-card" key={index}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      <style jsx>{`
        .partners-section {
          background-color: #ede8d0;
          padding: 96px 24px;
        }

        .partners-container {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .partners-title {
          font-family: 'Times New Roman', serif;
          font-size: 36px;
          font-weight: 600;
          color: #63403A;
          margin-bottom: 16px;
        }

        .partners-subtitle {
          font-size: 16px;
          color: rgba(95, 74, 67, 0.9);
          max-width: 640px;
          margin: 0 auto 64px;
          line-height: 1.7;
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 32px;
          align-items: center;
        }

        .partner-card {
          // background: #ffffff;
          // border: 1px solid rgba(99, 64, 58, 0.15);
          // border-radius: 16px;
          // padding: 32px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .partner-card img {
          max-width: 140px;
          max-height: 80px;
          object-fit: contain;
          mix-blend-mode: multiply;
        }

        /* Responsive tweaks */
        @media (max-width: 640px) {
          .partners-title {
            font-size: 30px;
          }

          .partners-subtitle {
            font-size: 15px;
            margin-bottom: 48px;
          }

          .partner-card {
            padding: 24px 16px;
          }

          .partner-card img {
            max-width: 100px;
          }
        }
      `}</style>
    </>
  );
}
