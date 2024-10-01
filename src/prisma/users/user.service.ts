import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { users } from "@prisma/client";
import { generate_user_id } from "core/config/utils";
import { CreateUserDto, UpdateUserDto } from "./user-validation.dto";
@Injectable()
export class UserService{
    constructor(private prisma : PrismaService){}

    async getAllUsers(): Promise<users[]>{
        return this.prisma.users.findMany();
    }
    async getUserById(id : string): Promise<users>{
        return this.prisma.users.findUnique({
            where:{id_user : id}
        });
    }
    async createUser(data : CreateUserDto): Promise<users>{
        const newUser = {
            ...data,
            id_user: generate_user_id() 
          };
        return this.prisma.users.create({    
            data:newUser
        });
    }
    async updateUser(id:string,data:UpdateUserDto): Promise<users>{
        return this.prisma.users.update({
            where:{id_user : id},
            data
        });
    }

    async deleteUser(id:string): Promise<users>{
        return this.prisma.users.delete({
            where:{id_user : id}
            
        });
    }
}