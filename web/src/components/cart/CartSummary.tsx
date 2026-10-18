import { store } from '../../config/store'
import { useCart } from '../../hooks/useCart'
import { formatPKR } from '../../utils/format'

export function CartSummary() {
  const { totals, itemCount } = useCart()
  const itemsUntilFreeDelivery = Math.max(0, store.freeDeliveryQuantity - itemCount)

  return (
    <dl className="space-y-2 text-sm">
      <div className="flex justify-between text-ink/80">
        <dt>Subtotal</dt>
        <dd>{formatPKR(totals.subtotal)}</dd>
      </div>
      <div className="flex justify-between text-ink/80">
        <dt>Delivery</dt>
        <dd>
          {totals.subtotal === 0
            ? '—'
            : totals.qualifiesForFreeDelivery
              ? 'Free'
              : formatPKR(totals.deliveryFee)}
        </dd>
      </div>
      {totals.qualifiesForFreeDelivery ? (
        <p className="text-xs text-forest">
          Free delivery applied for {store.freeDeliveryQuantity}+ items.
        </p>
      ) : totals.subtotal > 0 ? (
        <p className="text-xs text-ink/60">
          Add {itemsUntilFreeDelivery} more {itemsUntilFreeDelivery === 1 ? 'item' : 'items'} for free delivery. Delivery is {formatPKR(store.deliveryFee)}.
        </p>
      ) : null}
      <div className="flex justify-between border-t border-forest/10 pt-3 font-medium text-forest">
        <dt>Total</dt>
        <dd>{formatPKR(totals.total)}</dd>
      </div>
    </dl>
  )
}
