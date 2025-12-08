"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from 'lucide-react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isCapabilitiesDropdownOpen, setIsCapabilitiesDropdownOpen] = useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)
  const [isMobileCapabilitiesOpen, setIsMobileCapabilitiesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#521C0D] border-b border-[#EDE8D0]/20">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Akbar Brass Products" className="h-20 w-auto sm:h-24 md:h-28" />
        </Link>


        <nav className="hidden md:flex items-center gap-6 text-sm uppercase">
          {/* About Akbar Dropdown */}
          <div 
            className="relative" 
            onMouseEnter={() => setIsAboutDropdownOpen(true)} 
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            <span className="text-[#EDE8D0] hover:text-[#EDE8D0]/70 transition-colors flex items-center gap-1 cursor-default">
              ABOUT AKBAR
              <ChevronDown className="h-4 w-4" />
            </span>

            {isAboutDropdownOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-56 bg-[#521C0D] border border-[#EDE8D0]/20 rounded-lg shadow-lg overflow-hidden">
                  <Link
                    href="/about-akbar/timeline"
                    className="block px-4 py-3 text-sm text-[#EDE8D0] hover:bg-[#EDE8D0]/10 transition-colors border-b border-[#EDE8D0]/10"
                  >
                    Timeline
                  </Link>
                  <Link
                    href="/about-akbar/approach"
                    className="block px-4 py-3 text-sm text-[#EDE8D0] hover:bg-[#EDE8D0]/10 transition-colors border-b border-[#EDE8D0]/10"
                  >
                    The Akbar Approach
                  </Link>
                  <Link
                    href="/about-akbar/recognition"
                    className="block px-4 py-3 text-sm text-[#EDE8D0] hover:bg-[#EDE8D0]/10 transition-colors"
                  >
                    Our Recognition
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Capabilities Dropdown */}
          <div 
            className="relative" 
            onMouseEnter={() => setIsCapabilitiesDropdownOpen(true)} 
            onMouseLeave={() => setIsCapabilitiesDropdownOpen(false)}
          >
            <span className="text-[#EDE8D0] hover:text-[#EDE8D0]/70 transition-colors flex items-center gap-1 cursor-default">
              CAPABILITIES
              <ChevronDown className="h-4 w-4" />
            </span>

            {isCapabilitiesDropdownOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-56 bg-[#521C0D] border border-[#EDE8D0]/20 rounded-lg shadow-lg overflow-hidden">
                  <Link
                    href="/capabilities/materials"
                    className="block px-4 py-3 text-sm text-[#EDE8D0] hover:bg-[#EDE8D0]/10 transition-colors border-b border-[#EDE8D0]/10"
                  >
                    Materials
                  </Link>
                  <Link
                    href="/capabilities/portfolio"
                    className="block px-4 py-3 text-sm text-[#EDE8D0] hover:bg-[#EDE8D0]/10 transition-colors border-b border-[#EDE8D0]/10"
                  >
                    Product Portfolio
                  </Link>
                  <Link
                    href="/capabilities/ethics"
                    className="block px-4 py-3 text-sm text-[#EDE8D0] hover:bg-[#EDE8D0]/10 transition-colors"
                  >
                    Ethics & Compliance
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/sustainability" className="text-[#EDE8D0] hover:text-[#EDE8D0]/70 transition-colors">
            SUSTAINABILITY
          </Link>
          <Link href="/careers" className="text-[#EDE8D0] hover:text-[#EDE8D0]/70 transition-colors">
            CAREERS
          </Link>
          <Link href="/contact" className="text-[#EDE8D0] hover:text-[#EDE8D0]/70 transition-colors">
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#EDE8D0] hover:bg-[#EDE8D0]/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#EDE8D0]/20 bg-[#521C0D]/98 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {/* About Akbar Mobile */}
            <div className="flex flex-col">
              <button
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                className="text-base text-[#EDE8D0] hover:bg-[#EDE8D0]/10 px-4 py-3 rounded-lg transition-colors flex items-center justify-between"
              >
                ABOUT AKBAR
                <ChevronDown className={`h-5 w-5 transition-transform ${isMobileAboutOpen ? "rotate-180" : ""}`} />
              </button>
              {isMobileAboutOpen && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  <Link href="/about-akbar/timeline" className="text-sm text-[#EDE8D0] hover:bg-[#EDE8D0]/10 px-4 py-2 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Timeline
                  </Link>
                  <Link href="/about-akbar/approach" className="text-sm text-[#EDE8D0] hover:bg-[#EDE8D0]/10 px-4 py-2 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    The Akbar Approach
                  </Link>
                  <Link href="/about-akbar/recognition" className="text-sm text-[#EDE8D0] hover:bg-[#EDE8D0]/10 px-4 py-2 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Our Recognition
                  </Link>
                </div>
              )}
            </div>

            {/* Capabilities Mobile */}
            <div className="flex flex-col">
              <button
                onClick={() => setIsMobileCapabilitiesOpen(!isMobileCapabilitiesOpen)}
                className="text-base text-[#EDE8D0] hover:bg-[#EDE8D0]/10 px-4 py-3 rounded-lg transition-colors flex items-center justify-between"
              >
                CAPABILITIES
                <ChevronDown className={`h-5 w-5 transition-transform ${isMobileCapabilitiesOpen ? "rotate-180" : ""}`} />
              </button>
              {isMobileCapabilitiesOpen && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  <Link href="/capabilities/materials" className="text-sm text-[#EDE8D0] hover:bg-[#EDE8D0]/10 px-4 py-2 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Materials
                  </Link>
                  <Link href="/capabilities/portfolio" className="text-sm text-[#EDE8D0] hover:bg-[#EDE8D0]/10 px-4 py-2 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Product Portfolio
                  </Link>
                  <Link href="/capabilities/ethics" className="text-sm text-[#EDE8D0] hover:bg-[#EDE8D0]/10 px-4 py-2 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Ethics & Compliance
                  </Link>
                </div>
              )}
            </div>

            <Link href="/sustainability" className="text-base text-[#EDE8D0] hover:bg-[#EDE8D0]/10 px-4 py-3 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              SUSTAINABILITY
            </Link>
            <Link href="/careers" className="text-base text-[#EDE8D0] hover:bg-[#EDE8D0]/10 px-4 py-3 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              CAREERS
            </Link>
            <Link href="/contact" className="text-base text-[#EDE8D0] hover:bg-[#EDE8D0]/10 px-4 py-3 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              CONTACT US
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}