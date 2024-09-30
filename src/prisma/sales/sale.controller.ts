import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { SalesService } from "./sale.service";
import { sales } from "@prisma/client";
@Controller('sales')
export class SaleController{
    constructor(private readonly SaleService : SalesService){}

    @Get()
    async getAllSale(){
        return this.SaleService.getAllUsers()
    }

    @Post()
    async createUsers(@Body() data : sales){
        return this.SaleService.createUser(data)
    }

    @Get(':id')
    async getUserById(@Param('id') id : string){
        const userFound = await this.SaleService.getUserById(id)
        if(!userFound) throw new NotFoundException("User does not found")
        return userFound
    }

    @Delete(':id')
    async DeleteUser(@Param('id') id : string){
        try {
            return await this.SaleService.deleteUser(id)
        } catch (error) {
            throw new NotFoundException("User does not Found")
        }
        
    }

    @Put(':id')
    async updateCard(@Param('id') id : string,@Body() data:sales){
        try {
            return await this.SaleService.updateUser(id,data) 
        } catch (error) {
            throw new NotFoundException("User does not Found")
        }
    }
}