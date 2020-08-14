import mongoose, { model } from 'mongoose';
import { HouseSchema } from './schema';


export const House = model("Houses", HouseSchema, "house");
