import { Injectable, Get } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from "./todo.model";
import { Model } from 'mongoose';

@Injectable()

export class TodosService{
   constructor(
      @InjectModel('Todo') private readonly todoModel: Model<Todo>,
    ) {}

 async createTodo(name: string, desc:string,) {
    try {
        const todo = await 
    } catch (error) {
        
    }
    
 }
}
