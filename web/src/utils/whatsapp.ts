import { isWhatsAppConfigured, store } from '../config/store'
import type { Product } from '../types/product'
import { formatPKR } from './format'

export type CheckoutDetails = {
  fullName: string
  phone: string
  email: string
  city: string
  address: string
  notes: string
}

export type OrderLine = {
  product: Product
  quantity: number
  lineTotal: number
}

export function buildOrderMessage(params: {
  details: CheckoutDetails
  lines: OrderLine[]
  subtotal: number
  deliveryFee: number
  total: number
}): string {
  const itemLines = params.lines
    .map(
      (line) =>
        `• ${line.product.name} (${line.product.size})\n  ${formatPKR(line.lineTotal / line.quantity)} each × ${line.quantity} = ${formatPKR(line.lineTotal)}`,
    )
    .join('\n')

  const emailLine = params.details.email.trim()
    ? `Email: ${params.details.email.trim()}`
    : 'Email: not provided'
  const notesLine = params.details.notes.trim()
    ? `Notes: ${params.details.notes.trim()}`
    : 'Notes: none'

  return [
    `${store.brandName} order request`,
    '',
    'Customer',
    `Name: ${params.details.fullName.trim()}`,
    `Phone: ${params.details.phone.trim()}`,
    emailLine,
    `City: ${params.details.city.trim()}`,
    `Address: ${params.details.address.trim()}`,
    notesLine,
    '',
    'Items',
    itemLines,
    '',
    `Subtotal: ${formatPKR(params.subtotal)}`,
    `Delivery: ${formatPKR(params.deliveryFee)}`,
    `Total: ${formatPKR(params.total)}`,
    '',
    'This order request is prepared in the browser. Sending it by email or WhatsApp does not automatically confirm the order.',
  ].join('\n')
}

export function getWhatsAppUrl(message: string): string | null {
  if (!isWhatsAppConfigured()) return null
  return `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(message)}`
}
