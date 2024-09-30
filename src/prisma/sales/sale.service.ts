import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { sales } from "@prisma/client";
@Injectable()
export class SalesService{
    constructor(private prisma : PrismaService){}

    async getAllUsers(): Promise<sales[]>{
        return this.prisma.sales.findMany();
    }
    async getUserById(id : string): Promise<sales>{
        return this.prisma.users.findUnique({
            where:{id_user : id}
        });
    }
    async createUser(data : sales): Promise<sales>{
        return this.prisma.users.create({
            data
        });
    }
    async updateUser(id:string,data:users): Promise<sales>{
        return this.prisma.users.update({
            where:{id_user : id},
            data
        });
    }

    async deleteUser(id:string): Promise<sales>{
        return this.prisma.users.delete({
            where:{id_user : id}
            
        });
    }
}