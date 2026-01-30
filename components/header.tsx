"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ShoppingBag } from "lucide-react"
import gsap from "gsap"

interface HeaderProps {
  cartItemCount?: number
  onCartClick?: () => void
}

export function Header({ cartItemCount = 0, onCartClick }: HeaderProps = {}) {
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
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-gradient-to-b from-black/20 to-transparent"
        }`}
      >
        <div className="h-16 sm:h-18 md:h-20 lg:h-22 px-4 sm:px-6 lg:px-12 grid grid-cols-3 items-center">

          {/* LEFT — MENU */}
          <div className="flex items-center justify-start">
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className={`transition-transform duration-200 hover:scale-110 ${
                scrolled ? "text-black" : "text-[#f0efe2]"
              }`}
            >
              <Menu className="h-6 w-6 lg:h-7 lg:w-7" />
            </button>
          </div>

          {/* CENTER — LOGO */}
          <div className="flex justify-center">
            <Link href="/">
              <img
                src={scrolled ? "/logo black text.png" : "/logo white text.png"}
                alt="Akbar Brass Products"
                className={`transition-all duration-300 hover:scale-105 ${
                  scrolled 
                    ? "h-11 sm:h-12 md:h-14 lg:h-16" 
                    : "h-12 sm:h-14 md:h-16 lg:h-18"
                }`}
              />
            </Link>
          </div>

          {/* RIGHT — CART & CONTACT */}
          <div className="flex justify-end items-center gap-2">

            {/* Cart Icon (only show if cartItemCount > 0) */}
            {cartItemCount > 0 && onCartClick && (
              <button
                onClick={onCartClick}
                className={`
                  relative
                  p-2.5 rounded-full border transition-all
                  ${scrolled
                    ? "border-[#63403A] text-[#63403A] hover:bg-[#63403A] hover:text-white"
                    : "border-[#f0efe2] text-[#f0efe2] hover:bg-[#f0efe2]/20"
                  }
                `}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className={`absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold ${
                  scrolled ? "bg-[#63403A] text-white" : "bg-[#f0efe2] text-[#63403A]"
                }`}>
                  {cartItemCount}
                </span>
              </button>
            )}

            {/* Mobile Contact icon */}
            <Link
              href="/contact"
              className={`
                sm:hidden
                p-2.5 rounded-full border transition-all
                ${scrolled
                  ? "border-[#63403A] text-[#63403A] hover:bg-[#63403A] hover:text-white"
                  : "border-[#f0efe2] text-[#f0efe2] hover:bg-[#f0efe2]/20"
                }
              `}
              aria-label="Contact"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* message bubble */}
                <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                {/* phone curve */}
                <path d="M10.5 9.5c.5 1 1.5 2 2.5 2.5" />
              </svg>
            </Link>

            {/* Desktop button */}
            <Link
              href="/contact"
              className={`
                hidden sm:inline-flex
                px-4 sm:px-5 py-2
                text-xs sm:text-sm
                uppercase tracking-wider
                border transition-all duration-300
                ${scrolled
                  ? "border-[#63403A] text-[#63403A] hover:bg-[#63403A] hover:text-white"
                  : "border-[#f0efe2] text-[#f0efe2] hover:bg-[#f0efe2] hover:text-[#63403A]"
                }
              `}
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
          <div className="flex items-center justify-between px-6 lg:px-8 xl:px-10 h-16 sm:h-18 md:h-20 lg:h-22 border-b border-[#63403A]/20">
            <span className="text-xl lg:text-2xl xl:text-3xl font-semibold text-[#63403A]">Menu</span>
            <button onClick={() => setIsMenuOpen(false)} className="hover:rotate-90 transition-transform duration-300">
              <X className="h-6 w-6 lg:h-7 lg:w-7 text-[#63403A]" />
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