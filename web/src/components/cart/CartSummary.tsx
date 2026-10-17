import { store } from '../../config/store'
import { useCart } from '../../hooks/useCart'
import { formatPKR } from '../../utils/format'

export function CartSummary() {
  const { totals } = useCart()

  return (
    <dl className="space-y-2 text-sm">
      <div className="flex justify-between text-ink/80">
        <dt>Subtotal</dt>
        <dd>{formatPKR(totals.subtotal)}</dd>
      </div>
      <div className="flex justify-between text-ink/80">
        <dt>Delivery</dt>
        <dd>{totals.deliveryFee === 0 && totals.subtotal > 0 ? 'Free' : formatPKR(totals.deliveryFee)}</dd>
      </div>
      {totals.qualifiesForFreeDelivery ? (
        <p className="text-xs text-forest">Free delivery applied at {formatPKR(store.freeDeliveryThreshold)}.</p>
      ) : totals.subtotal > 0 ? (
        <p className="text-xs text-ink/60">
          Free delivery from {formatPKR(store.freeDeliveryThreshold)}. Delivery is {formatPKR(store.deliveryFee)}.
        </p>
      ) : null}
      <div className="flex justify-between border-t border-forest/10 pt-3 font-medium text-forest">
        <dt>Total</dt>
        <dd>{formatPKR(totals.total)}</dd>
      </div>
    </dl>
  )
}
