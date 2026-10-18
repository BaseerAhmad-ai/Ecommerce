import { FAQAccordion } from '../components/home/FAQAccordion'
import { SeoMetadata } from '../components/layout/SeoMetadata'

export function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <SeoMetadata
        title={`FAQs | U&M Soaps, Oils, Orders & Delivery`}
        description="Find answers about U&M handmade soaps and natural oils, product sizes, availability, ordering, delivery, and contacting the store."
      />
      <h1 className="font-serif text-4xl text-forest">Frequently asked questions</h1>
      <p className="mt-3 text-ink/70">Ordering, products, delivery, and how to reach the store.</p>
      <div className="mt-8">
        <FAQAccordion />
      </div>
    </div>
  )
}
