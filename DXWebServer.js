"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
class DXWebServer {
    constructor(basePath, port) {
        this.basePath = basePath;
        const app = require("express")();
        this.app = app;
        const server = http.createServer(app);
        this.io = require("socket.io")(server);
        app.set("port", port);
        // Starts the server.
        server.listen(port, () => {
            console.log("Starting server on port " + port);
        });
    }
    registerFilePath(urlPath, filePath) {
        this.app.get(urlPath, (request, response) => {
            response.sendFile(this.basePath + filePath);
        });
    }
    on(type, func) {
        this.io.on(type, func);
    }
}
exports.default = DXWebServer;
