import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class createUser{
    @IsNotEmpty()
    @IsString()
   readonly username: string
   @IsEmail()
   readonly email: string

}