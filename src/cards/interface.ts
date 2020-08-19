export interface IPropertyForHouse {
  id: number,
  kind: string,
  location: string,
  bedrooms: number,
  area: number,
}

export interface IHouse {
  offered_by: string,
  price: number,
  property: IPropertyForHouse,
}

