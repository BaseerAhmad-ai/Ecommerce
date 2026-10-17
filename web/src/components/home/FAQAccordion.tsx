import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'
import { faqs, type FAQItem } from '../../data/faqs'

export function FAQAccordion({ items = faqs }: { items?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <div className="divide-y divide-forest/10 rounded-2xl bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {item.question}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-4 text-sm leading-relaxed text-ink/75"
            >
              {item.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}
