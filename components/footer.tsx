"use client"

import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <>
      {/* ===== Floating WhatsApp Button ===== */}
      <a
        href="https://wa.me/915912414263"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-6 right-6
          shadow-xl rounded-full
          flex items-center justify-center
          hover:scale-110 transition-all duration-200
          z-50
        "
        aria-label="Chat on WhatsApp"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="h-14 w-14 md:h-16 md:w-16" />
      </a>

      {/* ===== Footer Section ===== */}
      <footer className="border-t border-[#63403A]/30 bg-[#f0efe2] py-16">
        <div className="container mx-auto px-6">

          {/* GRID */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

            {/* COMPANY INFO */}
            <div className="lg:col-span-1">
              <Link href="/" className="mb-4 inline-block">
                <img src="/logo.png" alt="Akbar Brass Products" className="h-20" />
              </Link>

              <p className="mb-4 text-sm leading-relaxed text-[#63403A]/80">
                Over five decades of manufacturing excellence.
              </p>

              <p className="text-sm leading-relaxed text-[#63403A]/80">
                A trusted partner for metal, marble, wood, and multi-material products — crafted with precision and built for global markets.
              </p>
            </div>

            {/* ABOUT */}
            <div>
              <h3 className="mb-4 font-semibold text-[#63403A] uppercase text-sm">
                About
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about-akbar/timeline" className="text-[#63403A]/80 hover:text-[#63403A]">
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link href="/about-akbar/approach" className="text-[#63403A]/80 hover:text-[#63403A]">
                    Approach
                  </Link>
                </li>
                <li>
                  <Link href="/about-akbar/recognition" className="text-[#63403A]/80 hover:text-[#63403A]">
                    Awards
                  </Link>
                </li>
              </ul>
            </div>

            {/* CAPABILITIES */}
            <div>
              <h3 className="mb-4 font-semibold text-[#63403A] uppercase text-sm">
                Capabilities
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/capabilities/materials" className="text-[#63403A]/80 hover:text-[#63403A]">
                    Materials
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/portfolio" className="text-[#63403A]/80 hover:text-[#63403A]">
                    Product Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/ethics" className="text-[#63403A]/80 hover:text-[#63403A]">
                    Ethics & Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability" className="text-[#63403A]/80 hover:text-[#63403A]">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONNECT */}
            <div>
              <h3 className="mb-4 font-semibold text-[#63403A] uppercase text-sm">
                Connect
              </h3>

              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/careers" className="text-[#63403A]/80 hover:text-[#63403A]">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#63403A]/80 hover:text-[#63403A]">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <div className="mt-6 text-xs text-[#63403A]/70 leading-relaxed">
                Village Dhanupura, Delhi Road<br />
                Moradabad – 244001, India<br /><br />
                <a href="tel:+915912414263" className="hover:text-[#63403A]">
                  +91-591-2414263
                </a><br />
                <a href="mailto:hello@akbarbrass.com" className="hover:text-[#63403A]">
                  hello@akbarbrass.com
                </a>
              </div>
            </div>

            {/* QR CODE */}
            <div className="flex flex-col items-start lg:items-center">
              <h3 className="mb-4 font-semibold text-[#63403A] uppercase text-sm">
                Scan to Connect
              </h3>

              <img
                src="/qr.png"
                alt="Akbar Brass QR Code"
                className="
                  w-32 h-32
                  object-contain
                  border border-[#63403A]/20
                  bg-white
                  p-2
                "
              />

              <p className="mt-3 text-xs text-[#63403A]/70 text-left lg:text-center max-w-[140px]">
                Scan to get directions to our manufacturing facility.
              </p>
            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="mt-12 border-t border-[#63403A]/30 pt-8 text-center">
            <p className="text-sm text-[#63403A]/80">
              © 2026 Akbar Brass Products. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
