export class User {
  constructor(
    private readonly userId: number,
    private readonly userName: string,
    private readonly userEmail: string,
    private readonly userPassword: string,
  ) {}

  getUserId(): number {
    return this.userId;
  }

  getUserName(): string {
    return this.userName;
  }

  getUserEmail(): string {
    return this.userEmail;
  }

  getUserPassword(): string {
    return this.userPassword;
  }
}
