import { Exclude } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, Column, Generated } from 'typeorm';

@Entity()
export class User {
  @Exclude()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Exclude()
  @Column()
  password: string;

  @Generated('uuid')
  @Column()
  secureId: string;
}
