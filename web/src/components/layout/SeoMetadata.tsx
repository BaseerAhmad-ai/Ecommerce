import { useEffect } from 'react'

type SeoMetadataProps = {
  title: string
  description: string
  image?: string
  noIndex?: boolean
  canonicalPath?: string
  productSchema?: Record<string, unknown>
}

export function SeoMetadata({
  title,
  description,
  image = '/hero_normal.webp',
  noIndex = false,
  canonicalPath,
  productSchema,
}: SeoMetadataProps) {
  useEffect(() => {
    const canonicalUrl = new URL(canonicalPath ?? window.location.pathname, window.location.origin).href
    const imageUrl = new URL(
      image.startsWith('/') ? image : '/hero_normal.webp',
      window.location.origin,
    ).href

    const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.append(element)
      }
      element.content = content
    }

    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', 'U&M')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:image', imageUrl)
    setMeta('property', 'og:image:alt', 'U&M handmade soaps and natural oils')
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', imageUrl)

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${window.location.origin}/#organization`,
          name: 'U&M',
          url: window.location.origin,
          email: 'uzmamoiz19@gmail.com',
          telephone: '+923392143060',
          areaServed: { '@type': 'Country', name: 'Pakistan' },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Islamabad',
            addressCountry: 'PK',
          },
        },
        ...(productSchema ? [productSchema] : []),
      ],
    }
    let schemaScript = document.head.querySelector<HTMLScriptElement>(
      'script[type="application/ld+json"][data-seo-schema]',
    )
    if (!schemaScript) {
      schemaScript = document.createElement('script')
      schemaScript.type = 'application/ld+json'
      schemaScript.dataset.seoSchema = 'true'
      document.head.append(schemaScript)
    }
    schemaScript.textContent = JSON.stringify(schema)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (noIndex) {
      setMeta('name', 'robots', 'noindex, follow')
      document.head.querySelector('meta[property="og:url"]')?.remove()
      canonical?.remove()
      return
    }

    setMeta('name', 'robots', 'index, follow, max-image-preview:large')
    setMeta('property', 'og:url', canonicalUrl)
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = canonicalUrl
  }, [canonicalPath, description, image, noIndex, productSchema, title])

  return null
}
