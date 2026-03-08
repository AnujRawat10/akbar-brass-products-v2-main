import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | About Akbar Brass Products",
    default: "About Akbar Brass Products",
  },
  description:
    "Learn about Akbar Brass Products — over five decades of integrated multi-material manufacturing excellence from Moradabad, India.",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
