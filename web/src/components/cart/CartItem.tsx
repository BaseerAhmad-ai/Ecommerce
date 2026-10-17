import { Link } from 'react-router'
import { Trash2 } from 'lucide-react'
import { useCart } from '../../hooks/useCart'
import { formatPKR } from '../../utils/format'
import { ProductImage } from '../ui/ProductImage'
import { QuantitySelector } from '../ui/QuantitySelector'

export function CartItemRow({
  productId,
  compact = false,
}: {
  productId: string
  compact?: boolean
}) {
  const { resolved, setQuantity, removeItem } = useCart()
  const line = resolved.find((item) => item.product.id === productId)
  if (!line) return null

  return (
    <article className={`flex gap-3 ${compact ? 'py-3' : 'py-4'}`}>
      <Link to={`/product/${line.product.id}`} className="shrink-0">
        <ProductImage
          src={line.product.image}
          alt={line.product.imageAlt}
          className="h-20 w-20 rounded-xl object-cover"
        />
      </Link>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-medium text-forest">
              <Link to={`/product/${line.product.id}`}>{line.product.name}</Link>
            </h3>
            <p className="text-xs text-ink/60">{line.product.size}</p>
          </div>
          <p className="text-sm font-medium text-forest">{formatPKR(line.lineTotal)}</p>
        </div>
        <div className="mt-2 flex items-center justify-between gap-2">
          <QuantitySelector
            value={line.quantity}
            onChange={(value) => setQuantity(line.product.id, value)}
          />
          <button
            type="button"
            onClick={() => removeItem(line.product.id)}
            className="inline-flex min-h-11 items-center gap-1 rounded-full px-2 text-sm text-ink/70 transition hover:text-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
          >
            <Trash2 size={16} aria-hidden="true" />
            Remove
          </button>
        </div>
      </div>
    </article>
  )
}
