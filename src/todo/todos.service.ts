import { Injectable, Get } from "@nestjs/common";
import {Todo} from "./todo.model"
@Injectable()

export class TodosService{
    todo: Todo[] = []  
    newTodo(name:String, description:String){
       const newTodo = new Todo(name, description)
       this.todo.push(newTodo)
    }

}