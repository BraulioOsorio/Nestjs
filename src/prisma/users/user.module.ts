import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { PrimaModule } from "../prisma.module";

@Module({
    controllers:[UserController],
    providers:[UserService],
    imports:[PrimaModule]
})
export class UserModule{}