import type { CartLine } from '../types/product'

const CART_KEY = 'pureherbals.cart.v1'

function isCartLine(value: unknown): value is CartLine {
  if (typeof value !== 'object' || value === null) return false
  const line = value as Record<string, unknown>
  return typeof line.productId === 'string' && typeof line.quantity === 'number'
}

export function readCart(): CartLine[] {
  try {
    const raw = localStorage.getItem(CART_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(isCartLine).filter((line) => line.quantity > 0)
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
