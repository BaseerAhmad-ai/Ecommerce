import { store } from '../config/store'
import { ProductImage } from '../components/ui/ProductImage'

export function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <title>{`About — ${store.brandName}`}</title>
      <p className="text-xs tracking-[0.22em] text-forest uppercase">About</p>
      <h1 className="mt-2 font-serif text-4xl text-forest">Handmade soaps and natural oils, chosen with care.</h1>
      <ProductImage
        src="https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1400&q=80"
        alt="Handmade soap making workspace with botanicals"
        className="mt-8 aspect-[16/9] w-full rounded-[1.5rem] object-cover"
      />
      <div className="mt-8 space-y-4 leading-relaxed text-ink/80">
        <p>
          {store.brandName} is a handmade soap and natural oils store serving customers in Pakistan.
          The catalog focuses on everyday personal care: bars you can wash with, oils you can use
          in simple routines, and a short list of extras such as mists and body butter.
        </p>
        <p>
          We keep the language honest. Listings describe scent, size, and intended use. They do not
          claim organic certifications, clinical results, or medical benefits. If you need a current
          ingredient list, ask before you order.
        </p>
        <p>
          This website is a frontend demonstration. Cart items stay in your browser, and orders are
          sent through WhatsApp once a real number is configured. A future backend can replace the
          static product file without redesigning the storefront.
        </p>
      </div>
    </article>
  )
}
