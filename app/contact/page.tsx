"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ firstName: "", lastName: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen pt-15 " style={{ backgroundColor: '#f0efe2' }}>
      <div className="text-[#63403A] py-16 px-6" style={{ backgroundColor: '#f0efe2' }}>
        <div className="mx-auto max-w-6xl text-center">
          <h1 className=" font-serif text-4xl md:text-5xl font-bold">Get In Touch</h1>
          <p className="text-lg" style={{ color: '#63403A' }}>We'd love to hear from you. Let's start a conversation.</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-serif text-3xl font-bold" style={{ color: '#63403A' }}>Send us a message</h2>
            
            {isSubmitted ? (
              <div className="py-12 text-center bg-white rounded-lg abp-success">
  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#63403A]">
    <svg
      className="h-8 w-8 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  </div>

  <h3 className="mb-2 font-serif text-xl text-[#63403A]">
    Thank you for reaching out!
  </h3>

  <p className="text-[#63403A]/80">
    We'll get back to you as soon as possible.
  </p>
</div>

            ) : (
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium" style={{ color: '#63403A' }}>
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg bg-white px-4 py-3 focus:outline-none focus:ring-2"
                      style={{ border: '1px solid #63403A', color: '#63403A' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium" style={{ color: '#63403A' }}>
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg bg-white px-4 py-3 focus:outline-none focus:ring-2"
                      style={{ border: '1px solid #63403A', color: '#63403A' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium" style={{ color: '#63403A' }}>
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-white px-4 py-3 focus:outline-none focus:ring-2"
                    style={{ border: '1px solid #63403A', color: '#63403A' }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium" style={{ color: '#63403A' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-lg bg-white px-4 py-3 focus:outline-none focus:ring-2 resize-none"
                    style={{ border: '1px solid #63403A', color: '#63403A' }}
                  />
                </div>

                <button 
                  onClick={handleSubmit}
                  className="w-full text-white py-6 text-base font-medium hover:opacity-90 rounded-lg" 
                  style={{ backgroundColor: '#63403A' }}
                >
                  Send Message
                </button>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold" style={{ color: '#63403A' }}>Factory & Showroom Address</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: '#63403A' }}>
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold" style={{ color: '#63403A' }}>Address</h3>
                    <p style={{ color: '#63403A', opacity: 0.8 }}>
                      Village Dhanupura, Delhi Road,<br />
                      Moradabad - 244001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: '#63403A' }}>
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold" style={{ color: '#63403A' }}>Phone</h3>
                    <a href="tel:+915912414263" className="transition-colors hover:opacity-70" style={{ color: '#63403A', opacity: 0.8 }}>
                      +91-591-2414263
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: '#63403A' }}>
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold" style={{ color: '#63403A' }}>Email</h3>
                    <a href="mailto:info@akbarbrass.com" className="transition-colors hover:opacity-70" style={{ color: '#63403A', opacity: 0.8 }}>
                      info@akbarbrass.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold" style={{ color: '#63403A' }}>Find Us</h3>
              <div className="relative h-80 w-full overflow-hidden rounded-lg" style={{ border: '1px solid #63403A' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.6276039413515!2d78.62354189999999!3d28.820169399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b0300359aa35b%3A0x8245f870cd3f7946!2sAkbar%20Brass%20Products!5e0!3m2!1sen!2sin!4v1763635308876!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Akbar Brass Products Location"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/gxsG5MYLJ3R1TAKi8"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center text-white hover:opacity-90 py-3 rounded-lg mb-2"
                style={{ backgroundColor: '#63403A' }}
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}