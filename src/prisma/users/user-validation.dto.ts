import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";


export class CreateUserDto{
    @IsString()
    @IsNotEmpty({message:"THe name field cannot be empty"})
    full_name: string;

    @IsEmail()
    @IsNotEmpty({message:"The email field cannot be empty"})
    mail: string; 

    @IsInt()
    @IsNotEmpty({message:"The number field cannot be empty"})
    phone : number;
    
}
export class UpdateUserDto{
    @IsEmail()
    @IsNotEmpty({message:"The email field cannot be empty"})
    mail: string; 

    @IsInt()
    @IsNotEmpty({message:"The number field cannot be empty"})
    phone : number;
}