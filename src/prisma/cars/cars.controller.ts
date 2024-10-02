import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CreateCarsDto, UpdateCarDto } from "./cars-validation.dto";
@Controller('cars')
export class CarsController{
    constructor(private readonly carsService : CarsService){}

    @Get()
    async getAllCars(){
        return this.carsService.getAllCars()
    }

    @Post()
    async createCars(@Body() createCarValidation : CreateCarsDto){
        return this.carsService.createCar(createCarValidation)
    }

    @Get(':id')
    async getCarById(@Param('id') id : string){
        const carFound = await this.carsService.getCarById(+id)
        if(!carFound) throw new NotFoundException("Car does not found")
        return carFound
    }

    @Delete(':id')
    async DeleteCar(@Param('id') id : string){
        try {
            return await this.carsService.deleteCar(+id)
        } catch (error) {
            throw new NotFoundException("Car does not Found")
        }
        
    }

    @Put(':id')
    async updateCard(@Param('id') id : string,@Body() updateCarValidation:UpdateCarDto){
        try {
            return await this.carsService.updateCar(+id,updateCarValidation) 
        } catch (error) {
            throw new NotFoundException("Car does not Found")
        }
    }
}