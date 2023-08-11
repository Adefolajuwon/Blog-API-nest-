import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createBlogDto } from "./dto/createBlog";
import { Blog } from "./blog.entityl";
import { User } from "src/user/user.entity";
@Injectable()
export class blogService {
  constructor(
@InjectRepository(Blog)
private blogRepository: Repository<Blog>
  ) {}
  async createBlog(dto: createBlogDto, user: User) {
    try {
      const newBlog = this.blogRepository.create({
        title: dto.title,
        content: dto.content,
        user: user,
      });
  
      const savedBlog = await this.blogRepository.save(newBlog);
  
      return savedBlog;
    } catch (error) {
      throw new HttpException('Failed to create blog', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  

}

      

      
