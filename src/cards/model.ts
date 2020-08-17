// import mongoose, { model } from 'mongoose';
// import { HouseSchema } from './schema';


// export const House = model("Houses", HouseSchema, "house");

import { getMongoManager } from "typeorm";
import { House } from "./schema";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

const house = new House();
console.log(house)
house.offered_by = "Neo";
house.price = 400000;
house.property = {
  id: 12,
  kind: "House",
  location: "New York",
  bedrooms: 3,
  area: "240",
}

export class HouseTest {
  static async save(): Promise<any> {
    console.log("saving...")
    const doc = await house.save();
    console.log(doc);
    return doc;
  }

  static async find(): Promise<any> {
    const docs = await House.find();
    console.log("docs: ", docs);
    return docs;
  }
}
