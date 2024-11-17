import type { AxiosInstance } from 'axios'
import type { User } from '@/types'
import type { Createable, Deleteable, Readable, Updateable } from '@/services/types'
import { UserModel } from '@/models/user.model'

export class UsersService
  implements Readable<User>, Createable<User>, Updateable<User>, Deleteable<number>
{
  constructor(public httpClient: AxiosInstance) {}

  /**
   * Get categories
   * @param params
   */
  async get(params: any): Promise<User[]> {
    const response = await this.httpClient.get<User[]>('/users', { params })
    return response.data.map((user) => new UserModel(user))
  }

  /**
   * Get User by id
   * @param id
   */
  async getById(id: number): Promise<User> {
    const response = await this.httpClient.get<User>('/users', { params: { id } })
    return new UserModel(response.data)
  }

  async create(data: Omit<User, 'id'>): Promise<User> {
    const response = await this.httpClient.post<User>('/users', data)
    return new UserModel(response.data)
  }

  async delete(id: number): Promise<boolean> {
    const response = await this.httpClient.delete<boolean>(`/users/${id}`)
    return response.data
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    const response = await this.httpClient.put<User>(`/users/${id}`, data)
    return response.data
  }
}
