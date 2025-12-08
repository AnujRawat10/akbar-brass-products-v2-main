"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import OurExpertise from "@/components/Ourexpertise";
import { Package, Lightbulb, Frame, Sparkles, CircleDot, Boxes } from 'lucide-react'
/**
 * LuxuryShowcase - updated, responsive, verified-safe
 * - auto slider (fade)
 * - no false claims
 * - no range
 * - generic, accurate metadata
 */

function LuxuryShowcase() {
  const [activeImage, setActiveImage] = useState(0);
  const [showMaterials, setShowMaterials] = useState(false);

  const product = {
    brand: "AKBAR BRASS PRODUCTS",
    number: "INTERIOR DÉCOR",
    location: "Moradabad, India",

    /** SAFE RIGHT PANEL VALUES **/
    style: "Collection-Based",
    size: "Varies by Product",
    dimensions: "Provided Upon Inquiry",
    com: "As Applicable",

    /** SAFE & TRUE DESCRIPTION **/
    description: [
      "A curated presentation of brass, stone, wood, and mixed-material home products.",
      "Developed within a multi-material manufacturing environment using contemporary techniques and workmanship practices.",
      "The products highlight attention to material selection, finish quality, and usability suited for interior applications.",
      "Items may vary by specification, and details are available upon inquiry."
    ],

    /** SAFE MATERIALS **/
    materials: "Brass | Natural Stone | Wood | Mixed Materials",

    /** ONLY TWO IMAGES WILL SLIDE **/
    images: ["/showroom1.jpeg", "/showroom2.jpeg"]
  };

  // Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % product.images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#EDE8D0] font-serif">

      {/* Header */}
      <header className="border-b border-[#d4cdb5] px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl tracking-wider" style={{ color: "#521C0D" }}>
          {product.brand}
        </h2>

        {/* RANGE REMOVED — ONLY LOCATION */}
        <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: "#521C0D" }}>
          <span>{product.location}</span>
        </div>
      </header>

      {/* FLEX LAYOUT */}
      <div className="flex flex-col lg:flex-row w-full">

        {/* LEFT SIDEBAR */}
        <aside className="lg:w-1/4 p-6 border-r border-[#d4cdb5]">
          <p className="italic mb-4" style={{ color: "#521C0D" }}>
            i.
          </p>

          <div className="space-y-3 mb-6">
            {product.description.map((p, idx) => (
              <p key={idx} style={{ color: "rgba(82,28,13,0.8)" }}>
                {p}
              </p>
            ))}
          </div>

          <p className="italic mb-1" style={{ color: "#521C0D" }}>
            ii. {product.materials}
          </p>
{/* 
          <p className="italic text-xs mb-2" style={{ color: "rgba(82,28,13,0.7)" }}>
            (Detail)
          </p> */}
        </aside>

        {/* CENTER SLIDER */}
        <main className="lg:w-2/4 p-6 flex justify-center">
          <div className="relative w-full max-w-3xl h-[400px] md:h-[460px] lg:h-[500px] bg-white rounded-md shadow overflow-hidden">

            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-700 ${
                  activeImage === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="lg:w-1/4 p-6 border-l border-[#d4cdb5]">
          
          <div className="text-right mb-6">
            <div className="text-5xl font-light" style={{ color: "#521C0D" }}>
              {product.number}
            </div>
            {/* <div className="italic text-xs" style={{ color: "rgba(82,28,13,0.6)" }}>
              (Scroll)
            </div> */}
          </div>

          <div className="space-y-4 text-sm">
            {[
              ["Style", product.style],
              ["Size", product.size],
              ["Dimensions", product.dimensions],
              ["COM / COL", product.com],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b pb-2 border-[#d4cdb5]">
                <span className="italic" style={{ color: "rgba(82,28,13,0.7)" }}>{label}</span>
                <span style={{ color: "#521C0D" }}>{value}</span>
              </div>
            ))}

            <button
              onClick={() => setShowMaterials(!showMaterials)}
              className="italic text-left"
              style={{ color: "rgba(82,28,13,0.7)" }}
            >
              Materials
            </button>

            {showMaterials && (
              <p className="pl-2" style={{ color: "rgba(82,28,13,0.8)" }}>
                {product.materials}
              </p>
            )}
          </div>

          <Link
            href="/about-akbar/approach"
            className="block mt-8 text-center py-3 rounded-md shadow-md"
            style={{ backgroundColor: "#521C0D", color: "#EDE8D0" }}
          >
            Explore Our Approach
          </Link>
        </aside>

      </div>
    </div>
  );
}



/**
 * Full Page - HomePage
 * - hero video
 * - about
 * - OurExpertise component (imported)
 * - LuxuryShowcase (embedded)
 * - What We Do, Sustainability, Connect sections preserved
 */
