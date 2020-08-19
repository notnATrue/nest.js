import { House } from "./schema";
import { IHouse, IPropertyForHouse } from "./interface";

export class HouseService {

  static async find(): Promise<IHouse[]> {
    const docs: IHouse[] = await House.find();
    return docs;
  }

  static async findProperties(): Promise<IPropertyForHouse[]> {
    const docs: IHouse[] = await House.find();
    let properties: IPropertyForHouse[] = [];
    for (const doc of docs) {
      properties.push(doc.property);
    }
    return properties;
  }
}
