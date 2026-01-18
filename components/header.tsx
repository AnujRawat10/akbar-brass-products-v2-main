"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import gsap from "gsap"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      const menuItems = document.querySelectorAll(".menu-item")
      gsap.from(menuItems, {
        x: -50,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
      })
    }
  }, [isMenuOpen])

  const row =
    "menu-item flex items-center justify-between py-4 lg:py-5 xl:py-6 2xl:py-7 text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-wide border-b border-black/20 hover:bg-[#63403A]/5 transition-colors px-2"

  return (
    <>
      <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white shadow-lg"
      : "bg-gradient-to-b from-black/30 to-transparent"
  }`}
>
  <div className="h-20 lg:h-24 xl:h-28 2xl:h-32 px-4 sm:px-6 lg:px-12 grid grid-cols-3 items-center">

    {/* LEFT — MENU */}
    <div className="flex items-center justify-start">
      <button
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
        className={`transition-transform duration-200 hover:scale-110 ${
          scrolled ? "text-black" : "text-[#f0efe2]"
        }`}
      >
        <Menu className="h-7 w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9" />
      </button>
    </div>

    {/* CENTER — LOGO */}
    <div className="flex justify-center">
      <Link href="/">
        <img
          src={scrolled ? "/ABP.png" : "/logowhite1.png"}
          alt="Akbar Brass Products"
          className={`transition-all duration-300 hover:scale-105 ${
            scrolled ? "h-10 md:h-12" : "h-12 md:h-14"
          }`}
        />
      </Link>
    </div>

    {/* RIGHT — CONTACT */}
    <div className="flex justify-end">
      <Link
        href="/contact"
        className={`px-4 sm:px-5 py-2 text-xs sm:text-sm uppercase tracking-wider border transition-all duration-300 ${
          scrolled
            ? "border-[#63403A] text-[#63403A] hover:bg-[#63403A] hover:text-white"
            : "border-[#f0efe2] text-[#f0efe2] hover:bg-[#f0efe2] hover:text-[#63403A]"
        }`}
      >
        Contact
      </Link>
    </div>

  </div>
</header>


      {/* DRAWER */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />

        <div
          className={`absolute left-0 top-0 h-full w-[85%] max-w-md xl:max-w-lg 2xl:max-w-xl bg-gradient-to-br from-[#f0efe2] to-[#C4AE9F] transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 lg:px-8 xl:px-10 h-20 lg:h-24 xl:h-28 2xl:h-32 border-b border-[#63403A]/20">
            <span className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-[#63403A]">Menu</span>
            <button onClick={() => setIsMenuOpen(false)} className="hover:rotate-90 transition-transform duration-300">
              <X className="h-7 w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9 text-[#63403A]" />
            </button>
          </div>

          <nav className="flex-1 px-6 lg:px-8 xl:px-10 py-6 overflow-y-auto">
            {/* ABOUT */}
            <button onClick={() => setIsAboutOpen(!isAboutOpen)} className={`${row} w-full`}>
              About Akbar
              <ChevronDown className={`transition-transform duration-300 ${isAboutOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isAboutOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 lg:pl-6 xl:pl-8">
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
            <button onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)} className={`${row} w-full`}>
              Capabilities
              <ChevronDown className={`transition-transform duration-300 ${isCapabilitiesOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isCapabilitiesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 lg:pl-6 xl:pl-8">
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

            <Link href="/sustainability" onClick={() => setIsMenuOpen(false)} className={row}>
              Sustainability
            </Link>

            <Link href="/careers" onClick={() => setIsMenuOpen(false)} className={row}>
              Careers
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="menu-item flex items-center py-4 lg:py-5 xl:py-6 2xl:py-7 text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-wide px-2 hover:bg-[#63403A]/5 transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
