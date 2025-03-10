import * as colors from 'colors';
import 'dotenv/config';
import server from './infrastructure/adapter/server';

server.listen(process.env.SERVER_PORT, () => {
    console.log( colors.cyan.bold(`REST Api Server is running on port ${process.env.SERVER_PORT}`));
})