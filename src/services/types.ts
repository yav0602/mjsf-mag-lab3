export interface Readable<T> {
  get(params: any): Promise<T[]>

  getById(id: number): Promise<T>
}

export interface Createable<T> {
  create(data: T): Promise<T>
}

export interface Updateable<T> {
  update(id: number, data: Partial<Omit<T, 'id'>>): Promise<T>
}

export interface Deleteable<T = number | string> {
  delete(id: T): Promise<boolean>
}
