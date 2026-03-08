import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Awards & Recognition",
  description:
    "National awards and government honours recognizing Akbar Brass Products for outstanding export performance and manufacturing excellence.",
}

export default function RecognitionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
