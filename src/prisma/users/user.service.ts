import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
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
        const exist_email = await this.prisma.users.findFirst({
            where:{mail : data.mail}
        })
        const exist_phone = await this.prisma.users.findFirst({
            where:{phone : data.phone}
        })
        if(exist_email){
            throw new BadRequestException("Email ya existe")
        }else if(exist_phone){
            throw new BadRequestException("Phone ya existe")
        }
        return this.prisma.users.create({    
            data:newUser
        });
    }
    async updateUser(id:string,data:UpdateUserDto): Promise<users>{
        const exist_email = await this.prisma.users.findFirst({
            where:{mail : data.mail}
        })
        const exist_phone = await this.prisma.users.findFirst({
            where:{phone : data.phone}
        })
        if(exist_email && id != exist_email.id_user){
            throw new BadRequestException("Email ya existe")
        }else if(exist_phone && id != exist_phone.id_user){
            throw new BadRequestException("Phone ya existe")
        }
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