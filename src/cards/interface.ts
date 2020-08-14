export { Document } from "mongoose";

export interface IPropertyForHouse {
  id: number,
  kind: string,
  location: string,
  bedrooms: number,
  area: string,
}

export interface IHouse {
  id: number,
  offered_by: string,
  price: number,
  property: IPropertyForHouse,
}

