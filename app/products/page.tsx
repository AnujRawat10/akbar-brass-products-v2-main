"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/components/auth-provider"
import { Header } from "@/components/header"
import { LogOut, ChevronLeft, ChevronRight, Plus, Check, ArrowRight } from "lucide-react"
import { InquiryCart, type InquiryProduct } from "@/components/inquiry-cart"
import { fetchProducts } from "./actions"
import type { ShopifyProduct } from "@/lib/shopify"

function ProductCard({
  product,
  onAdd,
  isAdded,
}: {
  product: ShopifyProduct
  onAdd: (product: ShopifyProduct) => void
  isAdded: boolean
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const hasMultipleImages = product.images.length > 1

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="group">
      {/* Image — links to product page */}
      <Link href={`/products/${product.handle}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#63403A]/5">
          <img
            src={product.images[currentImageIndex] || "/placeholder.svg"}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Add to inquiry — top right */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              if (!isAdded) onAdd(product)
            }}
            className={`absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 ${
              isAdded
                ? "bg-[#63403A] text-[#f0efe2]"
                : "bg-white/90 text-[#63403A] opacity-0 group-hover:opacity-100 hover:bg-white hover:scale-110"
            }`}
            aria-label={isAdded ? "Added to inquiry" : "Add to inquiry"}
          >
            {isAdded ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </button>

          {/* View button — bottom */}
          <div className="absolute bottom-0 inset-x-0 flex justify-center pb-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <span className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#63403A] text-xs uppercase tracking-wider px-4 py-2 rounded-full">
              View Product
              <ArrowRight className="h-3 w-3" />
            </span>
          </div>

          {/* Slider Controls */}
          {hasMultipleImages && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 opacity-0 transition-all group-hover:opacity-100 hover:bg-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4 text-[#63403A]" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 opacity-0 transition-all group-hover:opacity-100 hover:bg-white"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4 text-[#63403A]" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-1.5">
                {product.images.map((_: string, index: number) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      e.preventDefault()
                      setCurrentImageIndex(index)
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "w-5 bg-white"
                        : "w-1.5 bg-white/50"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </Link>

      {/* Name + Add Button */}
      <div className="mt-3 flex items-start justify-between gap-2">
        <Link href={`/products/${product.handle}`}>
          <h3 className="text-sm font-medium tracking-wide text-[#63403A] hover:underline underline-offset-4">
            {product.name}
          </h3>
        </Link>
        <button
          onClick={() => { if (!isAdded) onAdd(product) }}
          className={`flex-shrink-0 flex items-center gap-1 px-3 py-1.5 text-[10px] uppercase tracking-wider rounded-sm transition-all duration-200 ${
            isAdded
              ? "bg-[#63403A] text-[#f0efe2]"
              : "border border-[#63403A]/30 text-[#63403A]/70 hover:border-[#63403A] hover:text-[#63403A]"
          }`}
        >
          {isAdded ? <Check className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
          {isAdded ? "Added" : "Add"}
        </button>
      </div>
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-[4/5] rounded-sm bg-[#63403A]/10" />
          <div className="mt-3 h-4 w-2/3 rounded bg-[#63403A]/10" />
        </div>
      ))}
    </div>
  )
}

export default function ProductsPage() {
  const { isAuthenticated, user, logout } = useAuth()
  const router = useRouter()
  const [inquiryItems, setInquiryItems] = useState<InquiryProduct[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [products, setProducts] = useState<ShopifyProduct[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts()
        setProducts(data)
      } catch (error) {
        console.error("Failed to fetch products:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadProducts()
  }, [])

  const handleAddToInquiry = (product: ShopifyProduct) => {
    const newItem: InquiryProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variantId: product.variantId,
    }
    setInquiryItems((prev) => [...prev, newItem])
  }

  const handleRemoveFromInquiry = (id: string) => {
    setInquiryItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handleClearInquiry = () => {
    setInquiryItems([])
  }

  const isProductAdded = (productId: string) => {
    return inquiryItems.some((item) => item.id === productId)
  }

  if (!isAuthenticated) {
    return null
  }

  const featuredProducts = products.filter((p) => p.featured)
  const allProducts = products

  return (
    <div className="min-h-screen bg-[#f0efe2]">
      <Header
        cartItemCount={inquiryItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Hero */}
      <section className="px-6 pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="mx-auto max-w-6xl flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#63403A]/50">
              Collection
            </p>
            <h1 className="font-serif text-3xl font-normal text-[#63403A] md:text-4xl lg:text-5xl">
              Akbar Brass Products
            </h1>
          </div>

          <button
            onClick={() => logout()}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#63403A]/60 transition-colors hover:text-[#63403A]"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-[#63403A]/15" />
      </div>

      {/* Featured */}
      {featuredProducts.length > 0 && (
        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-8 text-xs uppercase tracking-[0.2em] text-[#63403A]/50">
              Featured
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={handleAddToInquiry}
                  isAdded={isProductAdded(product.id)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Products */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-[#63403A]/50">
              All Products
            </p>
            {!isLoading && (
              <p className="text-xs text-[#63403A]/40">
                {allProducts.length} {allProducts.length === 1 ? "item" : "items"}
              </p>
            )}
          </div>

          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
              {allProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={handleAddToInquiry}
                  isAdded={isProductAdded(product.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

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
