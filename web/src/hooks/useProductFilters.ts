import { useMemo } from 'react'
import { getEffectivePrice, products } from '../data/products'
import type { Product, ProductCategory } from '../types/product'

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc'

export type FilterState = {
  query: string
  category: ProductCategory | 'all'
  minPrice: number
  maxPrice: number
  featuredOnly: boolean
  sort: SortOption
}

export const PRICE_BOUNDS = {
  min: 0,
  max: 2000,
}

export function useProductFilters(filters: FilterState): Product[] {
  return useMemo(() => {
    const query = filters.query.trim().toLowerCase()

    const filtered = products.filter((product) => {
      if (query && !product.name.toLowerCase().includes(query)) return false
      if (filters.category !== 'all' && product.category !== filters.category) return false
      const price = getEffectivePrice(product)
      if (price < filters.minPrice || price > filters.maxPrice) return false
      if (filters.featuredOnly && !product.featured) return false
      return true
    })

    const sorted = [...filtered]
    switch (filters.sort) {
      case 'price-asc':
        sorted.sort((a, b) => getEffectivePrice(a) - getEffectivePrice(b))
        break
      case 'price-desc':
        sorted.sort((a, b) => getEffectivePrice(b) - getEffectivePrice(a))
        break
      case 'name-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        sorted.sort((a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name))
    }
    return sorted
  }, [filters])
}
