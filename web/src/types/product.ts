export type ProductCategory = 'soaps' | 'oils' | 'skincare'

export type Product = {
  id: string
  name: string
  category: ProductCategory
  price: number
  salePrice?: number
  image: string
  imageAlt: string
  shortDescription: string
  description: string
  size: string
  available: boolean
  featured: boolean
}

export type CartLine = {
  productId: string
  quantity: number
}
