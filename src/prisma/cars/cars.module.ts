import { Module } from "@nestjs/common";
import { CarsController } from "./cars.controller";
import { CarsService } from "./cars.service";
import { PrimaModule } from "../prisma.module";

@Module({
    controllers:[CarsController],
    providers:[CarsService],
    imports:[PrimaModule]
})
export class CarsModule{}