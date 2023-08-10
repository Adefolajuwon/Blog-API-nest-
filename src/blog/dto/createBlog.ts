import { IsString } from "class-validator";
export class createBlogDto{
    @IsString()
    content: string
    @IsString()
    title: string
    
}