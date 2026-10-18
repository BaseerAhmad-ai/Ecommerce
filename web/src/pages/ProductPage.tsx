import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { ProductGrid } from '../components/products/ProductGrid'
import { Button } from '../components/ui/Button'
import { Price } from '../components/ui/Price'
import { ProductImage } from '../components/ui/ProductImage'
import { QuantitySelector } from '../components/ui/QuantitySelector'
import { SeoMetadata } from '../components/layout/SeoMetadata'
import { store } from '../config/store'
import { useCart } from '../hooks/useCart'
import { categoryLabels, getProductById, getRelatedProducts } from '../data/products'

export function ProductPage() {
  const { id } = useParams()
  const product = id ? getProductById(id) : undefined
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <SeoMetadata
          title={`Product Not Found | ${store.brandName}`}
          description="This product could not be found. Browse the U&M shop for handmade soaps and natural oils."
          noIndex
        />
        <h1 className="font-serif text-3xl text-forest">Product not found</h1>
        <p className="mt-3 text-ink/70">
          We couldn’t find that product. It may no longer be available.
        </p>
        <Link to="/shop" className="mt-6 inline-flex min-h-11 items-center text-forest underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product)

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <SeoMetadata
        title={`${product.name} | ${categoryLabels[product.category]} in Pakistan | ${store.brandName}`}
        description={`${product.name}: ${product.description} Size: ${product.size}. Check current price and availability from U&M in Pakistan.`}
        image={product.image}
        productSchema={{
          '@type': 'Product',
          name: product.name,
          description: product.description,
          image: new URL(product.image.startsWith('/') ? product.image : '/hero_normal.webp', window.location.origin).href,
          sku: product.id,
          category: categoryLabels[product.category],
          brand: { '@type': 'Brand', name: store.brandName },
          offers: {
            '@type': 'Offer',
            priceCurrency: store.currency,
            price: product.salePrice ?? product.price,
            availability: product.available
              ? 'https://schema.org/InStock'
              : 'https://schema.org/OutOfStock',
            url: new URL(`/product/${product.id}`, window.location.origin).href,
          },
        }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-ink/60">
        <Link to="/shop" className="hover:text-forest">
          Shop
        </Link>
        <span aria-hidden="true"> / </span>
        <Link to={`/shop?category=${product.category}`} className="hover:text-forest">
          {categoryLabels[product.category]}
        </Link>
      </nav>
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <ProductImage
          src={product.image}
          alt={product.imageAlt}
          className="aspect-4/5 w-full ro]unded-4xl object-cover"
        />
        <div>
          <p className="text-xs tracking-[0.18em] text-forest uppercase">
            {categoryLabels[product.category]}
          </p>
          <h1 className="mt-2 font-serif text-4xl text-forest">{product.name}</h1>
          <Price product={product} className="mt-4 text-xl" />
          <p className="mt-4 leading-relaxed text-ink/75">{product.description}</p>
          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-ink/60">Size</dt>
              <dd className="font-medium text-forest">{product.size}</dd>
            </div>
            <div>
              <dt className="text-ink/60">Availability</dt>
              <dd className="font-medium text-forest">
                {product.available ? 'Available' : 'Currently unavailable'}
              </dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <span id="product-qty" className="sr-only">
              Quantity
            </span>
            <QuantitySelector
              value={quantity}
              onChange={setQuantity}
              labelledBy="product-qty"
              disabled={!product.available}
            />
            <Button
              className="sm:min-w-48"
              disabled={!product.available}
              onClick={() => addItem(product.id, quantity)}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      {related.length > 0 ? (
        <section className="mt-16" aria-labelledby="related-heading">
          <h2 id="related-heading" className="font-serif text-3xl text-forest">
            Related products
          </h2>
          <div className="mt-6">
            <ProductGrid products={related} />
          </div>
        </section>
      ) : null}
    </div>
  )
}
