import { CategoryData } from './CategoryData'

export interface ProductData {
  id: number
  title: string
  price: number
  description: string
  category: CategoryData
  images: string[]
}
