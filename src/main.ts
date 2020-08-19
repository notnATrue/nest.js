import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import { AppModule } from './app.module';
import { Database } from "./db/service";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await Database.connect();
  await app.listen(3000);
}
bootstrap();
