import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/user/user.entity';
@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  content: string;
  @Column({ nullable: true })
  title: string;
  @ManyToOne(() => User, (user) => user.blogs)
  user: User;
}
