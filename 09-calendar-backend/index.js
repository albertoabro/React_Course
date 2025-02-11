const express = require('express');
require('dotenv').config();

const app = express();

//Public directory
app.use( express.static( 'public' ) );

//Routes
//TODO: auth // create, login, renew
//TODO: CRUD: Events

app.use('/api/auth', require('./routes/auth'));



//Listen request
app.listen( process.env.PORT, () => {
    console.log(`Server running in port ${ process.env.PORT }` );
})