import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user', schema: 'taskofhuma' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: number;
}
