import { Body, Controller, Post, HttpCode, Get } from "@nestjs/common";
import { TodosService } from "./todos.service";

@Controller('todo')
export class TodosController{
    constructor(private todoService: TodosService){
    }

    @HttpCode(201)
    @Post()
    async addTodo(@Body('name')prodName: string, @Body('desc') prodDesc: string,){
         return this.todoService.createTodo(prodName, prodDesc)
    }
    @Get()
    async getTodo(@Body('name')prodName: string){
        return  this.todoService.getTodo(prodName)
    }
}
