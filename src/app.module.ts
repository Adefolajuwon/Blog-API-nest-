import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { todosModule } from './todo/todos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userModule } from './user/user.module';
import typeOrmConfig from './typeorm.config';



@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    userModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
