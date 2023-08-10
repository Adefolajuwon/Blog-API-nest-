import { Module } from '@nestjs/common';
import { UserService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog.entityl';


@Module({
    imports: [TypeOrmModule.forFeature([Blog])],
  controllers: [],
  providers: [UserService]
})
export class userModule {}
