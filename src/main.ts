import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => {
        const formattedErrors = errors.map(error => ({
          field: error.property,
          errors: Object.values(error.constraints),
        }));
        return new BadRequestException({ message: 'Validation failed', errors: formattedErrors });
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
