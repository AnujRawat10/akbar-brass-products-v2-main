import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ethics & Compliance",
  description:
    "Quality management, SEDEX/SMETA alignment, C-TPAT practices, and international certifications (UL/CUL, BIS, CE) at Akbar Brass Products.",
}

export default function EthicsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
