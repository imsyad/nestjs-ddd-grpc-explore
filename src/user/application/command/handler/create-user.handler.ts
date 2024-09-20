import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../impl/create-user.command';
import { UserCommand } from '../../../domain/repository/user.command';
import { User } from '../../../domain/entities/user.entity';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly userRepository: UserCommand) {}

  async execute(command: CreateUserCommand): Promise<void> {
    const { userId, userName, userEmail, userPassword } = command;

    const user = new User(userId, userName, userEmail, userPassword);
    await this.userRepository.save(user);
  }
}
