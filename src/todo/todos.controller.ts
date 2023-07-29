import { Body, Controller, Post, HttpCode } from "@nestjs/common";
import console from "console";
import { TodosService } from "./todos.service";

@Controller('todo')
export class TodosController{
    constructor(private todoService: TodosService){
    }

    @HttpCode(201)
    // @ApiOperation({summary: "Create a todo item"})
    @Post()
    async addTodo(@Body('name')prodName: string, @Body('desc') prodDesc: string,){}
   


}
