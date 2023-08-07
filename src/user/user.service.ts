import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { createUserDto } from "./dto/createUser.dto";
@Injectable()
export class UserService{
    //constructor(private readonly){}
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
      ) {}
      async createTodo(dto:createUserDto){
        try {
            const user = await this.userRepository.find({where: {email: dto.email}})
        } catch (error) {
            
        }
      }
}