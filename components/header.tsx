"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const row =
    "flex items-center justify-between py-5 text-[17px] tracking-wide border-b border-black/20"

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-gradient-to-b from-black/40 to-transparent"
        }`}
      >
        <div className="relative h-20 container mx-auto px-4 sm:px-6 flex items-center">

          {/* LEFT : MENU */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className={`z-10 transition-colors ${
              scrolled ? "text-black" : "text-[#f0efe2]"
            }`}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* CENTER : LOGO */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <img
              src="/ABP.png"
              alt="Akbar"
              className="h-10 md:h-12 w-auto transition-transform hover:scale-105"
            />
          </Link>

          {/* RIGHT : CONTACT */}
          <div className="ml-auto z-10">
            <Link
              href="/contact"
              className={`hidden md:inline-block px-6 py-2 border text-sm uppercase tracking-wide transition-all duration-300 ${
                scrolled
                  ? "border-black text-black hover:bg-black hover:text-white"
                  : "border-[#f0efe2] text-[#f0efe2] hover:bg-[#f0efe2] hover:text-[#63403A]"
              }`}
            >
              Contact
            </Link>
          </div>

        </div>
      </header>

      {/* ================= DRAWER ================= */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-[#F6F1E1] transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-black/20">
            <span className="text-xl font-semibold">Menu</span>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6 transition-transform hover:rotate-90" />
            </button>
          </div>

          {/* Drawer Content */}
          <nav className="flex-1 px-6 py-4 overflow-y-auto">

            {/* ABOUT */}
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className={`${row} w-full`}
            >
              About Akbar
              <ChevronDown
                className={`transition-transform duration-300 ${
                  isAboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isAboutOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
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
            </div>

            {/* CAPABILITIES */}
            <button
              onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)}
              className={`${row} w-full`}
            >
              Capabilities
              <ChevronDown
                className={`transition-transform duration-300 ${
                  isCapabilitiesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isCapabilitiesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
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
            </div>

            {/* LINKS */}
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
    </>
  )
}
