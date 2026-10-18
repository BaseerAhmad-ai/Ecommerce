export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
} as const

export const isEmailJsConfigured = Object.values(emailJsConfig).every(
  (value) => typeof value === 'string' && value.length > 0,
)
