import { useState } from 'react'

type ProductImageProps = {
  src: string
  alt: string
  className?: string
}

export function ProductImage({ src, alt, className = '' }: ProductImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-beige text-forest/70 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="px-4 text-center font-serif text-lg">{alt}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 10vw"
      className={className}
      onError={() => setFailed(true)}
    />
  )
}
