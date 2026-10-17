import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '../ui/FadeIn'
import { ProductImage } from '../ui/ProductImage'

const categories = [
  {
    to: '/shop?category=soaps',
    eyebrow: 'THE DAILY ESSENTIAL',
    title: 'Handmade Soaps',
    copy: 'Small-batch bars, made for slower and softer routines.',
    image:
      'https://images.unsplash.com/photo-1600857544200-b2f666a9e2ce?auto=format&fit=crop&crop=center&w=1100&q=88',
    alt: 'Stacked handmade soap bars',
    number: '01',
  },
  {
    to: '/shop?category=oils',
    eyebrow: 'BOTANICAL BLENDS',
    title: 'Natural Oils',
    copy: 'Nourishing oils to bring a little nature to your care.',
    image:
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&crop=center&w=1100&q=88',
    alt: 'Amber bottles of natural oil',
    number: '02',
  },
]

export function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16" aria-labelledby="categories-heading">
      <FadeIn className="mb-7 flex flex-col gap-4 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-brass uppercase">
            <span className="h-px w-8 bg-brass" />
            Find your everyday ritual
          </p>
          <h2 id="categories-heading" className="font-serif text-3xl leading-tight tracking-[-0.025em] text-forest sm:text-4xl">
            Shop by category
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-ink/65 sm:text-right">
          Thoughtful essentials, made to bring a little more nature into your day.
        </p>
      </FadeIn>
      <ul className="grid gap-5 md:grid-cols-2 md:gap-6">
        {categories.map((category, index) => (
          <FadeIn key={category.title} as="li" delay={index * 0.08}>
            <Link
              to={category.to}
              className="group relative isolate flex min-h-[19rem] overflow-hidden rounded-[1.5rem] bg-forest shadow-[0_16px_45px_rgba(38,59,49,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest sm:min-h-[23rem] sm:rounded-[1.75rem]"
            >
              <ProductImage
                src={category.image}
                alt={category.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#211b18]/85 via-[#211b18]/15 to-[#211b18]/10 transition-colors duration-500 group-hover:from-[#211b18]/90"
              />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-7">
                <span className="rounded-full border border-white/35 bg-[#211b18]/15 px-3.5 py-2 text-[9px] font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-sm sm:text-[10px]">
                  {category.eyebrow}
                </span>
                <span className="font-serif text-sm tracking-wide text-white/75">{category.number}</span>
              </div>
              <div className="relative mt-auto flex w-full items-end justify-between gap-4 p-5 sm:p-7">
                <div className="max-w-sm">
                  <h3 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-white sm:text-4xl">
                    {category.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/80 sm:text-base">
                    {category.copy}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="mb-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-forest"
                >
                  <ArrowUpRight size={20} strokeWidth={1.6} />
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </ul>
    </section>
  )
}
