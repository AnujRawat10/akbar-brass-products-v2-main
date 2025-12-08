/**
 * FIXED LUXURY SHOWCASE COMPONENT – FULL DROP-IN REPLACEMENT
 */

import React, { useState } from "react";
import Link from "next/link";

interface ProductItem {
  number: string;
  title: string;
  description: string;
  details: {
    style: string;
    size: string;
    dimensions: string;
    com: string;
    materials: string;
  };
}

function LuxuryShowcase() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  /** SAFE + NON-MISLEADING product list **/
  const products: ProductItem[] = [
    {
      number: "01",
      title: "Curated Product Showcase",
      description:
        "A curated display of brass, marble, wood, and mixed-material home products developed within a multi-material manufacturing environment. The products highlight finish quality, craftsmanship, and material usability suited for interior applications.",
      details: {
        style: "Collection-Based",
        size: "Varies by Product",
        dimensions: "Provided Upon Inquiry",
        com: "As Applicable",
        materials: "Brass | Natural Stone | Wood | Mixed Elements",
      },
    },
    {
      number: "02",
      title: "Mixed Material Display",
      description:
        "Manufactured using a blend of contemporary techniques and established workmanship practices, these pieces represent multi-material development suitable for furniture, décor, and interior product categories.",
      details: {
        style: "Collection-Based",
        size: "Varies by Product",
        dimensions: "Provided Upon Inquiry",
        com: "As Applicable",
        materials: "Brass | Stone | Wood | Mixed Elements",
      },
    },
  ];

  /** only 2 images – alternating **/
  const images = ["/showroom1.jpeg", "/showroom2.jpeg"];

  const currentProduct = products[activeIndex];

  return (
    <div style={{ width: "100%", backgroundColor: "#EDE8D0", padding: "0" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr",
          gap: "0",
          minHeight: "600px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* LEFT PANEL - Product List */}
        <div
          style={{
            backgroundColor: "#EDE8D0",
            padding: "40px 30px",
            borderRight: "1px solid rgba(82, 28, 13, 0.2)",
            overflowY: "auto",
            maxHeight: "700px",
          }}
        >
          <div
            style={{
              marginBottom: "30px",
              paddingBottom: "20px",
              borderBottom: "1px solid rgba(82, 28, 13, 0.2)",
            }}
          >
            <h3
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                letterSpacing: "1px",
                color: "#521C0D",
                margin: "0 0 8px 0",
              }}
            >
              AKBAR BRASS PRODUCTS
            </h3>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(82, 28, 13, 0.7)",
                margin: "0",
              }}
            >
              Moradabad, India
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {products.map((product, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "16px",
                  padding: "20px 16px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  marginLeft: "-3px",
                  backgroundColor:
                    activeIndex === index
                      ? "rgba(82, 28, 13, 0.08)"
                      : "transparent",
                  borderLeft:
                    activeIndex === index
                      ? "3px solid #521C0D"
                      : "3px solid transparent",
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "#521C0D",
                    fontStyle: "italic",
                    flexShrink: 0,
                  }}
                >
                  {product.number}.
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      lineHeight: 1.6,
                      color: "rgba(82, 28, 13, 0.8)",
                      margin: "0 0 8px 0",
                    }}
                  >
                    {product.description}
                  </p>

                  {activeIndex === index && (
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "rgba(82, 28, 13, 0.6)",
                        margin: "8px 0 0 0",
                      }}
                    >
                      <em>{product.details.materials}</em>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER PANEL - Main Image */}
        <div
          style={{
            backgroundColor: "#EDE8D0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              maxHeight: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={images[activeIndex % 2]}
              alt={currentProduct.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                border: "2px solid #521C0D",
              }}
            />
          </div>
        </div>

        {/* RIGHT PANEL - Product Details */}
        <div
          style={{
            backgroundColor: "#EDE8D0",
            padding: "40px 30px",
            borderLeft: "1px solid rgba(82, 28, 13, 0.2)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ marginBottom: "30px" }}>
            <span
              style={{
                fontSize: "4rem",
                fontWeight: 700,
                color: "#521C0D",
                display: "block",
                lineHeight: 1,
              }}
            >
              {currentProduct.number}
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(82, 28, 13, 0.6)",
                fontStyle: "italic",
              }}
            >
              (Scroll)
            </span>
          </div>

          {/* PRODUCT META */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginBottom: "30px",
              flex: 1,
            }}
          >
            {[
              ["Style", currentProduct.details.style],
              ["Size", currentProduct.details.size],
              ["Dimensions", currentProduct.details.dimensions],
              ["COM / COL", currentProduct.details.com],
              ["Materials", currentProduct.details.materials],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid rgba(82, 28, 13, 0.15)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(82, 28, 13, 0.6)",
                    fontStyle: "italic",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "#521C0D",
                    fontWeight: 500,
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/about-akbar/approach"
            style={{
              display: "block",
              textAlign: "center",
              backgroundColor: "#521C0D",
              color: "#EDE8D0",
              border: "none",
              padding: "14px 24px",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
              marginBottom: "30px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              textDecoration: "none",
            }}
          >
            Explore Our Approach
          </Link>

          {/* DOT NAVIGATION (2 DOTS ONLY) */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            {products.map((_, index) => (
              <div
                key={index}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backgroundColor:
                    activeIndex === index
                      ? "#521C0D"
                      : "rgba(82, 28, 13, 0.3)",
                }}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LuxuryShowcase;
