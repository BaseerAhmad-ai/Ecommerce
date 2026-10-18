import type { Product } from '../../types/product'
import { ProductCard } from './ProductCard'

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-forest/20 bg-white px-6 py-16 text-center">
        <h2 className="font-serif text-2xl text-forest">No products match these filters</h2>
        <p className="mt-2 text-ink/70">Try a different search, category, or price range.</p>
      </div>
    )
  }

  return (
    <ul className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <li key={product.id} className="h-full">
          <ProductCard product={product} index={index} />
        </li>
      ))}
    </ul>
  )
}
