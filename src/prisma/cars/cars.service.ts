import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { cars } from "@prisma/client";
@Injectable()
export class CarsService{
    constructor(private prisma : PrismaService){}

    async getAllCars(): Promise<cars[]>{
        return this.prisma.cars.findMany();
    }
    async getCarById(id : number): Promise<cars>{
        return this.prisma.cars.findUnique({
            where:{car_id : id}
        });
    }
    async createCar(data : cars): Promise<cars>{
        return this.prisma.cars.create({
            data
        });
    }
    async updateCar(id:number,data:cars): Promise<cars>{
        return this.prisma.cars.update({
            where:{car_id : id},
            data
        });
    }

    async deleteCar(id:number): Promise<cars>{
        return this.prisma.cars.delete({
            where:{car_id : id}
            
        });
    }
}