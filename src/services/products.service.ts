import type { AxiosInstance } from 'axios'
import type { Product } from '@/types'
import type { Createable, Deleteable, Readable, Updateable } from '@/services/types'
import { ProductModel } from '@/models/product.model'

export class ProductsService
  implements Readable<Product>, Createable<Product>, Updateable<Product>, Deleteable<number>
{
  constructor(public httpClient: AxiosInstance) {}

  /**
   * Get products
   * @param params
   */
  async get(params: any): Promise<Product[]> {
    const response = await this.httpClient.get<Product[]>('/products', { params })
    return response.data.map((product) => new ProductModel(product))
  }

  /**
   * Get product by id
   * @param id
   */
  async getById(id: number): Promise<Product> {
    const response = await this.httpClient.get<Product>(`/products/${id}`)
    return new ProductModel(response.data)
  }

  async create(data: Omit<Product, 'id'>): Promise<Product> {
    const response = await this.httpClient.post<Product>('/categories', data)
    return new ProductModel(response.data)
  }

  async delete(id: number): Promise<boolean> {
    const response = await this.httpClient.delete<boolean>(`/categories/${id}`)
    return response.data
  }

  async update(id: number, data: Partial<Product>): Promise<Product> {
    const response = await this.httpClient.put<Product>(`/categories/${id}`, data)
    return response.data
  }
}
