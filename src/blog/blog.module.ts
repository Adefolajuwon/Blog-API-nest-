import { Module } from '@nestjs/common';
import { blogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog.entityl';
import { blogController } from './blog.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Blog])],
  controllers: [blogController],
  providers: [blogService]
})
export class userModule {}
