import * as colors from 'colors';
import db from '../infrastructure/persistence/db';
import productRoutes from './router/productRoutes';
const bodyParser = require('body-parser');


const express = require ( "express" );

const connectDB = async() => {
    try {
        await db.authenticate();
        db.sync();
        
        console.log( colors.blue.bold("Connection to DB successfully"))
    } catch (error) {
        console.log(error);
        console.log( colors.red.bold('Connection to DB failed'))
    }
};

connectDB();

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use('/api/v1', productRoutes);


export default server;