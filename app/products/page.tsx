"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/components/auth-provider"
import { Header } from "@/components/header"
import { LogOut, Plus, Check } from "lucide-react"
import { InquiryCart, type InquiryProduct } from "@/components/inquiry-cart"
import { fetchProducts, fetchCollections, fetchProductsByCollection } from "./actions"
import type { ShopifyProduct, ShopifyCollection } from "@/lib/shopify"

function ProductCard({
  product,
  onAdd,
  isAdded,
}: {
  product: ShopifyProduct
  onAdd: (product: ShopifyProduct) => void
  isAdded: boolean
}) {
  return (
    <div className="group relative">
      <Link href={`/products/${product.handle}`} className="block">
        <div className="relative overflow-hidden rounded-sm bg-[#63403A]/5">
          <img
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            loading="lazy"
            className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Add to inquiry button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          if (!isAdded) onAdd(product)
        }}
        className={`absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-medium transition-all duration-200 ${
          isAdded
            ? "bg-[#63403A] text-[#f0efe2]"
            : "bg-white/90 backdrop-blur-sm text-[#63403A] opacity-0 group-hover:opacity-100 hover:bg-white hover:scale-105 shadow-sm"
        }`}
        aria-label={isAdded ? "Added to inquiry" : "Add to inquiry"}
      >
        {isAdded ? <Check className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
        {isAdded ? "Added" : "Add"}
      </button>
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-square rounded-sm bg-[#63403A]/10" />
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
  const [collections, setCollections] = useState<ShopifyCollection[]>([])
  const [activeCollection, setActiveCollection] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [visibleCount, setVisibleCount] = useState(30)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  useEffect(() => {
    async function loadInitialData() {
      try {
        const [productsData, collectionsData] = await Promise.all([
          fetchProducts(),
          fetchCollections(),
        ])
        setProducts(productsData)
        setCollections(collectionsData)
      } catch (error) {
        console.error("Failed to fetch data:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadInitialData()
  }, [])

  const handleCollectionFilter = async (handle: string | null) => {
    setActiveCollection(handle)
    setVisibleCount(30)
    setIsLoading(true)
    try {
      const data = handle
        ? await fetchProductsByCollection(handle)
        : await fetchProducts()
      setProducts(data)
    } catch (error) {
      console.error("Failed to fetch products:", error)
    } finally {
      setIsLoading(false)
    }
  }

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
        forceWhite
      />

      {/* Hero */}
      <section className="px-6 pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="mx-auto max-w-6xl flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#63403A]/50">
              Inquiry Catalogue
            </p>
            <h1 className="font-serif text-3xl font-normal text-[#63403A] md:text-4xl lg:text-5xl">
              Browse &amp; Request a Quote
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

      {/* Collection Filters */}
      {collections.length > 0 && (
        <section className="px-6 pt-8 md:pt-10">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCollectionFilter(null)}
                className={`px-4 py-2 text-[11px] uppercase tracking-[0.15em] rounded-sm border transition-all duration-200 ${
                  activeCollection === null
                    ? "bg-[#63403A] text-[#f0efe2] border-[#63403A]"
                    : "border-[#63403A]/20 text-[#63403A]/60 hover:border-[#63403A]/50 hover:text-[#63403A]"
                }`}
              >
                All
              </button>
              {collections.map((collection) => (
                <button
                  key={collection.id}
                  onClick={() => handleCollectionFilter(collection.handle)}
                  className={`px-4 py-2 text-[11px] uppercase tracking-[0.15em] rounded-sm border transition-all duration-200 ${
                    activeCollection === collection.handle
                      ? "bg-[#63403A] text-[#f0efe2] border-[#63403A]"
                      : "border-[#63403A]/20 text-[#63403A]/60 hover:border-[#63403A]/50 hover:text-[#63403A]"
                  }`}
                >
                  {collection.title}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured */}
      {!activeCollection && featuredProducts.length > 0 && (
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
              {activeCollection
                ? collections.find((c) => c.handle === activeCollection)?.title || "Products"
                : "All Products"}
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
            <>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
                {allProducts.slice(0, visibleCount).map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAdd={handleAddToInquiry}
                    isAdded={isProductAdded(product.id)}
                  />
                ))}
              </div>
              {visibleCount < allProducts.length && (
                <div className="mt-12 flex justify-center">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 30)}
                    className="border border-[#63403A]/20 text-[#63403A]/70 hover:border-[#63403A] hover:text-[#63403A] px-8 py-3 text-xs uppercase tracking-[0.15em] rounded-sm transition-all duration-200"
                  >
                    Load More ({allProducts.length - visibleCount} remaining)
                  </button>
                </div>
              )}
            </>
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
        userEmail={user?.email}
      />
    </div>
  )
}
