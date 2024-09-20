import { UserQuery } from '../../domain/repository/user.query';
import { InjectRepository } from '@nestjs/typeorm';
import { UserOrmEntity } from '../entity/user.orm-entity';
import { Repository } from 'typeorm';
import { User } from '../../domain/entities/user.entity';

export class UserQueryImpl implements UserQuery {
  constructor(
    @InjectRepository(UserOrmEntity)
    private readonly userRepository: Repository<UserOrmEntity>,
  ) {}

  async findAll(): Promise<User[] | []> {
    const userOrmEntities = await this.userRepository.find({});

    return userOrmEntities.map(
      (res) =>
        new User(res.userId, res.userName, res.userEmail, res.userPassword),
    );
  }

  async findById(userId: number): Promise<User | null> {
    console.log(userId);
    return Promise.resolve(undefined);
  }
}
