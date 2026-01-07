"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false)

  const row =
    "flex items-center justify-between py-5 text-[17px] tracking-wide border-b border-black/20"

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">

          {/* LEFT: MENU */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-[#f0efe2]"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* CENTER LOGO (DESKTOP ONLY) */}
          <Link href="/" className="hidden md:block ">
            <img src="/ABP.png" alt="Akbar" className="h-18 md:h-12 w-auto" />

          </Link>

          {/* RIGHT: LOGO (MOBILE) + CONTACT (DESKTOP) */}
          <div className="flex items-center gap-4">
            <Link href="/" className="md:hidden">
              <img src="/ABP.png" alt="Akbar" className="h-12 w-auto"/>

            </Link>

            <Link
              href="/contact"
              className="hidden md:inline-block px-6 py-2 border border-[#f0efe2] text-[#f0efe2] text-sm uppercase tracking-wide hover:bg-[#f0efe2] hover:text-[#63403A] transition"
            >
              Contact
            </Link>
          </div>

        </div>
      </header>

      {/* ================= DRAWER ================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-[#F6F1E1] flex flex-col">

            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 h-20 border-b border-black/20">
              <span className="text-xl font-semibold">Menu</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Drawer Content */}
            <nav className="flex-1 px-6 py-4">

              {/* ABOUT */}
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className={`${row} w-full`}
              >
                About Akbar
                <ChevronDown
                  className={`transition-transform ${isAboutOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isAboutOpen && (
                <div className="pl-4">
                  <Link href="/about-akbar/timeline" onClick={() => setIsMenuOpen(false)} className={row}>
                    Timeline
                  </Link>
                  <Link href="/about-akbar/approach" onClick={() => setIsMenuOpen(false)} className={row}>
                    The Akbar Approach
                  </Link>
                  <Link href="/about-akbar/recognition" onClick={() => setIsMenuOpen(false)} className={row}>
                    Our Recognition
                  </Link>
                </div>
              )}

              {/* CAPABILITIES */}
              <button
                onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)}
                className={`${row} w-full`}
              >
                Capabilities
                <ChevronDown
                  className={`transition-transform ${isCapabilitiesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isCapabilitiesOpen && (
                <div className="pl-4">
                  <Link href="/capabilities/materials" onClick={() => setIsMenuOpen(false)} className={row}>
                    Materials
                  </Link>
                  <Link href="/capabilities/portfolio" onClick={() => setIsMenuOpen(false)} className={row}>
                    Product Portfolio
                  </Link>
                  <Link href="/capabilities/ethics" onClick={() => setIsMenuOpen(false)} className={row}>
                    Ethics & Compliance
                  </Link>
                </div>
              )}

              {/* SIMPLE LINKS */}
              <Link href="/sustainability" onClick={() => setIsMenuOpen(false)} className={row}>
                Sustainability
              </Link>

              <Link href="/careers" onClick={() => setIsMenuOpen(false)} className={row}>
                Careers
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center py-5 text-[17px] tracking-wide"
              >
                Contact Us
              </Link>

            </nav>
          </div>
        </div>
      )}
    </>
  )
}
