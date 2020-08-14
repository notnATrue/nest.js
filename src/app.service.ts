import { Injectable } from '@nestjs/common';
import { HouseService } from "./cards/service";
@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    const doc = await HouseService.createHouse();
    return doc;
  }
}
