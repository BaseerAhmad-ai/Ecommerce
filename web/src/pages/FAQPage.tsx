import { FAQAccordion } from '../components/home/FAQAccordion'
import { store } from '../config/store'

export function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <title>{`FAQs — ${store.brandName}`}</title>
      <h1 className="font-serif text-4xl text-forest">Frequently asked questions</h1>
      <p className="mt-3 text-ink/70">Ordering, products, delivery, and how to reach the store.</p>
      <div className="mt-8">
        <FAQAccordion />
      </div>
    </div>
  )
}
