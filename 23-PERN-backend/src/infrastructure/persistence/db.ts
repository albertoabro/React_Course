import { Sequelize } from "sequelize-typescript";
import 'dotenv/config';
import Product from "./models/Product";

const postgresURI = process.env.POSTGRESQL_URL!;

console.log(postgresURI)

const db: Sequelize = new Sequelize(postgresURI);

db.addModels([Product]);

export default db;