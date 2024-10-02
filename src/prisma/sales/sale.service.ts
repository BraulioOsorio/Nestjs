import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { sales } from "@prisma/client";
import { CreateSaleDro } from "./sale-validation.dto";
import { get_current_datetime } from "core/config/utils";
@Injectable()
export class SalesService{
    constructor(private prisma : PrismaService){}

    async getAllSales(): Promise<sales[]>{
        return this.prisma.sales.findMany();
    }
    async getSaleById(id : string): Promise<sales>{
        return this.prisma.sales.findUnique({
            where:{sales_id : +id}
        });
    }
    async createSales(data : CreateSaleDro): Promise<sales>{
        const newsale = {
            ...data,
            sale: get_current_datetime() 
          };
        return this.prisma.sales.create({
            data : newsale
        });
    }
    async updateSale(id:string,data:CreateSaleDro): Promise<sales>{
        return this.prisma.sales.update({
            where:{sales_id : +id},
            data
        });
    }

    async deleteSale(id:string): Promise<sales>{
        return this.prisma.sales.delete({
            where:{sales_id : +id}
            
        });
    }
}