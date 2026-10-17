import { ButtonLink } from '../components/ui/Button'
import { store } from '../config/store'

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <title>{`Page not found — ${store.brandName}`}</title>
      <h1 className="font-serif text-4xl text-forest">Page not found</h1>
      <p className="mt-3 text-ink/70">That address is not part of this storefront.</p>
      <ButtonLink to="/" className="mt-6">
        Return home
      </ButtonLink>
    </div>
  )
}
