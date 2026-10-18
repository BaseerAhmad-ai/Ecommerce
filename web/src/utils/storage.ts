import type { CartLine } from '../types/product'
import { store } from '../config/store'
import { getProductById } from '../data/products'

const CART_KEY = 'pureherbals.cart.v1'

function isCartLine(value: unknown): value is CartLine {
  if (typeof value !== 'object' || value === null) return false
  const line = value as Record<string, unknown>
  return (
    typeof line.productId === 'string' &&
    getProductById(line.productId) !== undefined &&
    typeof line.quantity === 'number' &&
    Number.isSafeInteger(line.quantity) &&
    line.quantity > 0 &&
    line.quantity <= store.maxQuantityPerItem
  )
}

export function readCart(): CartLine[] {
  try {
    const raw = localStorage.getItem(CART_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(isCartLine)
  } catch {
    return []
  }
}

export function writeCart(items: CartLine[]): void {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items))
  } catch {
    // LocalStorage may be blocked; cart still works for the current session.
  }
}
