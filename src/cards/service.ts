// import { House } from "./model"
import {getManager} from "typeorm";
import {getMongoRepository} from "typeorm";
import { House } from "./schema"


export class HouseService {
  // static async createHouse() {
  //   const newHouse = [{"id": 3,"offered_by": "Agent Smith","price": 1200000,"property": {"id": 7,"kind": "Villa","location": "Limassol","bedrooms": 5,"area": 300}},{"id": 4,"offered_by": "Trinity","price": 250000,"property": {"id": 9,"kind": "Apartment","location": "Rome","bedrooms": 2,"area": 90}},{"id": 5,"offered_by": "The Oracle","price": 430000,"property": {"id": 10,"kind": "Apartment","location": "Los Angeles","bedrooms": 2,"area": 105}},{"id": 6,"offered_by": "Cypher","price": 340000,"property": {"id": 11,"kind": "House","location": "Barcelona","bedrooms": 3,"area": 210}},{"id": 7,"offered_by": "Apoc","price": 350000,"property": {"id": 2,"kind": "Apartment","location": "London","bedrooms": 2,"area": 120}},{"id": 8,"offered_by": "Agent Jones","price": 280000,"property": {"id": 3,"kind": "Apartment","location": "Paris","bedrooms": 2,"area": 100}},{"id": 9,"offered_by": "Tank","price": 190000,"property": {"id": 6,"kind": "Studio","location": "Berlin","bedrooms": 1,"area": 70}},{"id": 10,"offered_by": "Dozer","price": 500000,"property": {"id": 4,"kind": "Apartment","location": "Tokyo","bedrooms": 3,"area": 90}},{"id": 11,"offered_by": "Agent Brown","price": 350000,"property": {"id": 11,"kind": "House","location": "Barcelona","bedrooms": 3,"area": 210}},{"id": 12,"offered_by": "Switch","price": 320000,"property": {"id": 3,"kind": "Apartment","location": "Paris","bedrooms": 2,"area": 100}}]
  //   const doc = await House.insertMany(newHouse);
  //   console.log(doc);
  //   return doc;
  // }
  // static async find(): Promise<any> {
  //   const houseRepository = getMongoRepository(HouseSchema);
  //   const docs = await houseRepository.find({});
  //   return docs;
  // }
}
