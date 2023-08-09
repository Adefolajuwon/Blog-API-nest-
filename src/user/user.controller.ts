import { Body, Controller, Post, HttpCode, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { createUserDto } from "./dto/createUser.dto";

@Controller('User')
export class UserController{
    constructor(private userService: UserService){

    }
  @HttpCode(201)
  @Post()
  async addUser(){}
 
    }
