"use client"

import { useEffect } from "react"

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    document.body.classList.add("clean-page")
    return () => {
      document.body.classList.remove("clean-page")
    }
  }, [])

  return <>{children}</>
}
