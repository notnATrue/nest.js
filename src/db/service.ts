require("dotenv").config();
import mongoose, { connect } from 'mongoose';
import { House } from 'src/cards/schema';
import {createConnection, Connection} from "typeorm";

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

    // const uri = process.env.DB_URI;
    // const db = connect(uri, { useNewUrlParser: true }).catch((error) => { console.log(error); });
    // return db;
  }
}
