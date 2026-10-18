import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router'
import { ProductFilters } from '../components/products/ProductFilters'
import { ProductGrid } from '../components/products/ProductGrid'
import { SeoMetadata } from '../components/layout/SeoMetadata'
import { store } from '../config/store'
import { categoryLabels } from '../data/products'
import {
  PRICE_BOUNDS,
  useProductFilters,
  type FilterState,
  type SortOption,
} from '../hooks/useProductFilters'
import type { ProductCategory } from '../types/product'

function parseCategory(value: string | null): FilterState['category'] {
  if (value === 'soaps' || value === 'oils') return value
  return 'all'
}

function parseSort(value: string | null): SortOption {
  if (value === 'price-asc' || value === 'price-desc' || value === 'name-asc' || value === 'featured') {
    return value
  }
  return 'featured'
}

export function ShopPage() {
  const [params, setParams] = useSearchParams()
  const [priceRange, setPriceRange] = useState({
    min: PRICE_BOUNDS.min,
    max: PRICE_BOUNDS.max,
  })

  const filters: FilterState = {
    query: params.get('q') ?? '',
    category: parseCategory(params.get('category')),
    minPrice: priceRange.min,
    maxPrice: priceRange.max,
    featuredOnly: params.get('featured') === 'true',
    sort: parseSort(params.get('sort')),
  }

  const results = useProductFilters(filters)

  const heading = useMemo(() => {
    if (filters.category === 'all') return 'Shop'
    return categoryLabels[filters.category as ProductCategory]
  }, [filters.category])

  const onChange = (next: FilterState) => {
    setPriceRange({ min: next.minPrice, max: next.maxPrice })
    const nextParams = new URLSearchParams()
    if (next.category !== 'all') nextParams.set('category', next.category)
    if (next.query.trim()) nextParams.set('q', next.query.trim())
    if (next.featuredOnly) nextParams.set('featured', 'true')
    if (next.sort !== 'featured') nextParams.set('sort', next.sort)
    setParams(nextParams, { replace: true })
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <SeoMetadata
        title={
          filters.category === 'soaps'
            ? `Handmade Soaps in Pakistan | ${store.brandName}`
            : filters.category === 'oils'
              ? `Natural Oils in Pakistan | ${store.brandName}`
              : `Shop Handmade Soaps & Natural Oils | ${store.brandName}`
        }
        description={
          filters.category === 'soaps'
            ? 'Browse U&M handmade soap bars, including charcoal, rice, orange, rosemary, coffee, and lemon. View sizes, prices, and availability.'
            : filters.category === 'oils'
              ? 'Explore U&M hair and botanical oils, including U&M blended oil, rosemary oil, and coconut oil. View sizes, prices, and availability.'
              : 'Shop U&M handmade soaps and natural oils. Browse product details, sizes, prices, and availability, with delivery across Pakistan.'
        }
        canonicalPath={filters.category === 'all' ? '/shop' : `/shop?category=${filters.category}`}
      />
      <h1 className="font-serif text-4xl text-forest">{heading}</h1>
      <p className="mt-2 max-w-2xl text-ink/70">
        Explore handmade soaps and natural oils for your daily routine. Browse by name, category, or
        price to find what you need.
      </p>
      <div className="mt-6">
        <ProductFilters filters={filters} onChange={onChange} resultCount={results.length} />
      </div>
      <div className="mt-8">
        <ProductGrid products={results} />
      </div>
    </div>
  )
}
