import type { Product, ProductCategory } from '../types/product'

/**
 * Demo catalog. Prices are sample values in PKR and should be replaced.
 * TODO: Replace this static list with product API loading.
 */
export const products: Product[] = [
  {
    id: 'multani-mitti-soap',
    name: 'Multani Mitti Soap',
    category: 'soaps',
    price: 650,
    image:
      'https://images.unsplash.com/photo-1600857544200-b2f666a9e2ce?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Handmade clay-toned soap bars stacked on linen',
    shortDescription: 'A clay-inspired bar for everyday cleansing.',
    description:
      'Multani Mitti Soap is a handmade bar scented with a mild earthy profile. It is intended for regular hand and body washing. Ingredients and batch details can be confirmed with the store before purchase.',
    size: '100 g',
    available: true,
    featured: true,
  },
  {
    id: 'rice-soap',
    name: 'Rice Soap',
    category: 'soaps',
    price: 620,
    image:
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Pale handmade soap bar on a ceramic dish',
    shortDescription: 'A gentle unscented-leaning rice soap bar.',
    description:
      'Rice Soap is a handmade cleansing bar with a light finish. It is offered as a simple daily soap. Fragrance and texture can vary slightly between handmade batches.',
    size: '100 g',
    available: true,
    featured: false,
  },
  {
    id: 'lavender-soap',
    name: 'Lavender Soap',
    category: 'soaps',
    price: 720,
    salePrice: 640,
    image:
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Lavender soap bars with dried lavender nearby',
    shortDescription: 'A softly scented lavender handmade soap.',
    description:
      'Lavender Soap is a handmade bar with a floral scent. It is meant for everyday washing. Sample pricing is shown for this demo and can be updated in the product data file.',
    size: '110 g',
    available: true,
    featured: true,
  },
  {
    id: 'activated-charcoal-soap',
    name: 'Activated Charcoal Soap',
    category: 'soaps',
    price: 690,
    image:
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dark charcoal soap bar on a stone surface',
    shortDescription: 'A charcoal-toned handmade cleansing bar.',
    description:
      'Activated Charcoal Soap is a dark handmade bar for regular cleansing. It is not presented as a medical or clinical product. Rinse thoroughly after use.',
    size: '100 g',
    available: true,
    featured: true,
  },
  {
    id: 'honey-oat-soap',
    name: 'Honey Oat Soap',
    category: 'soaps',
    price: 680,
    image:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Cream-colored soap bars with oats on a wooden board',
    shortDescription: 'A textured honey and oat handmade soap.',
    description:
      'Honey Oat Soap combines a mild honey scent with a lightly textured oat bar. It is intended as a body soap. People with known sensitivities should review ingredients with the store.',
    size: '110 g',
    available: true,
    featured: false,
  },
  {
    id: 'neem-soap',
    name: 'Neem Soap',
    category: 'soaps',
    price: 600,
    image:
      'https://images.unsplash.com/photo-1544016860-62e4d3d0f47d?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Green herbal soap bar beside plant leaves',
    shortDescription: 'A herbal neem-scented handmade soap.',
    description:
      'Neem Soap is a handmade herbal bar for daily washing. This listing describes scent and use only. No therapeutic or clinical claims are made.',
    size: '100 g',
    available: true,
    featured: false,
  },
  {
    id: 'aloe-vera-soap',
    name: 'Aloe Vera Soap',
    category: 'soaps',
    price: 640,
    image:
      'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Light green soap bars arranged with aloe leaves',
    shortDescription: 'A light aloe-inspired handmade soap.',
    description:
      'Aloe Vera Soap is a handmade cleansing bar with a fresh herbal scent. It is suitable as an everyday body soap. Availability may change as batches are made.',
    size: '100 g',
    available: true,
    featured: true,
  },
  {
    id: 'turmeric-soap',
    name: 'Turmeric Soap',
    category: 'soaps',
    price: 630,
    image:
      'https://images.unsplash.com/photo-1570197788417-b4e30c1936c5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Golden turmeric-toned soap with turmeric powder',
    shortDescription: 'A warm-toned turmeric handmade soap.',
    description:
      'Turmeric Soap is a handmade bar with a warm spice scent and golden colour. It is offered as a regular cleansing soap. Colour may transfer slightly onto cloth if not rinsed well.',
    size: '100 g',
    available: true,
    featured: false,
  },
  {
    id: 'coconut-oil',
    name: 'Coconut Oil',
    category: 'oils',
    price: 890,
    image:
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Jar of coconut oil with coconut halves',
    shortDescription: 'A kitchen and personal-care coconut oil.',
    description:
      'Coconut Oil is listed for personal care and household use as described by the store. This demo does not specify processing grade. Confirm current batch details before ordering.',
    size: '200 ml',
    available: true,
    featured: true,
  },
  {
    id: 'olive-oil',
    name: 'Olive Oil',
    category: 'oils',
    price: 1250,
    image:
      'https://images.unsplash.com/photo-1474979266404-7ea48cd1ff6e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Bottle of olive oil beside olives',
    shortDescription: 'A bottled olive oil for everyday use.',
    description:
      'Olive Oil is offered as a natural oil product for personal or kitchen use according to the label provided with each batch. Sample prices are for this frontend demonstration.',
    size: '250 ml',
    available: true,
    featured: true,
  },
  {
    id: 'almond-oil',
    name: 'Almond Oil',
    category: 'oils',
    price: 980,
    salePrice: 890,
    image:
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Amber bottles of natural oil on a linen cloth',
    shortDescription: 'A light almond oil in a glass bottle.',
    description:
      'Almond Oil is a natural oil intended for external personal care. Patch-test if you have nut sensitivities. This is not a medical product.',
    size: '100 ml',
    available: true,
    featured: false,
  },
  {
    id: 'castor-oil',
    name: 'Castor Oil',
    category: 'oils',
    price: 750,
    image:
      'https://images.unsplash.com/photo-1615486511484-92e172b41dd1?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dark glass bottle of oil on a wooden table',
    shortDescription: 'A thick castor oil in a small bottle.',
    description:
      'Castor Oil is listed as a natural oil for external use. This demo item is marked unavailable so you can review out-of-stock behaviour. Update availability in the product data file.',
    size: '100 ml',
    available: false,
    featured: false,
  },
  {
    id: 'argan-oil',
    name: 'Argan Oil',
    category: 'oils',
    price: 1890,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Skincare oil bottles arranged with botanicals',
    shortDescription: 'A small bottle of argan oil.',
    description:
      'Argan Oil is offered as a natural oil for hair or skin care routines. Origin, purity, and batch notes should be confirmed with the store. Prices shown are sample values.',
    size: '30 ml',
    available: true,
    featured: true,
  },
  {
    id: 'jojoba-oil',
    name: 'Jojoba Oil',
    category: 'oils',
    price: 1450,
    image:
      'https://images.unsplash.com/photo-1571781926291-c46da43a05c1?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Clear glass dropper bottle of oil',
    shortDescription: 'A lightweight jojoba oil in a dropper bottle.',
    description:
      'Jojoba Oil is a natural oil for external personal care. Use a small amount and discontinue if irritation occurs. This listing does not include clinical claims.',
    size: '50 ml',
    available: true,
    featured: false,
  },
  {
    id: 'rose-water-mist',
    name: 'Rose Water Mist',
    category: 'skincare',
    price: 850,
    image:
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Rose-toned skincare bottle with petals',
    shortDescription: 'A rose water facial mist for a light finish.',
    description:
      'Rose Water Mist is a simple spray for a light scented finish. Shake before use and keep away from eyes. This is a personal-care item, not a medical treatment.',
    size: '100 ml',
    available: true,
    featured: true,
  },
  {
    id: 'shea-body-butter',
    name: 'Shea Body Butter',
    category: 'skincare',
    price: 1190,
    image:
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Open jar of cream-colored body butter',
    shortDescription: 'A rich shea body butter in a glass jar.',
    description:
      'Shea Body Butter is a thick cream for dry-feeling skin. Texture can vary with temperature. Review ingredients with the store if you have known sensitivities.',
    size: '150 g',
    available: true,
    featured: false,
  },
]

export const categoryLabels: Record<ProductCategory, string> = {
  soaps: 'Handmade Soaps',
  oils: 'Natural Oils',
  skincare: 'Skincare Essentials',
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
