import { ContactForm } from '../components/home/ContactForm'
import { store } from '../config/store'

export function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <title>{`Contact — ${store.brandName}`}</title>
      <h1 className="font-serif text-4xl text-forest">Contact</h1>
      <p className="mt-3 max-w-xl text-ink/70">
        Use the form for a frontend demo response, or WhatsApp once the store number is configured.
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  )
}
