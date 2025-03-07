import { Sequelize } from "sequelize";
import 'dotenv/config';

const postgresURI = process.env.POSTGRESQL_URL!;

console.log(postgresURI)

const db: Sequelize = new Sequelize(postgresURI);

export default db;