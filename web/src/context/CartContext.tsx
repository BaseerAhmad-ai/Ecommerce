import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { store } from '../config/store'
import { getEffectivePrice, getProductById } from '../data/products'
import { useToast } from '../hooks/useToast'
import type { CartLine } from '../types/product'
import { readCart, writeCart } from '../utils/storage'
import { CartContext, type CartTotals } from './cart-context'

export function CartProvider({ children }: { children: ReactNode }) {
  const { notify } = useToast()
  const [items, setItems] = useState<CartLine[]>(() =>
    typeof window === 'undefined' ? [] : readCart(),
  )

  useEffect(() => {
    writeCart(items)
  }, [items])

  const resolved = useMemo(() => {
    return items.flatMap((line) => {
      const product = getProductById(line.productId)
      if (!product) return []
      return [
        {
          product,
          quantity: line.quantity,
          lineTotal: getEffectivePrice(product) * line.quantity,
        },
      ]
    })
  }, [items])

  const itemCount = useMemo(
    () => resolved.reduce((sum, line) => sum + line.quantity, 0),
    [resolved],
  )

  const totals = useMemo<CartTotals>(() => {
    const subtotal = resolved.reduce((sum, line) => sum + line.lineTotal, 0)
    const qualifiesForFreeDelivery =
      subtotal >= store.freeDeliveryThreshold && subtotal > 0
    const deliveryFee = subtotal === 0 || qualifiesForFreeDelivery ? 0 : store.deliveryFee
    return {
      subtotal,
      deliveryFee,
      total: subtotal + deliveryFee,
      qualifiesForFreeDelivery,
    }
  }, [resolved])

  const addItem = useCallback(
    (productId: string, quantity = 1) => {
      const product = getProductById(productId)
      if (!product) {
        notify('This product is no longer available.')
        return false
      }
      if (!product.available) {
        notify(`${product.name} is currently unavailable.`)
        return false
      }
      const addQty = Math.max(1, Math.floor(quantity))
      setItems((current) => {
        const existing = current.find((line) => line.productId === productId)
        if (!existing) {
          return [...current, { productId, quantity: Math.min(addQty, store.maxQuantityPerItem) }]
        }
        return current.map((line) =>
          line.productId === productId
            ? {
                ...line,
                quantity: Math.min(line.quantity + addQty, store.maxQuantityPerItem),
              }
            : line,
        )
      })
      notify(`${product.name} added to cart.`)
      return true
    },
    [notify],
  )

  const setQuantity = useCallback((productId: string, quantity: number) => {
    const next = Math.floor(quantity)
    if (next <= 0) {
      setItems((current) => current.filter((line) => line.productId !== productId))
      return
    }
    setItems((current) =>
      current.map((line) =>
        line.productId === productId
          ? { ...line, quantity: Math.min(next, store.maxQuantityPerItem) }
          : line,
      ),
    )
  }, [])

  const removeItem = useCallback((productId: string) => {
    setItems((current) => current.filter((line) => line.productId !== productId))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const value = useMemo(
    () => ({
      items,
      resolved,
      itemCount,
      totals,
      addItem,
      setQuantity,
      removeItem,
      clearCart,
    }),
    [items, resolved, itemCount, totals, addItem, setQuantity, removeItem, clearCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
