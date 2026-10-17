import { Mail, MapPin, MessageCircle } from 'lucide-react'
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
const inputClass =
  'h-12 w-full rounded-xl border border-forest/15 bg-cream px-4 text-sm text-ink outline-none transition placeholder:text-ink/40 hover:border-forest/30 focus:border-forest/40 focus:bg-white focus:ring-2 focus:ring-forest/10'

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
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-forest">
                Full name
              </label>
              <input
                id="contact-name"
                value={values.name}
                onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
                className={inputClass}
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                required
              />
              {errors.name ? (
                <p id="contact-name-error" className="mt-1 text-sm text-red-700" role="alert">
                  {errors.name}
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
                className={inputClass}
                autoComplete="tel"
                placeholder="03XX XXXXXXX"
                aria-invalid={Boolean(errors.whatsapp)}
                aria-describedby={errors.whatsapp ? 'contact-whatsapp-error' : undefined}
                required
              />
              {errors.whatsapp ? (
                <p id="contact-whatsapp-error" className="mt-1 text-sm text-red-700" role="alert">
                  {errors.whatsapp}
                </p>
              ) : null}
            </div>
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
              className={inputClass}
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              required
            />
            {errors.email ? (
              <p id="contact-email-error" className="mt-1 text-sm text-red-700" role="alert">
                {errors.email}
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
              className="w-full resize-y rounded-xl border border-forest/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink/40 hover:border-forest/30 focus:border-forest/40 focus:bg-white focus:ring-2 focus:ring-forest/10"
              required
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
            />
            {errors.message ? (
              <p id="contact-message-error" className="mt-1 text-sm text-red-700" role="alert">
                {errors.message}
              </p>
            ) : null}
          </div>
        </div>
        <Button type="submit" className="mt-6 w-full sm:w-auto">
          Send message
        </Button>
        {submitted ? (
          <p className="mt-3 rounded-xl bg-sage/40 px-3 py-2 text-sm text-forest" role="status">
            Thank you for your message! We will get back to you as soon as possible.
          </p>
        ) : null}
      </form>
      <div className="relative isolate overflow-hidden rounded-2xl bg-forest p-6 text-cream sm:p-8">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full border border-cream/10"
        />
        <div
          aria-hidden="true"
          className="absolute -right-7 -top-7 -z-10 h-40 w-40 rounded-full border border-cream/10"
        />
        <p className="text-xs font-semibold tracking-[0.2em] text-cream/60 uppercase">
          Contact details
        </p>
        <h2 className="mt-2 font-serif text-3xl">Let’s talk</h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/75">
          We’re happy to help with product questions, ingredients, or your order.
        </p>
        <div className="mt-8 space-y-5">
          <a
            href={`mailto:${store.contactEmail}`}
            className="group flex items-start gap-3 rounded-xl border border-cream/10 bg-white/5 p-4 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/10 text-cream">
              <Mail size={18} aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-medium tracking-wide text-cream/60 uppercase">
                Email us
              </span>
              <span className="mt-1 block break-all text-sm font-medium text-cream">
                {store.contactEmailDisplay}
              </span>
            </span>
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('House 10, Street 135, G-13/4, Islamabad, Pakistan')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-3 rounded-xl border border-cream/10 bg-white/5 p-4 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            aria-label="View Islamabad, Pakistan on Google Maps"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/10 text-cream">
              <MapPin size={18} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs font-medium tracking-wide text-cream/60 uppercase">
                Location
              </span>
              <span className="mt-1 block text-sm font-medium text-cream">Islamabad, Pakistan</span>
            </span>
          </a>
        </div>
        {whatsappHref ? (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-forest transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream sm:w-auto"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Chat with us
          </a>
        ) : null}
        <div className="mt-7 border-t border-cream/15 pt-5">
          <p className="mb-3 text-xs font-medium tracking-wide text-cream/60 uppercase">
            Follow along
          </p>
          <SocialLinks className="text-cream" />
        </div>
      </div>
    </div>
  )
}
