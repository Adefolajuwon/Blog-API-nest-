import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class createUserDto{
    @IsNotEmpty()
    @IsString()
   readonly username: string
   @IsEmail()
   readonly email: string

}