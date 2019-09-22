export default class DXWebServer {
    private basePath;
    private io;
    private app;
    constructor(basePath: string, port: number);
    registerFilePath(urlPath: string, filePath: string): void;
    on(type: string, func: Function): any;
}
//# sourceMappingURL=DXWebServer.d.ts.map