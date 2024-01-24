import {
  Column,
  DeleteDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('publisher')
export class Publisher {
  @PrimaryGeneratedColumn()
  id: string;

  @Generated('uuid')
  @Column({ name: 'secure_id' })
  secureId: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  description: string;

  @Column()
  active: boolean;

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date;
}
