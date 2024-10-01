import { IsInt, IsNotEmpty, IsString } from "class-validator";


export class CreateSaleDro{
    @IsInt()
    @IsNotEmpty({message:"THe car field cannot be empty"})
    car_id : number;

    @IsString()
    @IsNotEmpty({message:"The user field cannot be empty"})
    user_id: string; 
}
