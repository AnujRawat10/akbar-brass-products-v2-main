import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from "@/components/auth-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Preloader from "@/components/Preloader"

import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akbarbrass.com"),
  title: {
    default: "Akbar Brass Products — Integrated Multi-Material Manufacturing Since 1974",
    template: "%s | Akbar Brass Products",
  },
  description:
    "Over five decades of integrated multi-material manufacturing excellence in metal, marble, wood and mixed-material products for global markets. Based in Moradabad, India.",
  keywords: [
    "brass products manufacturer",
    "metal home decor",
    "Moradabad brass",
    "multi-material manufacturing",
    "brass furniture",
    "marble products",
    "wood products",
    "home decor manufacturer India",
    "export quality brass",
    "Akbar Brass Products",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Akbar Brass Products",
    title: "Akbar Brass Products — Integrated Multi-Material Manufacturing Since 1974",
    description:
      "Over five decades of integrated multi-material manufacturing excellence in metal, marble, wood and mixed-material products for global markets.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Akbar Brass Products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akbar Brass Products — Multi-Material Manufacturing Since 1974",
    description:
      "Over five decades of integrated multi-material manufacturing excellence for global markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.akbarbrass.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Akbar Brass Products",
              url: "https://www.akbarbrass.com",
              logo: "https://www.akbarbrass.com/logo.png",
              foundingDate: "1974",
              description:
                "Integrated multi-material manufacturing excellence in metal, marble, wood and mixed-material products for global markets.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Village Dhanupura, Delhi Road",
                addressLocality: "Moradabad",
                postalCode: "244001",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-591-2414263",
                email: "hello@akbarbrass.com",
                contactType: "sales",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">

        {/* PRELOADER */}
        <Preloader />

        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>

        <Analytics />
      </body>
    </html>
  )
}
