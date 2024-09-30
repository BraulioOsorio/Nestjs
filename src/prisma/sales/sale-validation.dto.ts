import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";


export class CreateUserDto{
    @IsString()
    @IsNotEmpty({message:"THe car field cannot be empty"})
    car_id: string;

    @IsString()
    @IsNotEmpty({message:"The user field cannot be empty"})
    user_id: string; 
}
