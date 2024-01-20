import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('authors')
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;
}
