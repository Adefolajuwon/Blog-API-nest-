import { Body, Controller, Post } from "@nestjs/common";
import console from "console";
import { TodosService } from "./todos.service";

@Controller('todo')
export class TodosController{
    constructor(private todoService: TodosService){
    }
    @Post()
    addTodo(@Body('name') Name: String,    @Body('description') Description: string,
    ) {
       const newTodo =  this.todoService.insertTodo(Name, Description)
       return {todo: newTodo}
    }
}
