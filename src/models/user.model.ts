import type { User } from '@/types'
import { BaseModel } from './base.model'

export class UserModel extends BaseModel implements User {
  avatar: string
  email: string
  id: number
  name: string;
  password: string;
  role: string;

  constructor(data: User) {
    super(data);
  }
}
