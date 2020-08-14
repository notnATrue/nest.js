import mongoose from 'mongoose';
import { Schema } from "mongoose";

export const HouseSchema = new Schema({
  id: Number,
  offered_by: String,
  price: Number,
  property: {
    id: Number,
    kind: String,
    location: String,
    bedrooms: Number,
    area: String,
  },
}, { timestamps: true });

HouseSchema.set('toJSON', { virtuals: true });
