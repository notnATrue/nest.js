// import mongoose from 'mongoose';
// import { Schema } from "mongoose";

// export const HouseSchema = new Schema({
//   id: Number,
//   offered_by: String,
//   price: Number,
//   property: {
//     id: Number,
//     kind: String,
//     location: String,
//     bedrooms: Number,
//     area: String,
//   },
// }, { timestamps: true });

// HouseSchema.set('toJSON', { virtuals: true });

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
