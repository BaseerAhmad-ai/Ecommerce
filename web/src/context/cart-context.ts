import { createContext } from 'react'
import type { CartLine, Product } from '../types/product'

export type CartTotals = {
  subtotal: number
  deliveryFee: number
  total: number
  qualifiesForFreeDelivery: boolean
}

export type ResolvedLine = {
  product: Product
  quantity: number
  lineTotal: number
}

export type CartContextValue = {
  items: CartLine[]
  resolved: ResolvedLine[]
  itemCount: number
  totals: CartTotals
  addItem: (productId: string, quantity?: number) => boolean
  setQuantity: (productId: string, quantity: number) => void
  removeItem: (productId: string) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)
