import { House } from "./model"

export class HouseService {
  static async createHouse() {
    const newHouse = {
      "id": 1, "offered_by": "Neo", "price": 400000, "property": {
        "id": 1, "kind": "House", "location": "New York", "bedrooms":
          3, "area": 240
      }
    }
    const doc = await House.create(newHouse);
    console.log(doc);
    return doc
  }
}