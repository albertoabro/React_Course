import db from "./conf/db";

const express = require ( "express" );

const connectDB = async() => {
    try {
        await db.authenticate();
        db.sync();
        console.log("Connection's DB successfully")
    } catch (error) {
        console.log(error);
    }
};

connectDB();

const server = express();


export default server;