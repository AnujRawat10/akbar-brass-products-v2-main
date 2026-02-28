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
  variantId: string
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
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
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
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          products: items,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to submit inquiry")
      }

      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "" })
      onClear()

      setTimeout(() => {
        setIsOpen(false)
        setSubmitStatus("idle")
      }, 2000)
    } catch (error) {
      console.error("Inquiry submission failed:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (items.length === 0) return null

  return (
    <>
      {externalIsOpen === undefined && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#63403A] text-[#f0efe2] shadow-lg transition-all hover:scale-110 hover:bg-[#6B2410] hover:shadow-xl"
          aria-label="Open inquiry cart"
        >
          <div className="relative flex items-center justify-center">
            <ShoppingBag className="h-6 w-6" />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#f0efe2] text-[#63403A] text-xs font-bold">
              {items.length}
            </span>
          </div>
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#63403A]/50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 z-50 w-full max-w-md h-full transform bg-[#f0efe2] shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-[#63403A]/20 bg-[#f0efe2] p-4 sm:p-6 rounded-t-2xl md:rounded-none">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#63403A]">Inquiry Cart</h2>
              <p className="text-sm text-[#63403A]/70">{items.length} items selected</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 transition-colors hover:bg-[#63403A]/10"
              aria-label="Close cart"
            >
              <X className="h-5 w-5 text-[#63403A]" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <div className="mb-6 space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 rounded-lg border border-[#63403A]/20 bg-white p-3 shadow-sm">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-[#63403A]">{item.name}</h3>
                    <p className="font-serif text-base font-bold text-[#63403A]/80">{item.price}</p>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="self-start rounded-full p-1.5 transition-colors hover:bg-[#63403A]/10"
                    aria-label={`Remove ${item.name}`}
                  >
                    <X className="h-4 w-4 text-[#63403A]/70" />
                  </button>
                </div>
              ))}
            </div>

            <form id="inquiry-form" onSubmit={handleSubmit} className="space-y-4 pb-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#63403A]">Name *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="border-[#63403A]/30 bg-white text-[#63403A] focus:border-[#63403A] focus:ring-[#63403A]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#63403A]">Email *</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="border-[#63403A]/30 bg-white text-[#63403A] focus:border-[#63403A] focus:ring-[#63403A]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#63403A]">Phone</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="border-[#63403A]/30 bg-white text-[#63403A] focus:border-[#63403A] focus:ring-[#63403A]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#63403A]">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="border-[#63403A]/30 bg-white text-[#63403A] focus:border-[#63403A] focus:ring-[#63403A]"
                />
              </div>
            </form>
          </div>

          <div className="border-t border-[#63403A]/20 bg-[#D9D4BC] p-4 sm:p-6">
            {submitStatus === "success" && (
              <p className="mb-3 text-center text-sm font-medium text-green-700">
                Inquiry submitted successfully! You'll receive a confirmation email shortly.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="mb-3 text-center text-sm font-medium text-red-700">
                Failed to submit inquiry. Please try again.
              </p>
            )}
            <Button
              type="submit"
              form="inquiry-form"
              disabled={isSubmitting || submitStatus === "success"}
              className="w-full bg-[#63403A] py-6 text-base font-semibold hover:bg-[#6B2410] text-[#f0efe2]"
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