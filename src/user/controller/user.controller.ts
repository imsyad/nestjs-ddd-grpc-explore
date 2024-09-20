import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserDTO } from '../application/dto/create-user.dto';
import { CreateUserCommand } from '../application/command/impl/create-user.command';

@Controller('user')
export class UserController {
  constructor(readonly commandBus: CommandBus) {}

  @Post('new')
  async createUser(@Body() body: CreateUserDTO): Promise<void> {
    const { userName, userEmail, userPassword } = body;
    await this.commandBus.execute(
      new CreateUserCommand(null, userName, userEmail, userPassword),
    );
  }
}
