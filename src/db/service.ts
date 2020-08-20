require("dotenv").config();
import { Injectable } from '@nestjs/common';
import { House } from 'src/cards/schema';
import {createConnection, Connection} from "typeorm";

@Injectable()
export class Database {
  static async connect() {
    const connection: Connection = await createConnection({
      type: "mongodb",
      url: process.env.DB_URI,
      useNewUrlParser: true,
      synchronize: true,
      logging: true,
      entities: [
        House
      ],
    });
    return connection;
  }
}
