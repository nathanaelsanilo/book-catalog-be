import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity('authors')
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  @Column()
  secureId: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;
}
