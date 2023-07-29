import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { todosModule } from './todo/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    todosModule,
    MongooseModule.forRoot(
      'mongodb+srv://juwon:tremothegoat@cluster0.lary7db.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
