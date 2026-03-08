import type { Metadata } from "next"
import { ProductsLayoutClient } from "./layout-client"

export const metadata: Metadata = {
  title: "Inquiry Catalogue — Browse & Request a Quote",
  description:
    "Browse our complete catalogue of 6800+ metal, marble, wood and multi-material products. Add items to your inquiry cart and request a custom quote.",
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProductsLayoutClient>{children}</ProductsLayoutClient>
}
