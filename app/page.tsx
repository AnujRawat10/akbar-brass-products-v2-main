"use client"

import Hero from "./sections/Hero"
import Stats from "./sections/Stats"
import About from "./sections/About"
import WhatWeDo from "./sections/WhatWeDo"
import WhyChooseUs from "./sections/WhyChooseUs"
import Testimonials from "./sections/Testimonials"
import Sustainability from "./sections/Sustainability"
import DelhiFair from "./sections/DelhiFair"
import Compliance from "./sections/Compliance"
import FinalCTA from "./sections/FinalCTA"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="scroll-snap-container">
      <Hero />
      {/* <Stats /> */}
      <About />
      <WhatWeDo />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <Sustainability />
      <DelhiFair />
      <Compliance />
      {/* <FinalCTA /> */}
      <Footer />
    </div>
  )
}
