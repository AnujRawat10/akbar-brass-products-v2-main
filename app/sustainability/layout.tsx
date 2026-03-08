import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Our commitment to sustainable manufacturing — environment-friendly production, community development, and employee wellbeing at Akbar Brass Products.",
}

export default function SustainabilityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
