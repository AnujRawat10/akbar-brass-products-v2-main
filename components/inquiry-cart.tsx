"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Send, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export interface InquiryProduct {
  id: string
  name: string
  price: string
  image: string
}

interface InquiryCartProps {
  items: InquiryProduct[]
  onRemove: (id: string) => void
  onClear: () => void
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export function InquiryCart({ items, onRemove, onClear, isOpen: externalIsOpen, onOpenChange }: InquiryCartProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen
  const setIsOpen = onOpenChange || setInternalIsOpen

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    alert("Inquiry submitted successfully! We'll contact you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
    onClear()
    setIsOpen(false)
    setIsSubmitting(false)
  }

  if (items.length === 0) return null

  return (
    <>
      {externalIsOpen === undefined && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#521C0D] text-[#EDE8D0] shadow-lg transition-all hover:scale-110 hover:bg-[#6B2410] hover:shadow-xl"
          aria-label="Open inquiry cart"
        >
          <div className="relative flex items-center justify-center">
            <ShoppingBag className="h-6 w-6" />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#EDE8D0] text-[#521C0D] text-xs font-bold">
              {items.length}
            </span>
          </div>
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#521C0D]/50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 z-50 w-full max-w-md h-full transform bg-[#EDE8D0] shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-[#521C0D]/20 bg-[#EDE8D0] p-4 sm:p-6 rounded-t-2xl md:rounded-none">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#521C0D]">Inquiry Cart</h2>
              <p className="text-sm text-[#521C0D]/70">{items.length} items selected</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 transition-colors hover:bg-[#521C0D]/10"
              aria-label="Close cart"
            >
              <X className="h-5 w-5 text-[#521C0D]" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <div className="mb-6 space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 rounded-lg border border-[#521C0D]/20 bg-white p-3 shadow-sm">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-[#521C0D]">{item.name}</h3>
                    <p className="font-serif text-base font-bold text-[#521C0D]/80">{item.price}</p>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="self-start rounded-full p-1.5 transition-colors hover:bg-[#521C0D]/10"
                    aria-label={`Remove ${item.name}`}
                  >
                    <X className="h-4 w-4 text-[#521C0D]/70" />
                  </button>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pb-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#521C0D]">Name *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="border-[#521C0D]/30 bg-white text-[#521C0D] focus:border-[#521C0D] focus:ring-[#521C0D]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#521C0D]">Email *</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="border-[#521C0D]/30 bg-white text-[#521C0D] focus:border-[#521C0D] focus:ring-[#521C0D]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#521C0D]">Phone</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="border-[#521C0D]/30 bg-white text-[#521C0D] focus:border-[#521C0D] focus:ring-[#521C0D]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#521C0D]">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="border-[#521C0D]/30 bg-white text-[#521C0D] focus:border-[#521C0D] focus:ring-[#521C0D]"
                />
              </div>
            </form>
          </div>

          <div className="border-t border-[#521C0D]/20 bg-[#D9D4BC] p-4 sm:p-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              onClick={handleSubmit}
              className="w-full bg-[#521C0D] py-6 text-base font-semibold hover:bg-[#6B2410] text-[#EDE8D0]"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Submit Inquiry
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}