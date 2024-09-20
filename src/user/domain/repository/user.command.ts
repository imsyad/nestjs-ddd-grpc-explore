import { User } from '../entities/user.entity';

export interface UserCommand {
  save(user: User): Promise<void>;
  delete(userId: number): Promise<void>;
}
