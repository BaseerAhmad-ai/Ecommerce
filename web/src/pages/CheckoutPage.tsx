import { useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import { CartSummary } from '../components/cart/CartSummary'
import { Button, ButtonLink } from '../components/ui/Button'
import { isWhatsAppConfigured, store } from '../config/store'
import { useCart } from '../hooks/useCart'
import { formatPKR } from '../utils/format'
import { isNonEmpty, isValidEmail, isValidPakistaniPhone } from '../utils/validation'
import { buildOrderMessage, getWhatsAppUrl, type CheckoutDetails } from '../utils/whatsapp'

type FieldErrors = Partial<Record<keyof CheckoutDetails, string>>

const empty: CheckoutDetails = {
  fullName: '',
  phone: '',
  email: '',
  city: '',
  address: '',
  notes: '',
}

export function CheckoutPage() {
  const { resolved, totals } = useCart()
  const [details, setDetails] = useState<CheckoutDetails>(empty)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [openedWhatsApp, setOpenedWhatsApp] = useState(false)
  const configured = isWhatsAppConfigured()

  const message = useMemo(
    () =>
      buildOrderMessage({
        details,
        lines: resolved,
        subtotal: totals.subtotal,
        deliveryFee: totals.deliveryFee,
        total: totals.total,
      }),
    [details, resolved, totals],
  )

  const validate = (next: CheckoutDetails): FieldErrors => {
    const nextErrors: FieldErrors = {}
    if (!isNonEmpty(next.fullName)) nextErrors.fullName = 'Enter your full name.'
    if (!isValidPakistaniPhone(next.phone)) {
      nextErrors.phone = 'Enter a Pakistani mobile number such as 03XX XXXXXXX or +92 3XX XXXXXXX.'
    }
    if (next.email.trim() && !isValidEmail(next.email)) {
      nextErrors.email = 'Enter a valid email, or leave this field empty.'
    }
    if (!isNonEmpty(next.city)) nextErrors.city = 'Enter your city.'
    if (next.address.trim().length < 8) nextErrors.address = 'Enter a complete delivery address.'
    return nextErrors
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const nextErrors = validate(details)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    if (!configured) return

    const url = getWhatsAppUrl(message)
    if (!url) return
    // TODO: Submit orders to a backend and add payment + inventory sync when available.
    window.open(url, '_blank', 'noopener,noreferrer')
    setOpenedWhatsApp(true)
  }

  if (resolved.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <title>{`Checkout — ${store.brandName}`}</title>
        <h1 className="font-serif text-3xl text-forest">Your cart is empty</h1>
        <p className="mt-3 text-ink/70">Add products before checkout.</p>
        <ButtonLink to="/shop" className="mt-6">
          Continue shopping
        </ButtonLink>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <title>{`Checkout — ${store.brandName}`}</title>
      <h1 className="font-serif text-4xl text-forest">Checkout</h1>
      <p className="mt-2 max-w-2xl text-ink/70">
        Orders are sent on WhatsApp from this frontend. Opening the chat does not confirm the order
        until you send the message.
      </p>
      {!configured ? (
        <p className="mt-4 rounded-xl border border-dashed border-forest/30 bg-white px-4 py-3 text-sm text-forest" role="status">
          Development warning: WhatsApp number is a placeholder. Replace <code>whatsappNumber</code> in{' '}
          <code>src/config/store.ts</code> with digits only, for example 923001234567.
        </p>
      ) : null}

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_22rem]">
        <form onSubmit={onSubmit} noValidate className="rounded-2xl bg-white p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="fullName"
              label="Full name"
              value={details.fullName}
              error={errors.fullName}
              autoComplete="name"
              onChange={(value) => setDetails((current) => ({ ...current, fullName: value }))}
            />
            <Field
              id="phone"
              label="Phone number"
              value={details.phone}
              error={errors.phone}
              autoComplete="tel"
              onChange={(value) => setDetails((current) => ({ ...current, phone: value }))}
            />
            <Field
              id="email"
              label="Email (optional)"
              type="email"
              value={details.email}
              error={errors.email}
              autoComplete="email"
              onChange={(value) => setDetails((current) => ({ ...current, email: value }))}
            />
            <Field
              id="city"
              label="City"
              value={details.city}
              error={errors.city}
              autoComplete="address-level2"
              onChange={(value) => setDetails((current) => ({ ...current, city: value }))}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-forest">
              Complete delivery address
            </label>
            <textarea
              id="address"
              rows={3}
              value={details.address}
              autoComplete="street-address"
              onChange={(event) => setDetails((current) => ({ ...current, address: event.target.value }))}
              className="w-full rounded-xl border border-forest/15 bg-cream px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-forest"
              required
            />
            {errors.address ? (
              <p className="mt-1 text-sm text-ink" role="alert">
                {errors.address}
              </p>
            ) : null}
          </div>
          <div className="mt-4">
            <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-forest">
              Order notes (optional)
            </label>
            <textarea
              id="notes"
              rows={3}
              value={details.notes}
              onChange={(event) => setDetails((current) => ({ ...current, notes: event.target.value }))}
              className="w-full rounded-xl border border-forest/15 bg-cream px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-forest"
            />
          </div>
          <Button type="submit" className="mt-6 w-full sm:w-auto" disabled={!configured}>
            Review and send on WhatsApp
          </Button>
          {openedWhatsApp ? (
            <p className="mt-3 rounded-xl bg-sage/40 px-3 py-2 text-sm text-forest" role="status">
              WhatsApp should now be open with your order summary. Please send the message to submit
              the request. This is not an automatic confirmation, payment, or delivery booking.
            </p>
          ) : null}
        </form>

        <aside className="h-fit rounded-2xl bg-white p-5">
          <h2 className="font-serif text-2xl text-forest">Order summary</h2>
          <ul className="mt-4 divide-y divide-forest/10 text-sm">
            {resolved.map((line) => (
              <li key={line.product.id} className="flex justify-between gap-3 py-3">
                <span>
                  {line.product.name} × {line.quantity}
                </span>
                <span>{formatPKR(line.lineTotal)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <CartSummary />
          </div>
          <Link to="/cart" className="mt-4 inline-flex min-h-11 items-center text-sm text-forest underline">
            Edit cart
          </Link>
        </aside>
      </div>
    </div>
  )
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
  autoComplete,
}: {
  id: keyof CheckoutDetails
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
  autoComplete?: string
}) {
  return (
    <div className="sm:col-span-1">
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-forest">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full rounded-xl border border-forest/15 bg-cream px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-forest"
      />
      {error ? (
        <p className="mt-1 text-sm text-ink" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
