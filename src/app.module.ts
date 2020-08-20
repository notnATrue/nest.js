import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HouseService } from './house/service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, HouseService],
})
export class AppModule {}
