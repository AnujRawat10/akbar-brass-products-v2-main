import { NextResponse } from "next/server"
import { createDraftOrder } from "@/lib/shopify"

interface InquiryProduct {
  id: string
  name: string
  price: string
  image: string
  variantId: string
}

interface InquiryRequest {
  name: string
  email: string
  phone: string
  message: string
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
      quantity: 1,
    }))

    // Create draft order in Shopify
    const draftOrder = await createDraftOrder({
      lineItems,
      customer: {
        first_name: firstName,
        last_name: lastName,
        email: body.email,
        ...(body.phone ? { phone: body.phone } : {}),
      },
      note: body.message || undefined,
    })

    return NextResponse.json({
      success: true,
      orderId: draftOrder.id,
      orderName: draftOrder.name,
    })
  } catch (error) {
    console.error("Failed to create draft order:", error)
    return NextResponse.json(
      { error: "Failed to submit your inquiry. Please try again." },
      { status: 500 }
    )
  }
}
