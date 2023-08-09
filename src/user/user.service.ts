import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from "./dto/createUser.dto"; // Correct the import for the DTO

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(dto: CreateUserDto) {
    try {
      const existingUser = await this.userRepository.findOne({ where: { email: dto.email } });

      if (existingUser) {
        throw new HttpException('User with this email already exists', HttpStatus.BAD_REQUEST);
      }

      const newUser = this.userRepository.create(dto);
      const createdUser = await this.userRepository.save(newUser);

      return createdUser; // Return the created user
    } catch (error) {
      throw new HttpException('Failed to create user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async getAllUsers(){
    try {
      const users = await this.userRepository.find()
      return users
    } catch (error) {
      console.log(error)
      throw new HttpException('Failed to find users', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

      

      
