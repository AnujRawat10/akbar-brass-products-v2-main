export interface ShopifyProduct {
  id: string
  handle: string
  name: string
  description: string
  price: string
  images: string[]
  variantId: string
  featured?: boolean
}

const domain = process.env.SHOPIFY_STORE_DOMAIN!
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!
const adminAccessToken = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN!

// --- Storefront API (public, for fetching products) ---

async function storefrontFetch<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const url = `https://${domain}/api/2024-01/graphql.json`

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!response.ok) {
    throw new Error(
      `Shopify Storefront API error: ${response.status} ${response.statusText}`
    )
  }

  const json = await response.json()

  if (json.errors) {
    throw new Error(`Shopify GraphQL error: ${JSON.stringify(json.errors)}`)
  }

  return json.data
}

// --- Admin API (private, for creating draft orders) ---

async function adminFetch(endpoint: string, body: unknown) {
  const url = `https://${domain}/admin/api/2024-01/${endpoint}`

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": adminAccessToken,
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(
      `Shopify Admin API error: ${response.status} ${response.statusText} — ${errorText}`
    )
  }

  return response.json()
}

// --- Product Fetching ---

const PRODUCT_FIELDS = `
  id
  handle
  title
  description
  tags
  priceRange {
    minVariantPrice {
      amount
      currencyCode
    }
  }
  variants(first: 1) {
    edges {
      node {
        id
      }
    }
  }
  images(first: 10) {
    edges {
      node {
        url
        altText
      }
    }
  }
`

const PRODUCTS_QUERY = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          ${PRODUCT_FIELDS}
        }
      }
    }
  }
`

const PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      ${PRODUCT_FIELDS}
    }
  }
`

interface ShopifyProductNode {
  id: string
  handle: string
  title: string
  description: string
  tags: string[]
  priceRange: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
  variants: {
    edges: Array<{
      node: {
        id: string
      }
    }>
  }
  images: {
    edges: Array<{
      node: {
        url: string
        altText: string | null
      }
    }>
  }
}

interface ProductsResponse {
  products: {
    edges: Array<{
      node: ShopifyProductNode
    }>
  }
}

function formatPrice(amount: string, currencyCode: string): string {
  const num = parseFloat(amount)
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(num)
}

function extractNumericId(gid: string): string {
  // Convert "gid://shopify/ProductVariant/12345" to "12345"
  const parts = gid.split("/")
  return parts[parts.length - 1]
}

function mapShopifyProduct(node: ShopifyProductNode): ShopifyProduct {
  return {
    id: node.id,
    handle: node.handle,
    name: node.title,
    description: node.description,
    price: formatPrice(
      node.priceRange.minVariantPrice.amount,
      node.priceRange.minVariantPrice.currencyCode
    ),
    images: node.images.edges.map((edge) => edge.node.url),
    variantId: extractNumericId(node.variants.edges[0]?.node.id || ""),
    featured: node.tags.includes("featured"),
  }
}

export async function getProducts(
  count: number = 50
): Promise<ShopifyProduct[]> {
  const data = await storefrontFetch<ProductsResponse>(PRODUCTS_QUERY, {
    first: count,
  })
  return data.products.edges.map((edge) => mapShopifyProduct(edge.node))
}

interface ProductByHandleResponse {
  productByHandle: ShopifyProductNode | null
}

export async function getProductByHandle(
  handle: string
): Promise<ShopifyProduct | null> {
  const data = await storefrontFetch<ProductByHandleResponse>(
    PRODUCT_BY_HANDLE_QUERY,
    { handle }
  )
  if (!data.productByHandle) return null
  return mapShopifyProduct(data.productByHandle)
}

// --- Draft Order Creation ---

export interface DraftOrderLineItem {
  variant_id: number
  quantity: number
}

export interface DraftOrderCustomer {
  first_name: string
  last_name: string
  email: string
  phone?: string
}

export interface CreateDraftOrderInput {
  lineItems: DraftOrderLineItem[]
  customer: DraftOrderCustomer
  note?: string
}

export async function createDraftOrder(input: CreateDraftOrderInput) {
  const body = {
    draft_order: {
      line_items: input.lineItems,
      email: input.customer.email,
      phone: input.customer.phone || undefined,
      note: input.note || undefined,
      shipping_address: {
        first_name: input.customer.first_name,
        last_name: input.customer.last_name,
      },
      billing_address: {
        first_name: input.customer.first_name,
        last_name: input.customer.last_name,
      },
    },
  }

  const result = await adminFetch("draft_orders.json", body)
  const draftOrder = result.draft_order

  // Send invoice email to customer
  await adminFetch(`draft_orders/${draftOrder.id}/send_invoice.json`, {
    draft_order_invoice: {
      to: input.customer.email,
      subject: "Your Inquiry — Akbar Brass Products",
      custom_message: "Thank you for your interest in our products. Please find your inquiry details below.",
    },
  })

  return draftOrder
}
