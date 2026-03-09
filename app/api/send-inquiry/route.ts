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

const STORE_OWNER_EMAIL = "hello@akbarbrass.com"

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

    // Send notification email to store owner
    try {
      const domain = process.env.SHOPIFY_STORE_DOMAIN!
      const adminAccessToken = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN!

      await fetch(
        `https://${domain}/admin/api/2024-01/draft_orders.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": adminAccessToken,
          },
          body: JSON.stringify({
            draft_order: {
              line_items: lineItems,
              email: STORE_OWNER_EMAIL,
              note: `[STORE COPY] Inquiry from ${body.name} (${body.email})\n\n${body.message || "No message"}\n\nOriginal Order: ${order.name}`,
              shipping_address: {
                first_name: "Store",
                last_name: "Notification",
              },
            },
          }),
        }
      ).then(async (res) => {
        if (res.ok) {
          const result = await res.json()
          const draftId = result.draft_order.id
          // Send the draft order invoice to store owner
          await fetch(
            `https://${domain}/admin/api/2024-01/draft_orders/${draftId}/send_invoice.json`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "X-Shopify-Access-Token": adminAccessToken,
              },
              body: JSON.stringify({
                draft_order_invoice: {
                  to: STORE_OWNER_EMAIL,
                  subject: `New Inquiry from ${body.name} — Order ${order.name}`,
                  custom_message: `New inquiry received from ${body.name} (${body.email}).\n\n${body.message || "No additional message."}\n\nProducts: ${body.products.map((p) => p.name).join(", ")}`,
                },
              }),
            }
          )
        }
      })
    } catch {
      // Store owner notification is non-critical
      console.error("Failed to send store owner notification")
    }

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
