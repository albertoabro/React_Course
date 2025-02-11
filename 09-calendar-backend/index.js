const express = require('express');
const cors = require('cors');
const {dbConnection} = require('./database/config');
require('dotenv').config();

const app = express();

//Date Base
dbConnection();

//Public directory
app.use( express.static( 'public' ) );

//CORS
app.use(cors())

//Read and Parse body
app.use( express.json() );

//Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

//Listen request
app.listen( process.env.PORT, () => {
    console.log(`Server running in port ${ process.env.PORT }` );
})