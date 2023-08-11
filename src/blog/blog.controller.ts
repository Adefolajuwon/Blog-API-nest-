import { blogService } from "./blog.service";
import { Body, Controller, Post, HttpCode, Get } from "@nestjs/common";
import { createBlogDto } from "./dto/createBlog";
@Controller('blog')
export class blogController{
    constructor(private blogservice: blogService){}
 @HttpCode(201)
 @Post()
 async addBlog(
    @Body()createDto: createBlogDto, @Body('user')user
 ){
const blog = await this.blogservice.createBlog(createDto, user)
return blog
 }
}