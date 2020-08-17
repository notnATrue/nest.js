import { Injectable } from '@nestjs/common';
import { HouseTest } from './cards/model';
import { HouseService } from "./cards/service";
@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    const docs = await HouseTest.find();
    return docs;
  }
}
