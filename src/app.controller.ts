import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/offers")
  async getOffers(@Res() response: Response): Promise<Response> {
    const data = await this.appService.offers();
    return response.send(data);
  }

  @Get("/properties")
  async getProperties(@Res() response: Response): Promise<Response> {
    const data = await this.appService.properties();
    return response.send(data);
  }
}
