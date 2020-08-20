import { House } from "./schema";
import { IHouse, IPropertyForHouse } from "./interface";
import { Injectable } from '@nestjs/common';

@Injectable()
export class HouseService {
  async find(): Promise<IHouse[]> {
    const docs: IHouse[] = await House.find();
    return docs;
  }

  async findProperties(): Promise<IPropertyForHouse[]> {
    const docs: IHouse[] = await House.find();
    let properties: IPropertyForHouse[] = [];
    for (const doc of docs) {
      properties.push(doc.property);
    }
    return properties;
  }
}
