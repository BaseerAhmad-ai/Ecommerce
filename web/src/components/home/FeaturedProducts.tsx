import { getFeaturedProducts } from '../../data/products'
import { ProductGrid } from '../products/ProductGrid'
import { ButtonLink } from '../ui/Button'
import { FadeIn } from '../ui/FadeIn'

export function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 8)

  return (
    <section className="bg-white/50 py-16" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="featured-heading" className="font-serif text-3xl text-forest sm:text-4xl">
              Featured products
            </h2>
            <p className="mt-2 max-w-xl text-ink/70">A short selection from the current demo catalog.</p>
          </div>
          <ButtonLink to="/shop" variant="ghost">
            Browse the full catalog
          </ButtonLink>
        </FadeIn>
        <div className="mt-8">
          <ProductGrid products={featured} />
        </div>
      </div>
    </section>
  )
}
