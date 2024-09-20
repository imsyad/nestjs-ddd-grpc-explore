import { User } from '../entities/user.entity';

export interface UserQuery {
  findById(userId: number): Promise<User | null>;
  findAll(): Promise<User[] | []>;
}
