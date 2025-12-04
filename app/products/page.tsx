"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { useAuth } from "@/components/auth-provider"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { LogOut } from 'lucide-react'  
import { Sparkles, ChevronLeft, ChevronRight, Plus, Check } from 'lucide-react'
import { InquiryCart, type InquiryProduct } from "@/components/inquiry-cart"

const products = [
  {
    id: "1",
    name: "Ceramic Vase Collection",
    description: "Handcrafted ceramic vases with minimalist design, perfect for modern interiors.",
    price: "$89",
    images: ["/produtcsImages/01.jpg", "/produtcsImages/02.jpg"],
    featured: true,
  },
  {
    id: "2",
    name: "Designer Table Lamp",
    description: "Elegant lighting solution with adjustable brightness and modern aesthetic.",
    price: "$149",
    images: ["/produtcsImages/03.jpg"],
    featured: true,
  },
  {
    id: "3",
    name: "Artisan Wooden Board",
    description: "Handcrafted serving board made from sustainable oak wood with natural finish.",
    price: "$65",
    images: ["/produtcsImages/04.jpg", "/produtcsImages/05.jpg"],
    featured: true,
  },
  {
    id: "4",
    name: "Minimalist Wall Clock",
    description: "Timeless design for any space",
    price: "$45",
    images: ["/produtcsImages/06.jpg"],
  },
  {
    id: "5",
    name: "Linen Throw Blanket",
    description: "Soft & cozy comfort",
    price: "$78",
    images: ["/produtcsImages/07.jpg", "/produtcsImages/08.jpg"],
  },
  {
    id: "6",
    name: "Geometric Plant Pot",
    description: "Modern planter for your greenery",
    price: "$32",
    images: ["/produtcsImages/09.jpg"],
  },
  {
    id: "7",
    name: "Brass Candle Holder",
    description: "Elegant accent piece",
    price: "$54",
    images: ["/produtcsImages/10.jpg", "/produtcsImages/11.jpg"],
  },
  {
    id: "8",
    name: "Marble Serving Tray",
    description: "Luxury serving experience",
    price: "$95",
    images: ["/produtcsImages/12.jpg"],
  },
  {
    id: "9",
    name: "Cotton Cushion Cover",
    description: "Comfort meets style",
    price: "$28",
    images: ["/produtcsImages/13.jpg"],
  },
  {
    id: "10",
    name: "Glass Water Carafe",
    description: "Elegant hydration solution",
    price: "$42",
    images: ["/produtcsImages/14.jpg", "/produtcsImages/15.jpg"],
  },
  {
    id: "11",
    name: "Woven Storage Basket",
    description: "Organized living made beautiful",
    price: "$38",
    images: ["/produtcsImages/16.jpg"],
  },
]

function ProductCard({ product, onAdd, isAdded }: any) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const hasMultipleImages = product.images.length > 1

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
      {/* Image Slider */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.images[currentImageIndex] || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Slider Controls */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-2 opacity-0 shadow-lg transition-all hover:bg-white hover:scale-110 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-2 opacity-0 shadow-lg transition-all hover:bg-white hover:scale-110 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4 text-gray-800" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {product.images.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentImageIndex(index)
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentImageIndex ? "w-6 bg-white shadow-md" : "w-1.5 bg-white/60 hover:bg-white/80"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="mb-1.5 font-semibold text-gray-900">{product.name}</h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">{product.description}</p>
        <div className="flex items-center justify-between">
          <Button
            onClick={() => onAdd(product)}
            disabled={isAdded}
            size="sm"
            className={`min-w-[90px] font-semibold transition-all ${
              isAdded
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-black hover:bg-gray-800 text-white hover:shadow-md active:scale-95"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="mr-1.5 h-4 w-4" />
                Added
              </>
            ) : (
              <>
                <Plus className="mr-1.5 h-4 w-4" />
                Add
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  const { isAuthenticated, user, logout } = useAuth()
  const router = useRouter()
  const [inquiryItems, setInquiryItems] = useState<InquiryProduct[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  const handleAddToInquiry = (product: any) => {
    const newItem: InquiryProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
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
    <div className="min-h-screen bg-white">
      <Header 
        cartItemCount={inquiryItems.length} 
        onCartClick={() => setIsCartOpen(true)} 
      />

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="mb-4 font-serif text-4xl font-normal leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-balance">
                Welcome back, {user?.name}
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-gray-600 text-pretty">
                Browse our catalog and add items to your inquiry cart to request quotes, samples, or discuss bulk orders with our team.
              </p>
            </div>

            {/* Logout button - right side */}
            <div className="flex items-start">
              <Button
                variant="ghost"
                onClick={() => {
                  logout()
                }}
                className="ml-4 flex items-center gap-2 text-sm border border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded cursor-pointer"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="mb-2 font-serif text-2xl font-bold text-gray-900 md:text-3xl">Featured Products</h2>
            <p className="text-gray-600">Our most popular items this season</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      {/* All Products */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="mb-2 font-serif text-2xl font-bold text-gray-900 md:text-3xl">All Products</h2>
            <p className="text-gray-600">Browse our complete collection</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allProducts.map((product) => (
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
