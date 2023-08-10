import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createBlogDto } from "./dto/createBlog";
import { Blog } from "./blog.entityl";
@Injectable()
export class UserService {
  constructor(
@InjectRepository(Blog)

  ) {}
async createBlog(dto: createBlogDto){}

}

      

      
