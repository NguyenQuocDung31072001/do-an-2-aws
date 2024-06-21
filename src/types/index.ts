export interface ProductType {
  id: string
  name: string
  featuredImage: string
  averageRate: number
  quantityRating: number
  price: number
  discount: number
  description: string
  uses: string
  origin: string
  maxQuantity: number
  createdAt: string
  totalViews: number
}

export interface CategoryType {
  id: string
  name: string
}
