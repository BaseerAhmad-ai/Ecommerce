import { ContactForm } from '../components/home/ContactForm'
import { SeoMetadata } from '../components/layout/SeoMetadata'

export function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <SeoMetadata
        title={`Contact U&M | Handmade Soaps & Natural Oils`}
        description="Contact U&M in Islamabad, Pakistan, with questions about handmade soaps, natural oils, product availability, or an order."
      />
      <h1 className="font-serif text-4xl text-forest">Contact</h1>
      <p className="mt-3 max-w-xl text-ink/70">
        Get in touch with questions about our products or your order. Send us a message or contact us
        on WhatsApp.
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  )
}
