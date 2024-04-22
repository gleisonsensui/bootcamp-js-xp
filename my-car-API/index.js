import { server, PORT_ENV } from "./src/config/express-server.js";




server.listen(PORT_ENV, () => {
    console.log(`Your server listen on port ${PORT_ENV}`);
})