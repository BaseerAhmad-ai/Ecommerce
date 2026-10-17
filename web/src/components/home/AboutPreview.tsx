import { ButtonLink } from '../ui/Button'
import { FadeIn } from '../ui/FadeIn'
import { ProductImage } from '../ui/ProductImage'
import { store } from '../../config/store'

export function AboutPreview() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
      <FadeIn>
        <ProductImage
          src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&crop=center&w=1400&q=88"
          alt="Natural oil and coconut ingredients arranged together"
          className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[0_20px_55px_rgba(38,59,49,0.12)]"
        />
      </FadeIn>
      <FadeIn delay={0.08}>
        <p className="text-xs tracking-[0.22em] text-forest uppercase">Our story</p>
        <h2 className="mt-2 font-serif text-3xl text-forest sm:text-4xl">Made by hand, chosen with care.</h2>
        <p className="mt-4 max-w-lg leading-relaxed text-ink/75">
          {`At ${store.brandName}, we offer handmade soaps and natural oils for everyday care. Browse product sizes, prices, and availability, and contact us with questions about ingredients or a current batch.`}
        </p>
        <ButtonLink to="/about" variant="secondary" className="mt-6">
          Read more about us
        </ButtonLink>
      </FadeIn>
    </section>
  )
}
