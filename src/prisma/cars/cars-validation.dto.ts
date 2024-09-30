import { IsNotEmpty, IsString } from "class-validator";


export class CreateCarsDto{
    @IsString()
    @IsNotEmpty({message:"THe name field cannot be empty"})
    name: string;

    @IsString()
    @IsNotEmpty({message:"The description field cannot be empty"})
    description: string; 

    @IsString()
    @IsNotEmpty({message:"The model field cannot be empty"})
    model : string;
    
    @IsString()
    @IsNotEmpty({message:"The user field cannot be empty"})
    user_id : string;
}
export class UpdateCarDto{
    @IsString()
    @IsNotEmpty({message:"THe name field cannot be empty"})
    name: string;

    @IsString()
    @IsNotEmpty({message:"The description field cannot be empty"})
    description: string; 

    @IsString()
    @IsNotEmpty({message:"The model field cannot be empty"})
    model : string;
}