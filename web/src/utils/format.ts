import { store } from '../config/store'

export function formatPKR(amount: number): string {
  return new Intl.NumberFormat(store.locale, {
    style: 'currency',
    currency: store.currency,
    maximumFractionDigits: 0,
  }).format(amount)
}
