"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import OurExpertise from "@/components/Ourexpertise";
import OurPartners from "@/components/OurPartners";

/* ======================================================
   LUXURY SHOWCASE – UI REWORKED (LOGIC SAME)
====================================================== */
function LuxuryShowcase() {
  const [activeImage, setActiveImage] = useState(0);

  const product = {
    brand: "AKBAR BRASS PRODUCTS",
    title: "Interior & Multi-Material Collections",
    location: "Moradabad, India",
    materials: ["Metal", "Marble", "Wood", "Mixed Materials"],
    description:
      "A refined presentation of multi-material manufacturing capabilities developed for global residential and commercial interiors.",
    images: ["/showroom1.jpeg", "/showroom2.jpeg"],
  };

  useEffect(() => {
    const timer = setInterval(
      () => setActiveImage((p) => (p + 1) % product.images.length),
      3500
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f0efe2] py-24 font-serif">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="relative h-[480px] rounded-lg overflow-hidden shadow-lg bg-white">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                activeImage === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* CONTENT */}
        {/* CONTENT */}
<div className="text-center lg:text-left flex flex-col items-center lg:items-start">

          <span className="block text-sm tracking-widest uppercase text-[#63403A] mb-3">
            {product.brand}
          </span>

          <h2 className="text-4xl font-light text-[#63403A] mb-6">
            {product.title}
          </h2>

          <p className="text-[rgba(82,28,13,0.8)] mb-6 max-w-xl">
            {product.description}
          </p>

          {/* MATERIAL TAGS */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
            {product.materials.map((m) => (
              <span
                key={m}
                className="px-4 py-1 border border-[#63403A] text-sm text-[#63403A]"
              >
                {m}
              </span>
            ))}
          </div>

          <Link
            href="/capabilities/portfolio"
            className="inline-block px-8 py-3 bg-[#63403A] text-[#f0efe2] rounded-md shadow hover:opacity-90 transition"
          >
            Explore Our Products
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   HOME PAGE
====================================================== */
export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/final_video_hero.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif text-[#f0efe2] mb-8">
              Integrated Multi-Material Manufacturing for Global Markets
            </h1>
            <Button asChild size="lg" className="bg-[#f0efe2] text-[#63403A]">
              <Link href="/capabilities/materials">
                Explore Capabilities <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-28 bg-[#f0efe2] text-center">
        <h2 className="text-4xl font-serif text-[#63403A] mb-6">
          About Akbar Brass Products
        </h2>
        <p className="max-w-3xl mx-auto text-[rgba(82,28,13,0.8)] mb-8">
          A third-generation manufacturing company specializing in metal, marble,
          wood, glass, and mixed-material home products for global export markets.
        </p>
        <Button
  variant="outline"
  asChild
  className="border-[#63403A] text-[#63403A] hover:bg-[#63403A] hover:text-[#f0efe2]"
>
  <Link href="/about-akbar/timeline">
    Explore Our Heritage <ArrowRight className="ml-2" />
  </Link>
</Button>

      </section>

      {/* WHAT WE DO – JITTER FIXED */}
     <section
  className="relative px-6 py-28 bg-[#111] will-change-transform"
  style={{
    backgroundImage: "url('/factory-interior.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black/40" />

  <div className="relative z-10 max-w-7xl mx-auto text-white">
    <h2 className="text-4xl font-serif text-center mb-14">
      What We Do?
    </h2>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {[
        { t: "Metal", img: "/home-page/metal1.jpg" },
        { t: "Marble", img: "/home-page/marble.jpg" },
        { t: "Wood", img: "/home-page/wood.jpg" },
        { t: "Mixed Materials", img: "/home-page/metal2.jpg" },
      ].map((item) => (
        <div
          key={item.t}
          className="bg-white text-[#63403A] rounded-md overflow-hidden shadow hover:-translate-y-1 transition-transform"
        >
          <img
            src={item.img}
            className="h-36 w-full object-cover"
            alt={item.t}
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-serif mb-1">{item.t}</h3>
            <p className="text-xs text-[rgba(82,28,13,0.7)]">
              Export-grade processing & finishing
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* <OurExpertise /> */}
      <section className="relative px-6 py-28 bg-[#f0efe2] will-change-transform">
  <div className="mx-auto max-w-6xl">

    {/* Heading */}
    <div className="mb-16 text-center">
      <h2 className="mb-4 font-serif text-4xl text-[#63403A]">
        Why Choose Us?
      </h2>
      <p className="mx-auto max-w-2xl text-[rgba(82,28,13,0.8)]">
        A manufacturing partner built for consistency, scale, and long-term collaboration.
      </p>
    </div>

    {/* Points */}
    <div className="grid gap-12 md:grid-cols-2">

      <div className="border-l-2 border-[#63403A] pl-6">
        <h3 className="font-serif text-xl text-[#63403A] mb-2">
          Integrated multi-material production
        </h3>
        <p className="text-sm text-[rgba(82,28,13,0.8)]">
          In-house metal fabrication, marble processing, wood working,
          finishing, testing, and assembly ensure tighter quality control
          and predictable lead times.
        </p>
      </div>

      <div className="border-l-2 border-[#63403A] pl-6">
        <h3 className="font-serif text-xl text-[#63403A] mb-2">
          Stable quality and repeatability
        </h3>
        <p className="text-sm text-[rgba(82,28,13,0.8)]">
          Decades of experience combining metal, stone, wood, and glass
          into structurally sound, production-ready designs.
        </p>
      </div>

      <div className="border-l-2 border-[#63403A] pl-6">
        <h3 className="font-serif text-xl text-[#63403A] mb-2">
          In-house testing capabilities
        </h3>
        <p className="text-sm text-[rgba(82,28,13,0.8)]">
          Processes aligned with EU and US compliance standards,
          supported by in-house testing and documentation systems.
        </p>
      </div>

      <div className="border-l-2 border-[#63403A] pl-6">
        <h3 className="font-serif text-xl text-[#63403A] mb-2">
          Three generations of manufacturing expertise
        </h3>
        <p className="text-sm text-[rgba(82,28,13,0.8)]">
          We work as an extension of our clients’ supply chain —
          focusing on repeatability, cost stability, and scalable growth.
        </p>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-16 text-center">
      <Link
        href="/about-akbar/approach"
        className="inline-block px-10 py-3 border border-[#63403A] text-[#63403A] uppercase text-sm tracking-wide hover:bg-[#63403A] hover:text-[#f0efe2] transition"
      >
        Know More
      </Link>
    </div>

  </div>
</section>


      <LuxuryShowcase />

      {/* SUSTAINABILITY – KEPT */}
      <section
        className="relative px-6 py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder-hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <span className="tracking-widest text-xs uppercase block mb-4">
            Committed to a Sustainable Future
          </span>
          <h2 className="text-4xl font-serif mb-6">Sustainability</h2>
          <p className="mb-10 text-lg">
            Sustainable manufacturing supported by ETP, STP, RO systems and dust
            collectors across all production units.
          </p>
          <Link href="/sustainability" className="border-b pb-1">
            Know more
          </Link>
        </div>
      </section>

      {/* DELHI FAIR – KEPT */}
      <section className="px-6 py-24 bg-[#f0efe2]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif text-[#63403A] mb-6">
              A Glimpse of Our Artistry: Delhi Fair 10/25
            </h2>
            <p className="text-[rgba(82,28,13,0.8)] mb-4">
              Showcasing our latest collections and manufacturing innovations
              developed for global buyers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/f1.jpeg" className="object-cover aspect-[3/4]" />
            <img src="/f2.jpeg" className="object-cover aspect-[3/4] mt-8" />
          </div>
        </div>
      </section>

      <OurPartners />

      {/* CONNECT */}
      <section className="px-6 py-28 bg-white text-center">
        <h2 className="text-4xl font-serif text-[#63403A] mb-8">
          Connect With Us
        </h2>
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">
            Get In Touch <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
