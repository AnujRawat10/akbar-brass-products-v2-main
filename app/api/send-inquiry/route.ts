import { NextResponse } from "next/server"
import { createOrder } from "@/lib/shopify"

interface InquiryProduct {
  id: string
  name: string
  price: string
  image: string
  variantId: string
  quantity: number
}

interface InquiryRequest {
  name: string
  email: string
  message?: string
  products: InquiryProduct[]
}

export async function POST(request: Request) {
  try {
    const body: InquiryRequest = await request.json()

    if (
      !body.name ||
      !body.email ||
      !body.products ||
      body.products.length === 0
    ) {
      return NextResponse.json(
        { error: "Name, email, and at least one product are required." },
        { status: 400 }
      )
    }

    // Split name into first/last
    const nameParts = body.name.trim().split(/\s+/)
    const firstName = nameParts[0]
    const lastName = nameParts.slice(1).join(" ") || ""

    // Build line items from cart products
    const lineItems = body.products.map((p) => ({
      variant_id: parseInt(p.variantId, 10),
      quantity: p.quantity || 30,
    }))

    // Build note with customer message + product list for store owner
    const productList = body.products.map((p) => `• ${p.name} — Qty: ${p.quantity || 30}`).join("\n")
    const note = [
      body.message ? `Customer Message: ${body.message}` : "",
      `Products Inquired:\n${productList}`,
      `Customer: ${body.name} (${body.email})`,
    ]
      .filter(Boolean)
      .join("\n\n")

    // Create order in Shopify (sends receipt to customer automatically via send_receipt: true)
    const order = await createOrder({
      lineItems,
      customer: {
        first_name: firstName,
        last_name: lastName,
        email: body.email,
      },
      note,
    })

    return NextResponse.json({
      success: true,
      orderId: order.id,
      orderName: order.name,
    })
  } catch (error) {
    console.error("Failed to create order:", error)
    return NextResponse.json(
      { error: "Failed to submit your inquiry. Please try again." },
      { status: 500 }
    )
  }
}
