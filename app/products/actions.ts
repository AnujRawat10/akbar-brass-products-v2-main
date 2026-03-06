"use server"

import {
  getProducts,
  getProductByHandle,
  getCollections,
  getProductsByCollection,
  type ShopifyProduct,
  type ShopifyCollection,
} from "@/lib/shopify"

export async function fetchProducts(): Promise<ShopifyProduct[]> {
  return getProducts()
}

export async function fetchProductByHandle(
  handle: string
): Promise<ShopifyProduct | null> {
  return getProductByHandle(handle)
}

export async function fetchCollections(): Promise<ShopifyCollection[]> {
  return getCollections()
}

export async function fetchProductsByCollection(
  handle: string
): Promise<ShopifyProduct[]> {
  return getProductsByCollection(handle)
}

