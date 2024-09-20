export class CreateUserCommand {
  constructor(
    public readonly userId: number,
    public readonly userName: string,
    public readonly userEmail: string,
    public readonly userPassword: string,
  ) {}
}
