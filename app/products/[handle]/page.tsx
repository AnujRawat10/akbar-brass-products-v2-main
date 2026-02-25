"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/components/auth-provider"
import { Header } from "@/components/header"
import { ArrowLeft, Plus, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { InquiryCart, type InquiryProduct } from "@/components/inquiry-cart"
import { fetchProductByHandle } from "../actions"
import type { ShopifyProduct } from "@/lib/shopify"

export default function ProductPage() {
  const { handle } = useParams<{ handle: string }>()
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  const [product, setProduct] = useState<ShopifyProduct | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [inquiryItems, setInquiryItems] = useState<InquiryProduct[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await fetchProductByHandle(handle)
        setProduct(data)
      } catch (error) {
        console.error("Failed to fetch product:", error)
      } finally {
        setIsLoading(false)
      }
    }
    if (handle) loadProduct()
  }, [handle])

  const isAdded = product
    ? inquiryItems.some((item) => item.id === product.id)
    : false

  const handleAddToInquiry = () => {
    if (!product || isAdded) return
    setInquiryItems((prev) => [
      ...prev,
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variantId: product.variantId,
      },
    ])
  }

  const handleRemoveFromInquiry = (id: string) => {
    setInquiryItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handleClearInquiry = () => {
    setInquiryItems([])
  }

  if (!isAuthenticated) return null

  return (
    <div className="min-h-screen bg-[#f0efe2]">
      <Header
        cartItemCount={inquiryItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Back link */}
      <div className="px-6 pt-24 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#63403A]/50 transition-colors hover:text-[#63403A]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Collection
          </Link>
        </div>
      </div>

      {isLoading ? (
        <div className="px-6 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="animate-pulse aspect-[4/5] rounded-sm bg-[#63403A]/10" />
              <div className="animate-pulse space-y-6 pt-8">
                <div className="h-8 w-3/4 rounded bg-[#63403A]/10" />
                <div className="h-4 w-full rounded bg-[#63403A]/10" />
                <div className="h-4 w-2/3 rounded bg-[#63403A]/10" />
                <div className="h-12 w-40 rounded bg-[#63403A]/10 mt-8" />
              </div>
            </div>
          </div>
        </div>
      ) : !product ? (
        <div className="px-6 py-24 text-center">
          <p className="text-[#63403A]/60">Product not found.</p>
        </div>
      ) : (
        <div className="px-6 py-8 md:py-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
              {/* Images */}
              <div>
                {/* Main Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#63403A]/5">
                  <img
                    src={product.images[selectedImage] || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />

                  {/* Arrows on main image */}
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setSelectedImage(
                            (prev) => (prev - 1 + product.images.length) % product.images.length
                          )
                        }
                        className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 transition-all hover:bg-white"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-5 w-5 text-[#63403A]" />
                      </button>
                      <button
                        onClick={() =>
                          setSelectedImage(
                            (prev) => (prev + 1) % product.images.length
                          )
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 transition-all hover:bg-white"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-5 w-5 text-[#63403A]" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div className="mt-4 flex gap-3 overflow-x-auto">
                    {product.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 h-20 w-20 overflow-hidden rounded-sm transition-all ${
                          index === selectedImage
                            ? "ring-2 ring-[#63403A] ring-offset-2 ring-offset-[#f0efe2]"
                            : "opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${product.name} ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center md:py-8">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#63403A]/40">
                  Akbar Brass Products
                </p>

                <h1 className="font-serif text-3xl font-normal text-[#63403A] md:text-4xl lg:text-5xl">
                  {product.name}
                </h1>

                {product.description && (
                  <p className="mt-6 text-sm leading-relaxed text-[#63403A]/70 max-w-lg">
                    {product.description}
                  </p>
                )}

                {/* Divider */}
                <div className="my-8 h-px bg-[#63403A]/10" />

                {/* Add to Inquiry */}
                <button
                  onClick={handleAddToInquiry}
                  disabled={isAdded}
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-sm uppercase tracking-wider transition-all duration-200 rounded-sm w-fit ${
                    isAdded
                      ? "bg-[#63403A] text-[#f0efe2]"
                      : "border border-[#63403A] text-[#63403A] hover:bg-[#63403A] hover:text-[#f0efe2]"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="h-4 w-4" />
                      Added to Inquiry
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4" />
                      Add to Inquiry
                    </>
                  )}
                </button>

                <p className="mt-4 text-xs text-[#63403A]/40">
                  Add this product to your inquiry cart and our team will get back to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inquiry Cart */}
      <InquiryCart
        items={inquiryItems}
        onRemove={handleRemoveFromInquiry}
        onClear={handleClearInquiry}
        isOpen={isCartOpen}
        onOpenChange={setIsCartOpen}
      />
    </div>
  )
}
