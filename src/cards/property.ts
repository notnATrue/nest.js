import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";

export class Property {
  @Column()
  id: number

  @Column()
  kind: string

  @Column()
  location: string

  @Column()
  bedrooms: number

  @Column()
  area: string
}