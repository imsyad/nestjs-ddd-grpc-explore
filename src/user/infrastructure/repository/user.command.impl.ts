import { UserCommand } from '../../domain/repository/user.command';
import { User } from '../../domain/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserOrmEntity } from '../entity/user.orm-entity';
import { Repository } from 'typeorm';

export class UserCommandImpl implements UserCommand {
  constructor(
    @InjectRepository(UserOrmEntity)
    private readonly userRepository: Repository<UserOrmEntity>,
  ) {}

  async delete(userId: number): Promise<void> {
    console.log(userId);
    return Promise.resolve(undefined);
  }

  async save(user: User): Promise<void> {
    const userOrmEntity: UserOrmEntity = new UserOrmEntity();
    userOrmEntity.userName = user.getUserName();
    userOrmEntity.userEmail = user.getUserEmail();
    userOrmEntity.userPassword = user.getUserPassword();

    await this.userRepository.save(userOrmEntity);
  }
}
