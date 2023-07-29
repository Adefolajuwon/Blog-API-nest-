import { Injectable, Get } from "@nestjs/common";
import {Todo} from "./todo.model"

@Injectable()

export class TodosService{
    todo: Todo[] = []  
 async createTodo(name: string, desc:string,) {
    try {
        
    } catch (error) {
        
    }
    
 }
}
