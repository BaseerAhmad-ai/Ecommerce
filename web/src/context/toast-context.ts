import { createContext } from 'react'

export type ToastContextValue = {
  notify: (message: string) => void
}

export const ToastContext = createContext<ToastContextValue | null>(null)
