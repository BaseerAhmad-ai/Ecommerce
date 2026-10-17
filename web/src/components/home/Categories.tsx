import { Link } from 'react-router'
import { FadeIn } from '../ui/FadeIn'
import { ProductImage } from '../ui/ProductImage'

const categories = [
  {
    to: '/shop?category=soaps',
    title: 'Handmade Soaps',
    copy: 'Small-batch bars for daily washing.',
    image:
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80',
    alt: 'Stacked handmade soap bars',
  },
  {
    to: '/shop?category=oils',
    title: 'Natural Oils',
    copy: 'Bottled oils for simple personal care.',
    image:
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80',
    alt: 'Amber bottles of natural oil',
  },
  {
    to: '/shop?category=skincare',
    title: 'Skincare Essentials',
    copy: 'A short selection of creams and mists.',
    image:
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80',
    alt: 'Skincare bottles on a marble surface',
  },
]

export function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="categories-heading">
      <FadeIn>
        <h2 id="categories-heading" className="font-serif text-3xl text-forest sm:text-4xl">
          Shop by category
        </h2>
        <p className="mt-2 max-w-xl text-ink/70">Choose a collection to filter the catalog.</p>
      </FadeIn>
      <ul className="mt-8 grid gap-5 md:grid-cols-3">
        {categories.map((category, index) => (
          <FadeIn key={category.title} as="li" delay={index * 0.08}>
            <Link
              to={category.to}
              className="group block overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(23,63,43,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            >
              <ProductImage
                src={category.image}
                alt={category.alt}
                className="aspect-16/10 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="p-5">
                <h3 className="font-serif text-2xl text-forest">{category.title}</h3>
                <p className="mt-1 text-sm text-ink/70">{category.copy}</p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </ul>
    </section>
  )
}
