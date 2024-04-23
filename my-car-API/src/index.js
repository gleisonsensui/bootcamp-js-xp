import { server, PORT_ENV } from "./config/express-server.js";

server.listen(PORT_ENV, () => {
  console.log(`Your server listen on port ${PORT_ENV}`);
});

