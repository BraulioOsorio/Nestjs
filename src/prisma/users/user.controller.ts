import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { cars, users } from "@prisma/client";
import { CreateUserDto, UpdateUserDto } from "./user-validation.dto";
@Controller('users')
export class UserController{
    constructor(private readonly userService : UserService){}

    @Get()
    async getAllUsers(){
        return this.userService.getAllUsers()
    }

    @Post()
    async createUsers(@Body() createValidationUser : CreateUserDto){
        return this.userService.createUser(createValidationUser)
    }

    @Get(':id')
    async getUserById(@Param('id') id : string){
        const userFound = await this.userService.getUserById(id)
        if(!userFound) throw new NotFoundException("User does not found")
        return userFound
    }

    @Delete(':id')
    async DeleteUser(@Param('id') id : string){
        try {
            return await this.userService.deleteUser(id)
        } catch (error) {
            throw new NotFoundException("User does not Found")
        }
        
    }

    @Put(':id')
    async updateCard(@Param('id') id : string,@Body() UpdateValidationUser:UpdateUserDto){
        try {
            return await this.userService.updateUser(id,UpdateValidationUser) 
        } catch (error) {
            throw new NotFoundException("User does not Found")
        }
    }
}