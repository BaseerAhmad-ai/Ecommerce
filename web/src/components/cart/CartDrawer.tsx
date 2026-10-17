import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useCart } from '../../hooks/useCart'
import { ButtonLink } from '../ui/Button'
import { CartItemRow } from './CartItem'
import { CartSummary } from './CartSummary'

type CartDrawerProps = {
  open: boolean
  onClose: () => void
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { resolved, itemCount } = useCart()
  const reduceMotion = useReducedMotion()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50">
          <motion.button
            type="button"
            aria-label="Close cart"
            className="absolute inset-0 bg-ink/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-drawer-title"
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-cream shadow-2xl"
            initial={reduceMotion ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { x: '100%' }}
            transition={{ type: 'tween', duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-forest/10 px-5 py-4">
              <h2 id="cart-drawer-title" className="font-serif text-2xl text-forest">
                Your cart ({itemCount})
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-full text-forest hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                aria-label="Close cart"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5">
              {resolved.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="font-serif text-xl text-forest">Your cart is empty</p>
                  <p className="mt-2 text-sm text-ink/70">Browse soaps and oils to add a few favourites.</p>
                  <ButtonLink to="/shop" className="mt-6" onClick={onClose}>
                    Continue shopping
                  </ButtonLink>
                </div>
              ) : (
                <ul className="divide-y divide-forest/10">
                  {resolved.map((line) => (
                    <li key={line.product.id}>
                      <CartItemRow productId={line.product.id} compact />
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {resolved.length > 0 ? (
              <div className="border-t border-forest/10 bg-white px-5 py-4">
                <CartSummary />
                <div className="mt-4 flex flex-col gap-2">
                  <ButtonLink to="/checkout" onClick={onClose}>
                    Proceed to checkout
                  </ButtonLink>
                  <ButtonLink to="/cart" variant="ghost" onClick={onClose}>
                    View cart
                  </ButtonLink>
                </div>
              </div>
            ) : null}
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
