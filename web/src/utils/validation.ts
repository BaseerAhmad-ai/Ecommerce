export function normalizePhone(value: string): string {
  return value.replace(/[\s()-]/g, '')
}

/** Pakistani mobile numbers: 03XXXXXXXXX, +923XXXXXXXXX, or 923XXXXXXXXX */
export function isValidPakistaniPhone(value: string): boolean {
  const phone = normalizePhone(value)
  return /^(?:\+92|92|0)?3\d{9}$/.test(phone)
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function isNonEmpty(value: string): boolean {
  return value.trim().length > 1
}
