import {Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { Property } from "./property";
@Entity()
export class House extends BaseEntity {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    offered_by: string;

    @Column()
    price: number;

    @Column(type => Property)
    property: Property
}
