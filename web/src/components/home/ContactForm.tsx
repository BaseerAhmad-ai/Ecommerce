import { MessageCircle } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { isWhatsAppConfigured, store } from '../../config/store'
import { isNonEmpty, isValidEmail, isValidPakistaniPhone } from '../../utils/validation'
import { Button } from '../ui/Button'
import { SocialLinks } from '../ui/SocialLinks'
import emailjs from '@emailjs/browser'

type FormState = {
  name: string
  email: string
  message: string
  whatsapp: string
}

const empty: FormState = { name: '', email: '', message: '', whatsapp: '' }

export function ContactForm() {
  const [values, setValues] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)
  const whatsappReady = isWhatsAppConfigured()
  const whatsappHref = whatsappReady
    ? `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(`Hello ${store.brandName}, I have a question about your products.`)}`
    : null

  const validate = (next: FormState) => {
    const nextErrors: Partial<FormState> = {}
    if (!isNonEmpty(next.name)) nextErrors.name = 'Please enter your name.'
    if (!isNonEmpty(next.whatsapp)) nextErrors.whatsapp = 'Please enter your WhatsApp number.'
    if (!isValidPakistaniPhone(next.whatsapp)) nextErrors.whatsapp = 'Please enter a valid WhatsApp number.'
    if (!isValidEmail(next.email)) nextErrors.email = 'Please enter a valid email address.'
    if (next.message.trim().length < 8) nextErrors.message = 'Please write a short message.'
    return nextErrors
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }
    // TODO: Submit contact messages to a backend when available.
    emailjs.send("service_2h3wlal","template_hzj4803",{
      name:values.name,
      email: values.email,
      message: values.message,
      whatsapp:parseInt(values.whatsapp),
    },'uY1ZDONOFzZYNibcw');
    setSubmitted(true)
    setValues(empty)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form onSubmit={onSubmit} noValidate className="rounded-2xl bg-white p-5 sm:p-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-forest">
              Full name
            </label>
            <input
              id="contact-name"
              value={values.name}
              onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
              className="h-11 w-full rounded-xl border border-forest/15 bg-cream px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-forest"
              autoComplete="name"
              required
            />
            {errors.name ? (
              <p className="mt-1 text-sm text-ink" role="alert">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-forest">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={values.email}
              onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
              className="h-11 w-full rounded-xl border border-forest/15 bg-cream px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-forest"
              autoComplete="email"
              required
            />
            {errors.email ? (
              <p className="mt-1 text-sm text-ink" role="alert">
                {errors.email}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="contact-whatsapp" className="mb-1.5 block text-sm font-medium text-forest">
              WhatsApp
            </label>
            <input
              id="contact-whatsapp"
              type="tel"
              value={values.whatsapp}
              onChange={(event) => setValues((current) => ({ ...current, whatsapp: event.target.value }))}
              className="h-11 w-full rounded-xl border border-forest/15 bg-cream px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-forest"
              autoComplete="whatsapp"
              pattern="^\+[1-9]\d{7,14}$"
              required
            />
            {errors.whatsapp ? (
              <p className="mt-1 text-sm text-ink" role="alert">
                {errors.whatsapp}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-forest">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              value={values.message}
              onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
              className="w-full rounded-xl border border-forest/15 bg-cream px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-forest"
              required
            />
            {errors.message ? (
              <p className="mt-1 text-sm text-ink" role="alert">
                {errors.message}
              </p>
            ) : null}
          </div>
        </div>
        <Button type="submit" className="mt-5">
          Send message
        </Button>
        {submitted ? (
          <p className="mt-3 rounded-xl bg-sage/40 px-3 py-2 text-sm text-forest" role="status">
            Thank you for your message! We will get back to you as soon as possible.
          </p>
        ) : null}
      </form>
      <div>
        <p className="text-sm text-ink/75">
          Email placeholder:{' '}
          <a className="underline underline-offset-4" href={`mailto:${store.contactEmail}`}>
            {store.contactEmailDisplay}
          </a>
        </p>
        <p className="mt-2 text-sm text-ink/75">{store.addressLine}</p>
        {whatsappHref ? (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-forest"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Message on WhatsApp
          </a>
        ) : null}
        <SocialLinks className="mt-6" />
      </div>
    </div>
  )
}
