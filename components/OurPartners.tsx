"use client";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "Partner One", logo: "/partners/1.png" },
  { name: "Partner Two", logo: "/partners/2.png" },
  { name: "Partner Three", logo: "/partners/3.png" },
  // { name: "Partner Four", logo: "/partners/partner4.png" },
  // { name: "Partner Five", logo: "/partners/partner5.png" },
];

export default function OurPartners() {
  return (
    <>
      <section className="our-partners">
        <div className="our-partners-inner">
          <h2 className="partners-title">Our Trusted Partners</h2>

          <p className="partners-subtitle">
            Collaborating with brands that share our commitment to quality,
            craftsmanship, and timeless design.
          </p>

          <div className="partners-logos">
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
        .our-partners {
          background-color: rgb(237 232 208);
          padding: 100px 24px;
        }

        .our-partners-inner {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .partners-title {
        font-family: 'Times New Roman', serif;
          font-size: 36px;
          font-weight: 600;
          color: #63403A;
          margin-bottom: 14px;
        }

        .partners-subtitle {
          font-size: 16px;
          color: #5f4a43;
          max-width: 620px;
          margin: 0 auto 60px;
          line-height: 1.7;
        }

        .partners-logos {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          // gap: 10px;
          align-items: center;
          justify-items: center;

        }

        .partner-card {
          // background: white;
          padding: 28px 20px;
          border-radius: 14px;
          // transition: all 0.35s ease;
          // box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);

        }

        .partner-card img {
          max-width: 100px;
          // filter: grayscale(100%);
          // opacity: 0.75;
          // transition: 0.3s;
          mix-blend-mode: multiply;
        }

        // .partner-card:hover {
        //   transform: translateY(-6px);
        // }

        // .partner-card:hover img {
        //   filter: grayscale(0%);
        //   opacity: 1;
        // }
      `}</style>
    </>
  );
}
