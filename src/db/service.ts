require("dotenv").config();
import mongoose, { connect } from 'mongoose';
import {createConnection, Connection} from "typeorm";

export class Database {
  static async connect() {
    // const connection: Connection = await createConnection({
    //   type: "mongodb",
    //   url: process.env.MONGO_URI,
    //   useNewUrlParser: true,
    //   synchronize: true,
    //   logging: true,
    // });
    // return connection;

    const uri = process.env.DB_URI;
    const db = connect(uri, { useNewUrlParser: true }).catch((error) => { console.log(error); });
    return db;
  }
}
