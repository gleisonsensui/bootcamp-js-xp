import { app, PORT_ENV } from "../config/express.server.js";

app.listen(PORT_ENV, () => {
    console.log(`Your server listen on port ${PORT_ENV}`);
})