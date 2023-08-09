import { Body, Controller, Post, HttpCode, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUser.dto";

@Controller('user')
export class UserController{
    constructor(private userService: UserService){

    }
  @HttpCode(201)
  @Post()
  async addUser(
    @Body()createDto: CreateUserDto
  ){
    const user = await this.userService.createUser(createDto)
    return user
  }
 @HttpCode(201)
 @Get()
 async getUsers(){
    const Users = await this.userService.getAllUsers()
    return Users
 }
    }
