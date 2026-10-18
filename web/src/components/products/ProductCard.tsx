import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Plus } from 'lucide-react'
import { Link } from 'react-router'
import { useCart } from '../../hooks/useCart'
import { categoryLabels } from '../../data/products'
import type { Product } from '../../types/product'
import { Button } from '../ui/Button'
import { Price } from '../ui/Price'
import { ProductImage } from '../ui/ProductImage'

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addItem } = useCart()
  const reduceMotion = useReducedMotion()
  const onSale = product.salePrice !== undefined && product.salePrice < product.price

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: reduceMotion ? 0 : Math.min(index, 7) * 0.05 }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-forest/10 bg-white shadow-[0_8px_28px_rgba(38,59,49,0.055)] transition duration-300 hover:-translate-y-1 hover:border-forest/20 hover:shadow-[0_20px_48px_rgba(38,59,49,0.13)]"
    >
      <Link
        to={`/product/${product.id}`}
        aria-label={`View ${product.name}`}
        className="relative block w-full overflow-hidden bg-beige"
      >
        <ProductImage
          src={product.image}
          alt={product.imageAlt}
          className="block aspect-[4/3] w-full bg-beige object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute left-2 top-2 rounded-full border border-white/50 bg-cream/90 px-2.5 py-1 text-[9px] font-semibold tracking-[0.1em] text-forest uppercase shadow-sm backdrop-blur">
          {categoryLabels[product.category]}
        </span>
        {onSale ? (
          <span className="absolute right-2 top-2 rounded-full bg-brass px-2.5 py-1 text-[9px] font-semibold tracking-[0.1em] text-white uppercase shadow-sm">
            Special price
          </span>
        ) : null}
        {!product.available ? (
          <span className="absolute right-2 top-2 rounded-full bg-ink/85 px-2.5 py-1 text-[9px] font-semibold tracking-[0.1em] text-cream uppercase shadow-sm">
            Unavailable
          </span>
        ) : null}
        <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-cream text-forest opacity-0 shadow-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={17} aria-hidden="true" />
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-3">
        <div className="flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-base leading-tight text-forest">
              <Link
                to={`/product/${product.id}`}
                className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
              >
                {product.name}
              </Link>
            </h3>
            <span className="shrink-0 rounded-full bg-cream px-2 py-0.5 text-[10px] font-medium text-ink/65">
              {product.category === 'soaps' ? '100g' : '100ml'}
            </span>
          </div>
          <p className="mt-1 min-h-9 text-xs leading-4 text-ink/65 line-clamp-2">
            {product.shortDescription}
          </p>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-forest/10 pt-3">
          <span className="text-[9px] font-semibold tracking-[0.14em] text-ink/50 uppercase">Price</span>
          <Price product={product} className="text-base" />
        </div>
        <div className="mt-3 flex flex-col gap-2 min-[420px]:flex-row">
          <Button
            variant="primary"
            className="min-h-9 w-full px-3 py-2 text-xs min-[420px]:flex-1"
            disabled={!product.available}
            onClick={() => addItem(product.id)}
          >
            <Plus size={14} strokeWidth={2.2} aria-hidden="true" />
            Add to bag
          </Button>
          <Link
            to={`/product/${product.id}`}
            aria-label={`View details for ${product.name}`}
            className="inline-flex min-h-9 w-full items-center justify-center gap-1 rounded-full border border-forest/15 px-3 py-2 text-xs font-medium text-forest transition hover:border-forest/30 hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest min-[420px]:w-9 min-[420px]:shrink-0 min-[420px]:px-0"
          >
            <span className="min-[420px]:sr-only">Details</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
