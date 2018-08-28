"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app_1 = require("./app");
const utils_1 = require("./utils/utils");
const server = http.createServer(app_1.default);
const port = utils_1.normalizePort(process.env.port || 3000);
server.listen(port);
// Usando as cloujure functions definidas no ./utils/utils.js
server.on('error', utils_1.onError(server));
server.on('listening', utils_1.onListening(server));