import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Akbar Brass Products. Visit our manufacturing facility in Moradabad, India or reach us by phone, email or our online inquiry form.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
