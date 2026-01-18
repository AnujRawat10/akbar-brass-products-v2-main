"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Volume2, VolumeX } from "lucide-react"
import gsap from "gsap"
import SplitText from "gsap/SplitText"

gsap.registerPlugin(SplitText)

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [scrollY, setScrollY] = useState(0)
  const [muted, setMuted] = useState(true)

  /* Parallax scroll */
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* GSAP TEXT ANIMATION */
  useEffect(() => {
    if (!headingRef.current) return

    const split = new SplitText(headingRef.current, {
      type: "chars",
    })

    gsap.set(headingRef.current, { opacity: 1 })

    gsap.from(split.chars, {
      y: 30,
      autoAlpha: 0,
      stagger: 0.045,
      ease: "power3.out",
      duration: 0.9,
      delay: 0.3,
    })

    return () => {
      split.revert()
    }
  }, [])

  return (
    <section className="relative h-[100svh] overflow-hidden">

      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={muted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: `scale(${1 + scrollY * 0.00008})` }}
      >
        <source src="/videos/final_video_hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* MUTE / UNMUTE BUTTON */}
      <button
        onClick={() => {
          if (!videoRef.current) return
          videoRef.current.muted = !muted
          setMuted(!muted)
        }}
        aria-label="Toggle sound"
        className="
          absolute bottom-6 right-6 z-20
          bg-black/60 backdrop-blur
          text-white
          p-3 rounded-full
          hover:bg-black/80
          transition-all duration-300
        "
      >
        {muted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
        <div className="max-w-6xl">

          {/* Since */}
          <div className="mb-6">
            <span className="text-[#BF8B45] tracking-[0.35em] uppercase text-sm">
              Since 1974
            </span>
          </div>

          {/* HERO TITLE */}
          <h1
            ref={headingRef}
            className="
              font-serif
              text-white
              opacity-0
              leading-[1.12]
              whitespace-nowrap
            "
            style={{
              wordBreak: "keep-all",
              overflowWrap: "normal",
              hyphens: "none",
            }}
          >
            {/* LINE 1 */}
            <span
              className="
                block
                text-[24px]
                sm:text-[28px]
                md:text-6xl
                xl:text-7xl
              "
            >
              Integrated Multi-Material
            </span>

            {/* LINE 2 */}
            <span
              className="
                block
                mt-2
                text-[#BF8B45]
                text-[24px]
                sm:text-[28px]
                md:text-6xl
                xl:text-7xl
              "
            >
              Manufacturing Excellence
            </span>

            {/* LINE 3 */}
            <span
              className="
                block
                mt-3
                text-white/90
                text-[17px]
                sm:text-[19px]
                md:text-3xl
                xl:text-4xl
              "
            >
              for Global Markets
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-white/80 text-lg md:text-xl mt-8 max-w-3xl mx-auto">
            Three generations of craftsmanship. One commitment to excellence.
          </p>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <Link href="/capabilities/materials">
              <button className="group px-10 py-4 bg-white text-black hover:bg-[#BF8B45] transition-all duration-300 uppercase tracking-wider flex items-center gap-3">
                Explore Capabilities
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
