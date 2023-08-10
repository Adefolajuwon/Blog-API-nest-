import { Module } from '@nestjs/common';
import { UserController } from './blog.controller';
import { UserService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService]
})
export class userModule {}
