import { Minus, Plus } from 'lucide-react'
import { store } from '../../config/store'

type QuantitySelectorProps = {
  value: number
  onChange: (value: number) => void
  min?: number
  labelledBy?: string
  disabled?: boolean
}

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  labelledBy,
  disabled = false,
}: QuantitySelectorProps) {
  return (
    <div
      className="inline-flex items-center rounded-full border border-forest/15 bg-white"
      role="group"
      aria-labelledby={labelledBy}
    >
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full text-forest transition hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:opacity-40"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={disabled || value <= min}
        aria-label="Decrease quantity"
      >
        <Minus size={16} aria-hidden="true" />
      </button>
      <span className="min-w-8 text-center text-sm font-medium text-ink" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full text-forest transition hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:opacity-40"
        onClick={() => onChange(Math.min(store.maxQuantityPerItem, value + 1))}
        disabled={disabled || value >= store.maxQuantityPerItem}
        aria-label="Increase quantity"
      >
        <Plus size={16} aria-hidden="true" />
      </button>
    </div>
  )
}
