import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Timeline",
  description:
    "The history of Akbar Brass Products from 1974 to present — three generations of manufacturing excellence, global expansion and continuous modernization.",
}

export default function TimelineLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
