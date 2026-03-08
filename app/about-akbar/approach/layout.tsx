import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Akbar Approach",
  description:
    "Our manufacturing philosophy — precision discipline, integrated systems, purpose-driven innovation, multi-material expertise and partnership-oriented operations.",
}

export default function ApproachLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
