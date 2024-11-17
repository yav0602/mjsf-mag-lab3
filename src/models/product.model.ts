import type { Category, Product } from '@/types'
import { BaseModel } from './base.model'

export class ProductModel extends BaseModel implements Product {
  category: Category
  description: string
  id: number
  images: string[]
  price: number
  title: string

  constructor(data: Product) {
    super(data);
  }
}
