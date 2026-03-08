import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Materials & Finishes",
  description:
    "Our technical capabilities in metal fabrication, marble and stone processing, wood craftsmanship, and precision-engineered multi-material integration.",
}

export default function MaterialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
