import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  id: string;

  @Generated('uuid')
  @Column({ name: 'secure_id' })
  secureId: string;

  @Column()
  name: string;

  @Column()
  description: string;
}
