const http = require("http");

const port = process.env.PORT || 3000;

const carlink = require("./carlink");

const server = http.createServer(carlink);

server.listen(port);