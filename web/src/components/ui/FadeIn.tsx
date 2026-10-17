import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li'
}

export function FadeIn({ children, className, delay = 0, as = 'div' }: FadeInProps) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as]

  if (reduceMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
