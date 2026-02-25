"use server"

import { getProducts, getProductByHandle, type ShopifyProduct } from "@/lib/shopify"

export async function fetchProducts(): Promise<ShopifyProduct[]> {
  return getProducts()
}

export async function fetchProductByHandle(
  handle: string
): Promise<ShopifyProduct | null> {
  return getProductByHandle(handle)
}
