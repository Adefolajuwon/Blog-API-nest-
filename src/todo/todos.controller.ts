import { Controller, Post } from "@nestjs/common";

@Controller('products')
export class productController{
    @Post()
    newTodo(): any {
        
    }

}