"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const sliderImages = [
  { src: "/home-page/1.jpg", alt: "Elegant brass home decor display 1" },
  { src: "/home-page/2.jpg", alt: "Elegant brass home decor display 2" },
  { src: "/home-page/3.jpg", alt: "Elegant brass home decor display 3" },
  { src: "/home-page/4.jpg", alt: "Elegant brass home decor display 4" },
  { src: "/home-page/5.jpg", alt: "Elegant brass home decor display 5" },
  { src: "/home-page/6.jpg", alt: "Elegant brass home decor display 6" },
]

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imagesPerView, setImagesPerView] = useState(3)

  useEffect(() => {
    const updateImagesPerView = () => {
      setImagesPerView(window.innerWidth < 768 ? 2 : 3)
    }

    updateImagesPerView()
    window.addEventListener("resize", updateImagesPerView)
    return () => window.removeEventListener("resize", updateImagesPerView)
  }, [])

  const maxIndex = sliderImages.length - imagesPerView

  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))

  const goToNext = () =>
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1))

  useEffect(() => {
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [maxIndex])

  const translatePercentage = imagesPerView === 2 ? 50 : 33.333
  const translateX = currentIndex * translatePercentage

  return (
    <div className="relative w-full overflow-hidden max-h-[400px]">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ 
          transform: `translate3d(-${translateX}%, 0, 0)`,
          willChange: 'transform'
        }}
      >
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className="min-w-[50%] md:min-w-[33.333%] px-2 flex-shrink-0"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden h-full max-h-[380px]">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Left Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-[#EDE8D0]/90 hover:bg-[#EDE8D0] text-[#521C0D] shadow-lg rounded-full h-10 w-10 md:h-12 md:w-12"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </Button>

      {/* Right Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-[#EDE8D0]/90 hover:bg-[#EDE8D0] text-[#521C0D] shadow-lg rounded-full h-10 w-10 md:h-12 md:w-12"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-[#521C0D]" : "w-2 bg-[#521C0D]/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}