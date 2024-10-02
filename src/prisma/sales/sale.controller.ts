import {  Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { SalesService } from "./sale.service";
import { CreateSaleDro } from "./sale-validation.dto";
@Controller('sales')
export class SaleController{
    constructor(private readonly SaleService : SalesService){}

    @Get()
    async getAllSale(){
        return this.SaleService.getAllSales()
    }

    @Post()
    async createSales(@Body() createSalesValidationDpo : CreateSaleDro){
        return this.SaleService.createSales(createSalesValidationDpo)
    }

    @Get(':id')
    async getSalesById(@Param('id') id : string){
        const saleFound = await this.SaleService.getSaleById(id)
        if(!saleFound) throw new NotFoundException("Sale does not found")
        return saleFound
    }

    @Delete(':id')
    async DeleteSale(@Param('id') id : string){
        try {
            return await this.SaleService.deleteSale(id)
        } catch (error) {
            throw new NotFoundException("Sale does not Found")
        }
        
    }

    @Put(':id')
    async updateSale(@Param('id') id : string,@Body() createSalesValidationDpo : CreateSaleDro){
        try {
            return await this.SaleService.updateSale(id,createSalesValidationDpo) 
        } catch (error) {
            throw new NotFoundException("Sale does not Found")
        }
    }
}