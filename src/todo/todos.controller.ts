import { Body, Controller, Post } from "@nestjs/common";
import { TodosService } from "./todos.service";

@Controller('products')
export class TodosController{
    constructor(private todoService: TodosService){
    }
    @Post()
    addTodo(@Body() completeBody:{name: String; description:String}): any {
        this.todoService.newTodo(completeBody.name, completeBody.description)
    }

}