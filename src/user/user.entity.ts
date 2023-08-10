
import { Entity, PrimaryGeneratedColumn, Column, OneToMany,  } from 'typeorm';
import { Blog } from 'src/blog/blog.entityl';
import { isEmail } from 'class-validator';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  title: string;

  @OneToMany(() => Blog, blog => blog.user)
  blogs: Blog[]

}
