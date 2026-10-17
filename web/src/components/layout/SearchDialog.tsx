import { Search, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import { getEffectivePrice, products } from '../../data/products'
import { formatPKR } from '../../utils/format'
import { ProductImage } from '../ui/ProductImage'

export function SearchDialog({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const results = useMemo(() => {
    const value = query.trim().toLowerCase()
    if (!value) return products.slice(0, 6)
    return products.filter((product) => product.name.toLowerCase().includes(value)).slice(0, 8)
  }, [query])

  return (
    <div className="fixed inset-0 z-[60]">
      <button type="button" className="absolute inset-0 bg-ink/40" aria-label="Close search" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-title"
        className="absolute inset-x-3 top-16 mx-auto max-w-xl rounded-2xl bg-cream p-4 shadow-2xl sm:inset-x-auto sm:left-1/2 sm:w-full sm:-translate-x-1/2 sm:p-5"
      >
        <div className="flex items-center justify-between gap-3">
          <h2 id="search-title" className="font-serif text-xl text-forest">
            Search products
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full text-forest hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            aria-label="Close search"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
        <label htmlFor="global-search" className="sr-only">
          Product name
        </label>
        <div className="relative mt-3">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-forest/50" />
          <input
            ref={inputRef}
            id="global-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search soaps and oils"
            className="h-12 w-full rounded-full border border-forest/15 bg-white pl-11 pr-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-forest"
          />
        </div>
        <ul className="mt-3 max-h-80 overflow-y-auto">
          {results.length === 0 ? (
            <li className="px-2 py-8 text-center text-sm text-ink/70">No products found for that name.</li>
          ) : (
            results.map((product) => (
              <li key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                >
                  <ProductImage src={product.image} alt="" className="h-12 w-12 rounded-lg object-cover" />
                  <span className="flex-1 text-sm text-forest">{product.name}</span>
                  <span className="text-sm text-ink/70">{formatPKR(getEffectivePrice(product))}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
        <Link
          to="/shop"
          onClick={onClose}
          className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-forest underline-offset-4 hover:underline"
        >
          Browse the full catalog
        </Link>
      </div>
    </div>
  )
}
