import { Link } from 'react-router'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const styles: Record<Variant, string> = {
  primary:
    'bg-forest text-cream hover:bg-forest/90 focus-visible:outline-forest disabled:opacity-50',
  secondary:
    'bg-sage text-forest hover:bg-sage/80 focus-visible:outline-forest disabled:opacity-50',
  ghost:
    'bg-transparent text-forest border border-forest/20 hover:border-forest/40 hover:bg-white/60 focus-visible:outline-forest disabled:opacity-50',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:active:scale-100 min-h-11'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button type="button" className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({
  to,
  variant = 'primary',
  className = '',
  children,
  onClick,
}: {
  to: string
  variant?: Variant
  className?: string
  children: ReactNode
  onClick?: () => void
}) {
  return (
    <Link to={to} onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  )
}
