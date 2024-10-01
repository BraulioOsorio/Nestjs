import { Module } from '@nestjs/common';
import { CarsModule } from './prisma/cars/cars.module';
import { UserModule } from './prisma/users/user.module';
import { SaleModule } from './prisma/sales/sale.module';



@Module({
  imports: [
    CarsModule,
    UserModule,
    SaleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
