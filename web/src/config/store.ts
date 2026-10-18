/**
 * Storefront settings.
 * TODO: Load store settings from a backend/CMS when available.
 */
export const store = {
  brandName: 'U&M',
  tagline: 'Handmade soaps and natural oils',
  description: 'Discover handmade soaps and natural oils crafted with care for everyday routines. Thoughtful, nature-inspired essentials delivered across Pakistan.',
  currency: 'PKR',
  locale: 'en-PK',
  /** WhatsApp number in international format, digits only. */
  whatsappNumber: '923392143060',
  contactEmailDisplay: 'umorganics@gmail.com',
  contactEmail: 'uzmamoiz19@gmail.com',
  phoneDisplay: '+920000000000',
  addressLine: 'Islamabad, Pakistan',
  announcement: 'Naturally Made. Thoughtfully Crafted.',
  deliveryFee: 300,
  freeDeliveryQuantity: 20,
  maxQuantityPerItem: 100,
  social: {
    instagram: 'https://www.instagram.com/uzmashahzadi32/',
    facebook: 'https://web.facebook.com/uzma.shahzadi.278247',
  },
} as const

export type StoreConfig = typeof store

export function isWhatsAppConfigured(number: string = store.whatsappNumber): boolean {
  return /^\d{10,15}$/.test(number) && !/x/i.test(number)
}
