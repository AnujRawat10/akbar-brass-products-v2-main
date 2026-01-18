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
          bg-[#25D366] text-white
          shadow-xl rounded-full 
          p-4 md:p-5 
          flex items-center justify-center
          hover:scale-110 transition-all duration-200
          z-50
        "
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-7 w-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
        </svg>
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
                <a href="mailto:info@akbarbrass.com" className="hover:text-[#63403A]">
                  info@akbarbrass.com
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
