import { motion, useReducedMotion } from 'framer-motion'
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

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: reduceMotion ? 0 : Math.min(index, 7) * 0.05 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(23,63,43,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(23,63,43,0.12)]"
    >
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden bg-beige">
        <ProductImage
          src={product.image}
          alt={product.imageAlt}
          className="h-50 object-center w-[90%] object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium text-forest">
          {categoryLabels[product.category]}
        </span>
        {!product.available ? (
          <span className="absolute right-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs text-cream">
            Unavailable
          </span>
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex-1">
          <h3 className="font-serif text-xl text-forest">
            <Link
              to={`/product/${product.id}`}
              className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            >
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-ink/70">{product.shortDescription}</p>
        </div>
        <Price product={product} />
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button
            variant="primary"
            className="w-full sm:flex-1"
            disabled={!product.available}
            onClick={() => addItem(product.id)}
          >
            Add to cart
          </Button>
          <Link
            to={`/product/${product.id}`}
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-forest/20 px-4 py-2.5 text-sm font-medium text-forest transition hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest sm:w-auto sm:flex-none"
          >
            View details
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
