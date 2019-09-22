import * as http from "http"
import { Server } from "net";

export default class DXWebServer {
    private basePath: string;
    private io: any;
    private app: any;

    constructor(basePath: string, port: number) {
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

    public registerFilePath(urlPath: string, filePath: string): void {
        this.app.get(urlPath, (request: any, response: any) => {
            response.sendFile(this.basePath + filePath);
        });
    }

    public on(type: string, func: Function): any {
        this.io.on(type, func);
    }
}