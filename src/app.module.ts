import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { todosModule } from './todo/todos.module';

@Module({
  imports: [todosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
