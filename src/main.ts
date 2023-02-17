import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(process.env);

  await app.listen(process.env.SERVER_PORT || 4000);
}
bootstrap();
