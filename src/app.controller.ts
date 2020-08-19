import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/offers")
  getOffers(): Promise<any> {
    return this.appService.offers();
  }

  @Get("/properties")
  getProperties(): Promise<any> {
    return this.appService.properties();
  }
}
