"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
// import { Volume2, VolumeX } from "lucide-react"
import gsap from "gsap"
import SplitText from "gsap/SplitText"

gsap.registerPlugin(SplitText)

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  // const audioRef = useRef<HTMLAudioElement>(null)

  const [scrollY, setScrollY] = useState(0)
  // const [isMuted, setIsMuted] = useState(false)

  /* Parallax scroll */
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* Autoplay music on load */
  // useEffect(() => {
  //   const audio = audioRef.current
  //   if (audio) {
  //     audio.volume = 0.5
  //     audio.play().catch(() => {
  //       // Browser blocked autoplay, will need user interaction
  //       setIsMuted(true)
  //     })
  //   }
  // }, [])

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
    <section className="relative h-[100svh] overflow-hidden snap-start">

      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: `scale(${1 + scrollY * 0.00008})` }}
      >
        <source src="/videos/final_video_hero.webm" type="video/webm" />
      </video>

      {/* Background Music */}
      {/* <audio ref={audioRef} src="/337_short2_light-years_0036.mp3" loop /> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Audio Toggle Button */}
      {/* <button
        type="button"
        onClick={() => {
          const audio = audioRef.current
          if (audio) {
            audio.muted = !isMuted
            setIsMuted(!isMuted)
          }
        }}
        className="fixed bottom-6 left-6 z-[9999] bg-black/60 backdrop-blur text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button> */}

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
              md:whitespace-nowrap
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
                text-[24px]
                sm:text-[28px]
                md:text-6xl
                xl:text-7xl
              "
            >
              for Global Markets
            </span>
          </h1>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <Link href="/capabilities/materials">
              <button className="group relative px-12 py-4 bg-white text-black overflow-hidden transition-all duration-500 uppercase tracking-wider font-medium text-sm md:text-base shadow-2xl hover:shadow-[#BF8B45]/50 transform hover:scale-105">
                {/* Button hover effect */}
                <span className="absolute inset-0 bg-[#BF8B45] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  Explore Our Capabilities
                </span>
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
