/**
 * Editable storefront settings. Replace placeholders before going live.
 * TODO: Load store settings from a backend/CMS when available.
 */
export const store = {
  brandName: 'U&M',
  tagline: 'Handmade soaps and natural oils',
  description:"Discover handmade soaps and natural oils crafted with care for your everyday self-care routine.Shop nature-inspired personal care products delivered across Pakistan.",
  currency: 'PKR',
  locale: 'en-PK',
  /** Replace with a real WhatsApp number in international format, digits only. Example: 923001234567 */
  whatsappNumber: '923392143060',
  contactEmailDisplay: 'hello@organics.com',
  contactEmail: 'uzmamoiz19@gmail.com',
  phoneDisplay: '+92 300 0000000',
  addressLine: 'Islamabad, Pakistan',
  announcement: 'Naturally Made. Thoughtfully Crafted.',
  deliveryFee: 250,
  freeDeliveryThreshold: 5000,
  maxQuantityPerItem: 12,
  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
  },
} as const

export type StoreConfig = typeof store

export function isWhatsAppConfigured(number: string = store.whatsappNumber): boolean {
  return /^\d{10,15}$/.test(number) && !/x/i.test(number)
}
