import { Injectable, Get } from "@nestjs/common";
import {Todo} from "./todo.model"
@Injectable()

export class TodosService{
    todo: Todo[] = []  
    newTodo(name:string, description: string){
       const newTodo = new Todo()
    }

}