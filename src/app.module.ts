import { Module } from '@nestjs/common';
import { CarsModule } from './prisma/cars/cars.module';
import { UserModule } from './prisma/users/user.module';


@Module({
  imports: [
    CarsModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
