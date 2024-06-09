import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // only allow whitelisted properties to be passed into the DTO
      transform: true, // automatically transform the DTO to match the interface type
      transformOptions: {
        enableImplicitConversion: true, // allow implicit conversion of types
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
