import server from "./server";
import 'dotenv/config';

server.listen(process.env.SERVER_PORT, () => {
    console.log(`REST Api Server is running on port ${process.env.SERVER_PORT}`);
})