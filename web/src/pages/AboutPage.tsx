import { store } from '../config/store'
import { ProductImage } from '../components/ui/ProductImage'
import { SeoMetadata } from '../components/layout/SeoMetadata'

export function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <SeoMetadata
        title={`About U&M | Handmade Soaps & Natural Oils`}
        description="Learn about U&M, a handmade soap and natural oils store serving customers in Pakistan from Islamabad."
        image="/about_us.webp"
      />
      <p className="text-xs tracking-[0.22em] text-forest uppercase">About</p>
      <h1 className="mt-2 font-serif text-4xl text-forest">Handmade soaps and natural oils, chosen with care.</h1>
      <ProductImage
        src="/about_us.webp"
        alt="U&M soaps and hair oil with botanical ingredients"
        className="mt-8 aspect-[16/9] w-full rounded-[1.5rem] object-cover object-top shadow-[0_20px_55px_rgba(38,59,49,0.12)]"
      />
      <div className="mt-8 space-y-4 leading-relaxed text-ink/80">
        <p>
          {store.brandName} is a handmade soap and natural oils store serving customers in Pakistan.
          Our catalog stays focused on handmade soap bars and natural oils for simple everyday
          routines.
        </p>
        <p>
          We keep the language honest. Listings describe scent, size, and intended use. They do not
          claim organic certifications, clinical results, or medical benefits. If you need a current
          ingredient list, ask before you order.
        </p>
        <p>
          Add the products you want to your cart and continue to checkout to send your order details
          to us by email and WhatsApp. Your order is confirmed after you send the WhatsApp message
          and hear back from the store.
        </p>
      </div>
    </article>
  )
}
