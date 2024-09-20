import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserOrmEntity {
  @PrimaryGeneratedColumn('increment')
  userId: number;

  @Column()
  userName: string;

  @Column()
  userEmail: string;

  @Column()
  userPassword: string;
}
