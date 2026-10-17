import { categoryLabels } from '../../data/products'
import type { ProductCategory } from '../../types/product'
import { PRICE_BOUNDS, type FilterState, type SortOption } from '../../hooks/useProductFilters'
import { Button } from '../ui/Button'

type ProductFiltersProps = {
  filters: FilterState
  onChange: (next: FilterState) => void
  resultCount: number
}

const categories: Array<{ value: FilterState['category']; label: string }> = [
  { value: 'all', label: 'All products' },
  { value: 'soaps', label: categoryLabels.soaps },
  { value: 'oils', label: categoryLabels.oils },
  { value: 'skincare', label: categoryLabels.skincare },
]

export function ProductFilters({ filters, onChange, resultCount }: ProductFiltersProps) {
  const update = (partial: Partial<FilterState>) => onChange({ ...filters, ...partial })

  const clear = () =>
    onChange({
      query: '',
      category: 'all',
      minPrice: PRICE_BOUNDS.min,
      maxPrice: PRICE_BOUNDS.max,
      featuredOnly: false,
      sort: 'featured',
    })

  return (
    <form
      className="rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgba(23,63,43,0.05)] md:p-5"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        <div className="flex-1">
          <label htmlFor="product-search" className="mb-1.5 block text-sm font-medium text-forest">
            Search by name
          </label>
          <input
            id="product-search"
            type="search"
            value={filters.query}
            onChange={(event) => update({ query: event.target.value })}
            placeholder="Try lavender, coconut, neem"
            className="h-11 w-full rounded-full border border-forest/15 bg-cream px-4 text-sm text-ink outline-none focus-visible:ring-2 focus-visible:ring-forest"
          />
        </div>
        <div className="sm:w-56">
          <label htmlFor="product-category" className="mb-1.5 block text-sm font-medium text-forest">
            Category
          </label>
          <select
            id="product-category"
            value={filters.category}
            onChange={(event) => update({ category: event.target.value as ProductCategory | 'all' })}
            className="h-11 w-full rounded-full border border-forest/15 bg-cream px-4 text-sm text-ink outline-none focus-visible:ring-2 focus-visible:ring-forest"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:w-52">
          <label htmlFor="product-sort" className="mb-1.5 block text-sm font-medium text-forest">
            Sort
          </label>
          <select
            id="product-sort"
            value={filters.sort}
            onChange={(event) => update({ sort: event.target.value as SortOption })}
            className="h-11 w-full rounded-full border border-forest/15 bg-cream px-4 text-sm text-ink outline-none focus-visible:ring-2 focus-visible:ring-forest"
          >
            <option value="featured">Featured first</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="name-asc">Name: A to Z</option>
          </select>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <fieldset>
          <legend className="mb-1.5 text-sm font-medium text-forest">Price range (PKR)</legend>
          <div className="grid grid-cols-2 gap-3">
            <label className="text-xs text-ink/70">
              Min
              <input
                type="number"
                min={PRICE_BOUNDS.min}
                max={filters.maxPrice}
                value={filters.minPrice}
                onChange={(event) =>
                  update({ minPrice: Math.max(PRICE_BOUNDS.min, Number(event.target.value) || 0) })
                }
                className="mt-1 h-11 w-full rounded-full border border-forest/15 bg-cream px-4 text-sm text-ink outline-none focus-visible:ring-2 focus-visible:ring-forest"
              />
            </label>
            <label className="text-xs text-ink/70">
              Max
              <input
                type="number"
                min={filters.minPrice}
                max={PRICE_BOUNDS.max}
                value={filters.maxPrice}
                onChange={(event) =>
                  update({
                    maxPrice: Math.min(PRICE_BOUNDS.max, Number(event.target.value) || PRICE_BOUNDS.max),
                  })
                }
                className="mt-1 h-11 w-full rounded-full border border-forest/15 bg-cream px-4 text-sm text-ink outline-none focus-visible:ring-2 focus-visible:ring-forest"
              />
            </label>
          </div>
        </fieldset>
        <div className="flex flex-col justify-end gap-3 sm:flex-row sm:items-end">
          <label className="inline-flex min-h-11 items-center gap-2 text-sm text-ink">
            <input
              type="checkbox"
              checked={filters.featuredOnly}
              onChange={(event) => update({ featuredOnly: event.target.checked })}
              className="h-4 w-4 accent-forest"
            />
            Featured only
          </label>
          <Button variant="ghost" onClick={clear} className="sm:ml-auto">
            Clear all filters
          </Button>
        </div>
      </div>
      <p className="mt-3 text-sm text-ink/70" aria-live="polite">
        Showing {resultCount} {resultCount === 1 ? 'product' : 'products'}
      </p>
    </form>
  )
}
