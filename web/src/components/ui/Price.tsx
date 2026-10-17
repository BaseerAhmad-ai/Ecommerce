import type { Product } from '../../types/product'
import { formatPKR } from '../../utils/format'
import { getEffectivePrice } from '../../data/products'

export function Price({ product, className = '' }: { product: Product; className?: string }) {
  const current = getEffectivePrice(product)
  const onSale = product.salePrice !== undefined && product.salePrice < product.price

  return (
    <p className={`flex flex-wrap items-baseline gap-2 ${className}`}>
      <span className="font-medium text-forest">{formatPKR(current)}</span>
      {onSale ? (
        <span className="text-sm text-ink/50 line-through">{formatPKR(product.price)}</span>
      ) : null}
    </p>
  )
}
