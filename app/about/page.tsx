import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Droplets, Wind, Recycle, CheckCircle, Trophy, TrendingUp, Wrench, Sparkles, Leaf } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Where Heritage Meets Innovation */}
      <section className="px-6 py-24 md:py-32 bg-black text-white">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-6 font-serif text-5xl md:text-7xl font-bold text-balance">
            Where Heritage Meets Innovation
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            With over 50 years of manufacturing legacy and multiple national awards, Akbar Brass Products is one of
            India's leading producers of home décor and furniture.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="bg-white p-8 md:p-12 rounded-lg border border-gray-200">
              <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">Vision Statement</h2>
              <p className="text-base leading-relaxed text-gray-600">
                To be the finest, most progressive handicraft manufacturing, relentless in the pursuit of Client and
                employee excellence.
              </p>
            </div>
            <div className="bg-black p-8 md:p-12 rounded-lg">
              <h2 className="mb-6 font-serif text-3xl font-bold text-white">Mission Statement</h2>
              <p className="text-base leading-relaxed text-gray-300">
                To capitalize on the efficiency of product manufacturing Industry to serve Clients. We strive constantly
                to make Akbar Brass Products a winning competitor both today and in the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 font-serif text-4xl font-bold text-gray-900 text-center">Who We Are</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-base leading-relaxed text-gray-600 mb-6">
              Founded by Mr. Haji Abdul Qayyum in 1952, Akbar Group started as a small company with a big vision. Known as one of the pioneers of the Brass industry in Moradabad, the company has maintained phenomenal growth and achieved total financial stability since inception.
            </p>
            <p className="text-base leading-relaxed text-gray-600 mb-6">
              In 1974, Akbar Brass Products was established for exclusive export business under the leadership of Mr. Akbar Qayyum. Through far-sightedness and deep business knowledge, the company became one of Moradabad's leading export houses.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              Today, we operate two factories spanning 60 acres with 150,000 square feet of covered area, equipped with modern infrastructure and generating USD 15 million in annual turnover. Our success is built on consistent quality, with over 80% of business coming from repeat customers.
            </p>
          </div>
        </div>
      </section>

      {/* Our Facility Section */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 font-serif text-4xl font-bold text-gray-900 text-center">Infrastructure</h2>
          
          <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
            <div>
              <p className="text-base leading-relaxed text-gray-600 mb-6">
                We operate a single, fully integrated manufacturing unit with horizontal integration across metal, marble, and wood processes—enabling seamless production of combination products under one roof.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-gray-900 min-w-[140px]">Total Area:</span>
                  <span className="text-gray-600">60 acres</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-gray-900 min-w-[140px]">Covered Area:</span>
                  <span className="text-gray-600">10 acres</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-gray-900 min-w-[140px]">Expansion:</span>
                  <span className="text-gray-600">Ample space available for future growth</span>
                </div>
              </div>

              <p className="text-base leading-relaxed text-gray-600">
                Our manufacturing unit is equipped with modern machinery and operates fully in line with global compliance standards. The factory is audited and approved for production for customers worldwide, serving a broad spectrum of global markets.
              </p>
            </div>
            
            <div className="relative">
              <img
                src="/modern-manufacturing-facility-with-integrated-meta.jpg"
                alt="Manufacturing unit — integrated metal, marble & wood processes"
                className="rounded-lg w-full h-auto"
              />
              <p className="mt-4 text-sm text-gray-500 text-center">
                Manufacturing unit — integrated metal, marble & wood processes
              </p>
            </div>
          </div>

          {/* Equipment and Capabilities */}
          <div className="mb-8">
            <h3 className="mb-6 font-serif text-2xl font-bold text-gray-900 text-center">
              Facility Capabilities
            </h3>
            <p className="text-base leading-relaxed text-gray-600 mb-6 text-center max-w-3xl mx-auto">
              Located on National Highway 9, Moradabad, our new-generation factory features state-of-the-art equipment
              and sustainable manufacturing practices.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="mb-4 font-serif text-xl font-bold text-gray-900">Metal Processing</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• CNC Laser Cutting</li>
                <li>• Hydraulic Presses</li>
                <li>• Laser Welding</li>
                <li>• In-house Plating</li>
                <li>• Lacquering</li>
                <li>• Powder Coating</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="mb-4 font-serif text-xl font-bold text-gray-900">Marble Unit</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• CNC Machines</li>
                <li>• Calibration Equipment</li>
                <li>• Auto Polish Line</li>
                <li>• Marble Engraving</li>
                <li>• Stone Processing</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="mb-4 font-serif text-xl font-bold text-gray-900">Wood Zone</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Wood Shaping</li>
                <li>• Edge Banding</li>
                <li>• Surface Finishing</li>
                <li>• Precision Cutting</li>
                <li>• Quality Control</li>
              </ul>
            </Card>
          </div>

          {/* Infrastructure Stats */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-black p-8 rounded-lg text-white">
              <h3 className="mb-4 font-serif text-2xl font-bold">Furniture Unit</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Total Area: 60 Acres</li>
                <li>Covered Area: 10 Acres</li>
                <li>Expansion: Ample Room</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-white">
              <h3 className="mb-4 font-serif text-2xl font-bold">City Unit</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Total Area: 4 Acres</li>
                <li>Covered Area: 4 Acres</li>
                <li>Fully Equipped</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Manufacturing */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 font-serif text-4xl font-bold text-gray-900 text-center">Sustainable Manufacturing</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-900">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-bold text-gray-900">Water Treatment</h3>
              <p className="text-sm text-gray-600">ETP, STP, RO & DM Water Plants</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-900">
                <Wind className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-bold text-gray-900">Air Quality</h3>
              <p className="text-sm text-gray-600">Dust Collectors in polishing zones</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-900">
                <Recycle className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-bold text-gray-900">Recycling</h3>
              <p className="text-sm text-gray-600">Recycled Metal Usage across production</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-900">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-bold text-gray-900">Certified</h3>
              <p className="text-sm text-gray-600">SEDEX, UL, CE & ISO Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 font-serif text-4xl font-bold text-gray-900 text-center">National Awards</h2>
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 border-0">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-gray-900" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-white">
                    Certificate of Merit for Export Performance
                  </h3>
                  <p className="text-sm text-gray-300">
                    Hon'ble President, Shri Shanker Dayal Sharma awarded Akbar Brass Products "Certificate of Merit for
                    Export Performance" for the year 1994-95.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-r from-gray-800 to-gray-900 border-0">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-gray-900" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-white">
                    Certificate of Merit for Outstanding Export Performance
                  </h3>
                  <p className="text-sm text-gray-300">
                    Hon'ble Prime Minister, Shri Atal Behari Vajpayee awarded Akbar Brass Products "Certificate of Merit
                    for Outstanding Export Performance".
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 border-0">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-gray-900" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-white">
                    Trophy for Export Performance in EPNS Handicrafts
                  </h3>
                  <p className="text-sm text-gray-300">
                    Hon'ble Minister for Textile, Shri Kanshi Ram Rana awarded Akbar Brass Products Trophy for "Export
                    Performance in EPNS Handicrafts".
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 font-serif text-4xl font-bold text-gray-900 text-center">Why Work With Us</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-900">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="mb-3 font-serif text-lg font-bold text-gray-900">Proven Track Record</h3>
              <p className="text-sm text-gray-600">Over 50 years of export excellence</p>
            </div>
            <div className="text-center bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-900">
                <Wrench className="h-10 w-10 text-white" />
              </div>
              <h3 className="mb-3 font-serif text-lg font-bold text-gray-900">Vertically Integrated</h3>
              <p className="text-sm text-gray-600">Complete in-house production capabilities</p>
            </div>
            <div className="text-center bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-900">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h3 className="mb-3 font-serif text-lg font-bold text-gray-900">Bespoke Development</h3>
              <p className="text-sm text-gray-600">Custom design and development capabilities</p>
            </div>
            <div className="text-center bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-900">
                <Leaf className="h-10 w-10 text-white" />
              </div>
              <h3 className="mb-3 font-serif text-lg font-bold text-gray-900">Ethical Operations</h3>
              <p className="text-sm text-gray-600">Environmentally responsible manufacturing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 font-serif text-4xl font-bold text-gray-900 text-center">Production Capacity</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
              <div className="mb-2 font-serif text-4xl font-bold text-gray-900">20K</div>
              <p className="text-sm text-gray-600">Spinning Units Per Day</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
              <div className="mb-2 font-serif text-4xl font-bold text-gray-900">5 Ton</div>
              <p className="text-sm text-gray-600">Casting Per Day</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
              <div className="mb-2 font-serif text-4xl font-bold text-gray-900">10K</div>
              <p className="text-sm text-gray-600">Pressing Units Per Day</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
              <div className="mb-2 font-serif text-4xl font-bold text-gray-900">18K</div>
              <p className="text-sm text-gray-600">Polishing Units Per Day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 font-serif text-4xl font-bold text-gray-900 text-center">Product Categories</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="mb-3 font-serif text-xl font-bold text-gray-900">Furniture</h3>
              <p className="text-sm text-gray-600">
                Side tables, coffee tables, console tables, dining tables, floor shelves, drinks trolleys, stools, and
                sideboards in metal, marble, and wood combinations.
              </p>
            </Card>
            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="mb-3 font-serif text-xl font-bold text-gray-900">Lighting</h3>
              <p className="text-sm text-gray-600">
                UL/CUL and CE certified lamps and chandeliers in metal and wood with in-house lampshade making facility.
              </p>
            </Card>
            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="mb-3 font-serif text-xl font-bold text-gray-900">Mirrors</h3>
              <p className="text-sm text-gray-600">
                Decorative mirrors in metal, wood, and combination finishes with natural product inlay options.
              </p>
            </Card>
            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="mb-3 font-serif text-xl font-bold text-gray-900">Candle Holders</h3>
              <p className="text-sm text-gray-600">
                Made of aluminum, stainless steel, iron, wood, marble, and metal-wood combinations.
              </p>
            </Card>
            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="mb-3 font-serif text-xl font-bold text-gray-900">Bowls & Baskets</h3>
              <p className="text-sm text-gray-600">
                Food serving products in various metals and woods with wood-metal combination expertise.
              </p>
            </Card>
            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="mb-3 font-serif text-xl font-bold text-gray-900">Wall Décor</h3>
              <p className="text-sm text-gray-600">
                Contemporary and antique designs in stainless steel, iron, wood, and MDF combinations.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Material Breakdown */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 font-serif text-4xl font-bold text-gray-900 text-center">Material Breakdown</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="mb-2 font-serif text-5xl font-bold text-gray-900">52%</div>
              <p className="text-sm text-gray-600">Metal</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="mb-2 font-serif text-5xl font-bold text-gray-900">40%</div>
              <p className="text-sm text-gray-600">Stone</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="mb-2 font-serif text-5xl font-bold text-gray-900">5%</div>
              <p className="text-sm text-gray-600">Wood</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="mb-2 font-serif text-5xl font-bold text-gray-900">3%</div>
              <p className="text-sm text-gray-600">Other</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 md:py-24 bg-black text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-4xl md:text-5xl font-bold text-balance">
            Let's Build Something Timeless
          </h2>
          <p className="mb-8 text-lg text-gray-300 text-pretty max-w-2xl mx-auto">
            Partner with us to create exceptional home décor and furniture that combines traditional craftsmanship with
            modern innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 border-0" asChild>
              <Link href="/products">View Collection</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>www.akbarbrass.com | affan@akbarbrass.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}
