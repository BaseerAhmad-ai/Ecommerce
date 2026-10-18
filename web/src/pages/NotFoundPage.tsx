import { ButtonLink } from '../components/ui/Button'
import { SeoMetadata } from '../components/layout/SeoMetadata'
import { store } from '../config/store'

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <SeoMetadata
        title={`Page Not Found | ${store.brandName}`}
        description="This page could not be found. Visit the U&M shop to browse handmade soaps and natural oils."
        noIndex
      />
      <h1 className="font-serif text-4xl text-forest">Page not found</h1>
      <p className="mt-3 text-ink/70">That address is not part of this storefront.</p>
      <ButtonLink to="/" className="mt-6">
        Return home
      </ButtonLink>
    </div>
  )
}
