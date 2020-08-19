import { Injectable } from '@nestjs/common';
import { IHouse, IPropertyForHouse } from './cards/interface';
import { HouseService } from "./cards/service";
@Injectable()
export class AppService {
  async offers(): Promise<IHouse[]> {
    const data = await HouseService.find();
    return data;
  }

  async properties(): Promise<IPropertyForHouse[]> {
    const data = await HouseService.findProperties();
    return data;
  }
}
