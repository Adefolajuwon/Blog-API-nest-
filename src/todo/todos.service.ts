import { Injectable, Get } from "@nestjs/common";
import {Todo} from "./todo.model"
@Injectable()

export class TodosService{
    todo: Todo[] = []  
    insertTodo(name:String, description:String){
       const newTodo = new Todo(name, description)
       this.todo.push(newTodo)
       return newTodo
    }
}
