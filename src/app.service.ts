import { Injectable } from '@nestjs/common';
import { IHouse, IPropertyForHouse } from './house/interface';
import { HouseService } from "./house/service";

@Injectable()
export class AppService {
  constructor(private readonly houseService: HouseService) { }
  
  async offers(): Promise<IHouse[]> {
    const data: IHouse[] = await this.houseService.find();
    return data;
  }

  async properties(): Promise<IPropertyForHouse[]> {
    const data: IPropertyForHouse[] = await this.houseService.findProperties();
    return data;
  }
}
