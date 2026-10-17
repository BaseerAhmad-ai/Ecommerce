import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useCallback, useMemo, useRef, useState, type ReactNode } from 'react'
import { ToastContext } from './toast-context'

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null)
  const reduceMotion = useReducedMotion()
  const timeoutRef = useRef<number | null>(null)

  const notify = useCallback((next: string) => {
    setMessage(next)
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => setMessage(null), 2600)
  }, [])

  const value = useMemo(() => ({ notify }), [notify])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 bottom-5 z-70 flex justify-center px-0">
        <AnimatePresence>
          {message ? (
            <motion.p
              role="status"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              className="pointer-events-auto max-w-sm rounded-full bg-forest px-4 py-2.5 text-center text-sm text-cream shadow-lg"
            >
              {message}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}