export default function HomePage() {
  const [selectedProduct] = useState(null);

  // featuredProducts kept minimal (one sample) to avoid noise
  const featuredProducts = [
    {
      id: 1,
      number: "01",
      
      collection: "2024 - 2025",
      category: "Furniture",
      dimensions: '48"W x 16"D x 32"H',
      finish: "Antique Brass",
      compliance: "EU & US Standards",
      materials: "Solid Brass | Marble Top | Hand-finished",
      description: [
        "A contemporary console table featuring precision-engineered brass framework supporting a natural marble surface. Designed for refined residential and hospitality applications with attention to material integrity and structural stability.",
        "",
        "Certificate of Quality Compliance. Year 2025.",
        "Manufactured at Akbar Brass Products, Moradabad.",
      ],
      images: ["/showroom1.jpeg", "/showroom2.jpeg", "/showroom3.jpeg"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" poster="/placeholder-hero.png">
          <source src="/videos/final_video_hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0" />

        <div className="absolute top-8 right-8 z-20 md:top-12 md:right-12 lg:top-16 lg:right-16">
          <img
            src="/logoonhero.png"
            alt="Akbar Brass Products Logo"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center max-w-5xl">
            <h1 className="mb-8 font-serif text-4xl font-normal leading-tight md:text-5xl lg:text-6xl text-balance" style={{ color: "#EDE8D0" }}>
              Integrated Multi-Material Manufacturing for Global Markets
            </h1>
            <Button size="lg" style={{ backgroundColor: "#EDE8D0", color: "#521C0D" }} className="hover:opacity-90" asChild>
              <Link href="/capabilities/materials">
                Explore Our Capabilities <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#EDE8D0" }}>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl" style={{ color: "#521C0D" }}>
            About Akbar Brass Products
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed md:text-lg" style={{ color: "rgba(82, 28, 13, 0.8)" }}>
            Akbar Brass Products is a third-generation manufacturing company specialising in metal, marble, wood, glass, and mixed-material home products. Operating from a horizontally integrated 60-acre campus, we maintain in-house testing and globally aligned compliance systems for reliable production.
          </p>
          <Button size="lg" variant="outline" style={{ borderColor: "#521C0D", color: "#521C0D", borderWidth: "2px" }} className="bg-transparent hover:text-[#521C0D] hover:bg-[#EDE8D0]" asChild>
            <Link href="/about-akbar/timeline">
              Explore Our Heritage <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#EDE8D0" }}>
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 text-center">
      <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl" style={{ color: "#521C0D" }}>
        What We Do
      </h2>
      <p className="mx-auto max-w-2xl text-base" style={{ color: "rgba(82, 28, 13, 0.8)" }}>
        We manufacture multi-material home products across furniture, décor, lighting, kitchen/serveware, outdoor, and seasonal categories — engineered for global markets.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div className="p-8 bg-white rounded-lg hover:shadow-xl transition-shadow duration-300" style={{ border: "1px solid rgba(82, 28, 13, 0.1)" }}>
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="h-32 w-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg overflow-hidden border-4 border-white">
              <img 
                src="/home-page/metal1.jpg" 
                alt="Metal" 
                className="h-full w-full object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-2 -right-2 h-12 w-12 flex items-center justify-center rounded-full shadow-lg" style={{ backgroundColor: "#521C0D" }}>
              <Package className="h-6 w-6" style={{ color: "#EDE8D0" }} />
            </div> */}
          </div>
        </div>
        <h3 className="mb-3 font-serif text-2xl font-bold text-center" style={{ color: "#521C0D" }}>Metal</h3>
        <p className="leading-relaxed text-center" style={{ color: "rgba(82, 28, 13, 0.7)" }}>
          Iron, aluminum, stainless steel, brass
        </p>
      </div>

      <div className="p-8 bg-white rounded-lg hover:shadow-xl transition-shadow duration-300" style={{ border: "1px solid rgba(82, 28, 13, 0.1)" }}>
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="h-32 w-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg overflow-hidden border-4 border-white">
              <img 
                src="/home-page/marble.jpg" 
                alt="Marble" 
                className="h-full w-full object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-2 -right-2 h-12 w-12 flex items-center justify-center rounded-full shadow-lg" style={{ backgroundColor: "#521C0D" }}>
              <Sparkles className="h-6 w-6" style={{ color: "#EDE8D0" }} />
            </div> */}
          </div>
        </div>
        <h3 className="mb-3 font-serif text-2xl font-bold text-center" style={{ color: "#521C0D" }}>Marble</h3>
        <p className="leading-relaxed text-center" style={{ color: "rgba(82, 28, 13, 0.7)" }}>
          Natural stone processing & finishing
        </p>
      </div>

      <div className="p-8 bg-white rounded-lg hover:shadow-xl transition-shadow duration-300" style={{ border: "1px solid rgba(82, 28, 13, 0.1)" }}>
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="h-32 w-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg overflow-hidden border-4 border-white">
              <img 
                src="/home-page/wood.jpg" 
                alt="Wood" 
                className="h-full w-full object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-2 -right-2 h-12 w-12 flex items-center justify-center rounded-full shadow-lg" style={{ backgroundColor: "#521C0D" }}>
              <Frame className="h-6 w-6" style={{ color: "#EDE8D0" }} />
            </div> */}
          </div>
        </div>
        <h3 className="mb-3 font-serif text-2xl font-bold text-center" style={{ color: "#521C0D" }}>Wood</h3>
        <p className="leading-relaxed text-center" style={{ color: "rgba(82, 28, 13, 0.7)" }}>
          Hardwoods & engineered wood
        </p>
      </div>

      <div className="p-8 bg-white rounded-lg hover:shadow-xl transition-shadow duration-300" style={{ border: "1px solid rgba(82, 28, 13, 0.1)" }}>
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="h-32 w-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg overflow-hidden border-4 border-white">
              <img 
                src="/home-page/metal2.jpg" 
                alt="Mixed Materials" 
                className="h-full w-full object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-2 -right-2 h-12 w-12 flex items-center justify-center rounded-full shadow-lg" style={{ backgroundColor: "#521C0D" }}>
              <Boxes className="h-6 w-6" style={{ color: "#EDE8D0" }} />
            </div> */}
          </div>
        </div>
        <h3 className="mb-3 font-serif text-2xl font-bold text-center" style={{ color: "#521C0D" }}>Mixed Materials</h3>
        <p className="leading-relaxed text-center" style={{ color: "rgba(82, 28, 13, 0.7)" }}>
          Integrated multi-material products
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Our Expertise (external component) */}
      <OurExpertise />

      {/* Luxury Product Showcase Section - contains Why Choose Us + LuxuryShowcase */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#EDE8D0" }}>
        <div className="mx-auto max-w-full px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl" style={{ color: "#521C0D" }}>
              AKBAR BRASS: Production Excellence On Display
            </h2>
            <p
              className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed px-4 md:px-0"
              style={{ color: "rgba(82, 28, 13, 0.8)" }}
            >
              We bring together multi-material production capabilities, consistently stable quality, compliance-ready systems, in-house testing expertise, and the strength of three generations of craftsmanship.
            </p>
          </div>

          {/* Luxury showcase component */}
          <LuxuryShowcase />
        </div>
      </section>

      {/* Sustainability */}
      <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#EDE8D0" }}>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl" style={{ color: "#521C0D" }}>
            Sustainability
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed md:text-lg" style={{ color: "rgba(82, 28, 13, 0.8)" }}>
            Sustainable manufacturing supported by ETP, STP, RO systems and dust collectors for clean, compliant production across metal and marble units.
          </p>
          <Button size="lg" style={{ backgroundColor: "#521C0D", color: "#EDE8D0" }} className="hover:opacity-90 shadow-lg" asChild>
            <Link href="/sustainability">
              Explore Our Sustainability <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      <section className="px-6 py-16 md:py-24" style={{ backgroundColor: "#EDE8D0" }}>
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 md:grid-cols-2 items-center">
      {/* Left - Text Content */}
      <div>
        <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl" style={{ color: "#521C0D" }}>
          A Glimpse of Our Artistry: Delhi Fair 10/25
        </h2>
        <p className="mb-4 text-base leading-relaxed" style={{ color: "rgba(82, 28, 13, 0.8)" }}>
          With over 50 years of manufacturing expertise, we've built a reputation for delivering exceptional home décor products to global markets. Our vertically integrated facility combines traditional craftsmanship with modern production techniques.
        </p>
        <p className="mb-4 text-base leading-relaxed" style={{ color: "rgba(82, 28, 13, 0.8)" }}>
          From brass fabrication to marble processing, wood working to multi-material integration, our comprehensive capabilities allow us to bring your vision to life with precision and care.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "rgba(82, 28, 13, 0.8)" }}>
          Every piece that leaves our facility represents our commitment to quality, sustainability, and the artistry of fine home products.
        </p>
      </div>

      {/* Right - Two Portrait Images */}
      <div className="grid grid-cols-2 gap-4">
        <div className="overflow-hidden" style={{ border: "2px solid #521C0D" }}>
          <img 
            src="/f1.jpeg" 
            alt="Craftsmanship detail" 
            className="h-full w-full object-cover"
            style={{ aspectRatio: "3/4" }}
          />
        </div>
        <div className="overflow-hidden mt-8" style={{ border: "2px solid #521C0D" }}>
          <img 
            src="f2.jpeg" 
            alt="Manufacturing process" 
            className="h-full w-full object-cover"
            style={{ aspectRatio: "3/4" }}
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Connect */}
      <section className="px-6 py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 font-serif text-3xl font-bold md:text-4xl" style={{ color: "#521C0D" }}>
            Connect With Us
          </h2>
          <Button size="lg" variant="outline" style={{ borderColor: "#521C0D", color: "#521C0D", backgroundColor: "#EDE8D0", borderWidth: "2px" }} className="hover:bg-[#521C0D] hover:text-[#EDE8D0]" asChild>
            <Link href="/contact">
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
