import { Module } from "@nestjs/common";
import { SaleController } from "./sale.controller";
import { SalesService } from "./sale.service";
import { PrimaModule } from "../prisma.module";

@Module({
    controllers:[SaleController],
    providers:[SalesService],
    imports:[PrimaModule]
})
export class UserModule{}