import { Injectable,HttpException, HttpStatus,} from "@nestjs/common";
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
         const newTodo = await this.todoModel.create({
            name,
            desc
         })
         return newTodo
    } catch (error) {
      console.log(error)
      throw new HttpException('An error occured', HttpStatus.INTERNAL_SERVER_ERROR)

    }
 }
 async getTodo(name: string){
   try {
      const todo = await this.todoModel.findOne({"name": name})
      return todo
   } catch (error) {
      console.log(error)
      throw new HttpException('An error occured', HttpStatus.NOT_FOUND)
   }
 }
}
