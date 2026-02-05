"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import gsap from "gsap"

export default function Preloader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(".pre-logo", {
      opacity: 0,
      y: 25,
      duration: 0.9,
      ease: "power3.out",
    })
      .from(
        ".pre-line",
        {
          scaleX: 0,
          transformOrigin: "left",
          duration: 1.1,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .to(".preloader", {
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        ease: "power2.out",
        onComplete: () => setShow(false),
      })
  }, [])

  if (!show) return null

  return (
    <div className="preloader fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">

        {/* LOGO */}
        <div className="pre-logo">
          <Image
            src="/newlogo.png"
            alt="Akbar Brass Products"
            width={280}
            height={140}
            priority
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>

        {/* LOADING LINE */}
        <div className="w-56 h-[2px] bg-[#e6e6e6] overflow-hidden">
          <div className="pre-line h-full bg-[#BF8B45]" />
        </div>

      </div>
    </div>
  )
}
