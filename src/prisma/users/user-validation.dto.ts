import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateUserDto{
    @IsString()
    @IsNotEmpty({message:"THe name field cannot be empty"})
    full_name: string;

    @IsEmail()
    @IsNotEmpty({message:"The email field cannot be empty"})
    mail: string; 

    @IsString()
    @IsNotEmpty({message:"The number field cannot be empty"})
    phone : string;

    @IsString()
    @IsOptional()
    id_user : string;
    
}
export class UpdateUserDto{
    @IsEmail()
    @IsNotEmpty({message:"The email field cannot be empty"})
    mail: string; 

    @IsString()
    @IsNotEmpty({message:"The number field cannot be empty"})
    phone : string;
}