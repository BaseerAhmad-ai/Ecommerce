import type { Product, ProductCategory } from '../types/product'
import { createProductArtwork } from '../utils/productArtwork'

/**
 * Store catalog. Product prices are listed in PKR.
 * TODO: Replace this static list with product API loading.
 */
export const products: Product[] = [
  {
    id: 'charcoal-soap',
    name: 'Charcoal Soap',
    category: 'soaps',
    price: 320,
    image: createProductArtwork('Charcoal Soap', 'soaps', '#62605d'),
    imageAlt: 'Handmade charcoal soap bar',
    shortDescription: 'A handmade charcoal soap for everyday cleansing.',
    description: 'A handmade charcoal soap bar for everyday cleansing.',
    size: '100 g',
    available: true,
    featured: true,
  },
  {
    id: 'rice-soap',
    name: 'Rice Soap',
    category: 'soaps',
    price: 320,
    image: createProductArtwork('Rice Soap', 'soaps', '#c9b9a5'),
    imageAlt: 'Handmade rice soap bar',
    shortDescription: 'A handmade rice soap for everyday cleansing.',
    description: 'A handmade rice soap bar for everyday cleansing.',
    size: '100 g',
    available: true,
    featured: true,
  },
  {
    id: 'orange-soap',
    name: 'Orange Soap',
    category: 'soaps',
    price: 320,
    image: createProductArtwork('Orange Soap', 'soaps', '#d68a45'),
    imageAlt: 'Handmade orange soap bar',
    shortDescription: 'A handmade orange soap for everyday cleansing.',
    description: 'A handmade orange soap bar for everyday cleansing.',
    size: '100 g',
    available: true,
    featured: true,
  },
  {
    id: 'rosemary-soap',
    name: 'Rosemary Soap',
    category: 'soaps',
    price: 320,
    image: createProductArtwork('Rosemary Soap', 'soaps', '#819078'),
    imageAlt: 'Handmade rosemary soap bar',
    shortDescription: 'A handmade rosemary soap for everyday cleansing.',
    description: 'A handmade rosemary soap bar for everyday cleansing.',
    size: '100 g',
    available: true,
    featured: true,
  },
  {
    id: 'coffee-soap',
    name: 'Coffee Soap',
    category: 'soaps',
    price: 320,
    image: createProductArtwork('Coffee Soap', 'soaps', '#8b654e'),
    imageAlt: 'Handmade coffee soap bar',
    shortDescription: 'A handmade coffee soap for everyday cleansing.',
    description: 'A handmade coffee soap bar for everyday cleansing.',
    size: '100 g',
    available: true,
    featured: true,
  },
  {
    id: 'multani-mitti-soap',
    name: 'Multani Mitti Soap',
    category: 'soaps',
    price: 320,
    image: createProductArtwork('Multani Mitti Soap', 'soaps', '#b99475'),
    imageAlt: 'Handmade Multani Mitti soap bar',
    shortDescription: 'A handmade Multani Mitti soap for everyday cleansing.',
    description: 'A handmade Multani Mitti soap bar for everyday cleansing.',
    size: '100 g',
    available: true,
    featured: true,
  },
  {
    id: 'ubtan-soap',
    name: 'Ubtan Soap',
    category: 'soaps',
    price: 320,
    image: createProductArtwork('Ubtan Soap', 'soaps', '#c39a54'),
    imageAlt: 'Handmade Ubtan soap bar',
    shortDescription: 'A handmade Ubtan soap for everyday cleansing.',
    description: 'A handmade Ubtan soap bar for everyday cleansing.',
    size: '100 g',
    available: true,
    featured: true,
  },
  {
    id: 'lemon-soap',
    name: 'Lemon Soap',
    category: 'soaps',
    price: 320,
    image: createProductArtwork('Lemon Soap', 'soaps', '#c5b64c'),
    imageAlt: 'Handmade lemon soap bar',
    shortDescription: 'A handmade lemon soap for everyday cleansing.',
    description: 'A handmade lemon soap bar for everyday cleansing.',
    size: '100 g',
    available: true,
    featured: true,
  },
  {
    id: 'um-organic-hair-oil',
    name: 'U&M Organic Hair Oil',
    category: 'oils',
    price: 899,
    image: createProductArtwork('U&M Organic Hair Oil', 'oils', '#819078'),
    imageAlt: 'Bottle of U&M Organic Hair Oil',
    shortDescription: 'A nourishing blend of oils, vitamins, and organic herbs.',
    description:
      'Made with a nourishing blend of coconut oil, mustard oil, and castor oil, enriched with garlic, ginger, onion, vitamin E, and organic herbs.',
    size: '100 ml',
    available: true,
    featured: true,
  },
  {
    id: 'rosemary-oil',
    name: 'Rosemary Oil',
    category: 'oils',
    price: 1499,
    image: createProductArtwork('Rosemary Oil', 'oils', '#71836a'),
    imageAlt: 'Bottle of rosemary oil',
    shortDescription: 'Rosemary oil for your personal care routine.',
    description: 'A bottle of rosemary oil for personal care.',
    size: '100 ml',
    available: true,
    featured: true,
  },
  {
    id: 'coconut-oil',
    name: 'Coconut Oil',
    category: 'oils',
    price: 899,
    image: createProductArtwork('Coconut Oil', 'oils', '#b4a77a'),
    imageAlt: 'Bottle of coconut oil',
    shortDescription: 'Coconut oil for your personal care routine.',
    description: 'A bottle of coconut oil for personal care.',
    size: '100 ml',
    available: true,
    featured: true,
  },
]

export const categoryLabels: Record<ProductCategory, string> = {
  soaps: 'Handmade Soaps',
  oils: 'Natural Oils',
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, limit)
}

export function getEffectivePrice(product: Product): number {
  return product.salePrice ?? product.price
}
