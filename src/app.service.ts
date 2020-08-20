import { Injectable } from '@nestjs/common';
import { IHouse, IPropertyForHouse } from './cards/interface';
import { HouseService } from "./cards/service";

@Injectable()
export class AppService {
  constructor(private readonly houseService: HouseService) {}
  async offers(): Promise<IHouse[]> {
    const data = await this.houseService.find();
    return data;
  }

  async properties(): Promise<IPropertyForHouse[]> {
    const data = await this.houseService.findProperties();
    return data;
  }
}
