import { ButtonLink } from '../ui/Button'
import { FadeIn } from '../ui/FadeIn'
import { ProductImage } from '../ui/ProductImage'

export function AboutPreview() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
      <FadeIn>
        <ProductImage
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
          alt="Green plants in natural light"
          className="aspect-[4/3] w-full rounded-[2rem] object-cover"
        />
      </FadeIn>
      <FadeIn delay={0.08}>
        <p className="text-xs tracking-[0.22em] text-forest uppercase">Our story</p>
        <h2 className="mt-2 font-serif text-3xl text-forest sm:text-4xl">Made by hand, chosen with care.</h2>
        <p className="mt-4 max-w-lg leading-relaxed text-ink/75">
          PureHerbals is a small storefront for handmade soaps, natural oils, and a few everyday
          skincare essentials. We focus on clear product details, straightforward ordering, and
          delivery within Pakistan. Ingredient lists and batch notes can be requested before you buy.
        </p>
        <p className="mt-3 max-w-lg leading-relaxed text-ink/75">
          This website is a frontend demonstration. Prices, contact details, and WhatsApp numbers
          are placeholders until the store is configured.
        </p>
        <ButtonLink to="/about" variant="secondary" className="mt-6">
          Read more about us
        </ButtonLink>
      </FadeIn>
    </section>
  )
}
